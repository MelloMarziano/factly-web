import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { Firestore, doc, writeBatch } from '@angular/fire/firestore';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private storage: Storage
  ) {}

  registerCompany(
    data: any,
    logoFile?: File,
    certificateFile?: File
  ): Observable<any> {
    const {
      email,
      password,
      companyRnc,
      companyName,
      address,
      phone,
      adminUser,
      certificatePassword,
    } = data;

    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      switchMap(async (userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;

        // Update Auth Profile
        if (adminUser) {
          await updateProfile(user, { displayName: adminUser });
        }

        const batch = writeBatch(this.firestore);

        // Upload files if they exist
        let logoUrl = null;
        let certificateUrl = null;

        if (logoFile) {
          const logoRef = ref(
            this.storage,
            `tenants/${companyRnc}/logo/${new Date().getTime()}_${
              logoFile.name
            }`
          );
          const logoResult = await uploadBytes(logoRef, logoFile);
          logoUrl = await getDownloadURL(logoResult.ref);
        }

        if (certificateFile) {
          const certRef = ref(
            this.storage,
            `tenants/${companyRnc}/certificates/${new Date().getTime()}_${
              certificateFile.name
            }`
          );
          const certResult = await uploadBytes(certRef, certificateFile);
          certificateUrl = await getDownloadURL(certResult.ref);
        }

        // 1. Create Tenant
        const tenantRef = doc(this.firestore, `tenants/${companyRnc}`);
        batch.set(tenantRef, {
          rnc: companyRnc,
          name: companyName,
          address: address || '',
          phone: phone || '',
          email: email,
          logoUrl,
          certificateUrl,
          certificatePassword: certificatePassword || null,
          createdAt: new Date(),
          status: 'active',
          electronicBillingStatus: 'TEST',
        });

        // 2. Create Member (Owner)
        const memberRef = doc(
          this.firestore,
          `tenants/${companyRnc}/members/${uid}`
        );
        batch.set(memberRef, {
          uid: uid,
          email: email,
          role: 'owner',
          joinedAt: new Date(),
        });

        // 3. Create User Profile
        const userRef = doc(this.firestore, `users/${uid}`);
        batch.set(userRef, {
          email: email,
          displayName: adminUser,
          activeTenantId: companyRnc,
          createdAt: new Date(),
        });

        // 4. Default Settings
        const settingsRef = doc(
          this.firestore,
          `tenants/${companyRnc}/settings/main`
        );
        batch.set(settingsRef, {
          currency: 'DOP',
          taxRate: 0.18,
          createdAt: new Date(),
        });

        await batch.commit();

        return user;
      })
    );
  }
}
// hola

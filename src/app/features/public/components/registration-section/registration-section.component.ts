import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/core/services/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-section',
  templateUrl: './registration-section.component.html',
  styleUrls: ['./registration-section.component.scss'],
})
export class RegistrationSectionComponent {
  registrationForm: FormGroup;
  selectedCertificate: File | null = null;
  selectedLogo: File | null = null;
  showForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.registrationForm = this.fb.group(
      {
        companyRnc: ['', Validators.required],
        companyName: ['', Validators.required],
        address: [''],
        phone: [''],
        companyEmail: ['', [Validators.required, Validators.email]],
        // certificateFile and logoFile are handled separately via file inputs
        certificatePassword: [''],
        adminUser: [{ value: 'admin', disabled: true }, Validators.required],
        fullName: ['', Validators.required],
        userEmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  onCertificateSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!file.name.endsWith('.p12')) {
        Swal.fire({
          icon: 'error',
          title: 'Archivo Incorrecto',
          text: 'Por favor seleccione un archivo de certificado válido (.p12)',
          confirmButtonColor: '#dc3545',
        });
        event.target.value = ''; // Reset input
        this.selectedCertificate = null;
        return;
      }
      this.selectedCertificate = file;
    }
  }

  onLogoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        Swal.fire({
          icon: 'error',
          title: 'Archivo Incorrecto',
          text: 'Por favor seleccione un archivo de imagen válido para el logo',
          confirmButtonColor: '#dc3545',
        });
        event.target.value = ''; // Reset input
        this.selectedLogo = null;
        return;
      }
      this.selectedLogo = file;
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      // Optional: Reset form when cancelling?
      // this.registrationForm.reset({ adminUser: 'admin' });
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      Swal.fire({
        title: 'Registrando Empresa',
        text: 'Por favor espere mientras procesamos su solicitud...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      // Use getRawValue() to include disabled fields (adminUser)
      const formData = this.registrationForm.getRawValue();

      this.registrationService
        .registerCompany(
          formData,
          this.selectedCertificate || undefined,
          this.selectedLogo || undefined
        )
        .subscribe({
          next: (user) => {
            Swal.fire({
              icon: 'success',
              title: '¡Registro Exitoso!',
              text: 'Tu empresa ha sido registrada correctamente. Ahora puedes iniciar sesión.',
              confirmButtonColor: '#0d6efd',
            });

            this.registrationForm.reset({
              adminUser: 'admin',
            });
            this.selectedCertificate = null;
            this.selectedLogo = null;
            // Clear file inputs visually if needed (requires ViewChild or resetting form)
          },
          error: (error) => {
            console.error('Registration error:', error);
            let errorMessage = 'Hubo un problema al registrar la empresa.';

            if (error.code === 'auth/email-already-in-use') {
              errorMessage = 'Este correo electrónico ya está registrado.';
            } else if (error.code === 'auth/weak-password') {
              errorMessage = 'La contraseña es muy débil.';
            }

            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: errorMessage,
              confirmButtonColor: '#dc3545',
            });
          },
        });
    } else {
      this.registrationForm.markAllAsTouched();
      Swal.fire({
        icon: 'warning',
        title: 'Formulario Inválido',
        text: 'Por favor complete todos los campos requeridos correctamente.',
        confirmButtonColor: '#ffc107',
      });
    }
  }
}

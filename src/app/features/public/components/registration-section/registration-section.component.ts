import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-section',
  templateUrl: './registration-section.component.html',
  styleUrls: ['./registration-section.component.scss']
})
export class RegistrationSectionComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      companyRnc: ['', Validators.required],
      companyName: ['', Validators.required],
      address: [''],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      certificateFile: [null],
      logoFile: [null],
      adminUser: [{ value: 'admin', disabled: true }, Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}

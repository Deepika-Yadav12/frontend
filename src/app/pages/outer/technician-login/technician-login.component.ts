import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-technician-login',
  standalone: false,
  templateUrl: './technician-login.component.html',
  styleUrls: ['./technician-login.component.css']
})
export class TechnicianLoginComponent {

  technicianLoginForm: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.technicianLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      roleType: [3] // Assuming 3 is for technician
    });
  }

  onSubmit() {
    if (this.technicianLoginForm.invalid) {
      return;
    }

    this.loginService.loginTechnician(this.technicianLoginForm.value).subscribe({
      next: (res: any) => {
        this.message = 'Login successful!';
        this.router.navigate(['/technician']);
      },
      error: () => {
        this.message = 'Login failed. Invalid credentials.';
      }
    });
  }
}

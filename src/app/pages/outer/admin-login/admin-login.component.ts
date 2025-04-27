import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-admin-login',
  standalone: false,
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  adminLoginForm: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService  
  ) {
    this.adminLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      roleType: [1]
    });
  }

  onSubmit() {
    if (this.adminLoginForm.invalid) {
      return;
    }
  
    this.loginService.loginAdmin(this.adminLoginForm.value).subscribe({
      next: (res: any) => {
        const token = res.data?.token; // Assuming backend sends { token: "JWT_TOKEN_HERE" }
        if (token) {
          localStorage.setItem('authToken', token); // Store token for future use
          this.message = 'Login successful!';
          this.router.navigate(['/admin']); // Navigate to admin dashboard
        } else {
          this.message = 'Token not received. Please try again.';
        }
      },
      error: () => {
        this.message = 'Login failed. Invalid credentials.';
      }
    });
  }
  
}

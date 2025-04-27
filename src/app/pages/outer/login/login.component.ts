
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLoginForm: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.userLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      roleType: [2] // 2 for User
    });
  }

  onSubmit() {
    if (this.userLoginForm.invalid) return;

    this.loginService.loginUser(this.userLoginForm.value).subscribe({
      next: (res: any) => {
        const token = res.data?.token; 
        if (token) {
        localStorage.setItem('authToken', token);
        this.message = 'Login successful!';
        this.router.navigate(['/user']);
      }
      else {
        this.message = 'Token not received. Please try again.';
      }
    },
    error: () => {
      this.message = 'Login failed. Invalid credentials.';
  }
});
}
}
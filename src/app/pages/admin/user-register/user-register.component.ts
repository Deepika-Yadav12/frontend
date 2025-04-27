// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-register',
//   standalone: false,
//   templateUrl: './user-register.component.html',
//   styleUrl: './user-register.component.css'
// })
// export class UserRegisterComponent {

// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRequestService } from '../../../user-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  standalone: false,
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit {
  registerForm!: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private userRequestService: UserRequestService,
    private router: Router
  ) {}

  ngOnInit() {
    // Initialize the form with validation rules
    this.registerForm = this.fb.group({
      Username: ['', [Validators.required, Validators.minLength(3)]],
      Email: ['', [Validators.required, Validators.email]],
      Mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      // Uncomment other fields as needed
      // confirmPassword: ['', [Validators.required]],
      // gender: ['', Validators.required],
      // dob: ['', Validators.required]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
  
      this.userRequestService.addUserRequest(user).subscribe({
        next: (response) => {
          console.log('User successfully registered:', response);
          this.router.navigate(['/home']);
          // this.router.navigate(['/admin/user-requests']);
        },
        error: (error) => {
          console.error('Error registering user:', error);
          // You can show an error message to user if needed
        }
      });
    }
  }
  
}


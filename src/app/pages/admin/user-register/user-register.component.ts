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
import Swal from 'sweetalert2';

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
  
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Register successfully',
            showConfirmButton: false,
            timer: 1500
          });
  
          this.registerForm.reset();
          this.router.navigate(['/home']);
          // or navigate after delay if needed
          // setTimeout(() => this.router.navigate(['/home']), 1600);
        },
        error: (error) => {
          console.error('Error registering user:', error);
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'Something went wrong. Please try again later.'
          });
        }
      });
    } else {
      this.registerForm.markAllAsTouched(); // triggers validation messages
    }
  }
  
  
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfileService } from '../../../services/user-profile.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: false, 
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      loginId: [0], // Dynamically set this value if needed
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.userProfileService.updateProfile(this.profileForm.value).subscribe({
        next: res => {
          Swal.fire({
            icon: 'success',
            title: 'Profile Updated',
            text: 'Your profile has been successfully updated!',
            confirmButtonColor: '#123458'
          }).then(() => {
            this.router.navigate(['/user']);
          });
        },
        error: err => {
          Swal.fire({
            icon: 'error',
            title: 'Update Failed',
            text: 'Failed to update profile. Please try again.',
            confirmButtonColor: '#d33'
          });
        }
      });
    }
  }
  
}

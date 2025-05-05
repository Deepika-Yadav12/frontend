import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  standalone: false,
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent {
  constructor(private router: Router) {}

  logout(): void {
    // Add your logout logic here
    // For example, clear tokens and navigate to the login page
    localStorage.removeItem('authToken'); // assuming you store the token in localStorage
    this.router.navigate(['/home']);
  }
}

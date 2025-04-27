import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToServiceRequests() {
    this.router.navigate(['/service-requests']);
  }

  goToPaymentHistory() {
    
    this.router.navigate(['/payment-history']);
  }
}





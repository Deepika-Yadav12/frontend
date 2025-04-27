// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-requests',
//   standalone: false,
//   templateUrl: './user-requests.component.html',
//   styleUrl: './user-requests.component.css'
// })
// export class UserRequestsComponent {

// }
import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../../../user-requests.service';

@Component({
  selector: 'app-user-requests',
  standalone: false,
  templateUrl: './user-requests.component.html',
  styleUrl: './user-requests.component.css'
})
export class UserRequestsComponent implements OnInit {
  requests: any[] = [];

  constructor(private userRequestService: UserRequestService) {}

  ngOnInit() {
    this.requests = this.userRequestService.getUserRequests();
  }

  approve(index: number) {
    alert(`Approved: ${this.requests[index].name}`);
    this.userRequestService.removeUserRequest(index);
  }

  reject(index: number) {
    alert(`Rejected: ${this.requests[index].name}`);
    this.userRequestService.removeUserRequest(index);
  }
}

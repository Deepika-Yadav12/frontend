import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-requests',
  standalone: false,
  templateUrl: './user-requests.component.html',
  styleUrl: './user-requests.component.css'
})
export class UserRequestsComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Users fetched:', this.users);
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  approve(user: any) {
    if (confirm(`Are you sure you want to APPROVE ${user.username}?`)) {
      this.userService.approveUser(user.LoginId).subscribe({
        next: (res) => {
          alert('User approved successfully!');
          this.fetchUsers(); // Refresh list
        },
        error: (err) => {
          console.error('Error approving user', err);
        }
      });
    }
  }

  reject(user: any) {
    if (confirm(`Are you sure you want to REJECT ${user.username}?`)) {
      this.userService.rejectUser(user.LoginId).subscribe({
        next: (res) => {
          alert('User rejected successfully!');
          this.fetchUsers(); // Refresh list
        },
        error: (err) => {
          console.error('Error rejecting user', err);
        }
      });
    }
  }
}

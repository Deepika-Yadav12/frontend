import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Correct API endpoint without the '/users' at the end
  private apiUrl = 'https://localhost:7227/api/Admin/all-users'; 

  constructor(private http: HttpClient) {}

  // Fetch all users from the API
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // API endpoint already includes '/all-users'
  }

  // Approve user
  approveUser(loginId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/approve-user/${loginId}`, {});
  }

  // Reject user
  rejectUser(loginId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reject-user/${loginId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  private userRequests: any[] = [];


  getUserRequests() {
    return this.userRequests;
  }

  removeUserRequest(index: number) {
    this.userRequests.splice(index, 1);
  }

  private apiUrl = 'https://localhost:7227/api/Auth/register'; // change this

  constructor(private http: HttpClient) { }

  addUserRequest(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}



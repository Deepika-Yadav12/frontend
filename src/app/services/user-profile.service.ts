import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private apiUrl = 'https://localhost:7227/api/Auth/update-user';

  constructor(private http: HttpClient) {}

  updateProfile(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}

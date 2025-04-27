import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'https://localhost:7227/';

  constructor(private http: HttpClient) { }



  loginUser(data: any): Observable<any> {
    return this.http.post(this.baseUrl + "api/Login/user", data);
  }

  
  loginAdmin(data: any): Observable<any> {
    return this.http.post(this.baseUrl + "api/Login/admin", data);
  }
  
  loginTechnician(data: any): Observable<any> {
    return this.http.post(this.baseUrl + "api/Login/technician", data);
  }
}



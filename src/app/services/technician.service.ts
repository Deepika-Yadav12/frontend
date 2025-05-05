import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  private baseUrl = 'https://localhost:7227/api/Admin';

  constructor(private http: HttpClient) {}

  // GET all technicians
  getAllTechnicians(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all-technicians`);
  }

  // POST add technician
  addTechnician(technicianData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-technicians`, technicianData);
  }

  // PUT update technician
  updateTechnician(loginId: number, technicianData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-tech/${loginId}`, technicianData);
  }

  // DELETE technician by loginId
  deleteTechnician(loginId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-technician/${loginId}`);
  }
}

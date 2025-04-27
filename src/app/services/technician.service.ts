import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {
  private storageKey = 'technicians'; // Key for localStorage

  constructor() {}

  // Fetch technicians from localStorage
  private getTechniciansFromStorage(): any[] {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  // Save technicians back to localStorage
  private saveTechniciansToStorage(technicians: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(technicians));
  }

  // Add new technician to the list
  addTechnician(tech: any): void {
    const technicians = this.getTechniciansFromStorage();
    tech.id = Date.now().toString();  // Ensure the ID is a string
    technicians.push(tech);
    this.saveTechniciansToStorage(technicians);
  }

  // Update technician information
  updateTechnician(updatedTech: any): void {
    const technicians = this.getTechniciansFromStorage();
    const index = technicians.findIndex(t => t.id === updatedTech.id);
    if (index !== -1) {
      technicians[index] = updatedTech;
      this.saveTechniciansToStorage(technicians);
    }
  }

  // Get all technicians, excluding deleted ones
  getTechnicians(): any[] {
    const technicians = this.getTechniciansFromStorage();
    return technicians.filter(tech => !tech.deleted); // Exclude deleted technicians
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianService } from '../../../services/technician.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-technician',
  standalone: false,
  templateUrl: './add-technician.component.html',
  styleUrls: ['./add-technician.component.css']
})
export class AddTechnicianComponent {
  technician = {
    Name: '',
    Password: '',
    Email: '',
    Mobile: '',
    Specialization: '',
    Address: '',
    ExperienceYears: 0
  };

  specializations: string[] = [
    'Engine Repair',
    'Transmission',
    'Electrical Systems',
    'Body Work',
    'Brake Systems',
    'Suspension & Steering',
    'AC & Heating',
    'Diagnostics'
  ];

  constructor(private technicianService: TechnicianService, private router: Router) {}

  onSubmit(): void {
    const { Name, Email, Mobile, Specialization, Password, Address, ExperienceYears } = this.technician;

    if (Name && Email && Mobile && Specialization && Password && Address && ExperienceYears >= 0) {
      this.technicianService.addTechnician(this.technician).subscribe({
        next: () => {
          Swal.fire('Success', 'Technician added successfully.', 'success');
          this.router.navigate(['/admin/technicians-info']);
        },
        error: (err) => {
          console.error('Error adding technician:', err);
          Swal.fire('Error', 'Failed to add technician.', 'error');
        }
      });
    } else {
      Swal.fire('Validation Error', 'Please fill all required fields.', 'warning');
    }
  }
}

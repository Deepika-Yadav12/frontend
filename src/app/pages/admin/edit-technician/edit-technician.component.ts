import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicianService } from '../../../services/technician.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-technician',
  standalone: false,
  templateUrl: './edit-technician.component.html',
  styleUrls: ['./edit-technician.component.css']
})
export class EditTechnicianComponent implements OnInit {
  technicianId: number = 0;
  technician: any = {};
  specializations: string[] = [
    'Engine Repair',
    'Electrical Systems',
    'Brake Systems',
    'Transmission',
    'Suspension',
    'AC/Heating',
    'Bodywork'
  ];

  constructor(
    private route: ActivatedRoute,
    private technicianService: TechnicianService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.technicianId = Number(this.route.snapshot.paramMap.get('id'));

    this.technicianService.getAllTechnicians().subscribe((technicians: any[]) => {
      const foundTech = technicians.find(t => t.loginId === this.technicianId);
      if (foundTech) {
        this.technician = { ...foundTech };
      }
    });
  }

  onSubmit(): void {
    const updatePayload = {
      Name: this.technician.name,
      Password: this.technician.password,
      Email: this.technician.email,
      Mobile: this.technician.mobile,
      Specialization: this.technician.specialization,
      Address: this.technician.address,
      ExperienceYears: this.technician.experienceYears
    };

    this.technicianService.updateTechnician(this.technician.loginId, updatePayload).subscribe({
      next: () => {
        Swal.fire('Updated!', 'Technician updated successfully.', 'success');
        this.router.navigate(['/admin/technicians-info']);
      },
      error: () => {
        Swal.fire('Error', 'Failed to update technician.', 'error');
      }
    });
  }
}

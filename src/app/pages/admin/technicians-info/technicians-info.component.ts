import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianService } from '../../../services/technician.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-technicians-info',
  standalone: false,
  templateUrl: './technicians-info.component.html',
  styleUrls: ['./technicians-info.component.css']
})
export class TechniciansInfoComponent implements OnInit {
  technicians: any[] = [];

  constructor(
    private router: Router,
    private technicianService: TechnicianService
  ) {}

  ngOnInit(): void {
    this.loadTechnicians();
  }

  loadTechnicians(): void {
    this.technicianService.getAllTechnicians().subscribe({
      next: (data) => {
        this.technicians = data;
      },
      error: (err) => {
        console.error('Error loading technicians:', err);
        Swal.fire('Error', 'Failed to load technicians.', 'error');
      }
    });
  }

  onEdit(tech: any): void {
    const loginId = tech.loginId;

    // if (!loginId) {
    //   Swal.fire('Error', 'Technician login ID is missing.', 'error');
    //   return;
    // }

    Swal.fire({
      title: `Do you want to edit ${tech.username}'s info?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes, Edit',
      denyButtonText: `No, Cancel`
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/admin/edit-technician', loginId]);
      } else if (result.isDenied) {
        Swal.fire('Edit cancelled', '', 'info');
      }
    });
  }

  onDelete(tech: any): void {
    const loginId = tech.loginId;

    Swal.fire({
      title: 'Are you sure?',
      text: `You won't be able to revert deleting ${tech.username}!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.technicianService.deleteTechnician(loginId).subscribe({
          next: () => {
            this.technicians = this.technicians.filter(t => t.loginId !== loginId);
            Swal.fire('Deleted!', `${tech.username} has been deleted.`, 'success');
          },
          error: () => Swal.fire('Error', 'Failed to delete technician.', 'error')
        });
      }
    });
  }
}

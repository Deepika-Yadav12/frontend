// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-technician',
//   standalone: false,
//   templateUrl: './edit-technician.component.html',
//   styleUrl: './edit-technician.component.css'
// })
// export class EditTechnicianComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicianService } from '../../../services/technician.service';

@Component({
  selector: 'app-edit-technician',
  standalone: false,
  templateUrl: './edit-technician.component.html',
  styleUrls: ['./edit-technician.component.css']
})
export class EditTechnicianComponent implements OnInit {
  technician: any = { name: '', email: '', phone: '', specialization: '' };

  constructor(
    private route: ActivatedRoute,
    private technicianService: TechnicianService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const techId = this.route.snapshot.paramMap.get('id'); // Get technician id from route
    if (techId) {
      const technicians = this.technicianService.getTechnicians();
      this.technician = technicians.find(t => t.id == techId) || this.technician; // Find technician by id (use '==' for comparison)
    }
  }

  onSubmit(): void {
    this.technicianService.updateTechnician(this.technician); // Update technician data
    this.router.navigate(['/admin/technicians-info']); // Redirect back to technician list
  }
}


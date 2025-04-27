// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-technicians-info',
//   standalone: false,
//   templateUrl: './technicians-info.component.html',
//   styleUrl: './technicians-info.component.css'
// })
// export class TechniciansInfoComponent {

// }
// import { Component, OnInit } from '@angular/core';
// import { TechnicianService } from '../../../services/technician.service';

// @Component({
//   selector: 'app-technicians-info',
//   standalone: false,
//   templateUrl: './technicians-info.component.html',
//   styleUrls: ['./technicians-info.component.css']
// })
// export class TechniciansInfoComponent implements OnInit {
//   technicians: any[] = [];

//   constructor(private technicianService: TechnicianService) {}

//   ngOnInit() {
//     this.technicians = this.technicianService.getTechnicians();
//   }
  
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianService } from '../../../services/technician.service';

@Component({
  selector: 'app-technicians-info',
  standalone: false,
  templateUrl: './technicians-info.component.html',
  styleUrls: ['./technicians-info.component.css']
})
export class TechniciansInfoComponent implements OnInit {
  technicians: any[] = [];

  constructor(private router: Router, private technicianService: TechnicianService) {}

  ngOnInit(): void {
    this.technicians = this.technicianService.getTechnicians();
  }

  onEdit(tech: any): void {
    console.log('Edit clicked for:', tech); // Debug check
    if (tech && tech.id) {
      this.router.navigate(['/admin/edit-technician', tech.id]);
    } else {
      console.error('Technician ID is missing!');
    }
  }

  onDelete(tech: any): void {
    const confirmed = confirm(`Are you sure you want to delete ${tech.name}?`);
    if (confirmed) {
      tech.deleted = true;  // Mark as deleted instead of removing
      this.technicianService.updateTechnician(tech);
      this.technicians = this.technicianService.getTechnicians(); // Refresh technician list
    }
  }
  testClick() {
    console.log('Edit button clicked!');
  }
  
}


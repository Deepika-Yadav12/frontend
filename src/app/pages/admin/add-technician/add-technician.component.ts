// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-technician',
//   standalone: false,
//   templateUrl: './add-technician.component.html',
//   styleUrl: './add-technician.component.css'
// })
// export class AddTechnicianComponent {

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianService } from '../../../services/technician.service';

@Component({
  selector: 'app-add-technician',
  standalone: false,
  templateUrl: './add-technician.component.html',
  styleUrls: ['./add-technician.component.css']
})
export class AddTechnicianComponent {
  name = '';
  email = '';
  phone = '';
  specialization = '';

  constructor(private technicianService: TechnicianService, private router: Router) {}

  onSubmit() {
    const newTechnician = {
      id :Date.now(),
      name: this.name,
      email: this.email,
      phone: this.phone,
      specialization: this.specialization
    };

    this.technicianService.addTechnician(newTechnician);
    this.router.navigate(['/admin/technicians-info']); // redirect after adding
  }
}


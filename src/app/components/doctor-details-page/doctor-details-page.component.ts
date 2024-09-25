import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-doctor-details-page',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './doctor-details-page.component.html',
  styleUrl: './doctor-details-page.component.css'
})
export class DoctorDetailsPageComponent {

}

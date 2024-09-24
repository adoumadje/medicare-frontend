import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/patient/home-page/home-page.component";
import { NavigationBarComponent } from "./components/general/navigation-bar/navigation-bar.component";
import { FindADoctorComponent } from "./components/find-a-doctor/find-a-doctor.component";
import { DoctorDetailsPageComponent } from "./components/doctor-details-page/doctor-details-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, NavigationBarComponent, FindADoctorComponent, DoctorDetailsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medicare-frontend';
}

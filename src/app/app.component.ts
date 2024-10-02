import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/patient/home-page/home-page.component";
import { NavigationBarComponent } from "./components/general/navigation-bar/navigation-bar.component";
import { FindADoctorComponent } from "./components/find-a-doctor/find-a-doctor.component";
import { DoctorDetailsPageComponent } from "./components/doctor-details-page/doctor-details-page.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { PatientDashboardComponent } from "./components/patient-dashboard/patient-dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, NavigationBarComponent, FindADoctorComponent, DoctorDetailsPageComponent, ContactUsComponent, FooterComponent, RegisterComponent, LoginComponent, PatientDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medicare-frontend';
}

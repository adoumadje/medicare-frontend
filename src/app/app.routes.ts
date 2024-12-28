import { Routes } from '@angular/router';
import { HomePageComponent } from './components/patient/home-page/home-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { FindADoctorComponent } from './components/find-a-doctor/find-a-doctor.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';

export const routes: Routes = [
    { path: '', component: RegisterComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'services', component: ServicesPageComponent },
    { path: 'find-a-doctor', component: FindADoctorComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'patient-dashboard', component: PatientDashboardComponent },
    { path: 'doctor-dashboard', component: DoctorDashboardComponent }
];

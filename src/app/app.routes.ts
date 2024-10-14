import { Routes } from '@angular/router';
import { HomePageComponent } from './components/patient/home-page/home-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { FindADoctorComponent } from './components/find-a-doctor/find-a-doctor.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', component: RegisterComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'services', component: ServicesPageComponent },
    { path: 'find-a-doctor', component: FindADoctorComponent },
    { path: 'contact', component: ContactUsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

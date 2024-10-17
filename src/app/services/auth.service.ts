import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL:string;

  constructor(private http:HttpClient) { 
    this.baseURL = environment.api_base_url;
  }

  registerPatient(patientDetails:any) {
    return this.http.post(
      `${this.baseURL}/patient/register-patient`,
      patientDetails
    )
  }

  registerDoctor(doctorDetails:any) {
    return this.http.post(
      `${this.baseURL}/doctor/register-doctor`,
      doctorDetails
    )
  }
}

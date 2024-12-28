import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL:string;

  constructor(private http:HttpClient) { 
    this.baseURL = environment.api_base_url;
  }

  private handleError(err:any) {
    return throwError(() => new Error(err.error))
  }

  // Patient API

  loginPatient(patientDetails:any) {
    return this.http.post(
      `${this.baseURL}/patient/login-patient`,
      patientDetails,
      {
        headers: {
          'Authorization': 'Basic ' + btoa(`${patientDetails.email}:${patientDetails.password}`)
        }
      }
    ).pipe(
      catchError(this.handleError)
    )
  }

  registerPatient(patientDetails:any) {
    return this.http.post(
      `${this.baseURL}/patient/register-patient`,
      patientDetails
    ).pipe(
      catchError(this.handleError)
    )
  }

  // Doctor API

  loginDoctor(doctorDetails:any) {
    return this.http.post(
      `${this.baseURL}/doctor/login-doctor`,
      doctorDetails,
      {
        headers: {
          'Authorization': 'Basic ' + btoa(`${doctorDetails.email}:${doctorDetails.password}`)
        }
      }
    ).pipe(
      catchError(this.handleError)
    )
  }

  registerDoctor(doctorDetails:any) {
    return this.http.post(
      `${this.baseURL}/doctor/register-doctor`,
      doctorDetails
    ).pipe(
      catchError(this.handleError)
    )
  }
}

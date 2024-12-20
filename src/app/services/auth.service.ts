import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL:string;

  constructor(private http:HttpClient, 
    private toastr:ToastrService
  ) { 
    this.baseURL = environment.api_base_url;
  }

  private handleError(err:any) {
    return throwError(() => new Error(err.error))
  }

  registerPatient(patientDetails:any) {
    return this.http.post(
      `${this.baseURL}/patient/register-patient`,
      patientDetails
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

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private baseUrl:string

  constructor(private http:HttpClient) { 
    this.baseUrl = environment.api_base_url
  }

  uploadProfilePicture(formData:FormData) {
    return this.http.post(`${this.baseUrl}/general/upload-profile-pic`, 
      formData, { responseType: 'text' })
  }
}

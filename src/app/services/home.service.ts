import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseURL:string;

  constructor(private http:HttpClient) {
    this.baseURL = environment.api_base_url;
  }

  loadFAQs() {
    return this.http.get(`${this.baseURL}/general/get-FAQs`);
  }

  loadTestimonials() {
    return this.http.get(`${this.baseURL}/general/load-testimonials`);
  }
}

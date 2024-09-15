import { Component } from '@angular/core';
import { AccordionComponent } from "../../accordion/accordion.component";
import { NgFor } from '@angular/common';
import { CarouselComponent } from "../../carousel/carousel.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AccordionComponent, NgFor, CarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
    faqs:any[] = [
      {
        id: 1,
        question: "How do I book an appointment with a doctor?",
        answer: "You can easily book an appointment by browsing available doctors, selecting your preferred time slot, and confirming your appointment through our app. Once confirmed, you will receive an email or SMS notification.",
        active: false
      },
      {
        id: 2,
        question: "Can I cancel or reschedule an appointment?",
        answer: "Yes, you can cancel or reschedule your appointment directly through the app by navigating to your upcoming appointments section. Please note that cancellation policies may vary depending on the doctor.",
        active: false
      },
      {
        id: 3,
        question: "Is there a fee for booking through the app?",
        answer: "Our app is free to use for booking appointments. However, doctors may charge for their consultations, and any fees will be clearly displayed before confirming your appointment.",
        active: false
      },
      {
        id: 4,
        question: "How do I find a doctor based on my condition or specialty?",
        answer: "You can search for doctors by specialty, location, or condition using our advanced search filters. This helps you find the best healthcare professional to suit your needs.",
        active: false
      },
      {
        id: 5,
        question: "What types of medical services are available through the app?",
        answer: "We provide a wide range of medical services, including general check-ups, specialist consultations, lab tests, and mental health support. Simply browse the available services in the app to find the care you need.",
        active: false
      }
    ]

    constructor() {

    }

    toggleAccordion(id:any) {
      for(let i = 0; i < this.faqs.length; ++i) {
        if(this.faqs[i].id === id) {
          this.faqs[i].active = !this.faqs[i].active; 
        } else {
          this.faqs[i].active = false;
        }
      }
    }
}

import { Component } from '@angular/core';
import { AccordionComponent } from "../../accordion/accordion.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AccordionComponent, NgFor],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
    faqs:any[] = [
      {
        question: "How do I book an appointment with a doctor?",
        answer: "You can easily book an appointment by browsing available doctors, selecting your preferred time slot, and confirming your appointment through our app. Once confirmed, you will receive an email or SMS notification."
      },
      {
        question: "Can I cancel or reschedule an appointment?",
        answer: "Yes, you can cancel or reschedule your appointment directly through the app by navigating to your upcoming appointments section. Please note that cancellation policies may vary depending on the doctor."
      },
      {
        question: "Is there a fee for booking through the app?",
        answer: "Our app is free to use for booking appointments. However, doctors may charge for their consultations, and any fees will be clearly displayed before confirming your appointment."
      },
      {
        question: "How do I find a doctor based on my condition or specialty?",
        answer: "You can search for doctors by specialty, location, or condition using our advanced search filters. This helps you find the best healthcare professional to suit your needs."
      },
      {
        question: "What types of medical services are available through the app?",
        answer: "We provide a wide range of medical services, including general check-ups, specialist consultations, lab tests, and mental health support. Simply browse the available services in the app to find the care you need."
      }
    ]
}

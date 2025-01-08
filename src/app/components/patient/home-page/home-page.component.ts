import { Component, OnInit } from '@angular/core';
import { AccordionComponent } from "../../accordion/accordion.component";
import { NgFor } from '@angular/common';
import { CarouselComponent } from "../../carousel/carousel.component";
import { FooterComponent } from "../../footer/footer.component";
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AccordionComponent, NgFor, CarouselComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
    faqs:any[] = []

    constructor(private homeService:HomeService) {
    }

    ngOnInit() {
      this.homeService.loadFAQs().subscribe({
        next: (data:any) => {
            this.faqs = data
        },
        error: (err) => {
            console.log(err)
        }
      })
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

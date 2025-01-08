import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
    @Input() testimonials:any[] = []
    currentSlide:number
    prevSlide:number
    nextSlide:number

    constructor() {
        this.currentSlide = 0
        this.prevSlide = this.currentSlide - 1
        if(this.prevSlide < 0) {
            this.prevSlide = this.testimonials.length - 1
        }
        this.nextSlide = this.currentSlide + 1
        if(this.nextSlide >= this.testimonials.length) {
            this.nextSlide = 0
        }

        console.log(this.testimonials);
        
    }


}

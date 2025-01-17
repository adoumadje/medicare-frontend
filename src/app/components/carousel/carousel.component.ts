import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
    testimonials:any[] = []
    displayedTestimonials:any[] = []
    currentSlide:number
    prevSlide:number
    nextSlide:number
    numPages:number
    currPage:number

    constructor(private homeService:HomeService) {
        this.currentSlide = 0
        this.prevSlide = 0
        this.nextSlide = 0
        this.numPages = 1
        this.currPage = 0
    }

    setSlides(currentSlide:number) {
      this.currentSlide = currentSlide
      if(this.currentSlide >= this.testimonials.length) {
          this.currentSlide = 0
      } else if(this.currentSlide < 0) {
            this.currentSlide = this.testimonials.length - 1
      }
      this.currPage = Math.floor(this.currentSlide / 3)
      this.prevSlide = this.currentSlide - 1
      if(this.prevSlide < 0) {
          this.prevSlide = this.testimonials.length - 1
      }
      this.nextSlide = this.currentSlide + 1
      if(this.nextSlide >= this.testimonials.length) {
          this.nextSlide = 0
      }
      this.setDisplayedTestimonials()
    }

    setDisplayedTestimonials() {
      this.displayedTestimonials[0] = this.testimonials[this.prevSlide]
      this.displayedTestimonials[1] = this.testimonials[this.currentSlide]
      this.displayedTestimonials[2] = this.testimonials[this.nextSlide]
    }

    selectDisplayedTestimonial(index:number) {
        if(index == 0) {
            this.setSlides(this.prevSlide)
        } else if(index == 2) {
            this.setSlides(this.nextSlide)
        }
    }

    ngOnInit() {
        this.homeService.loadTestimonials().subscribe({
            next: (data:any) => {
                this.testimonials = data
                this.numPages = Math.ceil(this.testimonials.length / 3)
                this.setSlides(0)
            },
            error: (err) => {
                console.log(err)
            }
        })
    }
}

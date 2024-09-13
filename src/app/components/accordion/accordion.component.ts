import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgIf],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
    active: boolean;

    @Input() faq:any = {}

    constructor() {
      this.active = false;
    }

    toggle():void {
      this.active = !this.active;
      console.log("clicked")
    }
}

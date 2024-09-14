import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [NgIf],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {

    @Input() faq:any = { }
    @Output() accordionClicked:EventEmitter<any> = new EventEmitter<any>();

    constructor() {

    }

    toggle(id:any):void {
      this.accordionClicked.emit(id)
    }
}

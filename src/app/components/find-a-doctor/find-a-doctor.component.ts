import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-a-doctor',
  standalone: true,
  imports: [],
  templateUrl: './find-a-doctor.component.html',
  styleUrl: './find-a-doctor.component.css'
})
export class FindADoctorComponent implements OnInit {
    placeHolderText:string = "Search by doctor name or specialization"

    constructor() {

    }

    ngOnInit(): void {
      this.updatePlaceHolder();
    }



    @HostListener('window:resize', ['$event'])
    onResize() {
      this.updatePlaceHolder();
    }

    updatePlaceHolder() {
      if(window.innerWidth <= 640) {
        this.placeHolderText = "Search doctor...";
      } else {
        this.placeHolderText = "Search by doctor name or specialization";
      }
    }
}

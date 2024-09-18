import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
      mobileMenuDisplay:string;
      mobileMenuButton:string;

      constructor() {
        this.mobileMenuDisplay = '-right-rm-right'
        this.mobileMenuButton = 'bi bi-list text-2xl'
      }

      toggleMobileMenu():void {
        if(this.mobileMenuDisplay === 'left-0') {
          this.mobileMenuDisplay = '-right-rm-right';
          this.mobileMenuButton = 'bi bi-list text-2xl';
        } else {
          this.mobileMenuDisplay = 'left-0';
          this.mobileMenuButton = 'bi bi-x-lg text-2xl';
        }
      }
}

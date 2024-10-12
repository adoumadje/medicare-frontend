import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent implements OnInit {
      mobileMenuDisplay:string;
      mobileMenuButton:string;

      constructor(private router: Router) {
        this.mobileMenuDisplay = '-right-rm-right'
        this.mobileMenuButton = 'bi bi-list text-2xl'
      }

      ngOnInit(): void {
        this.router.events.subscribe((event) => {
          if(event instanceof NavigationEnd) {
            console.log(event.urlAfterRedirects);
            
          }
        })
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

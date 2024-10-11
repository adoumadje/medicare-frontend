import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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

      currentRoute:string | undefined;

      constructor(private route: ActivatedRoute, private router: Router) {
        this.mobileMenuDisplay = '-right-rm-right'
        this.mobileMenuButton = 'bi bi-list text-2xl'
      }

      ngOnInit(): void {
        this.route.url.subscribe((url) => {
          this.currentRoute = url.join('/');
          console.log(this.currentRoute);
          console.log('Hello')
          
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

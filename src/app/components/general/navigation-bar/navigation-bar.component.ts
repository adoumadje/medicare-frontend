import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent implements OnInit {
      mobileMenuDisplay:string;
      mobileMenuButton:string;
      currentUrl:string;

      authenticated:boolean = false;
      user:any = null;
      defaultAvatar:string = 'https://images.freeimages.com/image/previews/374/instabutton-png-design-5690390.png';

      constructor(private router: Router,
        private userService: UserService,
      ) {
        this.mobileMenuDisplay = '-right-rm-right'
        this.mobileMenuButton = 'bi bi-list text-2xl'
        this.currentUrl = ''
      }

      ngOnInit(): void {
        this.router.events.subscribe((event) => {
          if(event instanceof NavigationEnd) {
            this.currentUrl = event.urlAfterRedirects;
          }
        })

        this.userService.getUser.subscribe({
          next: (data) => {
            this.authenticated = data !== null || sessionStorage.getItem('token') !== null;
            this.user = data || JSON.parse(sessionStorage.getItem('user') || '{}');
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

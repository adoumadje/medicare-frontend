import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.css'
})
export class PatientDashboardComponent implements OnInit {
    user: any = null;

    profileForm:FormGroup = new FormGroup({});

    constructor(private userService:UserService) {
      
    }

    setProfileForm() {
      this.profileForm = new FormGroup({
        fullname: new FormControl(this.user.firstname + ' ' + this.user.lastname),
        email: new FormControl(this.user.email),
        password: new FormControl(''),
        bloodGroup: new FormControl(this.formatBloodGroup(this.user.bloodGroup)),
        gender: new FormControl(this.user.gender)
      })
    }

    ngOnInit(): void {
      this.userService.getUser.subscribe(
        (data) => {
          this.user = data || JSON.parse(sessionStorage.getItem('user') || '{}');
          this.setProfileForm();
        }
      )
    }

    formatBloodGroup(bloodGroup: string): string {
      const group = bloodGroup.split('_');
      group[1] = group[1] === 'POS' ? '+' : '-';
      return group.join('');
    }
}

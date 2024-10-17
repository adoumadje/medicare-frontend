import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerForm:FormGroup;

    constructor(
        private authService:AuthService
    ) {
        this.registerForm = new FormGroup({
            fullname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            userType: new FormControl('patient', Validators.required),
            gender: new FormControl('MALE', Validators.required),
            profilePicture: new FormControl(null),
            profilePicUrl: new FormControl('')
        })
    }

    get fullname() {
        return this.registerForm.controls['fullname']
    }

    get email() {
        return this.registerForm.controls['email']
    }

    get password() {
        return this.registerForm.controls['password']
    }

    get userType() {
        return this.registerForm.controls['userType']
    }

    get gender() {
        return this.registerForm.controls['gender']
    }

    onImageSelected(event:any):void {
        console.log(event.target.files[0]);
        
    }

    onSubmit():void {
        const formData = { ...this.registerForm.value }
        if(formData.userType === 'patient') {
            this.authService.registerPatient(formData).
            subscribe(
                response => {
                    console.log(response);
                }
            )
        } else {
            this.authService.registerDoctor(formData).
            subscribe(
                response => {
                    console.log(response);
                }
            )
        }
    }
}

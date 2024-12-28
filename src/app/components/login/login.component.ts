import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm:FormGroup;
  
    constructor(private authService:AuthService,
      private toastr:ToastrService,
      private router:Router,
      private userService:UserService
    ) {
        this.loginForm = new FormGroup({
            status: new FormControl('patient', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        })
    }

    get status() { return this.loginForm.controls['status'] }

    get email() { return this.loginForm.controls['email'] }
        
    get password() { return this.loginForm.controls['password'] } 

    onSubmit() {
        if(this.loginForm.value.status === 'patient') {
            this.authService.loginPatient(this.loginForm.value).subscribe({
                next: (data:any) => {
                    sessionStorage.setItem('token', data.token)
                    sessionStorage.setItem('user', JSON.stringify(data.user))

                    this.router.navigate(['/home'])
                },
                error: (err) => {
                    this.toastr.error(err.message, 'Error', { timeOut: 3000 })
                }
              })
        } else {
            this.authService.loginDoctor(this.loginForm.value).subscribe({
                next: (data:any) => {
                    sessionStorage.setItem('token', data.token)
                    sessionStorage.setItem('user', JSON.stringify(data.user))
                    this.userService.setUser(data.user)
                    this.router.navigate(['/home'])
                },
                error: (err) => {
                    this.toastr.error(err.message, 'Error', { timeOut: 3000 })
                }
              })
        }
    }

}

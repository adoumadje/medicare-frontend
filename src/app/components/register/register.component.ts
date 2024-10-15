import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { pictureOrUrlValidator } from '../../validators/picture-or-url.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerForm:FormGroup;

    constructor() {
        this.registerForm = new FormGroup({
            fullname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            user: new FormControl('', Validators.required),
            gender: new FormControl('', Validators.required),
            photo: new FormGroup({
              profilePicture: new FormControl(''),
              profilePicUrl: new FormControl('')
            }, [pictureOrUrlValidator])
        })
    }
}

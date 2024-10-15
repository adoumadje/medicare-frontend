import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { pictureOrUrlValidator } from '../../validators/picture-or-url.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerFor:FormGroup;

    constructor() {
        this.registerFor = new FormGroup({
            fullname: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            photo: new FormGroup({
              profilePicture: new FormControl(''),
              profilePicUrl: new FormControl('')
            }, [pictureOrUrlValidator])
        })
    }
}

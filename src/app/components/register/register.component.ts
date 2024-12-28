import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FileUploadService } from '../../services/file-upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerForm:FormGroup;


    defaultAvatar:String = "https://images.freeimages.com/image/previews/374/instabutton-png-design-5690390.png"
    selectedFile:File | null = null
    selectedImgUrl:String | null = null

    constructor(
        private authService:AuthService,
        private fileService:FileUploadService,
        private toastr:ToastrService,
        private router:Router
    ) {
        this.registerForm = new FormGroup({
            fullname: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
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

    get profilePicture() {
        return this.registerForm.controls['profilePicture']
    }

    get profilePicUrl() {
        return this.registerForm.controls['profilePicUrl']
    }

    onImageSelected(event:any):void {
        const file = event.target.files[0];
        if(file) {
            this.selectedFile = file
            const reader = new FileReader()
            reader.onload = () => {
                this.selectedImgUrl = reader.result as String
            }
            reader.readAsDataURL(file)
            this.registerForm.get('profilePicUrl')?.reset()
        }
    }

    onImageUrlEntered(event:any):void {
        this.selectedFile = null
        this.selectedImgUrl = null
        this.registerForm.get('profilePicture')?.reset()
    }

    uploadFile(file:File) {
        const formData = new FormData()
        formData.append('file', file)
        this.fileService.uploadProfilePicture(formData)
        .subscribe(res => {
            let formData = { ...this.registerForm.value }
            formData.profilePicUrl = res
            this.submitForm(formData)
        })
    }

    resetForm() {
        this.registerForm.reset({
            fullname: '',
            email: '',
            password: '',
            userType: 'patient',
            gender: 'MALE',
            profilePicture: null,
            profilePicUrl: ''
        })
        this.selectedFile = null
        this.selectedImgUrl = null
    }

    submitForm(formData:any) {
        if(formData.userType === 'patient') {
            this.authService.registerPatient(formData).
            subscribe({
                next: (res:any) => {
                    this.toastr.success('registered successfully', 'Success', { timeOut: 3000 })
                    this.resetForm()
                    this.router.navigate(['/login'])
                },
                error: (err) => {
                    this.toastr.error(err.message, 'Error', { timeOut: 3000 })
                }
            })
        } else {
            this.authService.registerDoctor(formData).
            subscribe({
                next: (res:any) => {
                    this.toastr.success('registered successfully', 'Success', { timeOut: 3000 })
                    this.resetForm()
                    this.router.navigate(['/login'])
                },
                error: (err) => {
                    this.toastr.error(err.message, 'Error', { timeOut: 3000 })
                }
            })
        }
    }

    onSubmit():void {
        if(this.selectedFile != null) {
            this.uploadFile(this.selectedFile)
        } else {
            this.submitForm({ ...this.registerForm.value })
        }
    }
}

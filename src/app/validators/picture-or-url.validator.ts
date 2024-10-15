import { AbstractControl, ValidatorFn } from "@angular/forms";


export const pictureOrUrlValidator:ValidatorFn = (control:AbstractControl): { [key:string]: boolean } | null => {
    const group = control as any;
    const picture = group.get('profilePicture')?.value;
    const url = group.get('profilePicUrl')?.value;
    return picture || url ? null : { atLeastOneRequired: true }
};
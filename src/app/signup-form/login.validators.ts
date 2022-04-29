import { AbstractControl, ValidationErrors } from "@angular/forms";

export class LoginValidators {
    static noSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).includes(' ')) {
            return { noSpace: true }
        }
        return null;
    }

    static isTaken(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'admin') {
                    resolve({ isTaken: true })
                }
                else {
                    resolve(null);
                }
            }, 2000)
        })
    }
}
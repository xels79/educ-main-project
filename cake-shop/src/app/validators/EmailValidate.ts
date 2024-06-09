import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function EmailValidate():ValidatorFn{
    return function(control: AbstractControl): ValidationErrors | null{
        const re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const val:string = control.value;

        if (!val.toLowerCase().match(re)) {
            return  { incorrectEmailAddress: 'Введите коректный email' };
        }else{
        return null;
        }
    }
  }
  
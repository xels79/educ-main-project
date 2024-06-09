import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function PasswordConfirmViladator(controlNameToCompare: string):ValidatorFn{
  return function(control: AbstractControl): ValidationErrors | null{
    const nVal = control.parent?.get(controlNameToCompare)?.value;
    if (typeof(nVal)!=='undefined' && typeof(control?.value)!=='undefined') {
      return control.value !== nVal ? { passDoesNotMatch: { value: control.value } } : null;
    }else{
      return null;
    }
  }
}

export function PasswordStrength(): ValidatorFn{
  return function(control: AbstractControl): ValidationErrors | null {
    const val = control.value;

    const hasUpperCase = /[A-Z]+/.test( val );
    const hasLowerCase = /[a-z]+/.test( val );
    const hasNumber    = /[0-9]+/.test( val );
    const hasSim = /[-!$%^&*()_+|~=`{}\[\]:";'<>?.,\/]+/.test( val );

    const isValide = hasLowerCase && hasUpperCase && hasNumber && hasSim;

    console.log(val, hasUpperCase,hasLowerCase,hasNumber,hasSim, isValide);
    

    return isValide ? null : { passIsNotStrongEnough: { value:true } };
  }
}

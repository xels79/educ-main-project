import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function TrimValidate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const val = <string>(control.getRawValue());
        if (val.charAt(0)===' ' || (val.length>1 && val.charAt(val.length-1)===' ' && val.charAt(val.length-2)===' ') ){
            control.setValue(val.trim());
        }
        return null;
    };
  }
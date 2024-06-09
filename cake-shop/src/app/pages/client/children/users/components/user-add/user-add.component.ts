import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EmailValidate } from 'src/app/validators/EmailValidate';
import { TrimValidate } from 'src/app/validators/TrimValidate';
import { PasswordConfirmViladator, PasswordStrength } from 'src/app/validators/password';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  regForm: FormGroup;

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Регистрация пользователя");
    this.regForm = new FormGroup({
      username: new FormControl<string>('',{ validators:[TrimValidate(), Validators.required, Validators.minLength(3)], updateOn: 'blur'}),
      realname: new FormControl<string>('',{ validators:[Validators.required, Validators.minLength(3)], updateOn: 'blur'}),
      email:new FormControl<string>('',{ validators:[TrimValidate(), Validators.required, EmailValidate()], updateOn: 'blur'}),
      password: new FormControl<string>('',{ validators:[Validators.required, Validators.minLength(6), PasswordStrength()], updateOn: 'blur'}),
      passwordRepeat: new FormControl<string>('',{ validators:[PasswordConfirmViladator('password'), Validators.required]})
    });
  }
  errors(fieldName:string): string {
    const fc:FormControl|null = (this.regForm.get(fieldName) as FormControl | null);
    if (fc!==null && fc.errors && (fc.dirty || fc.touched)){
      if (fc.errors['required']){
        return 'Поле необходимо заполнить'
      }
      if (fc.errors['minlength']){
        return `Длина должнабыть не ${fc.errors['minlength'].requiredLength} меньше символов, еще ${fc.errors['minlength'].requiredLength - fc.errors['minlength'].actualLength}`
      }
      if (fc.errors['incorrectEmailAddress']){
        return 'Введите коректный email'
      }
      if (fc.errors['passDoesNotMatch']){
        return 'Пароли не совпадают'
      }
      if (fc.errors['passIsNotStrongEnough']){
        return 'Пароль должен содержать строчные и заглавные буквы, цифры, и -!$%^&*()_+|~=`{}\\:";\'<>?.,'
      }
      return "Имеются ошибки";
    }else{
      return '';
    }
  }
  isValid(fieldName:string){
    const fc:FormControl|null = (this.regForm.get(fieldName) as FormControl | null);
    return fc===null || (fc.touched && (!fc.errors || !fc.errors[fieldName]));
  }
  submit(){
    const rawData = this.regForm.getRawValue();
    const formData = new FormData();
    console.log(rawData);
  }
}

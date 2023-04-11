import {ChangeDetectorRef, Directive, inject, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[confirmPasswordValidator]',
  standalone: true,
  providers: [{provide: NG_VALIDATORS, useExisting: NgxConfirmPasswordValidatorDirective, multi: true}]
})
export class NgxConfirmPasswordValidatorDirective implements Validator {
  @Input() passwordControlName: string | undefined;
  @Input() otherPasswordControlName: string | undefined;
  
  private cdr = inject(ChangeDetectorRef);
  
  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.passwordControlName || !this.otherPasswordControlName) {
      return null;
    }

    const passwordControl = control.get(this.passwordControlName);
    const otherPasswordControl = control.get(this.otherPasswordControlName);
    
    if (!passwordControl || !otherPasswordControl) {
      return null;
    }

    passwordControl.updateValueAndValidity({onlySelf: true});
    otherPasswordControl.updateValueAndValidity({onlySelf: true});
    
    const pwcErrors = passwordControl.errors;
    const opwcErrors = otherPasswordControl.errors;
    
    if (passwordControl.value !== otherPasswordControl.value) {
      passwordControl.setErrors({...pwcErrors, confirmPassword: true});
      otherPasswordControl.setErrors({...opwcErrors, confirmPassword: true});
    }
    
    return null;
  }
}

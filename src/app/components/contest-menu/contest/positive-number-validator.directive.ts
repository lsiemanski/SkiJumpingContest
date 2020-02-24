import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appPositiveNumber]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PositiveNumberValidator, multi: true }]
})
export class PositiveNumberValidator implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value < 0 ? {min: true} : null;
  }
}

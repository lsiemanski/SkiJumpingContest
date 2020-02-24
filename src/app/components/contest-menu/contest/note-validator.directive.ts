import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive} from '@angular/core';

@Directive({
  selector: '[appNote]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NoteValidator, multi: true }]
})
export class NoteValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value < 0 || control.value > 20 ? { noteOutOfRange : true} : null;
  }
}

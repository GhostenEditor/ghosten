import { ValidatorFn, Validators } from '@angular/forms';
import { GtNode } from '@ghosten/common';

export function getValidatorsFromGtNode(gtNode: GtNode): ValidatorFn[] | null {
  if (!Array.isArray(gtNode.validator)) {
    return null;
  }
  return gtNode.validator.map(({ type, value }) => {
    // this.errorTextMap.set(type.toLocaleLowerCase(), value.errorText);
    switch (type) {
      case 'min':
        return Validators.min(value.min);
      case 'max':
        return Validators.max(value.max);
      case 'required':
        return Validators.required;
      case 'requiredTrue':
        return Validators.requiredTrue;
      case 'email':
        return Validators.email;
      case 'minLength':
        return Validators.minLength(value.minLength);
      case 'maxLength':
        return Validators.maxLength(value.maxLength);
      case 'pattern':
        return Validators.pattern(value.pattern);
      default:
        return Validators.nullValidator;
    }
  });
}

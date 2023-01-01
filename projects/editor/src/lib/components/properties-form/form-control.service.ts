import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FormControlService {
  buttonClick = new Subject<any>();

  constructor() {}
}

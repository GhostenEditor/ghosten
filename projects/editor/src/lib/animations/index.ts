import { animate, state, style, transition, trigger } from '@angular/animations';

export const bodyExpansion = trigger('bodyExpansion', [
  state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
  state('expanded', style({ height: '*', visibility: 'visible' })),
  transition('expanded <=> collapsed, void => collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
]);

export const slideFadeIn = trigger('slideFadeIn', [
  state('void', style({ transform: 'matrix(.98,0,0,.98,0,5)', opacity: '0' })),
  state('*', style({ transform: 'matrix(1,0,0,1,0,0)' })),
  transition('* <=> void', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
]);

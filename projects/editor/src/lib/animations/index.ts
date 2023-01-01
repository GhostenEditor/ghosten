import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const bodyExpansion = trigger('bodyExpansion', [
  state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
  state('expanded', style({ height: '*', visibility: 'visible' })),
  transition(
    'expanded <=> collapsed, void => collapsed',
    animate('225ms cubic-bezier(0.4,0.0,0.2,1)'),
  ),
]);

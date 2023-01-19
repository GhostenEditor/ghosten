import { Type } from '@angular/core';

import { ISidebarPosition } from '../../classes/gt-settings';

export interface Tab extends ISidebarPosition {
  icon: string;
  component: Type<any>;
}

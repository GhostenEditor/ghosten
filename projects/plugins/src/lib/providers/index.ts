import { Provider } from '@angular/core';

import { gtContextmenu } from './contextmenu';
import { gtElementsList } from './gtElementsList';
import { propertyEditEvent } from './propertyEditEvent';
import { topBarButtons } from './topBarButtons';

export const providers: Provider[] = [
  gtElementsList,
  propertyEditEvent,
  topBarButtons,
  gtContextmenu,
];

import { Provider } from '@angular/core';

import { eventsListener } from './eventsListener';
import { gtContextmenu } from './contextmenu';
import { topBarButtons } from './topBarButtons';

export const providers: Provider[] = [topBarButtons, gtContextmenu, eventsListener];

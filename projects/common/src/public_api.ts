import '@angular/localize/init';
import { createDefaultConfig } from './lib/classes';

export * from './lib/utils';
export * from './lib/classes';
export * from './lib/types';

export const gtBaseConfigMap = () => {
  const root = createDefaultConfig({
    core: {
      canHasChild: true,
      canDelete: false,
      canCopy: false,
    },
  });
  const division = createDefaultConfig({
    core: { canHasChild: true },
    style: [
      {
        name: 'border',
        type: 'border',
      },
    ],
  });
  const template = createDefaultConfig({
    core: {
      canHasChild: true,
      canDelete: false,
      canCopy: false,
    },
  });
  const slot = createDefaultConfig({
    core: {
      canHasChild: true,
    },
  });
  const outlet = createDefaultConfig({
    core: {
      canHasChild: true,
    },
  });
  return {
    root,
    division,
    template,
    slot,
    outlet,
  };
};

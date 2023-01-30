import { createDefaultConfig } from '@ghosten/common';

export function gtTextConfigMap() {
  const h1 = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'textarea',
        canBind: true,
      },
    ],
  });
  const h2 = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'textarea',
        canBind: true,
      },
    ],
  });
  const h3 = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'textarea',
        canBind: true,
      },
    ],
  });
  const h4 = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'textarea',
        canBind: true,
      },
    ],
  });
  const h5 = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'textarea',
        canBind: true,
      },
    ],
  });
  const h6 = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'textarea',
        canBind: true,
      },
    ],
  });
  const code = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'textarea',
        canBind: true,
      },
    ],
  });
  return {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    code,
  };
}

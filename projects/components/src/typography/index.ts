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
  const strong = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'textarea',
        canBind: true,
      },
    ],
  });
  const text = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'textarea',
        canBind: true,
      },
    ],
    style: [
      {
        label: 'Font Size',
        name: 'fontSize',
        type: 'numberHasUnit',
      },
      {
        label: 'Font Weight',
        name: 'fontWeight',
        type: 'select',
        options: [
          { label: '100', value: '100' },
          { label: '200', value: '200' },
          { label: '300', value: '300' },
          { label: '400', value: '400' },
          { label: '500', value: '500' },
          { label: '600', value: '600' },
          { label: '700', value: '700' },
          { label: '800', value: '800' },
          { label: '900', value: '900' },
        ],
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
    strong,
    text,
  };
}

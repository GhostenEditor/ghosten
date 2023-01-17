import { createDefaultConfig } from '@ghosten/common';

export const gtBaseConfigMap = () => {
  const text = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Text:文字`,
        name: 'text',
        type: 'textarea',
        value: 'Some Text',
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
  const icon = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Icon Type:图标类型`,
        name: 'iconType',
        type: 'select',
        options: [],
      },
    ],
  });
  const image = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Image Path:图片地址`,
        type: 'text',
        name: 'src',
      },
      {
        label: 'Alt',
        type: 'text',
        name: 'alt',
      },
      {
        label: 'Title',
        type: 'text',
        name: 'title',
      },
    ],
  });
  return {
    text,
    icon,
    image,
  };
};

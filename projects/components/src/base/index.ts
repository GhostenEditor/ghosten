import { createDefaultConfig } from '@ghosten/common';

export interface ImageProperty {
  src: string;
  alt: string;
  title: string;
  responsive: boolean;
  thumbnails: boolean;
}

export const gtBaseConfigMap = () => {
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
      {
        label: 'Responsive',
        type: 'switch',
        name: 'responsive',
      },
      {
        label: 'Thumbnails',
        type: 'switch',
        name: 'thumbnails',
      },
    ],
  });
  return {
    icon,
    image,
  };
};

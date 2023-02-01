import { createDefaultConfig } from '@ghosten/common';

export interface ImageProperty {
  src: string;
  alt: string;
  title: string;
  responsive: boolean;
  thumbnails: boolean;
}

export interface AProperty {
  link: string;
}

export const gtBaseConfigMap = () => {
  const a = createDefaultConfig({
    core: {
      canHasChild: true,
    },
    property: [
      {
        label: $localize`:Property Label\: Link:Link`,
        type: 'text',
        name: 'link',
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
    a,
    image,
  };
};

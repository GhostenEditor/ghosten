import { createDefaultConfig } from '@ghosten/common';

export interface BatteryProperty {
  gaugeMax: number;
  title: string;
  data: number;
}

export interface GaugeProperty {
  title: string;
  gaugeNormalMin: number;
  gaugeNormalMax: number;
  gaugeMin: number;
  gaugeMax: number;
  data: number;
}

export interface WaterProperty {
  title: string;
  gaugeNormalMin: number;
  gaugeNormalMax: number;
  gaugeMin: number;
  gaugeMax: number;
  data: number;
}

export const gtGaugeConfigMap = () => {
  const gauge = createDefaultConfig({
    property: [
      { name: 'title', type: 'text' },
      { name: 'gaugeNormalMin', type: 'number' },
      { name: 'gaugeNormalMax', type: 'number' },
      { name: 'gaugeMin', type: 'number', value: 0 },
      { name: 'gaugeMax', type: 'number', value: 100 },
      { name: 'data', type: 'number', canBind: true },
    ],
    style: [{ name: 'display', type: 'select', value: 'inline-block' }],
  });
  const water = createDefaultConfig({
    property: [
      { name: 'title', type: 'text' },
      { name: 'gaugeNormalMin', type: 'number' },
      { name: 'gaugeNormalMax', type: 'number' },
      { name: 'gaugeMin', type: 'number', value: 0 },
      { name: 'gaugeMax', type: 'number', value: 100 },
      { name: 'color', type: 'color', value: '#16D985' },
      { name: 'background', type: 'color', value: '#033E49' },
      { name: 'data', type: 'number', value: 50 },
    ],
    style: [
      { name: 'display', type: 'select', value: 'block' },
      { name: 'height', type: 'numberHasUnit', value: '100px' },
    ],
  });
  const battery = createDefaultConfig({
    property: [
      { name: 'title', type: 'text' },
      { name: 'gaugeMin', type: 'number', value: 0 },
      { name: 'gaugeMax', type: 'number', value: 100 },
      {
        name: 'direction',
        type: 'select',
        value: 'vertical',
        options: [
          { label: 'vertical', value: 'vertical' },
          { label: 'horizontal', value: 'horizontal' },
        ],
      },
      { name: 'data', type: 'number', canBind: true },
    ],
    style: [
      { name: 'display', type: 'select', value: 'flex' },
      { name: 'flexDirection', type: 'select', value: 'column' },
      { name: 'alignItems', type: 'select', value: 'center' },
    ],
  });
  return {
    gauge,
    water,
    battery,
  };
};

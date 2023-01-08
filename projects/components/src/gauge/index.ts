import { createDefaultConfig } from '@ghosten/common';

export * from './gauge.module';
export * from './gauge.directive';
export * from './water.directive';
export * from './battery.directive';

export interface GaugeProperty {
  title: string;
  gaugeNormalMin: number;
  gaugeNormalMax: number;
  gaugeMin: number;
  gaugeMax: number;
  startColor: string;
  endColor: string;
  data: number;
}

export interface WaterProperty {
  title: string;
  gaugeNormalMin: number;
  gaugeNormalMax: number;
  gaugeMin: number;
  gaugeMax: number;
  minColor: string;
  maxColor: string;
  data: number;
  background: string;
}

export interface BatteryProperty {
  title: string;
  data: number;
  gaugeMax: number;
  gaugeMin: number;
  direction: 'horizontal' | 'vertical';
}

export const gtGaugeConfigMap = () => {
  const gauge = createDefaultConfig({
    property: [
      { name: 'title', type: 'text' },
      { name: 'gaugeNormalMin', type: 'number' },
      { name: 'gaugeNormalMax', type: 'number' },
      { name: 'gaugeMin', type: 'number', value: 0 },
      { name: 'gaugeMax', type: 'number', value: 100 },
      { name: 'startColor', type: 'color', value: '#5b79f1' },
      { name: 'endColor', type: 'color', value: '#29ffc6' },
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
      { name: 'minColor', type: 'color', value: '#5b79f1' },
      { name: 'maxColor', type: 'color', value: '#29ffc6' },
      { name: 'background', type: 'color', value: '#033E49' },
      { name: 'data', type: 'number', value: 50 },
    ],
    style: [{ name: 'display', type: 'select', value: 'inline-block' }],
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
      { name: 'alignItems', type: 'select', value: 'stretch' },
    ],
  });
  return {
    gauge,
    water,
    battery,
  };
};

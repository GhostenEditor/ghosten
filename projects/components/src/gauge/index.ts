import { createDefaultConfig } from '@ghosten/common';

export * from './gauge.module';
export * from './gauge.directive';
export * from './water.directive';
export * from './battery.directive';

export interface GaugeProperty {
  title: string;
  gaugeMin: number;
  gaugeMax: number;
  startColor: string;
  endColor: string;
  data: number;
}

export interface WaterProperty {
  title: string;
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
      {
        label: $localize`:Property Label\: Title:标题`,
        name: 'title',
        type: 'text',
      },
      { label: $localize`:Property Label\: Min:最小值`, name: 'gaugeMin', type: 'number', value: 0 },
      { label: $localize`:Property Label\: Max:最大值`, name: 'gaugeMax', type: 'number', value: 100 },
      { label: $localize`:Property Label\: Min Color:最小值颜色`, name: 'startColor', type: 'color', value: '#5b79f1' },
      { label: $localize`:Property Label\: Max Color:最大值颜色`, name: 'endColor', type: 'color', value: '#29ffc6' },
      { label: $localize`:Property Label\: Data:值`, name: 'data', type: 'number', canBind: true },
    ],
    style: [{ name: 'display', type: 'select', value: 'inline-block' }],
  });
  const water = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Title:标题`,
        name: 'title',
        type: 'text',
      },
      { label: $localize`:Property Label\: Min:最小值`, name: 'gaugeMin', type: 'number', value: 0 },
      { label: $localize`:Property Label\: Max:最大值`, name: 'gaugeMax', type: 'number', value: 100 },
      { label: $localize`:Property Label\: Min Color:最小值颜色`, name: 'minColor', type: 'color', value: '#5b79f1' },
      { label: $localize`:Property Label\: Max Color:最大值颜色`, name: 'maxColor', type: 'color', value: '#29ffc6' },
      { label: $localize`:Property Label\: Background:背景`, name: 'background', type: 'color', value: '#033E49' },
      { label: $localize`:Property Label\: Data:值`, name: 'data', type: 'number', value: 50 },
    ],
    style: [{ name: 'display', type: 'select', value: 'inline-block' }],
  });
  const battery = createDefaultConfig({
    property: [
      {
        label: $localize`:Property Label\: Title:标题`,
        name: 'title',
        type: 'text',
      },
      { label: $localize`:Property Label\: Min:最小值`, name: 'gaugeMin', type: 'number', value: 0 },
      { label: $localize`:Property Label\: Max:最大值`, name: 'gaugeMax', type: 'number', value: 100 },
      {
        label: 'Orientation',
        name: 'direction',
        type: 'select',
        value: 'vertical',
        options: [
          { label: 'vertical', value: 'vertical' },
          { label: 'horizontal', value: 'horizontal' },
        ],
      },
      { label: $localize`:Property Label\: Data:值`, name: 'data', type: 'number', canBind: true },
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

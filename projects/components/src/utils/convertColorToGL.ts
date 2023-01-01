import { TinyColor } from '@ctrl/tinycolor';

export function convertColorToGL(color: string): number[] {
  const { r, g, b, a } = new TinyColor(color);
  return [r / 255, g / 255, b / 255, a];
}

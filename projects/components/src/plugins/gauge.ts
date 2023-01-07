import { clamp } from '@ghosten/common';

export class Gauge {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  private get percent() {
    return clamp((this.value - this.min) / (this.max - this.min), 0, 1);
  }

  public background: string;
  public foreground: string;
  public radius: number;
  public thickness: number;

  public max: number;
  public min: number;
  public size: number;
  private _value = 0;
  get value(): number {
    return this._value;
  }

  set value(v: number) {
    this._value = v;
    this.render();
  }

  private tickLength: number;
  private tickWidth: number;
  private tickPadding: number;
  private indicatorWidth: number;
  private readonly arcLength: number;
  private readonly startRadian: number;
  private readonly endRadian: number;

  public color1 = '#5b79f1';
  public color2 = '#29ffc6';

  private fontColor1 = '#fff';
  // private fontColor2 = '#a0a7e2';
  private axisFontColor = '#696cab';

  private tickColor1 = '#545fab';
  private tickColor2 = '#696cab';

  private indicatorColor = '#b42531';
  private indicatorBaseColor = '#e4e5ed';
  private devicePixelRatio = window.devicePixelRatio || 1;

  public get width() {
    return this.canvas.width;
  }

  public set width(width) {
    this.canvas.width = width * this.devicePixelRatio;
    this.canvas.style.width = width + 'px';
  }

  public get height() {
    return this.canvas.height;
  }

  public set height(height) {
    this.canvas.height = height * this.devicePixelRatio;
    this.canvas.style.height = height + 'px';
  }

  constructor(
    private container = document.body,
    private isSafari: boolean,
    { background, foreground, min = 0, max = 100 }: any = {
      min: 0,
      max: 100,
    },
  ) {
    this.canvas = document.createElement('canvas');
    container.prepend(this.canvas);
    this.width = 50;
    this.height = 50;
    this.min = min;
    this.max = max;
    this.ctx = this.canvas.getContext('2d')!;
    this.arcLength = 2 * Math.PI * 0.65;
    this.startRadian =
      -Math.PI - Math.PI / 2 + (2 * Math.PI - this.arcLength) / 2;
    this.endRadian = Math.PI / 2 - (2 * Math.PI - this.arcLength) / 2;
    this.background = background || '#121224';
    this.foreground = foreground || '#40e87b';
    this.render();
  }

  private draw() {
    const ctx = this.ctx;
    const radius = this.radius - this.thickness / 2;
    ctx.save();
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.translate(this.width / 2, this.height / 2 / 0.84);
    ctx.scale(this.devicePixelRatio, this.devicePixelRatio);
    ctx.lineWidth = this.thickness;
    ctx.lineCap = 'round';
    ctx.strokeStyle = this.background;
    ctx.beginPath();
    ctx.arc(0, 0, radius, this.startRadian, this.endRadian);
    ctx.stroke();
    const gradient = ctx.createConicGradient(
      this.isSafari ? Math.PI : Math.PI / 2,
      0,
      0,
    );
    gradient.addColorStop(0.2, this.color1);
    gradient.addColorStop(0.8, this.color2);
    ctx.strokeStyle = gradient;
    ctx.beginPath();
    ctx.arc(
      0,
      0,
      radius,
      this.startRadian,
      this.startRadian + this.percent * this.arcLength,
    );
    ctx.stroke();
    ctx.font = `bold ${Math.round(
      (this.size / 200) * 32,
    )}px -apple-system, Microsoft Yahei`;
    ctx.fillStyle = this.fontColor1;
    ctx.textBaseline = 'top';
    ctx.textAlign = 'center';
    ctx.fillText(
      `${(+this.value).toFixed(1)} `,
      0,
      radius * Math.sin(this.endRadian) * 1.75,
    );
    ctx.font = `${Math.round(
      (this.size / 200) * 12,
    )}px -apple-system, Microsoft Yahei`;
    ctx.fillStyle = this.axisFontColor;
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'center';
    ctx.fillText(
      this.min + '',
      -radius * Math.cos(this.endRadian),
      1.5 * radius * Math.sin(this.endRadian),
    );
    ctx.fillText(
      this.max + '',
      radius * Math.cos(this.endRadian),
      1.5 * radius * Math.sin(this.endRadian),
    );
    ctx.restore();
  }

  private drawIndicator() {
    const ctx = this.ctx;
    const radius = (this.radius - this.thickness) * 0.75;
    ctx.save();
    ctx.translate(this.width / 2, this.height / 2 / 0.84);
    ctx.scale(this.devicePixelRatio, this.devicePixelRatio);
    ctx.rotate((this.percent - 0.5) * this.arcLength);
    ctx.fillStyle = this.indicatorBaseColor;
    ctx.beginPath();
    ctx.arc(0, 0, this.indicatorWidth, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = this.indicatorColor;
    ctx.beginPath();
    ctx.arc(0, 0, this.indicatorWidth / 2, 0, Math.PI);
    ctx.lineTo(-this.indicatorWidth / 6, -radius);
    ctx.arc(0, -radius, this.indicatorWidth / 6, -Math.PI, 0);
    ctx.lineTo(this.indicatorWidth / 2, 0);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = this.indicatorBaseColor;
    ctx.beginPath();
    ctx.arc(0, 0, this.indicatorWidth / 6, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  private drawTicks() {
    const ctx = this.ctx;
    const radius = this.radius - this.thickness - this.tickPadding;
    const num = 30;
    for (let index = 0; index <= num; index++) {
      ctx.save();
      ctx.translate(this.width / 2, this.height / 2 / 0.84);
      ctx.scale(this.devicePixelRatio, this.devicePixelRatio);
      ctx.rotate((this.arcLength / num) * index + this.startRadian);
      ctx.beginPath();
      ctx.moveTo(radius, 0);
      if (index % 3 === 0) {
        ctx.lineWidth = this.tickWidth;
        ctx.strokeStyle = this.tickColor1;
        ctx.lineTo(radius - this.tickLength, 0);
      } else {
        ctx.lineWidth = this.tickWidth * 0.7;
        ctx.strokeStyle = this.tickColor2;
        ctx.lineTo(radius - this.tickLength * 0.4, 0);
      }
      ctx.stroke();
      ctx.restore();
    }
  }

  private resize() {
    const size = Math.max(
      Math.min(
        this.container.clientWidth,
        this.container.clientHeight / 0.76 - 30,
      ),
      100,
    );
    if (this.size !== size) {
      this.size = size;
      this.width = size;
      this.height = size * 0.76;
      this.radius = Math.round((size / 2) * 0.9);
      this.thickness = Math.round((size / 300) * 12);
      this.tickLength = Math.round((size / 300) * 10);
      this.tickPadding = Math.round((size / 300) * 8);
      this.tickWidth = Math.round((size / 300) * 3);
      this.indicatorWidth = Math.round((size / 300) * 18);
      // this.render();
    }
    // requestAnimationFrame(() => this.resize());
  }

  public render() {
    this.resize();
    if (this.width > 20) {
      this.draw();
      this.drawTicks();
      this.drawIndicator();
    } else {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }
}

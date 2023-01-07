export class Style {
  [property: string]: any;

  setStyle(styleName: string, styleValue: any) {
    this[styleName] = styleValue;
  }

  setStyles(styles: Record<string, any>) {
    for (const style in styles) {
      if (typeof this[style] !== 'undefined') {
        this[style] = styles[style];
      }
    }
  }

  clone() {}

  export() {
    return JSON.parse(JSON.stringify(this));
  }

  static create(style: object, parent: Style = new Style()): Style {
    const newStyle = Object.create(parent);
    Object.assign(newStyle, style);
    return newStyle;
  }
}

export class Style {
  [property: string]: any;

  setStyle(styleName: string, styleValue: any) {
    this[styleName] = styleName;
  }

  clone() {}

  export() {
    return { ...this };
  }

  static create(style: object, parent: Style = new Style()): Style {
    const newStyle = Object.create(parent);
    Object.assign(newStyle, style);
    return newStyle;
  }
}

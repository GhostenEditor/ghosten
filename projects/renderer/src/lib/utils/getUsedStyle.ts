export function getUsedStyle({
  width,
  height,
  padding,
  margin,
  position,
  float,
  fontSize,
  textAlign,
  color,
  display,
  left,
  right,
  top,
  bottom,
  zIndex,
  justifyContent,
  alignItems,
  flex,
  flexDirection,
  flexGrow,
  flexWrap,
  flexShrink,
  alignContent,
  background,
  fontWeight,
  cursor,
  border,
  overflow,
}: any): [string, string][] {
  const styles: [string, string][] = [];
  if (width && width !== 'auto') {
    styles.push(['width', width]);
  }
  if (height && height !== 'auto') {
    styles.push(['height', height]);
  }
  if (padding && !/^0(px|em|%)*$/.test(padding)) {
    styles.push(['padding', padding]);
  }
  if (margin && !/^0(px|em|%)*$/.test(margin)) {
    styles.push(['margin', margin]);
  }
  if (textAlign) {
    styles.push(['text-align', textAlign]);
  }
  if (color) {
    styles.push(['color', color]);
  }
  if (overflow) {
    styles.push(['overflow', overflow]);
  }
  if (fontWeight) {
    styles.push(['font-weight', fontWeight]);
  }
  if (display) {
    styles.push(['display', display]);
  }
  if (position) {
    styles.push(['position', position]);
  }
  if (left !== '' && left !== undefined) {
    styles.push(['left', left]);
  }
  if (top !== '' && top !== undefined) {
    styles.push(['top', top]);
  }
  if (right !== '' && right !== undefined) {
    styles.push(['right', right]);
  }
  if (bottom !== '' && bottom !== undefined) {
    styles.push(['bottom', bottom]);
  }
  if (fontSize) {
    styles.push(['fontSize', fontSize]);
  }
  if (float) {
    styles.push(['float', float]);
  }
  if (justifyContent) {
    styles.push(['justify-content', justifyContent]);
  }
  if (alignContent) {
    styles.push(['align-content', alignContent]);
  }
  if (alignItems) {
    styles.push(['align-items', alignItems]);
  }
  if (flex !== undefined) {
    styles.push(['flex', flex]);
  }
  if (flexWrap) {
    styles.push(['flex-wrap', flexWrap]);
  }
  if (flexShrink !== undefined) {
    styles.push(['flex-shrink', flexShrink]);
  }
  if (flexDirection) {
    styles.push(['flex-direction', flexDirection]);
  }
  if (flexGrow) {
    styles.push(['flex-grow', flexGrow]);
  }
  if (background) {
    styles.push(['background', background]);
  }
  if (cursor) {
    styles.push(['cursor', cursor]);
  }
  if (zIndex) {
    styles.push(['z-index', zIndex]);
  }
  if (border) {
    if (border.all) {
      styles.push(['border', border.all]);
    }
    if (border.left) {
      styles.push(['border-left', border.left]);
    }
    if (border.top) {
      styles.push(['border-top', border.top]);
    }
    if (border.right) {
      styles.push(['border-right', border.right]);
    }
    if (border.bottom) {
      styles.push(['border-bottom', border.bottom]);
    }
  }
  return styles;
}

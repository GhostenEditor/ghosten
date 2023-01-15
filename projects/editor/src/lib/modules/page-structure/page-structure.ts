const marginColor = 'rgba(255, 139, 15, 0.4)';
const paddingColor = 'rgba(2, 172, 13, 0.25)';
const contentColor = 'rgba(32,189,248,0.4)';

interface Options {
  darkMode?: boolean;
  drawAll?: boolean;
  drawActive?: boolean;
  direction?: 'ltr' | 'rtl';
}

export function drawLayout(
  ctx: CanvasRenderingContext2D,
  container: HTMLElement,
  target: HTMLElement,
  elements: { element: HTMLElement; type: string }[],
  activeElements: { element: HTMLElement; text1: string; text2: string }[] = [],
  options: Options = {},
) {
  const canvas = ctx.canvas;
  const gtPage = target;
  const containerDomRect: DOMRect = container.getBoundingClientRect();
  const borderLeft = container.clientLeft;
  const { clientWidth, clientHeight, scrollLeft, scrollTop } = container;
  if (canvas.width !== clientWidth * devicePixelRatio) {
    canvas.width = clientWidth * devicePixelRatio;
    canvas.style.width = clientWidth + 'px';
  }
  if (canvas.height !== clientHeight * devicePixelRatio) {
    canvas.height = clientHeight * devicePixelRatio;
    canvas.style.height = clientHeight + 'px';
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const matrix = ctx.getTransform();
  if (matrix.a !== devicePixelRatio) {
    ctx.resetTransform();
    ctx.scale(devicePixelRatio, devicePixelRatio);
  }
  if (options.drawAll || options.drawActive) {
    ctx.save();
    ctx.translate(-containerDomRect.left - borderLeft, -containerDomRect.top);
    const labels: { rect: DOMRect; text1: string; text2: string }[] = [];
    if (options.drawActive) {
      ctx.setLineDash([]);
      ctx.lineWidth = 1 / devicePixelRatio;
      activeElements.forEach(({ element, text1, text2 }) => {
        const rect = element.getBoundingClientRect();
        const { left, top, width, height } = rect;
        const { padding, margin } = getComputedStyle(element);
        const { marginRect, paddingRect, contentRect } = getLayout(left, top, width, height, padding, margin);
        ctx.fillStyle = marginColor;
        ctx.fillRect(marginRect[0], marginRect[1], marginRect[2], marginRect[3]);
        ctx.clearRect(paddingRect[0], paddingRect[1], paddingRect[2], paddingRect[3]);
        ctx.fillStyle = paddingColor;
        ctx.fillRect(paddingRect[0], paddingRect[1], paddingRect[2], paddingRect[3]);
        ctx.clearRect(contentRect[0], contentRect[1], contentRect[2], contentRect[3]);
        ctx.fillStyle = contentColor;
        ctx.fillRect(contentRect[0], contentRect[1], contentRect[2], contentRect[3]);
        ctx.strokeStyle = '#06366f';
        ctx.setLineDash([12 / devicePixelRatio, 4 / devicePixelRatio]);
        ctx.strokeRect(marginRect[0], marginRect[1], marginRect[2], marginRect[3]);
        ctx.setLineDash([]);
        labels.push({ rect, text1, text2 });
      });
    }
    if (options.drawAll) {
      ctx.strokeStyle = '#8cb7ff';
      elements.forEach(({ element, type }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          ctx.strokeRect(rect.left, rect.top, rect.width, rect.height);
          if (type === 'slot') {
            ctx.strokeStyle = options.darkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)';
            ctx.lineWidth = 6 / devicePixelRatio;
            ctx.setLineDash([16 / devicePixelRatio, 4 / devicePixelRatio]);
            ctx.strokeRect(
              rect.left + ctx.lineWidth / 2,
              rect.top + ctx.lineWidth / 2,
              rect.width - ctx.lineWidth,
              rect.height - ctx.lineWidth,
            );
            ctx.setLineDash([]);
            ctx.lineWidth = 1 / devicePixelRatio;
            ctx.strokeStyle = '#8cb7ff';
          }
        }
      });
    }
    ctx.font = `normal 12px system-ui,-apple-system,Arial,sans-serif`;
    ctx.textBaseline = 'top';
    labels.forEach(({ rect: { left, right, top, bottom }, text1, text2 }) => {
      const textMetrics1 = ctx.measureText(text1);
      const textMetrics2 = ctx.measureText(text2);

      if (options.direction === 'rtl') {
        ctx.beginPath();
        ctx.rect(right - (textMetrics1.width + 8), top - 16, textMetrics1.width + 8, 16);
        ctx.closePath();
        ctx.strokeStyle = '#8cb7ff';
        ctx.stroke();
        ctx.fillStyle = '#404dff';
        ctx.fill();
        if (text2) {
          ctx.beginPath();
          ctx.rect(right - (textMetrics2.width + 8), bottom, textMetrics2.width + 8, 16);
          ctx.closePath();
          ctx.strokeStyle = '#ff8cfd';
          ctx.stroke();
          ctx.fillStyle = '#ff0cae';
          ctx.fill();
        }

        ctx.fillStyle = '#ffffff';
        ctx.fillText(text1, right - 4, top - 14);
        if (text2) ctx.fillText(text2, right - 4, bottom + 2);
      } else {
        ctx.beginPath();
        ctx.rect(left, top - 16, textMetrics1.width + 8, 16);
        ctx.closePath();
        ctx.strokeStyle = '#8cb7ff';
        ctx.stroke();
        ctx.fillStyle = '#404dff';
        ctx.fill();
        if (text2) {
          ctx.beginPath();
          ctx.rect(left, bottom, textMetrics2.width + 8, 16);
          ctx.closePath();
          ctx.strokeStyle = '#ff8cfd';
          ctx.stroke();
          ctx.fillStyle = '#ff0cae';
          ctx.fill();
        }
        ctx.fillStyle = '#ffffff';
        ctx.fillText(text1, left + 4, top - 14);
        if (text2) ctx.fillText(text2, left + 4, bottom + 2);
      }
    });
    ctx.restore();
  }

  {
    const gtPageMatrix = new WebKitCSSMatrix(gtPage.style.getPropertyValue('transform'));
    ctx.font = 'normal 8px system-ui,-apple-system,Arial,sans-serif';
    if (options.darkMode) {
      ctx.strokeStyle = '#999';
      ctx.fillStyle = '#999';
    } else {
      ctx.strokeStyle = '#333';
      ctx.fillStyle = '#333';
    }
    const scale = gtPageMatrix.a;
    const translateX = gtPageMatrix.e - scrollLeft;
    const translateY = gtPageMatrix.f - scrollTop;
    drawAxis(ctx, clientWidth, translateX, scale);
    ctx.save();
    ctx.rotate((Math.PI / 180) * 90);
    drawAxis(ctx, clientHeight, translateY, scale, -1);
    ctx.restore();
    ctx.globalAlpha = 1;
  }
}

export function getLayout(left: number, top: number, width: number, height: number, padding: string, margin: string) {
  const paddings = padding ? padding.split(' ').map(p => parseInt(p, 10)) : [0];
  const margins = margin ? margin.split(' ').map(m => parseInt(m, 10)) : [0];
  let paddingTop: number;
  let paddingRight: number;
  let paddingBottom: number;
  let paddingLeft: number;
  let marginTop: number;
  let marginRight: number;
  let marginBottom: number;
  let marginLeft: number;
  switch (paddings.length) {
    case 1:
      paddingTop = paddingRight = paddingBottom = paddingLeft = paddings[0];
      break;
    case 2:
      paddingTop = paddingBottom = paddings[0];
      paddingLeft = paddingRight = paddings[1];
      break;
    case 3:
      paddingTop = paddings[0];
      paddingLeft = paddingRight = paddings[1];
      paddingBottom = paddings[2];
      break;
    case 4:
      paddingTop = paddings[0];
      paddingRight = paddings[1];
      paddingBottom = paddings[2];
      paddingLeft = paddings[3];
      break;
    default:
      paddingTop = paddingRight = paddingBottom = paddingLeft = 0;
  }
  switch (margins.length) {
    case 1:
      marginTop = marginRight = marginBottom = marginLeft = margins[0];
      break;
    case 2:
      marginTop = marginBottom = margins[0];
      marginLeft = marginRight = margins[1];
      break;
    case 3:
      marginTop = margins[0];
      marginLeft = marginRight = margins[1];
      marginBottom = margins[2];
      break;
    case 4:
      marginTop = margins[0];
      marginRight = margins[1];
      marginBottom = margins[2];
      marginLeft = margins[3];
      break;
    default:
      marginTop = marginRight = marginBottom = marginLeft = 0;
  }

  const marginRect = [
    left - marginLeft,
    top - marginTop,
    width + marginLeft + marginRight,
    height + marginTop + marginBottom,
  ];
  const paddingRect = [left, top, width, height];
  const contentRect = [
    left + paddingLeft,
    top + paddingTop,
    width - paddingLeft - paddingRight,
    height - paddingTop - paddingBottom,
  ];
  return { marginRect, paddingRect, contentRect };
}

export function drawMarkLine(ctx: CanvasRenderingContext2D, type: 'long' | 'medium' | 'short', mark: number, sign = 1) {
  ctx.beginPath();
  switch (type) {
    case 'long':
      ctx.moveTo(mark, 0);
      ctx.lineTo(mark, 10 * sign);
      ctx.globalAlpha = 1;
      break;
    case 'medium':
      ctx.moveTo(mark, 0);
      ctx.lineTo(mark, 8 * sign);
      ctx.globalAlpha = 0.6;
      break;
    case 'short':
      ctx.moveTo(mark, 0);
      ctx.lineTo(mark, 5 * sign);
      ctx.globalAlpha = 0.3;
  }
  ctx.closePath();
  ctx.stroke();
}

export function drawAxis(ctx: CanvasRenderingContext2D, size: number, translate: number, scale: number, sign = 1) {
  const markGap = Math.ceil(5 / scale);
  const markRange = [
    Math.floor(-translate / markGap / scale) * markGap,
    Math.ceil((size - translate) / markGap / scale) * markGap,
  ];
  for (let index = markRange[0]; index <= markRange[1]; index += markGap) {
    const mark = index * scale + translate;
    if (index % (markGap * 20) === 0) {
      drawMarkLine(ctx, 'long', mark, sign);
      ctx.fillText('' + index, mark + 5, 20 * sign);
    } else if (index % (markGap * 10) === 0) {
      drawMarkLine(ctx, 'medium', mark, sign);
    } else if (index % markGap === 0) {
      drawMarkLine(ctx, 'short', mark, sign);
    }
  }
}

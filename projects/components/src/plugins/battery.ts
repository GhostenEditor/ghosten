export function battery(
  context: CanvasRenderingContext2D,
  value = 0,
  max = 100,
  min = 0,
  direction: 'horizontal' | 'vertical' = 'vertical',
) {
  const canvas = context.canvas;
  canvas.width = canvas.parentElement!.clientWidth;
  canvas.height = canvas.parentElement!.clientHeight;
  let totalCount =
    direction === 'vertical'
      ? Math.floor(canvas.height / Math.min(canvas.height * 0.02, canvas.width))
      : Math.floor(canvas.width / Math.min(canvas.width * 0.02, canvas.height));
  totalCount = Math.max(Math.min(totalCount, 30), 1);
  const itemTotalHeight = (direction === 'vertical' ? canvas.height : canvas.width) / totalCount;
  const itemHeight = itemTotalHeight * 0.6;
  const itemWidth = Math.min(itemHeight * 5, canvas.width * 0.6, canvas.height * 0.6);
  const itemGutter = itemTotalHeight * 0.4;
  const itemRadius = Math.min(itemHeight, itemWidth) * 0.5;
  const foreground = '#0cc41a';
  const background = '#121224';

  const percent = value / (max - min);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);
  if (direction === 'horizontal') {
    context.rotate(Math.PI / 2);
  }
  context.scale(0.9, -0.9);
  if (direction === 'vertical') {
    context.translate(-itemWidth / 2, -canvas.height / 2);
  } else {
    context.translate(-itemWidth / 2, -canvas.width / 2);
  }

  context.fillStyle = background;
  for (let index = 0; index < totalCount; index++) {
    drawRoundRect(context, itemWidth, itemHeight, itemRadius, index * itemTotalHeight);
  }
  context.fillStyle = foreground;
  context.shadowBlur = itemGutter * 2;
  context.shadowColor = foreground;
  for (let index = 0; index < Math.round(percent * totalCount); index++) {
    drawRoundRect(context, itemWidth, itemHeight, itemRadius, index * itemTotalHeight);
  }
  context.restore();
  context.save();
  if (direction === 'vertical') {
    context.textAlign = 'center';
    context.font = 'bold 16px Kanit';
    context.fillStyle = foreground;
    context.textBaseline = 'top';
    context.textBaseline = 'bottom';
  } else {
    context.textAlign = 'right';
    context.font = 'bold 12px Kanit';
    context.fillStyle = foreground;
    context.textBaseline = 'middle';
    context.textBaseline = 'middle';
    context.textAlign = 'left';
  }
  context.restore();
}

function drawRoundRect(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  radius: number,
  offset: number,
) {
  context.beginPath();
  context.arc(radius, offset + radius, radius, Math.PI, (Math.PI / 2) * 3);
  context.lineTo(width - radius, offset);
  context.arc(width - radius, offset + radius, radius, -Math.PI / 2, 0);
  context.lineTo(width, offset + height - radius);
  context.arc(width - radius, offset + height - radius, radius, 0, Math.PI / 2);
  context.lineTo(radius, offset + height);
  context.arc(radius, offset + height - radius, radius, Math.PI / 2, Math.PI);
  context.lineTo(0, offset + radius);
  context.closePath();
  context.fill();
}

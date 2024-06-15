/**
 * HWB 转 RGB
 * @param h 色相
 * @param w 白度百分比 ('50%')
 * @param b 黑度百分比 ('20%')
 * @returns RGB color values
 */
export const hwbToRgb = (
  h: number,
  w: string | number,
  b: string | number,
): { r: number; g: number; b: number } => {
  // 如果 w 和 b 是数字，则将它们转换为字符串
  const white = typeof w === "number" ? w.toString() : w;
  const black = typeof b === "number" ? b.toString() : b;
  
  // 将输入的字符串 white 和 black 转换为小数
  const whiteFraction = parseFloat(white) / 100;
  const blackFraction = parseFloat(black) / 100;

  // 计算色彩饱和度 chroma
  const chroma = 1 - whiteFraction - blackFraction;

  // 如果 chroma 为 0，则颜色为灰度，直接基于白度和黑度计算 RGB
  if (chroma === 0) {
    const grey = (1 - blackFraction) * 255;
    return { r: Math.round(grey), g: Math.round(grey), b: Math.round(grey) };
  }

  // 将 H 从度数转换为区间 [0, 360)
  const hNormalized = ((h % 360) + 360) % 360;
  const hueSegment = hNormalized / 60;
  const secondaryComponent = chroma * (1 - Math.abs((hueSegment % 2) - 1));
  let red = 0,
    green = 0,
    blue = 0;

  if (hueSegment >= 0 && hueSegment < 1) {
    [red, green, blue] = [chroma, secondaryComponent, 0];
  } else if (hueSegment >= 1 && hueSegment < 2) {
    [red, green, blue] = [secondaryComponent, chroma, 0];
  } else if (hueSegment >= 2 && hueSegment < 3) {
    [red, green, blue] = [0, chroma, secondaryComponent];
  } else if (hueSegment >= 3 && hueSegment < 4) {
    [red, green, blue] = [0, secondaryComponent, chroma];
  } else if (hueSegment >= 4 && hueSegment < 5) {
    [red, green, blue] = [secondaryComponent, 0, chroma];
  } else if (hueSegment >= 5 && hueSegment < 6) {
    [red, green, blue] = [chroma, 0, secondaryComponent];
  }

  // 考虑白度和黑度，调整 RGB 值
  const matchValue = 1 - chroma - blackFraction;
  red = Math.round((red + matchValue) * 255);
  green = Math.round((green + matchValue) * 255);
  blue = Math.round((blue + matchValue) * 255);

  return { r: red, g: green, b: blue };
};

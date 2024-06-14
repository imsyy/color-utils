import { hexToRgb } from "./hexToRgb";

/**
 * 计算两个颜色之间的差异
 * @param hex1 - 第一个十六进制颜色值
 * @param hex2 - 第二个十六进制颜色值
 * @returns 颜色差异值
 */
export const getColorDifference = (hex1: string, hex2: string): number => {
  const color1 = hexToRgb(hex1)!;
  const color2 = hexToRgb(hex2)!;

  const rDiff = Math.pow(color1.r - color2.r, 2);
  const gDiff = Math.pow(color1.g - color2.g, 2);
  const bDiff = Math.pow(color1.b - color2.b, 2);

  return Math.sqrt(rDiff + gDiff + bDiff);
};

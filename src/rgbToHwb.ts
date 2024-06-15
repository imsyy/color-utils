import { rgbToHsv } from "./rgbToHsv";

/**
 * RGB 转 HWB
 * @param r - 红色分量 (0-255)
 * @param g - 绿色分量 (0-255)
 * @param b - 蓝色分量 (0-255)
 * @returns HWB color values
 */
export const rgbToHwb = (r: number, g: number, b: number): { h: number; w: string; bk: string } => {
  const hsv = rgbToHsv(r, g, b);
  const w = Math.min(r, g, b) / 255;
  const bk = 1 - Math.max(r, g, b) / 255;

  const h = Math.round(hsv.h);
  const wPercent = Math.round(w * 100) + "%";
  const bkPercent = Math.round(bk * 100) + "%";

  return {
    h,
    w: wPercent,
    bk: bkPercent,
  };
};

/**
 * RGB 转 CMYK
 * @param r - 红色分量 (0-255)
 * @param g - 绿色分量 (0-255)
 * @param b - 蓝色分量 (0-255)
 * @returns CMYK对象 {c, m, y, k}
 */
export const rgbToCmyk = (
  r: number,
  g: number,
  b: number
): { c: number; m: number; y: number; k: number } => {
  const rRatio = r / 255;
  const gRatio = g / 255;
  const bRatio = b / 255;

  const k = 1 - Math.max(rRatio, gRatio, bRatio);
  const c = (1 - rRatio - k) / (1 - k) || 0;
  const m = (1 - gRatio - k) / (1 - k) || 0;
  const y = (1 - bRatio - k) / (1 - k) || 0;

  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100),
  };
};

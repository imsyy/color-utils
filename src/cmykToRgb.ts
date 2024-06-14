/**
 * CMYK 转 RGB
 * @param c - 青色分量 (0-100)
 * @param m - 洋红色分量 (0-100)
 * @param y - 黄色分量 (0-100)
 * @param k - 黑色分量 (0-100)
 * @returns RGB对象 {r, g, b}
 */
export const cmykToRgb = (
  c: number,
  m: number,
  y: number,
  k: number
): { r: number; g: number; b: number } => {
  const r = 255 * (1 - c / 100) * (1 - k / 100);
  const g = 255 * (1 - m / 100) * (1 - k / 100);
  const b = 255 * (1 - y / 100) * (1 - k / 100);

  return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
};

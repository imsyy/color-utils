/**
 * 调整颜色亮度
 * @param hex - 十六进制颜色值
 * @param percent - 亮度调整百分比（正数增加亮度，负数减少亮度）
 * @returns 调整后的十六进制颜色值
 */
export const adjustBrightness = (hex: string, percent: number): string => {
  const sanitizedHex = hex.replace(/^#/, "");
  let num = parseInt(sanitizedHex, 16);

  let r = (num >> 16) + percent;
  r = Math.max(0, Math.min(255, r));

  let g = ((num >> 8) & 0x00ff) + percent;
  g = Math.max(0, Math.min(255, g));

  let b = (num & 0x0000ff) + percent;
  b = Math.max(0, Math.min(255, b));

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

/**
 * Hex 转 RGB
 * @param hex Hex 字符串 (#RRGGBB)
 * @returns RGB 对象 { r: number, g: number, b: number }
 */
export const hexToRgb = (
  hex: string
): { r: number; g: number; b: number } | null => {
  // 移除 # 号
  hex = hex.startsWith("#") ? hex.slice(1) : hex;

  // 处理3位简写格式
  if (hex.length === 3) {
    hex = Array.from(hex).reduce((str, x) => str + x + x, "");
  }

  // 颜色值应该是6位长的字符串
  if (hex.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(hex)) {
    return null;
  }

  // 转换为RGB值
  const values = hex.match(/.{2}/g)!.map((x) => parseInt(x, 16));

  return { r: values[0], g: values[1], b: values[2] };
};

/**
 * Hex 转 RGBA
 * @param hex Hex 字符串 (#RRGGBBFF)
 * @returns RGB 对象 { r: number, g: number, b: number }
 */
export const hexToRgba = (
  hex: string
): { r: number; g: number; b: number; a: number } | null => {
  // 移除 # 号
  hex = hex.startsWith("#") ? hex.slice(1) : hex;

  // 处理3位简写格式
  if (hex.length === 3) {
    hex = Array.from(hex).reduce((str, x) => str + x + x, "");
  }
  // 检查是否是6位或8位hex字符串
  if (![6, 8].includes(hex.length) || !/^[0-9A-Fa-f]{6,8}$/.test(hex)) {
    return null;
  }

  // 转换为RGBA值，缺少alpha值时默认1
  const values = hex.match(/.{2}/g)!.map((x) => parseInt(x, 16));
  const alpha = values.length === 4 ? values[3] / 255 : 1;

  return { r: values[0], g: values[1], b: values[2], a: alpha };
};

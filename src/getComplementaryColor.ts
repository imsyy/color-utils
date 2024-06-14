/**
 * 获取颜色的反色
 * @param hex - 十六进制颜色值
 * @returns 反色的十六进制颜色值
 */
export const getComplementaryColor = (hex: string): string => {
  // 移除 # 号
  const sanitizedHex = hex.replace(/^#/, "");

  // 如果是3位简写格式，将其转换为6位格式
  const fullHex =
    sanitizedHex.length === 3
      ? Array.from(sanitizedHex).reduce((str, x) => str + x + x, "")
      : sanitizedHex;

  let num = parseInt(fullHex, 16);

  // 获取其反色
  num = 0xffffff ^ num;

  return `#${num.toString(16).padStart(6, "0").toUpperCase()}`;
};

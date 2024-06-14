/**
 * 随机生成 RGB 颜色
 * @returns RGB 对象 { r: number, g: number, b: number }
 */
export const getRandomColor = (): { r: number; g: number; b: number } => {
  const randomValue = () => Math.floor(Math.random() * 256);
  return {
    r: randomValue(),
    g: randomValue(),
    b: randomValue(),
  };
};

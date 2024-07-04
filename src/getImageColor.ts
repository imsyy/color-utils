import ColorThief from "colorthief";

type ColorType = {
  color: [number, number, number];
  palette: Array<[number, number, number]>;
};

/**
 * 从图片获取主色
 * @param img - 图片链接或图片实例
 * @returns RGB 对象 { r: number, g: number, b: number }
 */
export const getImageColor = async (
  img: string | HTMLImageElement,
  quality: number = 5,
): Promise<ColorType | null> => {
  let imgDom: HTMLImageElement | null = null;
  const colorThief = new ColorThief();
  try {
    if (typeof img === "string") {
      if (!img) {
        throw new Error("Image URL is empty");
      }
      imgDom = new Image();
      imgDom.crossOrigin = "Anonymous";
      imgDom.src = img;
      await new Promise((resolve, reject) => {
        imgDom!.onload = () => resolve(true);
        imgDom!.onerror = (err) => reject(err);
      });
    } else if (img instanceof HTMLImageElement) {
      imgDom = img;
    } else {
      throw new Error("Invalid image input");
    }
    // 若未加载完成
    if (!imgDom.complete || !imgDom.naturalWidth) {
      throw new Error("Image not loaded properly");
    }
    // 获取颜色
    const color = colorThief.getColor(imgDom, quality);
    const palette = colorThief.getPalette(imgDom, 10, quality);

    if (!color || !palette) {
      throw new Error("Failed to retrieve color or palette");
    }

    return { color, palette };
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    if (typeof img === "string" && imgDom) {
      // 释放内存
      imgDom.src = "";
      imgDom.remove();
      imgDom = null;
    }
  }
};

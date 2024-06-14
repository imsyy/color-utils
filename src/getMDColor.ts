/**
 * 获取配色方案
 * Powed by https://github.com/zdhxiong/mdui
 */

import {
  blueFromArgb,
  greenFromArgb,
  redFromArgb,
  argbFromHex,
  Scheme,
  CorePalette,
} from "@material/material-color-utilities";
import { rgbToHex } from "./rgbToHex";
import { rgbToHsl } from "./rgbToHsl";

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

type Option = {
  // 输出类型
  type: "hex" | "rgb" | "hsl";
};

const rgbFromArgb = (source: number): RGB => {
  const red = redFromArgb(source);
  const green = greenFromArgb(source);
  const blue = blueFromArgb(source);

  return { r: red, g: green, b: blue };
};

const convertColors = (
  schemes: Record<
    "light" | "dark",
    Record<string, number | string | RGB | HSL>
  >,
  type: "hex" | "rgb" | "hsl"
) => {
  for (const schemeKey in schemes) {
    if (schemes.hasOwnProperty(schemeKey)) {
      const scheme = schemes[schemeKey as "light" | "dark"];
      for (const key in scheme) {
        if (scheme.hasOwnProperty(key)) {
          const value = scheme[key];
          if (typeof value === "number") {
            const rgb = rgbFromArgb(value);
            if (type === "rgb") {
              scheme[key] = rgb;
            } else if (type === "hsl") {
              scheme[key] = rgbToHsl(rgb.r, rgb.g, rgb.b);
            } else if (type === "hex") {
              scheme[key] = rgbToHex(rgb.r, rgb.g, rgb.b);
            }
          }
        }
      }
    }
  }
};

/**
 * 获取 Material Design 配色方案
 * @param color - Hex 字符串 (#000000)
 */
export const getMDColor = (color: string, option: Option = { type: "rgb" }) => {
  const source = argbFromHex(color);
  const { type } = option;
  // 生成配色方案
  const schemes: Record<
    "light" | "dark",
    Record<string, number | string | RGB>
  > = {
    light: Scheme.light(source).toJSON(),
    dark: Scheme.dark(source).toJSON(),
  };
  const palette = CorePalette.of(source);

  // todo 目前 @material/material-color-utilities 库缺失了 8 种颜色，等官方库加上后，可以删除这段代码
  // https://github.com/material-foundation/material-color-utilities/issues/98
  Object.assign(schemes.light, {
    "surface-dim": palette.n1.tone(87),
    "surface-bright": palette.n1.tone(98),
    "surface-container-lowest": palette.n1.tone(100),
    "surface-container-low": palette.n1.tone(96),
    "surface-container": palette.n1.tone(94),
    "surface-container-high": palette.n1.tone(92),
    "surface-container-highest": palette.n1.tone(90),
    "surface-tint-color": schemes.light.primary,
  });
  Object.assign(schemes.dark, {
    "surface-dim": palette.n1.tone(6),
    "surface-bright": palette.n1.tone(24),
    "surface-container-lowest": palette.n1.tone(4),
    "surface-container-low": palette.n1.tone(10),
    "surface-container": palette.n1.tone(12),
    "surface-container-high": palette.n1.tone(17),
    "surface-container-highest": palette.n1.tone(22),
    "surface-tint-color": schemes.dark.primary,
  });

  // 转换颜色
  convertColors(schemes, type);

  return schemes;
};

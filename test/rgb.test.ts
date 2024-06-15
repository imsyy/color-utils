import { rgbToHex } from "../src/rgbToHex";
import { rgbToHsl } from "../src/rgbToHsl";
import { rgbToCmyk } from "../src/rgbToCmyk";
import { rgbToHsv } from "../src/rgbToHsv";
import { rgbToHwb } from "../src/rgbToHwb";

// rgbToHex
describe("rgbToHex", () => {
  it("should convert RGB (255, 255, 255) to Hex #FFFFFF", () => {
    expect(rgbToHex(255, 255, 255)).toBe("#FFFFFF");
  });

  it("should convert RGB (255, 0, 0) to Hex #FF0000", () => {
    expect(rgbToHex(255, 0, 0)).toBe("#FF0000");
  });

  it("should convert RGB (0, 255, 0) to Hex #00FF00", () => {
    expect(rgbToHex(0, 255, 0)).toBe("#00FF00");
  });

  it("should convert RGB (0, 0, 255) to Hex #0000FF", () => {
    expect(rgbToHex(0, 0, 255)).toBe("#0000FF");
  });

  it("should convert RGB (255, 255, 0) to Hex #FFFF00", () => {
    expect(rgbToHex(255, 255, 0)).toBe("#FFFF00");
  });

  it("should convert RGB (0, 255, 255) to Hex #00FFFF", () => {
    expect(rgbToHex(0, 255, 255)).toBe("#00FFFF");
  });

  it("should convert RGB (255, 0, 255) to Hex #FF00FF", () => {
    expect(rgbToHex(255, 0, 255)).toBe("#FF00FF");
  });

  it("should convert RGB (0, 0, 0) to Hex #000000", () => {
    expect(rgbToHex(0, 0, 0)).toBe("#000000");
  });

  it("should convert RGB (128, 128, 128) to Hex #808080", () => {
    expect(rgbToHex(128, 128, 128)).toBe("#808080");
  });

  it("should convert RGB (75, 0, 130) to Hex #4B0082", () => {
    expect(rgbToHex(75, 0, 130)).toBe("#4B0082");
  });
});

// rgbToCmyk
describe("rgbToCmyk", () => {
  it("should convert RGB (255, 255, 255) to CMYK (0, 0, 0, 0)", () => {
    expect(rgbToCmyk(255, 255, 255)).toEqual({ c: 0, m: 0, y: 0, k: 0 });
  });

  it("should convert RGB (255, 0, 0) to CMYK (0, 100, 100, 0)", () => {
    expect(rgbToCmyk(255, 0, 0)).toEqual({ c: 0, m: 100, y: 100, k: 0 });
  });

  it("should convert RGB (0, 255, 0) to CMYK (100, 0, 100, 0)", () => {
    expect(rgbToCmyk(0, 255, 0)).toEqual({ c: 100, m: 0, y: 100, k: 0 });
  });

  it("should convert RGB (0, 0, 255) to CMYK (100, 100, 0, 0)", () => {
    expect(rgbToCmyk(0, 0, 255)).toEqual({ c: 100, m: 100, y: 0, k: 0 });
  });

  it("should convert RGB (255, 255, 0) to CMYK (0, 0, 100, 0)", () => {
    expect(rgbToCmyk(255, 255, 0)).toEqual({ c: 0, m: 0, y: 100, k: 0 });
  });

  it("should convert RGB (0, 255, 255) to CMYK (100, 0, 0, 0)", () => {
    expect(rgbToCmyk(0, 255, 255)).toEqual({ c: 100, m: 0, y: 0, k: 0 });
  });

  it("should convert RGB (255, 0, 255) to CMYK (0, 100, 0, 0)", () => {
    expect(rgbToCmyk(255, 0, 255)).toEqual({ c: 0, m: 100, y: 0, k: 0 });
  });

  it("should convert RGB (0, 0, 0) to CMYK (0, 0, 0, 100)", () => {
    expect(rgbToCmyk(0, 0, 0)).toEqual({ c: 0, m: 0, y: 0, k: 100 });
  });

  it("should convert RGB (128, 128, 128) to CMYK (0, 0, 0, 50)", () => {
    expect(rgbToCmyk(128, 128, 128)).toEqual({ c: 0, m: 0, y: 0, k: 50 });
  });

  it("should convert RGB (75, 0, 130) to CMYK (42, 100, 0, 49)", () => {
    expect(rgbToCmyk(75, 0, 130)).toEqual({ c: 42, m: 100, y: 0, k: 49 });
  });
});

// rgbToHsl
describe("rgbToHsl", () => {
  it("should convert RGB (255, 255, 255) to HSL (0, 0, 100)", () => {
    expect(rgbToHsl(255, 255, 255)).toEqual({ h: 0, s: 0, l: 100 });
  });

  it("should convert RGB (255, 0, 0) to HSL (0, 100, 50)", () => {
    expect(rgbToHsl(255, 0, 0)).toEqual({ h: 0, s: 100, l: 50 });
  });

  it("should convert RGB (0, 255, 0) to HSL (120, 100, 50)", () => {
    expect(rgbToHsl(0, 255, 0)).toEqual({ h: 120, s: 100, l: 50 });
  });

  it("should convert RGB (0, 0, 255) to HSL (240, 100, 50)", () => {
    expect(rgbToHsl(0, 0, 255)).toEqual({ h: 240, s: 100, l: 50 });
  });

  it("should convert RGB (255, 255, 0) to HSL (60, 100, 50)", () => {
    expect(rgbToHsl(255, 255, 0)).toEqual({ h: 60, s: 100, l: 50 });
  });

  it("should convert RGB (0, 255, 255) to HSL (180, 100, 50)", () => {
    expect(rgbToHsl(0, 255, 255)).toEqual({ h: 180, s: 100, l: 50 });
  });

  it("should convert RGB (255, 0, 255) to HSL (300, 100, 50)", () => {
    expect(rgbToHsl(255, 0, 255)).toEqual({ h: 300, s: 100, l: 50 });
  });

  it("should convert RGB (0, 0, 0) to HSL (0, 0, 0)", () => {
    expect(rgbToHsl(0, 0, 0)).toEqual({ h: 0, s: 0, l: 0 });
  });

  it("should convert RGB (128, 128, 128) to HSL (0, 0, 50)", () => {
    expect(rgbToHsl(128, 128, 128)).toEqual({ h: 0, s: 0, l: 50 });
  });

  it("should convert RGB (75, 0, 130) to HSL (275, 100, 25)", () => {
    expect(rgbToHsl(75, 0, 130)).toEqual({ h: 275, s: 100, l: 25 });
  });
});

// rgbToHsv
describe("rgbToHsv", () => {
  it("should convert black RGB (0, 0, 0) to HSV", () => {
    expect(rgbToHsv(0, 0, 0)).toEqual({ h: 0, s: 0, v: 0 });
  });

  it("should convert white RGB (255, 255, 255) to HSV", () => {
    expect(rgbToHsv(255, 255, 255)).toEqual({
      h: 0,
      s: 0,
      v: 100,
    });
  });

  it("should convert red RGB (255, 0, 0) to HSV", () => {
    expect(rgbToHsv(255, 0, 0)).toEqual({ h: 0, s: 100, v: 100 });
  });

  it("should convert green RGB (0, 255, 0) to HSV", () => {
    expect(rgbToHsv(0, 255, 0)).toEqual({
      h: 120,
      s: 100,
      v: 100,
    });
  });

  it("should convert blue RGB (0, 0, 255) to HSV", () => {
    expect(rgbToHsv(0, 0, 255)).toEqual({
      h: 240,
      s: 100,
      v: 100,
    });
  });

  it("should convert yellow RGB (255, 255, 0) to HSV", () => {
    expect(rgbToHsv(255, 255, 0)).toEqual({
      h: 60,
      s: 100,
      v: 100,
    });
  });

  it("should convert cyan RGB (0, 255, 255) to HSV", () => {
    expect(rgbToHsv(0, 255, 255)).toEqual({
      h: 180,
      s: 100,
      v: 100,
    });
  });

  it("should convert magenta RGB (255, 0, 255) to HSV", () => {
    expect(rgbToHsv(255, 0, 255)).toEqual({
      h: 300,
      s: 100,
      v: 100,
    });
  });

  it("should convert gray RGB (128, 128, 128) to HSV", () => {
    expect(rgbToHsv(128, 128, 128)).toEqual({ h: 0, s: 0, v: 50 });
  });

  it("should convert a mid tone RGB (128, 0, 255) to HSV", () => {
    expect(rgbToHsv(128, 0, 255)).toEqual({
      h: 270,
      s: 100,
      v: 100,
    });
  });
});

// rgbToHwb
describe("rgbToHwb", () => {
  it("should convert black correctly", () => {
    expect(rgbToHwb(0, 0, 0)).toEqual({ h: 0, w: "0%", bk: "100%" });
  });

  it("should convert white correctly", () => {
    expect(rgbToHwb(255, 255, 255)).toEqual({ h: 0, w: "100%", bk: "0%" });
  });

  it("should convert red correctly", () => {
    expect(rgbToHwb(255, 0, 0)).toEqual({ h: 0, w: "0%", bk: "0%" });
  });

  it("should convert green correctly", () => {
    expect(rgbToHwb(0, 255, 0)).toEqual({ h: 120, w: "0%", bk: "0%" });
  });

  it("should convert blue correctly", () => {
    expect(rgbToHwb(0, 0, 255)).toEqual({ h: 240, w: "0%", bk: "0%" });
  });

  it("should convert grey correctly", () => {
    expect(rgbToHwb(128, 128, 128)).toEqual({ h: 0, w: "50%", bk: "50%" });
  });

  it("should convert yellow correctly", () => {
    expect(rgbToHwb(255, 255, 0)).toEqual({ h: 60, w: "0%", bk: "0%" });
  });

  it("should convert cyan correctly", () => {
    expect(rgbToHwb(0, 255, 255)).toEqual({ h: 180, w: "0%", bk: "0%" });
  });

  it("should convert magenta correctly", () => {
    expect(rgbToHwb(255, 0, 255)).toEqual({ h: 300, w: "0%", bk: "0%" });
  });

  it("should convert certain shades correctly", () => {
    expect(rgbToHwb(102, 204, 51)).toEqual({ h: 100, w: "20%", bk: "20%" });
  });
});

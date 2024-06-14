import { cmykToRgb } from "../src/cmykToRgb";

describe("cmykToRgb", () => {
  it("should convert CMYK (0, 0, 0, 0) to RGB (255, 255, 255)", () => {
    expect(cmykToRgb(0, 0, 0, 0)).toEqual({ r: 255, g: 255, b: 255 });
  });

  it("should convert CMYK (0, 100, 100, 0) to RGB (255, 0, 0)", () => {
    expect(cmykToRgb(0, 100, 100, 0)).toEqual({ r: 255, g: 0, b: 0 });
  });

  it("should convert CMYK (100, 0, 100, 0) to RGB (0, 255, 0)", () => {
    expect(cmykToRgb(100, 0, 100, 0)).toEqual({ r: 0, g: 255, b: 0 });
  });

  it("should convert CMYK (100, 100, 0, 0) to RGB (0, 0, 255)", () => {
    expect(cmykToRgb(100, 100, 0, 0)).toEqual({ r: 0, g: 0, b: 255 });
  });

  it("should convert CMYK (0, 0, 100, 0) to RGB (255, 255, 0)", () => {
    expect(cmykToRgb(0, 0, 100, 0)).toEqual({ r: 255, g: 255, b: 0 });
  });

  it("should convert CMYK (100, 0, 0, 0) to RGB (0, 255, 255)", () => {
    expect(cmykToRgb(100, 0, 0, 0)).toEqual({ r: 0, g: 255, b: 255 });
  });

  it("should convert CMYK (0, 100, 0, 0) to RGB (255, 0, 255)", () => {
    expect(cmykToRgb(0, 100, 0, 0)).toEqual({ r: 255, g: 0, b: 255 });
  });

  it("should convert CMYK (0, 0, 0, 100) to RGB (0, 0, 0)", () => {
    expect(cmykToRgb(0, 0, 0, 100)).toEqual({ r: 0, g: 0, b: 0 });
  });

  it("should convert CMYK (50, 50, 50, 50) to RGB (64, 64, 64)", () => {
    expect(cmykToRgb(50, 50, 50, 50)).toEqual({ r: 64, g: 64, b: 64 });
  });
});

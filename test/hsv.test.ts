import { hsvToRgb } from "../src/hsvToRgb";

describe("hsvToRgb", () => {
  it("should convert HSV (0, 0, 0) to RGB", () => {
    expect(hsvToRgb(0, 0, 0)).toEqual({ r: 0, g: 0, b: 0 });
  });

  it("should convert HSV (0, 0, 100) to RGB", () => {
    expect(hsvToRgb(0, 0, 100)).toEqual({ r: 255, g: 255, b: 255 });
  });

  it("should convert HSV (0, 100, 100) to RGB", () => {
    expect(hsvToRgb(0, 100, 100)).toEqual({ r: 255, g: 0, b: 0 });
  });

  it("should convert HSV (120, 100, 100) to RGB", () => {
    expect(hsvToRgb(120, 100, 100)).toEqual({ r: 0, g: 255, b: 0 });
  });

  it("should convert HSV (240, 100, 100) to RGB", () => {
    expect(hsvToRgb(240, 100, 100)).toEqual({ r: 0, g: 0, b: 255 });
  });

  it("should convert HSV (60, 100, 100) to RGB", () => {
    expect(hsvToRgb(60, 100, 100)).toEqual({ r: 255, g: 255, b: 0 });
  });

  it("should convert HSV (180, 100, 100) to RGB", () => {
    expect(hsvToRgb(180, 100, 100)).toEqual({ r: 0, g: 255, b: 255 });
  });

  it("should convert HSV (300, 100, 100) to RGB", () => {
    expect(hsvToRgb(300, 100, 100)).toEqual({ r: 255, g: 0, b: 255 });
  });

  it("should convert HSV (0, 0, 50) to RGB", () => {
    expect(hsvToRgb(0, 0, 50)).toEqual({ r: 128, g: 128, b: 128 });
  });

  it("should convert HSV (270, 100, 100) to RGB", () => {
    expect(hsvToRgb(270, 100, 100)).toEqual({ r: 128, g: 0, b: 255 });
  });
});

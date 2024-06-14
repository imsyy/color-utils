import { hslToRgb } from "../src/hslToRgb";

// HSL Test
describe("hslToRgb test", () => {
  it("should convert HSL to RGB for pure red", () => {
    expect(hslToRgb(0, 100, 50)).toEqual({ r: 255, g: 0, b: 0 });
  });

  it("should convert HSL to RGB for pure green", () => {
    expect(hslToRgb(120, 100, 50)).toEqual({ r: 0, g: 255, b: 0 });
  });

  it("should convert HSL to RGB for pure blue", () => {
    expect(hslToRgb(240, 100, 50)).toEqual({ r: 0, g: 0, b: 255 });
  });

  it("should convert HSL to RGB for white", () => {
    expect(hslToRgb(0, 0, 100)).toEqual({ r: 255, g: 255, b: 255 });
  });

  it("should convert HSL to RGB for black", () => {
    expect(hslToRgb(0, 0, 0)).toEqual({ r: 0, g: 0, b: 0 });
  });

  it("should convert HSL to RGB for gray", () => {
    expect(hslToRgb(0, 0, 50)).toEqual({ r: 128, g: 128, b: 128 });
  });

  it("should handle HSL wrapping with h > 360", () => {
    expect(hslToRgb(370, 100, 50)).toEqual({
      r: 255,
      g: 42,
      b: 0,
    });
  });

  it("should handle HSL wrapping with h < 0", () => {
    expect(hslToRgb(-10, 100, 50)).toEqual({
      r: 255,
      g: 0,
      b: 43,
    });
  });

  it("should handle HSL edge case h = 360", () => {
    expect(hslToRgb(360, 100, 50)).toEqual({ r: 255, g: 0, b: 0 });
  });

  it("should convert HSL to RGB for specific case where t > 1", () => {
    // To test the code path where t > 1
    expect(hslToRgb(300, 100, 50)).toEqual({ r: 255, g: 0, b: 255 });
  });

  // Testing q calculation branch for l < 0.5
  it("should correctly calculate q when l < 0.5", () => {
    expect(hslToRgb(40, 100, 25)).toEqual({ r: 128, g: 85, b: 0 });
  });

  // Testing q calculation branch for l >= 0.5
  it("should correctly calculate q when l >= 0.5", () => {
    expect(hslToRgb(40, 100, 75)).toEqual({ r: 255, g: 212, b: 128 });
  });
});

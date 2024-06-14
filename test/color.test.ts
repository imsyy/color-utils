import { getComplementaryColor } from "../src/getComplementaryColor";
import { getColorDifference } from "../src/getColorDifference";
import { getRandomColor } from "../src/getRandomColor";
import { adjustBrightness } from "../src/adjustBrightness";
import { hexToRgb } from "../src/hexToRgb";

// getComplementaryColor
describe("getComplementaryColor", () => {
  it("should get the complementary color for black (#000000)", () => {
    expect(getComplementaryColor("#000000")).toBe("#FFFFFF");
  });

  it("should get the complementary color for white (#FFFFFF)", () => {
    expect(getComplementaryColor("#FFFFFF")).toBe("#000000");
  });

  it("should get the complementary color for red (#FF0000)", () => {
    expect(getComplementaryColor("#FF0000")).toBe("#00FFFF");
  });

  it("should get the complementary color for green (#00FF00)", () => {
    expect(getComplementaryColor("#00FF00")).toBe("#FF00FF");
  });

  it("should get the complementary color for blue (#0000FF)", () => {
    expect(getComplementaryColor("#0000FF")).toBe("#FFFF00");
  });

  it("should get the complementary color for a mid-tone color (#808080)", () => {
    expect(getComplementaryColor("#808080")).toBe("#7F7F7F");
  });

  it("should handle hex values with lowercase letters (#abcdef)", () => {
    expect(getComplementaryColor("#abcdef")).toBe("#543210");
  });

  it("should handle hex values without a leading # (#123456)", () => {
    expect(getComplementaryColor("123456")).toBe("#EDCBA9");
  });

  it("should handle short hex values", () => {
    expect(getComplementaryColor("#FFF")).toBe("#000000");
  });

  it("should handle short hex values without leading #", () => {
    expect(getComplementaryColor("FFF")).toBe("#000000");
  });
});

// getColorDifference
describe("getColorDifference", () => {
  it("should return 0 when comparing the same colors", () => {
    expect(getColorDifference("#FFFFFF", "#FFFFFF")).toBe(0);
  });

  it("should calculate the difference between black and white", () => {
    // Distance between black (0, 0, 0) and white (255, 255, 255) in 3D color space
    const expectedDifference = Math.sqrt(
      Math.pow(255 - 0, 2) + Math.pow(255 - 0, 2) + Math.pow(255 - 0, 2)
    );
    expect(getColorDifference("#000000", "#FFFFFF")).toBeCloseTo(
      expectedDifference
    );
  });

  it("should calculate the difference between red and green", () => {
    // Distance between red (255, 0, 0) and green (0, 255, 0) in 3D color space
    const expectedDifference = Math.sqrt(
      Math.pow(255 - 0, 2) + Math.pow(0 - 255, 2) + Math.pow(0 - 0, 2)
    );
    expect(getColorDifference("#FF0000", "#00FF00")).toBeCloseTo(
      expectedDifference
    );
  });

  it("should calculate the difference between red and blue", () => {
    // Distance between red (255, 0, 0) and blue (0, 0, 255) in 3D color space
    const expectedDifference = Math.sqrt(
      Math.pow(255 - 0, 2) + Math.pow(0 - 0, 2) + Math.pow(0 - 255, 2)
    );
    expect(getColorDifference("#FF0000", "#0000FF")).toBeCloseTo(
      expectedDifference
    );
  });

  it("should calculate the difference between green and blue", () => {
    // Distance between green (0, 255, 0) and blue (0, 0, 255) in 3D color space
    const expectedDifference = Math.sqrt(
      Math.pow(0 - 0, 2) + Math.pow(255 - 0, 2) + Math.pow(0 - 255, 2)
    );
    expect(getColorDifference("#00FF00", "#0000FF")).toBeCloseTo(
      expectedDifference
    );
  });

  it("should calculate the difference between two similar colors", () => {
    // Distance between (#123456) and (#123457) in 3D color space
    const color1 = hexToRgb("#123456")!;
    const color2 = hexToRgb("#123457")!;
    const expectedDifference = Math.sqrt(
      Math.pow(color1.r - color2.r, 2) +
        Math.pow(color1.g - color2.g, 2) +
        Math.pow(color1.b - color2.b, 2)
    );
    expect(getColorDifference("#123456", "#123457")).toBeCloseTo(
      expectedDifference
    );
  });

  it("should handle lower-case hex codes correctly", () => {
    expect(getColorDifference("#abcdef", "#ABCDEF")).toBe(0);
  });
});

// getRandomColor
describe("getRandomColor", () => {
  it("should generate an RGB color with each component between 0 and 255", () => {
    for (let i = 0; i < 100; i++) {
      // 测试100次
      const color = getRandomColor();
      expect(color.r).toBeGreaterThanOrEqual(0);
      expect(color.r).toBeLessThanOrEqual(255);
      expect(color.g).toBeGreaterThanOrEqual(0);
      expect(color.g).toBeLessThanOrEqual(255);
      expect(color.b).toBeGreaterThanOrEqual(0);
      expect(color.b).toBeLessThanOrEqual(255);
    }
  });
});

// adjustBrightness
describe("adjustBrightness", () => {
  it("should brighten the color #000000 by 50%", () => {
    expect(adjustBrightness("#000000", 50)).toEqual("#323232");
  });

  it("should darken the color #ffffff by 50%", () => {
    expect(adjustBrightness("#ffffff", -50)).toEqual("#cdcdcd");
  });

  it("should not change the color #123456 with 0% adjustment", () => {
    expect(adjustBrightness("#123456", 0)).toEqual("#123456");
  });

  it("should handle non-hex color input gracefully", () => {
    expect(adjustBrightness("123456", 20)).toEqual("#26486a");
  });

  it("should cap the color to white when over-brightened", () => {
    expect(adjustBrightness("#0000ff", 300)).toEqual("#ffffff");
  });

  it("should cap the color to black when over-darkened", () => {
    expect(adjustBrightness("#ff0000", -300)).toEqual("#000000");
  });

  it("should brighten the color #800080 by 100%", () => {
    expect(adjustBrightness("#800080", 100)).toEqual("#e464e4");
  });

  it("should darken the color #808080 by 50%", () => {
    expect(adjustBrightness("#808080", -50)).toEqual("#4e4e4e");
  });

  it("should handle input without pound sign", () => {
    expect(adjustBrightness("abcdef", 20)).toEqual("#bfe1ff");
  });

  it("should handle small percent values", () => {
    expect(adjustBrightness("#7f7f7f", 1)).toEqual("#808080");
  });

  it("should handle large percent values", () => {
    expect(adjustBrightness("#010101", 254)).toEqual("#ffffff");
  });
});

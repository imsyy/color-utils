import { hwbToRgb } from "../src/hwbToRgb";

describe("hwbToRgb", () => {
  it("should convert black correctly by number", () => {
    expect(hwbToRgb(0, 0, 100)).toEqual({ r: 0, g: 0, b: 0 });
  });

  it("should convert black correctly", () => {
    expect(hwbToRgb(0, "0%", "100%")).toEqual({ r: 0, g: 0, b: 0 });
  });

  it("should convert white correctly", () => {
    expect(hwbToRgb(0, "100%", "0%")).toEqual({ r: 255, g: 255, b: 255 });
  });

  it("should convert red correctly", () => {
    expect(hwbToRgb(0, "0%", "0%")).toEqual({ r: 255, g: 0, b: 0 });
  });

  it("should convert green correctly", () => {
    expect(hwbToRgb(120, "0%", "0%")).toEqual({ r: 0, g: 255, b: 0 });
  });

  it("should convert blue correctly", () => {
    expect(hwbToRgb(240, "0%", "0%")).toEqual({ r: 0, g: 0, b: 255 });
  });

  it("should convert grey correctly", () => {
    expect(hwbToRgb(0, "50%", "50%")).toEqual({ r: 128, g: 128, b: 128 });
  });

  it("should convert yellow correctly", () => {
    expect(hwbToRgb(60, "0%", "0%")).toEqual({ r: 255, g: 255, b: 0 });
  });

  it("should convert cyan correctly", () => {
    expect(hwbToRgb(180, "0%", "0%")).toEqual({ r: 0, g: 255, b: 255 });
  });

  it("should convert magenta correctly", () => {
    expect(hwbToRgb(300, "0%", "0%")).toEqual({ r: 255, g: 0, b: 255 });
  });

  it("should convert certain shades correctly", () => {
    expect(hwbToRgb(100, "20%", "20%")).toEqual({ r: 102, g: 204, b: 51 });
  });
});

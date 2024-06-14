import { hexToRgb, hexToRgba } from "../src/hexToRgb";

describe("hexToRgb Test", () => {
  test("Handling 6-digit color values (with #)", () => {
    expect(hexToRgb("#FFFFFF")).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb("#000000")).toEqual({ r: 0, g: 0, b: 0 });
  });

  test("Handling 6-digit color values (without #)", () => {
    expect(hexToRgb("FFFFFF")).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb("000000")).toEqual({ r: 0, g: 0, b: 0 });
  });

  test("Handling 3-digit shorthand color values (with #)", () => {
    expect(hexToRgb("#FFF")).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb("#000")).toEqual({ r: 0, g: 0, b: 0 });
  });

  test("Handling 3-digit shorthand color values (without #)", () => {
    expect(hexToRgb("FFF")).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb("000")).toEqual({ r: 0, g: 0, b: 0 });
  });

  test("Invalid string inputs should return null", () => {
    expect(hexToRgb("GGGGGG")).toBeNull();
    expect(hexToRgb("#GGG")).toBeNull();
    expect(hexToRgb("#1234")).toBeNull();
    expect(hexToRgb("XYZTUV")).toBeNull();
    expect(hexToRgb("12345")).toBeNull();
  });

  test("Empty strings and incorrect formats should return null", () => {
    expect(hexToRgb("")).toBeNull();
    expect(hexToRgb("#")).toBeNull();
    expect(hexToRgb("#12345G")).toBeNull();
    expect(hexToRgb("12")).toBeNull();
    expect(hexToRgb("#XYZ")).toBeNull();
  });
});

describe("hexToRgba Test", () => {
  test("Handling 6-digit color values (with #)", () => {
    expect(hexToRgba("#FFFFFF")).toEqual({ r: 255, g: 255, b: 255, a: 1 });
    expect(hexToRgba("#000000")).toEqual({ r: 0, g: 0, b: 0, a: 1 });
  });

  test("Handling 6-digit color values (without #)", () => {
    expect(hexToRgba("FFFFFF")).toEqual({ r: 255, g: 255, b: 255, a: 1 });
    expect(hexToRgba("000000")).toEqual({ r: 0, g: 0, b: 0, a: 1 });
  });

  test("Handling 8-digit color values (with #)", () => {
    expect(hexToRgba("#27ae60ff")).toEqual({ r: 39, g: 174, b: 96, a: 1 });
    expect(hexToRgba("#27ae60cc")).toEqual({ r: 39, g: 174, b: 96, a: 0.8 });
  });

  test("Handling 8-digit color values (without #)", () => {
    expect(hexToRgba("27ae60ff")).toEqual({ r: 39, g: 174, b: 96, a: 1 });
    expect(hexToRgba("27ae60cc")).toEqual({ r: 39, g: 174, b: 96, a: 0.8 });
  });

  test("Invalid hex strings should return null", () => {
    expect(hexToRgba("GGGGGG")).toBeNull();
    expect(hexToRgba("#GGG")).toBeNull();
    expect(hexToRgba("#1234")).toBeNull();
    expect(hexToRgba("XYZTUV")).toBeNull();
    expect(hexToRgba("12345")).toBeNull();
  });

  test("Empty strings and incorrect formats should return null", () => {
    expect(hexToRgba("")).toBeNull();
    expect(hexToRgba("#")).toBeNull();
    expect(hexToRgba("#12345G")).toBeNull();
    expect(hexToRgba("12")).toBeNull();
    expect(hexToRgba("#XYZ")).toBeNull();
  });
});

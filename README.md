# color-utils

Some common color processing tools, color format conversion, image processing, etc.

## Install

```bash
npm install color-utils
```

## Usage

### Conversion

| Method Name | Parameters                                   | Description                          |
| ----------- | -------------------------------------------- | ------------------------------------ |
| `rgbToHsv`  | (r: number, g: number, b: number)            | Converts RGB values to HSV.          |
| `rgbToHex`  | (r: number, g: number, b: number)            | Converts RGB values to HEX format.   |
| `rgbToHev`  | (r: number, g: number, b: number)            | Converts RGB values to HEV format.   |
| `rgbToCmyk` | (r: number, g: number, b: number)            | Converts RGB values to CMYK format.  |
| `hexToRgb`  | (hex: string)                                | Converts a HEX string to RGB values. |
| `hsvToRgb`  | (h: number, s: number, v: number)            | Converts HSV values to RGB format.   |
| `hslToRgb`  | (h: number, s: number, l: number)            | Converts HSL values to RGB format.   |
| `cmykToRgb` | (c: number, m: number, y: number, k: number) | Converts CMYK values to RGB format.  |

**for example:**

```ts
// rgbToHsv
import { rgbToHsv } from "color-utils";

rgbToHsv(255, 0, 0); // { "h": 0, "s": 100, "v": 100 }
```

### Processing

| Method Name             | Parameters                                        | Description                                      |
| ----------------------- | ------------------------------------------------- | ------------------------------------------------ |
| `getRandomColor`        | ()                                                | Generates a random color in RGB format.          |
| `adjustBrightness`      | (r: number, g: number, b: number, factor: number) | Adjusts the brightness of an RGB color.          |
| `getColorDifference`    | (color1: string, color2: string)                  | Calculates the difference between two colors.    |
| `getComplementaryColor` | (color: string)                                   | Gets the complementary color of the given color. |

**for example:**

```ts
// getColorDifference
import { getColorDifference } from "color-utils";

getColorDifference("#ffffff", "#000000"); // 441.6729559300637
```

### Recognition

| Method Name     | Parameters                                             | Description                                                      |
| --------------- | ------------------------------------------------------ | ---------------------------------------------------------------- |
| `getImageColor` | (img: string \| HTMLImageElement, quality: number = 5) | Extracts the dominant colors from an image.                      |
| `getMDColor`    | (color: string, option: { type: "rgb" })               | Generates a Material Design color scheme based on a given color. |

**for example:**

```ts
// getMDColor
import { getMDColor } from "color-utils";

getMDColor("#123456");

// Generate
{
    "light": {
        // ...,
    },
    "dark": {
        // ...,
    }
}
```

## Testing

```bash
npm test
```

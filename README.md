# pxt-matrix-font-digits

A MakeCode micro:bit extension providing digits 0–9 and common clock/display symbols (`:`, `.`, `-`) as a 5×7 bitmap font for use with [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text).

## Usage

Simply add this extension to your project. On load, it automatically registers the font with `matrixText`, making all digits and symbols available in `matrixText.drawText()` — no manual setup required.

You can also retrieve the font object directly:

```typescript
const dig = matrixFontDigits.font()
// dig.glyphW === 5, dig.glyphH === 7
```

## Supported characters

`0 1 2 3 4 5 6 7 8 9 : . -`

Ideal for displaying times (`12:34`), dates, counters, and numeric readouts on LED matrix displays.

## Font format

- Glyph size: 5×7 pixels
- Layout: column-major, 1 byte per column, bit 0 = top row
- Data stored in flash (zero RAM cost)

## Dependencies

- [pxt-matrix-core](https://github.com/rolandbachkiss/pxt-matrix-core)
- [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text)
- [pxt-neopixel](https://github.com/microsoft/pxt-neopixel) v0.7.6

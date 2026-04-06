# pxt-matrix-font-digits

Digits 0–9 and common symbols (`:`, `.`, `-`) as a 5×7 bitmap font for [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text).

## Usage

Simply add this extension to your project. On load, it automatically registers the font with `matrixText` — no manual setup required.

```typescript
matrixText.drawText("12:34", 2, 2, matrixCore.rgb(255, 100, 0))
```

## Supported Characters

`0 1 2 3 4 5 6 7 8 9 : . -`

Ideal for displaying times, dates, counters, and numeric readouts on LED matrix displays.

## Font Details

| Property | Value |
|----------|-------|
| Glyph size | 5×7 pixels |
| Layout | Column-major, 1 byte per column, bit 0 = top row |
| Data | Stored in flash (zero RAM cost) |
| Characters | 13 glyphs |

## API

| Block | Description |
|-------|-------------|
| `digits font (5×7)` | Returns the MatrixFont object |

## Dependencies

- [pxt-matrix-text](https://github.com/rolandbachkiss/pxt-matrix-text)
- [pxt-matrix-core](https://github.com/rolandbachkiss/pxt-matrix-core)

## License

MIT © Roland Bach Kiss

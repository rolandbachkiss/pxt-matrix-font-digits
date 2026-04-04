/**
 * Digits 0-9 and clock symbols (:.-) 5×7 bitmap font.
 * Auto-registers into matrixText on load.
 */
//% color=45 icon="\uf031"
//% blockNamespace=matrixText
namespace matrixFontDigits {
    // Font data in flash — zero RAM cost
    // 13 glyphs × 5 columns = 65 bytes
    // charMap: "0123456789:.-"
    const _data = hex`3E5149453E00427F400042615149462141454B311814127F1027454545393C4A49493001710905033649494936064949291E003636000000606000000808080808`
    const _charMap = "0123456789:.-"

    // Auto-register on extension load
    const _font = new MatrixFont(5, 7, _charMap, _data)
    matrixText.registerFont(_font)

    /**
     * The digits font object (5×7)
     */
    //% blockId=matrix_font_digits_get
    //% block="digits font (5×7)"
    //% group="Fonts"
    export function font(): MatrixFont {
        return _font
    }
}

// test.ts — pxt-matrix-font-digits visual hardware test
//
// Tests that the digits/punctuation font is properly registered and renders
// correctly on a 32×32 NeoPixel matrix.
//
// CP 0 — init + font loaded
// CP 1 — glyphW/glyphH sanity check
// CP 2 — draw single digit '0'
// CP 3 — draw all digits 0-9 across two rows
// CP 4 — textWidth check
// CP 5 — scroll "1234567890" across the matrix
// CP 6 — countdown 9→0 with brief pause between digits
// CP 7 — DONE

function cp(n: number): void {
    const cx = n % 5
    const cy = Math.idiv(n, 5)
    led.plot(cx, cy)
}

// ─── CP 0 — init ────────────────────────────────────────────────────────────
cp(0)
matrixCore.initNeoPixel(DigitalPin.P0, MatrixLayout.Grid2x2)
matrixCore.setBrightness(80)
matrixCore.clear()
matrixCore.updateDisplay()

const f = matrixFontDigits.font()

// ─── CP 1 — glyphW / glyphH sanity ─────────────────────────────────────────
cp(1)
if (f.glyphW !== 5 || f.glyphH !== 7) {
    for (let i = 0; i < 6; i++) {
        basic.showIcon(IconNames.No)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
}

// ─── CP 2 — draw single digit '0' ───────────────────────────────────────────
cp(2)
matrixCore.clear()
matrixText.drawChar("0", 13, 12, matrixCore.rgb(255, 200, 0))   // centred on 32×32
matrixCore.updateDisplay()
basic.pause(1000)
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 3 — draw 0-9 in two rows ────────────────────────────────────────────
cp(3)
matrixCore.clear()
const digits = "0123456789"
// Row 0: 0-4 in yellow
for (let i = 0; i < 5; i++) {
    matrixText.drawChar(digits.charAt(i), i * 6, 4, matrixCore.rgb(255, 200, 0))
}
// Row 1: 5-9 in cyan
for (let i = 5; i < 10; i++) {
    matrixText.drawChar(digits.charAt(i), (i - 5) * 6, 20, matrixCore.rgb(0, 200, 255))
}
matrixCore.updateDisplay()
basic.pause(2000)
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 4 — textWidth check ─────────────────────────────────────────────────
cp(4)
const tw = matrixText.textWidth("12345")   // expect 29
matrixCore.clear()
for (let i = 0; i < tw && i < 32; i++) {
    matrixCore.setPixelXY(i, 0, 255, 200, 0)
}
matrixCore.updateDisplay()
basic.pause(800)
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 5 — scroll "1234567890" ─────────────────────────────────────────────
cp(5)
matrixText.startScroll("1234567890", 12, matrixCore.rgb(255, 180, 0), 2)
for (let i = 0; i < 110; i++) {
    matrixCore.clear()
    matrixText.updateScroll()
    matrixCore.updateDisplay()
    basic.pause(40)
}
matrixText.stopScroll()
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 6 — countdown 9→0 ───────────────────────────────────────────────────
cp(6)
// Each digit displayed centred for 400ms, colour fades from red (9) to green (0)
for (let d = 9; d >= 0; d--) {
    matrixCore.clear()
    // Colour: red at 9, green at 0
    const rr = Math.idiv(d * 200, 9)
    const gg = 200 - rr
    matrixText.drawChar(digits.charAt(d), 13, 12, matrixCore.rgb(rr, gg, 0))
    matrixCore.updateDisplay()
    basic.pause(400)
}
matrixCore.clear()
matrixCore.updateDisplay()

// ─── CP 7 — DONE ─────────────────────────────────────────────────────────────
cp(7)
for (let i = 0; i < 3; i++) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
    `)
    basic.pause(300)
    basic.clearScreen()
    basic.pause(200)
}

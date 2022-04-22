radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        light1 = light1 * -1
        if (light1 < 0) {
            strip1.showColor(neopixel.colors(NeoPixelColors.Black))
        } else {
            strip1.showColor(neopixel.colors(NeoPixelColors.White))
        }
    }
    if (receivedNumber == 2) {
        light2 = light2 * -1
        if (light2 < 0) {
            strip2.showColor(neopixel.colors(NeoPixelColors.Black))
        } else {
            strip2.showColor(neopixel.colors(NeoPixelColors.White))
        }
    }
    if (receivedNumber == 3) {
        light3 = light3 * -1
        if (light3 < 0) {
            strip3.showColor(neopixel.colors(NeoPixelColors.Black))
        } else {
            strip3.showColor(neopixel.colors(NeoPixelColors.White))
        }
    }
    if (receivedNumber == 4) {
        fan = fan * -1
        if (fan < 0) {
            pins.digitalWritePin(DigitalPin.P16, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P16, 1)
        }
    }
})
let fan = 0
let light3 = 0
let light2 = 0
let light1 = 0
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip1: neopixel.Strip = null
radio.setGroup(1)
strip1 = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB)
strip3 = neopixel.create(DigitalPin.P12, 1, NeoPixelMode.RGB)
strip1.showColor(neopixel.colors(NeoPixelColors.Black))
strip2.showColor(neopixel.colors(NeoPixelColors.Black))
strip3.showColor(neopixel.colors(NeoPixelColors.Black))
light1 = -1
light2 = -1
light3 = -1
fan = -1
basic.forever(function () {
	
})

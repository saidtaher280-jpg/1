let humidity = 0
input.onButtonPressed(Button.A, function () {
    humidity = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
    while (pins.digitalReadPin(DigitalPin.P0) < 600) {
        basic.showString("-H")
    }
    while (pins.digitalReadPin(DigitalPin.P0) > 600) {
        basic.showString("+H")
    }
})

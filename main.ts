input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("nombre y apellidos")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P4, pins.map(
    input.lightLevel(),
    0,
    255,
    0,
    180
    ))
    basic.showNumber(input.lightLevel())
})

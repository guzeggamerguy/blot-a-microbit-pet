input.onGesture(Gesture.EightG, function () {
    soundExpression.yawn.play()
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(2.5)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        # . . . .
        # # . . #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showString("Bucket is full of vomit! Find a way to empty it!")
})
input.onGesture(Gesture.SixG, function () {
    soundExpression.giggle.play()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("I'm thirsty")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("I'm hungry")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("I need a bucket!")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # . . #
        # . # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("[GLUG GLUG]")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showString("[CHOMPS]")
})
input.onGesture(Gesture.ThreeG, function () {
    music.playMelody("C5 B C5 - B A B C ", 170)
})
basic.showString("Loading Blot...")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . . .
    . # # # .
    `)

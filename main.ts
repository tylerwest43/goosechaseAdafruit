input.onLoudSound(function () {
    makerController.player1.setButton(ArcadeButton.A, true)
    light.showRing(
    `yellow yellow yellow yellow yellow yellow yellow yellow yellow yellow`
    )
    control.waitMicros(200)
    makerController.player1.setButton(ArcadeButton.A, false)
    light.showRing(
    `black black black black black black black black black black`
    )
})
for (let index = 0; index < 3; index++) {
	
}
forever(function () {
    makerController.player1.setButton(ArcadeButton.Down, input.buttonA.isPressed())
    makerController.player1.setButton(ArcadeButton.Up, input.buttonB.isPressed())
    if (input.buttonB.isPressed()) {
        music.pewPew.play()
        light.showRing(
        `black black black black black blue blue blue blue blue`
        )
        control.waitMicros(100)
        light.showRing(
        `black black black black black black black black black black`
        )
    }
    if (input.buttonA.isPressed()) {
        music.pewPew.play()
        light.showRing(
        `green green green green green black black black black black`
        )
        control.waitMicros(100)
        light.showRing(
        `black black black black black black black black black black`
        )
    }
})
forever(function () {
    if (true) {
    	
    }
})

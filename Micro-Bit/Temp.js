basic.forever(() => {
    basic.showNumber(input.temperature() * (9 / 5) + 32)
    basic.showString("F")
    basic.showNumber(input.lightLevel())
    basic.showString("Lux")
})

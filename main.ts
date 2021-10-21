namespace SpriteKind {
    export const Background = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(true, effects.confetti)
})
let mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Background)
let mySprite2 = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
let mySprite3 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
mySprite2.setPosition(79, 17)
mySprite3.setPosition(80, 106)
controller.moveSprite(mySprite3, 3, 5)
mySprite.setStayInScreen(true)
info.startCountdown(120)
mySprite.setPosition(0, 0)
let index = randint(1000, 5000)
for (let index2 = 0; index2 < 4; index2++) {
    pause(index)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . f f 5 5 5 f . . . . . 
        . . . . f 1 1 5 5 5 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 6 6 6 6 6 1 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `],
    index,
    true
    )
    if (controller.up.isPressed()) {
        game.over(false, effects.slash)
    }
}
game.onUpdateInterval(1000, function () {
	
})
forever(function () {
	
})

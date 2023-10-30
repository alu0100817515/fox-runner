enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 8; index++) {
        custom.mover(10, 0)
    }
    custom.mover(0, 10)
    custom.mover(0, 10)
    for (let index = 0; index < 2; index++) {
        custom.mover(10, 0)
    }
})
let mySprite = sprites.create(assets.image`snow_fox`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`background`)
mySprite.setStayInScreen(true)
mySprite.ay = 5
tiles.setCurrentTilemap(tilemap`nivel1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 13))
animation.runImageAnimation(
mySprite,
assets.animation`Idle`,
100,
true
)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)

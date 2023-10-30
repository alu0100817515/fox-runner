enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Jumping`,
    500,
    false
    )
    custom.mover(0, 10)
    custom.mover(10, 0)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Idle`,
    100,
    true
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`snow_fox`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`background`)
mySprite.setStayInScreen(true)
mySprite.ay = 50
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

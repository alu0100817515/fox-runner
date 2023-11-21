enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    startRunning()
})
function startRunning () {
    for (let index = 0; index < 5; index++) {
        custom.mover()
    }
    custom.saltar()
}
let mySprite = sprites.create(assets.image`snow_fox`, SpriteKind.Player)
let SpriteGoal = sprites.create(assets.image`myImage1`, SpriteKind.Goal)
scene.setBackgroundImage(assets.image`background`)
mySprite.setStayInScreen(true)
mySprite.ay = 50
tiles.setCurrentTilemap(tilemap`nivel1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 13))
tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(10, 12))
animation.runImageAnimation(
mySprite,
assets.animation`Idle`,
100,
true
)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)

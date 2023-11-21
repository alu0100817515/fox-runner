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
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Idle`,
    100,
    true
    )
})
function startRunning () {
    for (let index = 0; index < 5; index++) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Walking`,
        100,
        false
        )
        custom.mover(10, 0)
    }
    animation.runImageAnimation(
    mySprite,
    assets.animation`Jumping`,
    100,
    false
    )
    custom.mover(0, 10)
    custom.mover(10, 0)
}
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`snow_fox`, SpriteKind.Player)
let spriteGoal = sprites.create(assets.image`GoalFlag`, SpriteKind.Goal)
scene.setBackgroundImage(assets.image`background`)
mySprite.setStayInScreen(true)
mySprite.ay = 50
tiles.setCurrentTilemap(tilemap`nivel1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 10))
tiles.placeOnTile(spriteGoal, tiles.getTileLocation(14, 10))
animation.runImageAnimation(
mySprite,
assets.animation`Idle`,
100,
true
)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)

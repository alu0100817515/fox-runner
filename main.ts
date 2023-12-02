enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Goal = SpriteKind.create()
    export const Puntero_Camara = SpriteKind.create()
}
function Nivel_3 () {
	
}
function Nivel_7 () {
	
}
function Nivel_1 () {
    for (let index = 0; index < 5; index++) {
        custom.moverseDerecha()
    }
}
function Nivel_9 () {
	
}
function Nivel_4 () {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    startRunning()
})
function Nivel_10 () {
	
}
function Nivel_8 () {
	
}
function controlNiveles (nivel: number) {
    if (nivel == 0) {
        scene.setBackgroundImage(assets.image`background`)
        tiles.setCurrentTilemap(tilemap`nivel1`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(0, 12))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 13))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(10, 12))
    }
    if (nivel == 1) {
        scene.setBackgroundImage(assets.image`a`)
        tiles.setCurrentTilemap(tilemap`nivel2`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(0, 12))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 13))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(5, 14))
    }
    if (nivel == 2) {
        scene.setBackgroundImage(assets.image`b`)
        tiles.setCurrentTilemap(tilemap`nivel3`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(0, 12))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 13))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(5, 13))
    }
}
function Nivel_5 () {
	
}
function Nivel_2 () {
    for (let index = 0; index < 5; index++) {
        custom.moverseIzquierda()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    nivel = nivel + 1
    controlNiveles(nivel)
})
function Nivel_6 () {
	
}
function startRunning () {
    Nivel_1()
    Nivel_2()
    Nivel_3()
    Nivel_4()
    Nivel_5()
    Nivel_6()
    Nivel_7()
    Nivel_8()
    Nivel_9()
    Nivel_10()
}
let nivel = 0
let Camara: Sprite = null
let SpriteGoal: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`snow_fox`, SpriteKind.Player)
SpriteGoal = sprites.create(assets.image`myImage1`, SpriteKind.Goal)
Camara = sprites.create(assets.image`Camara`, SpriteKind.Puntero_Camara)
nivel = 0
mySprite.setStayInScreen(false)
SpriteGoal.setStayInScreen(false)
mySprite.ay = 50
controller.moveSprite(Camara)
scene.cameraFollowSprite(Camara)
animation.runImageAnimation(
mySprite,
assets.animation`Idle_Right`,
100,
true
)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
controlNiveles(nivel)

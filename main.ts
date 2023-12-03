enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Goal = SpriteKind.create()
    export const Puntero_Camara = SpriteKind.create()
    export const Muerte = SpriteKind.create()
}
function Nivel_3 () {
    for (let index = 0; index < 10; index++) {
        custom.moverseIzquierda()
    }
    for (let index = 0; index < 3; index++) {
        custom.saltarIzquierda()
    }
    custom.moverseIzquierda()
}
function Nivel_7 () {
    for (let index = 0; index < 4; index++) {
        custom.moverseDerecha()
    }
    custom.saltoDobleDerecha()
    custom.saltoDobleIzquierda()
    custom.saltoDobleDerecha()
    for (let index = 0; index < 7; index++) {
        custom.moverseDerecha()
    }
}
function Nivel_1 () {
    for (let index = 0; index < 9; index++) {
        custom.moverseDerecha()
    }
}
function Nivel_4 () {
    for (let index = 0; index < 4; index++) {
        custom.moverseDerecha()
    }
    custom.saltarDerecha()
    for (let index = 0; index < 3; index++) {
        custom.moverseDerecha()
    }
    custom.saltarDerecha()
    custom.saltoDobleIzquierda()
    for (let index = 0; index < 7; index++) {
        custom.moverseIzquierda()
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    startRunning()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Fijar_Nivel(8)
})
function Fijar_Nivel (Nivel_actual: number) {
    nivel = Nivel_actual
    controlNiveles(Nivel_actual)
}
function Nivel_8 () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            custom.moverseDerecha()
        }
        custom.saltarDerecha()
    }
    custom.saltoDobleIzquierda()
    for (let index = 0; index < 2; index++) {
        custom.moverseIzquierda()
    }
    custom.saltarIzquierda()
    custom.moverseIzquierda()
    custom.saltoDobleDerecha()
    for (let index = 0; index < 10; index++) {
        custom.moverseDerecha()
    }
}
function controlNiveles (nivel: number) {
    if (nivel == 1) {
        scene.setBackgroundImage(assets.image`background`)
        tiles.setCurrentTilemap(tilemap`nivel_1`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(0, 12))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(9, 14))
    }
    if (nivel == 2) {
        scene.setBackgroundImage(assets.image`background`)
        tiles.setCurrentTilemap(tilemap`nivel_2`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(0, 12))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 13))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(14, 12))
    }
    if (nivel == 3) {
        scene.setBackgroundImage(assets.image`b`)
        tiles.setCurrentTilemap(tilemap`nivel3`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(14, 10))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 10))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(0, 10))
    }
    if (nivel == 4) {
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999669999999999999999999999999999999999999966999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999669999999999999999999999999999999999999966999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999676999999999999999999999999999999999999967699999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999966999999999999999999999999676999999999996699999999999999999999999967699999999999669999999999999999999999999999999999999999999999999999999999999999999
            9999999999967699999999999999999996699676999999999996769999999999999999999669967699999999999676999999999999999999999999999999999999999999999999999999999999999999
            9996996669996769999966999999996696769676999699666999676999996699999999669676967699969966699967699999669999999969999999999999999999999999999999999999999999999999
            9966999676996776999676966999967696769676996699967699677699967696699996769676967699669996769967769996769669999679999999999999999999999999999999999999999999999999
            6676999967699676999676667699677696776677667699996769967699967666769967769677667766769999676996769996766676996776999999999999999999999999999999999999999999999999
            6676669996769677696776667769676696676677667666999676967769677666776967669667667766766699967696776967766677696766999999999999999999999999999999999999999999999999
            6776769996776667696766666766776666677677677676999677666769676666676677666667767767767699967766676967666667667766999999999999999999999999999999999999999999999999
            6766776996667767667766666776766666677677676677699666776766776666677676666667767767667769966677676677666667767666999999999999999999999999999999999999999999999999
            7766676966677667667667766676766776667677776667696667766766766776667676677666767777666769666776676676677666767667999999999999999999999999999999999999999999999999
            7766677666776667777666776677767766667777776667766677666777766677667776776666777777666776667766677776667766777677999999999999999999999999999999999999999999999999
            7666667666776767777666676677667666767777766666766677676777766667667766766676777776666676667767677776666766776676999999999999999999999999999999999999999999999999
            7667667767766777776677677677677667766777766766776776677777667767767767766776677776676677677667777766776776776776999999999999999999999999999999999999999999999999
            7667767767766777776776667677677667666777766776776776677777677666767767766766677776677677677667777767766676776776999999999999999999999999999999999999999999999999
            7666767767666777676766667b776776b766677b7666767767666777676766667b776776b766677b7666767767666777676766667b776776999999999999999999999999999999999999999999999999
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999
            bbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999
            bbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebb999999999999999999999999999999999999999999999999
            bbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbb999999999999999999999999999999999999999999999999
            beeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbe999999999999999999999999999999999999999999999999
            eeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebe999999999999999999999999999999999999999999999999
            ebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeeb999999999999999999999999999999999999999999999999
            ebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeee999999999999999999999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeee999999999999999999999999999999999999999999999999
            eeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeb999999999999999999999999999999999999999999999999
            eeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeefffddddddddddddffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeeffddddddddffffdddffdddfeeeeeeeeeeeeeeeeeeeeeeeeeeefdbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeeffdddfffddfffffdddddddffeeeeeeeeeeeeeeeeeeeeeeeeeffbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeeffdddfffffdffffddddddbdfeeeeeeeeeeeeeeeeeeeeeeeeeefddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeffdddffffffddddddddbfdfdfeeeeeeeeeeeeeeeeeeeeeeeeeefbdddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeefddddfffffdddddddfdffdfdfeeeeeeeeeeeeeeeeeeeeeeeeeefffffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeefdddddfffddddfffdffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeefdddddddddffffefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999999999999999
            eeeeeeeeeeeeeeeeeeeeffdddbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffdbffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeefffffbddddbbffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffdddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeefdffefdddddddddffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeefddfffddddddddddffddddfdfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeefffbbdfffdddddddddddddddbdbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeefffddfffffeffddddddddddddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeefdbbdddfbfeeffffddddddffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeefddbbfffdfeeeeeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeffffdddfefdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeefbbfffffffddffeeeeffffeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeffbbbfffdbdddffffefddbfffffbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeefffffdfdbbdddddfefdddddddbbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeffbbbfdbddbbbffffefffffdddbddbfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeefbbfffdbbdddffffffeeeeffffbbbdfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeefffffbddbbdddddddfeeeeeeeffdbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeefbbfdbbddbbfffffffeeeeeeffddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeefbffdbbbdddddddfeeeeeeeefddffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbdddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeffffdddbbfffffffeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeffdffdddfeeeeeeeeeeeeeeeeeeffdffdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeffddffffffeeeeeeeeeeeeeeeeeefddffdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeefddbffffeeeeeeeeeefffffffeeffddffdbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffbdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeffbbfddfeeeeeeeeeefddbbdffefddfffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eefeeeeeeeeefdddbbffeeeeeeeeffddbdddfefdffffbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeefddddfeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeefefffbbddfeeeeeeeefddfffddfffffeffbffeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeffbddfeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeee
            eeefffffeeeeeefdddbffeeffffffddfeffddfffeefdbfffeeeeeeeeeeefeeeffffeeeeeeeefeeeeeeefffffeeeeeefdbfefeeeffffeeeeeeeefeeeeeeefffffeeeeefffffefeeeffffeeeeeeeefeeee
            effffeffffeeeefdfbbdfffffffbddfffeffdffeeffddfffffeeeeffeeeeeffffffffeeffeeeeefeeffffeffffeeeeffffeeeffffffffeeffeeeeefeeffffeffffeeefbdbfeeeffffffffeeffeeeeefe
            fffffffffffeeefffbdbffddddffbdfffeefffeefffbdffffffeeeffeeeeffefffffffeffeeeeeeefffffffffffeeeffeeeeffefffffffeffeeeeeeeffffffffffffffdddfeeffefffffffeffeeeeeee
            feefffffffffeeeefddffbdffddfbbfeeeeeeeefffdbbfffffffeeeeeeeffffffffffffeeeeeeeeffeefffffffffeeeeeeeffffffffffffeeeeeeeeffeefffffffffbdddbffffffffffffffeeeeeeeef
            feefffffffffffeefffffddfffdefffffeeeeffffbddffffffffffeeeffffffffffeeffffeeeeffffeefffffffffffeeeffffffffffeeffffeeeeffffeefffffffffddddddbffffffffeeffffeeeefff
            fffffffffffffffffffffdddffdddfffffffffffdbbdfffffffffffffffffffbdbfeeffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffbddbddddbfffffffefffffffffff
            ffffffffffeeffffffeefffddddddffffffffdbddfffffffffeeffffffeefffdddfffffeffffffefffffffffffeeffffffeefffffffffffeffffffefffffffffffeffffffbddddbbddbffffeffffffef
            ffffffffffeeffffffeefffddddddfffddbbddbdffffffffffeeffffffeefffbdddbffffffeeffffffffffffffeeffffffeeffffffffffffffeeffffffffffffffeefffffffbdddddddfffffffeeffff
            ffffffffffffffefffffffffdddddffddfbddfffffffffffffffffeffffffbddddddffffffeeffffffffffffffffffefffffffffffffffffffeeffffffffffffffffffefffffffdddddfffffffeeffff
            fffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffbddddbddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffbddbbddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddfffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        tiles.setCurrentTilemap(tilemap`nivel7`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(0, 12))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(0, 10))
    }
    if (nivel == 5) {
        scene.setBackgroundImage(img`
            66666666666666666666666666666666666666666666666666666666666666666666666999999999666661111111111cccccccccccccccccccccccccccccccccccccccccccc111ccccccccccccccc111
            66666666666669999966666666666666666666666666666666666666666699999999999999999999966611111111111cccccccccccccccccccccccccccccccccccccccccccc11cccccccccccccccccc1
            666666669999969966666666666666966666999696666666666666699999999999999999999999999666111111111cccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccc1
            66666666999999999999999999999999999999999666666666666666666666999999999999999999666611111111cccccccccccccccccccccccccccccccccccccccccccccc11cccccccccccccccccc11
            6666666699999999999999999999999999999999999999666666666616666666999999999999999966661111111ccccccccccccccccccccccccccccccccccccccccccccccc11c1cccccccccccccccc11
            666666666669999999999999999999999999999999966699666666611666699999999999999999999666111111cccccccccccccccccccccccccccccccccccccccccccccccc11ccccccccccccccccc11c
            66699999999999999999999999999999999999999999999666666661166669999999999999999999666661111c1ccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccc1cc
            999999999999999999999999999999999999999999999666666666111166666669999999999999999966c1111ccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccc1cc1c1
            66999999999999999999999999999999999999996666666666666111b1666666699999999999999996661111ccccccccccccccccccccccccccccccccccccccccccccccccc11c1ccccccccccccc1c1cc1
            6669966666999999999999999999999999999966666666666666611bb16666666669999999999996666c111cccccccccccccccccccccccccccccccccccccccccccccccccc11cccccccccccccc11ccc11
            6666699999999999999999999999999999966666666666666666111bb11666666666669999999666666111ccccccccccccccccccccccccccccccccccccccccccccccccccc11cccccccccccccc11c1cc1
            6666669999999999999999999999999966666666666666666666111bbb166666666666666666666666c111ccccccccccccccccccccccccccccccccccccccccccccccccccc11ccccccccccccc111ccc11
            66666666699999999999999966666666666666666666696666661b1bbb116666666666666666666666c11c1cccccccccccccccccccccccccccccc11ccccccccccccccccc11c1ccccccccccc111ccc111
            66669999999999999996666666666666666666666699996666611b1bbbb16666666666666666666666c1ccccccccccccccccccccccccccccccccc11ccccccccccccccccc11c1ccccccccccc11cc1c111
            666666699999999996666666666666666666666699999996666111bbbbb1166666666666666666666cccccccccccccccccccccccccccccccccccc11ccccccccccccccccc11cccccccccccc1ccc1c1111
            666699999999996666666666666666666666999999999966661111bbbbbb16666666666666666666ccccccccccccccccccccccccccccccccccccc1ccccccccccccccccc11c1cccccccccc1c1ccc11111
            669999999999966666666666166666669999999999999966611111bbbbb1b6666666666666666666ccccccccccccccccccccccccccccccccccccc1ccccccccccccccccc11c1cccccccccccc1c1111111
            9999999999996666666666611666666969999999999996666111bbbbbbb1b666666666666666666ccccccccccccccccccccccccccccccccccc1c1ccccccccccccccccc111ccccccccccccc11c1111111
            9969999999666666666666611666666699999999999966661111bbbbbbb1166666666666666666cccccccccccccc1ccccccccccccccccccc1ccc1ccccccccccccccccc111cccccccccccc11111111111
            666666666666666666666661166666666999999999999996111bbbb1bbbb116666666699996666ccccccccccccc11ccccccccccccccccccccccccccccccc11c1ccccc111ccccccccccc1c11111111111
            666666666666666666666611166666669999999999999999111bbb11bbbb11666666999999666cccccccccccc111ccccccccccccccccccc1cc1cccccccc111c1ccccc111cccccccccc1c111111111111
            66666666666666666666611116666699999999999996666111bbbb11bbbb11666669999996666ccccccccccc111ccccccccccccccccccc1cc1ccccccccc11ccccccc111cccccccccccc1111111111111
            66666666666666666666d1111d66666999999999966666611bbbbb11bbbbb1b6666666666666ccccccccccc111cccccccccccccccccccccc11ccccccccc11ccccccc1111cccccccccc11111111111111
            6666666666666666666611111166666669999999666666611bbbbb11bbbbbbb6666666666666cccccccccc111ccccccccccccccccccccc1111cccccccc111cccccc1111cccccccccc111111111111111
            666666666666666666661d1d116666666699696666666611bbbbb111bbbbb1bbb6666666666cccccccccc111cccccccccccc111cccccc1111cccccccc111ccccccc1111cccccc1c11111111111111111
            6666666666666666666d111d116666666666666666666111bbbbb111bbbbb11bb6666666666cccccccccc111cccccccc11111cccccc1c1111cccccc11111cccccc1111cccccc11c11111111111111111
            66666666666666666661d1ddd1666666666666666666111bbbbbb1b11bbbbb11bbbbbb6666cccccccccc111cc1ccccc1111ccccccc1c11111ccccc1111111cccc11111ccccc111111111111111111111
            66666666666666666661d1ddd1166666666666666666111bbbbb11bb1bbbbb111111bbbbbbcccccccccc111cccccc11111ccccccc11c11cccccccc111111cccc11111ccccc1111111111111111111111
            666999996669666666111111d116666666666666661111bbbbb111bbb11b11111111111bbbcccccccccc11ccccccc11111cccccc11c111cccccccc111111cccc11111cccc11111111111111111111111
            6699966999966666661d111ddd1666666666666666111bbbbb111bbbbb1111bbb11b11bbbbccccccccc111c1ccccc1111ccccccc11111cccccccccc11111ccc1111cccccc11111111111111111111111
            9999999999966666661d1d1ddd166666666666666611bbbb11111bbbb1111bbbbbb11bbbccccccccccc11ccccccc111ccccccccc1111ccccccccccc111cccc11111ccccc111111111111111111111111
            9669999996666666661d111ddd16666666666666661bbbb111b1bbbbb111bbbbbbbbbcccccccccccccc11ccccccc111ccccccccc111cccccccccccccccccc11111ccccc1111111111111111111111111
            9999999999666666611111ddddd6666666666666611bbb11111bbbbb111bbbbbbbccccccccccccccccc111cccccc11cccccccccccccccccccccccccccccc11111cccccc1111111111111111111111111
            6999999996666666611d11ddddd666666666666661bbbb11111bbbbb111bbbbbbcccccccccccccccccccccccccc111ccccccccccccccccccccccccccccc111111ccc1c11111111111111111111111111
            9999999966666666611d11ddd1d6666666666666bbbbb1b111bbbbbb111bbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111ccc11c11111111111111111111111111
            999996666666666661111dddd1dd66666666611bbbbb1111b1bbbbb111bbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111ccc11111111111111111111111111111
            99699666666666666111dddd11ddd666666611bbbbb11111bbbbbb111bbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111ccc111111111111111111111111111111
            99966666666666666111dddd11dddd11661611bbbb11111bbbbb11111bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111ccc111111111111111111111111111111
            66666666666666666111dddd11dddd111611bbb1111111bbbbb11111bbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111c1c111111111111111111111111111111
            66666666666666666111ddd11111dddd1111bb1111111bbbbb11b11bccccccccccccc11cccccccccccccccccccc11ccccccccccccccccccccccccccc1111111c1c111111111111111111111111111111
            6666666666666661111dddd111111ddd111bbb11b1bb1bbb11111bbcccccccc11111111cc1cccccccccccccccc111ccccccccccccccccccccccccccc1111111111111111111111111111111111111111
            666666666666666111ddddd1111d1ddd111bb1111bbbbbbb111bbbccccccc1111111111cccccccccccccccccc1111ccccccccccccccccccccccccccc1111111111111111111111111111111111111111
            66666666666666111ddddd1111d111dddd1b1111bbbbbbbb11bbbccccccc1111111111ccccccccccccccccc111111ccccccccccccccccccccc11bcccc111111111111111111111111111111111111111
            66666666666666111ddddd1dd1111d1ddd1bbbbbbbbbbbbbbbbcccccccc111111111ccccccccccccccc1111111111ccccccccc111cccccccc111bb1cc111111111111111111111111111111111111111
            66666666666661111dddd11d111d111d1111bbbbbbbbbbbbbbcccccccc111111111cccc1ccccccccc11111111111cccccccccc111cccccccc111bb11cc11111111111111111111111111111111111111
            6666666666666111ddddd1dd11111111d111bbbbbbbbbbbbbccccccc1111111111cccc1c1cccccccc11111111111ccccccccc1111ccccccc1111bb11cc11111111111111111111111111111111111111
            6666666666661111ddddd1dd111111111ddddbbbbbbbbbb11c111111111111111cccc1111cccccccc11111111111cccccccc11111cccccc11111bb111111111111111111111111111111111111111111
            6666666666611111dddd1dd11111111111ddddbbbbbbbb111111111111111111ccccc1111ccccccc111111111c1ccccccccc11111cccccc11111bbb11111111111111111111111111111111111111111
            666666666661111ddd111dd111d1111111dddddbbbbb1111111111111111111cccccc1111ccccccc1111111111ccccccccc11111cccccc111111bbb11111111111111111111111111111111111111111
            66666666661111ddd111ddd111d111111111ddddbbb111111111111111c11ccccccc1111ccccccc111111111c1ccccccc1111111cccc11111111bbbb1111111111111111111111111111111111111111
            66666666661111ddd11ddd11111d111111111dddddb11111111111111cccc1ccccc11111ccccccc1111111111ccccccc1111111cccc111111111bbbb1111111111111111111111111111111111111111
            6666666666111dd1111ddd11111d111111111dddddd11111111111ccccccccccccc11111cccccc11111111111c1ccccc111111ccccc111111111bbbb1111111111111111111111111111111111111111
            66666666611d111111dddd11111dd111111111ddddd11111111111cccccccccc11c1111ccccccc1111111111c111c1c111111ccccc1111111111bbbb1111111111111111111111111111111111111111
            6666666611111dd111ddd1111111d11d11d1111dddd111111cccccccccccccc1111111cccccccc1111111111111c111111111ccccc1111111111bbbb1111111111111111111111111111111111111111
            666666611111dd111ddd1111111d1ddddd11111d11111ccccccccccccccccc11111111cccccccc111111c11111c11c111111ccccc1111111111bbbbbb111111111111111111111111111111111111111
            66666661111d1111dddd1111111dddddd11ddddd1111cccccccccccccccccc111111111cccccc1111111c111111111111111cccc1111111111bbbbbbbb11111111111111111111111111111111111111
            6666611111111111ddd111111111dddd111dddd111ccccccccccccccccccc111111111ccccccc11111111111111111111111ccc111111111111bbbbbbb11111111111111111111111111111111111111
            666611111dd1111ddd1111111111dddd11dddd111ccccccccccccccccccc111111111ccccccc11111111111111111111111ccc1111111111111bbbbbbb11111111111111111111111111111111111111
            66611111d11111dd111111d11111ddd1d1111111ccccccccccccccccccc1111111111ccccccc1111111111111111111111ccc1111111b1111111bbbbbbb1111111111111111111111111111111111111
            61111111111111d1d11111d1111dddd1d1111111ccccccccccccccccc11111111111cccccccc111111111111111111111cccc1111111b11111111bbbbbbb111111111111111111111111111111111111
            11ddd1111d1dddd111111d11111ddd1d1d111111cccccccccccccccccccc11111cccccccccc111111111111111111111ccccc111111bb111b1111bbbbbbbb11111111111111111111111111111111111
            1dddd11111dddd111111d1d11111d111dd11111ccccccccccccccccccccccccccccccccccc1111111111111111111ccccccc111111bbbbbbb1111bbbbbbbbb1111111111111111111111111111111111
            1ddd1111d1ddd111111dd1111111d111dd11111cccccccc1ccccccccccccccccccccccccc1111111111111111111ccccccc1111111bbbbbbbb111bbbbbbbbb1111111111111111111111111111111111
            1dd111111ddd1111111dd11111111d1ddd1111cccccccc11cccccccccccccccccccccccc1111111111111111111ccccccc111111bbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111
            111111ddddd1111d1dddd11111111d1ddd1111ccccc1111cccccccccccccccccccccccc111111111111111ccccccccccc11111111bbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111
            d11ddddddd1111111dddd1111111dddddc111cccccc1111ccccccccccccccccccccccc111111111111111cccccccccccc11111111bbbbbbbbbbbbbbbbb1111bb11111111111111111111111111111111
            1ddddddddd11d1ddddddd111111ddddddc111ccccc1111cccccccccccccccccccccccc11111111111111cccccccccccc111111111bbbbbbbbbbbbbbbbb11111b11111111111111111111111111111111
            ddddddddd1111ddddddd1111111dddddcc111ccccc1111cccccccc1cc1cccccccccc1111111111111cccccccccccccc11111111bbbbbbbbbbbbbbbbbbb11111bb1111111111111111111111111111111
            ddddddd1111ddddddddd111111ddddddcc11ccccc1111cccccccc1c11cccccccc11111111111111ccccccccccccccc11111111bbbbbbbbbbbbbbbbbbbb111111b1111111111111111111111111111111
            dddddd1111ddddddddd1d11111ddddddcc1cccccc1111ccccccccc11ccccccccc1111111111111cccccccccccccccc1b11111bbbbbbbbbbbbbbbbbbbbbb11111b1111111111111111111111111111111
            dddd11111ddddddddd1dd1111dddddddcccccccc11111ccccc1ccccccccccccc1111111111ccccccccccccccccccc11111111bbbbbbbbbbbbbbbbbbbbbbb1111bbb11111111111111111111111111111
            ddd11d1dddddddddd1d111d11dddddddcccccccc11111ccccc11111ccccccc11111111111cccccccccccccccccccb11111111bbbbbbbbbbbbbbbbbbbbbbb1111bbbb1111111111111111111111111111
            d11dddddddddddddd1111111dddddddccccccccc11111c11111111cccc11cc1111111111ccccccccccccccccccccbb1b11111bbbbbbbbbbbbbbbbbbbbbbbb1111bbbb111111111111111111111111111
            d1dddddddddddddd11111111ddddddcccccccccc1111111111111cccc1111111111111cccccccccccccccccccccbbb1b111111bbbbbbbbbbbbbbbbbbbbbbb1111bbbb111111111111111111111111111
            dddddddddddddddd1111111dddddccc111cccccc111111111111cccc1111111111111cccccccccccccccccccccb11bbb111111bbbbbbbbbbbbbbbbbbbbbbb1111bbbbb11111111111111111111111111
            dddddddddddddd11d1d111dddddc111111cccccc11111111111ccccc111111111111cccccccccccccccccccccbb11bbbbbb1111bbbbbbbbbb11111bbbbbbb1111bbbbbb1111111111111111111111111
            dddddddddddd111d1111ddddd111111111cccccc1111111111ccccc111111111cccccccccccccccccccc1cccc1111bbbbb11111bbbbbbbbb111111bbbbbbb1111111bbbb111111111111111111111111
            dddddddddd111111111dddddd111111111ccccc11111111111cccc11111111ccccccccccccccccccccc11ccc1111bbbbbb111111bbb1bbbb111111bbbbbbbb111111bbbbb11111111111111111111111
            dddddddddd11111111dddddd111111111cccccc11111c1111cccc111111ccccccccccccccccccccccc111cc1111bbbbbbb111111bbb1bbb111111bbbbbbbbb111111bbbbbb1111111111111111111111
            ddddddddd1111111ddddd1111111111cccccccc11111c11ccccc1111cccccccccccccccccccccccc111cccc111bbbbbbb111111111111111111bbbbbbbbbbbb11111bbbbbb1111111111111111111111
            ddddddd1111111dddddd1111111111cccccccc111111cc1ccccccccccccccccccccccccc11cccccc11cccc111bbbbbbbb111111111111111111bbbbbbbbbbbb11111bbbbbbb111111111111111111111
            dddd1111111dddddddd11111111111ccccccc111111cc1ccccccccccccccccccccccc1cc11cccccc1cccc1b1bbbbbbb11111111111111111111bbbbbbbbbbbb111111bbbbbbb11111111111111111111
            ddd111111dddddddddd1111111111cccccccc11111cccccccccccccccccccccccccc11c111cccccc1ccc1bb1bbbbbbb1111111111111111111bbbbbbbbbbbbb111111bbbbbbbb1111111111111111111
            dd111ddddddddddddd111111111ccccccccc111111c1cccccccccccccccccccccc1111c11ccccccccccb1bbbbbbbbbb1111111111111111111bbbbbbbbbbbbb111111bbbbbbbbb111111111111111111
            dddddddddddddddd111111111cccccccccc111111cccccccccccccccccccccccc111c1ccccccb1ccccc1bbbbbbbbbb1111111111111bbbbbbbbbbbbbbbbbbbb111111bbbbbbbbbb11111111111111111
            dddddddddddddd111111111cccccccccccc11111cccccccccccccccccccccccc1111cccccccb11bbb111bbbbbbbbb1111111b111bbbbbbbbbbbbbbbbbbbbbbb111111bbb111bbbbb1111111111111111
            dddddddddd111111111111cccccccccccc111111ccccccccccccccccccccccc11111c1cccc111111111bbbbbbb11111111bbb11bbbbbbbbbbbbbbbbbbbbbbbbbb1111bbb111bbbbb1111111111111111
            ddddddddd11111111111ccccccccccccc111111ccccccccccccccc1cccccccc11111cccc1111111bbbbbbbbbbb11111111bbb11bbbbbbbbbbbbbbbbbbbbbbbbbb1111bbb111bbbbbbb11111111111111
            dddddddd1111111111ccccccccccccccc11111c1ccccccccccc1111cccccccc111cccccc1111111bbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbb111bbbbbbbb1111111111111
            ddddddd111111ccccccccccccccccccc11111ccccccccccccc1111ccccccccccccccccb1111111bbbbbbbbb11111111bbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb111111bbb1111bbbbbbbbb11111111111
            dddddd111111cccccccccccccccccc1111111cc1ccccccc1c11111cccccccccccccccb11111bbbbbbbbbb111111111bbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbb111111bbb11111bbbbbbbbb1111111111
            dddddcc1111ccccccccccccccccc11111111ccccccccc11c11111ccccccccccccccbb1111bbbbbbbbbbbb1111111bbbbbbbbbbbbb11111111bbbbbbbbbbbbbb1111111bb111111bbbbbbbbb111111111
            dddcccc111ccccccccccccccccc1111111ccccccccccccc1111cccccccccccccbb111111111bbbbbbbbbb1111111bbbbbbbbbbb11111111111111bbbbbbbbbb11111111bbb111111bbbbbbbb11111111
            ddcccccccccccccccccccccccc1ccccc1cccccccccccc111111cccccccccccccb11111111bbbbbbbbbbb11111111bbbbbbbbb1111111111111111bbbbbbbbbb111111111bbb111111111bbbbbb111111
            dccccccccccccccccccc1cc1c1c1111cccccccccc1cc1111111cccccccccccc111111bbbbbbbbbbbbb1111111111111bbbbb11111111111111111bbbbbbbbbb111111111bbb1111111111bbbbbb11111
            ccccccccccccccccccccc111cc1111ccccccccc11cc111111cccccccccccccc111b11bbbbbbbbbbb111111111111111bbbb111111111111111111bbbbbbbbbb111111111bbbbbb1111111bbbbbbb1111
            cccccccccccccccccccc111111111ccccccc1cc11111111cccccccccbccccc111111bbbbbbbbb111b111111111111111111111111111111111bbbbbbbbbbbbb111111111bbbbbbbbbb1111bbbbbbb111
            cccccccccccccccccc11111111111cccccc1111111111111cccccccb11c1111111bbbbb111111111111111111111111111111111b111111bbbbbbbbbbbbbbbb11111111111bbbbbbbb1111bbbbbbbb11
            cccccccccccccccc11111111111ccccccc111111111ccccccccccbb111111111bbbbbbb11111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbb111111111111bbbbbbb1111bbbbbbbbbb
            cccccccccccc1c1cc1111111ccccccccc111111111ccccccccbbbb111111111bbbbbbbb11111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbb1111b111111111bbbbbb1111bbbbbbbbbb
            ccccccccc1cccccc11111cccccccccccc111111ccccccccccbbbbb11111bbbbbbbbbbbb1111111111111bb1111111111111bbbbbbbbbbbbbbbbbbbbbbbbbb11111bbb11111111111bbb111bbbbbbbbbb
            cccccccccccccc11111cccccccccccccc1111cccccccccbbbbbbb11bbbbbbbbbbbbbb111111111111bbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbbbbbb11111bbbb111111111111111bbbbbbbbbbbb
            cccccccccc11111111ccccccccccccccccccccccccccbbbbbb11b1bbbbbbbbbbbbbbb111111bb111bbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbb111111bbbbb1111111111111111bbbbbbbbbbb
            cccccccc111111111cccccccccccccccccccccccbbbbbbbb11111bbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbb11111111111111111bbbbbbbbbb
            cccccc111111111cccccccccccccccccccccccbbbbbbbbb11111bbbbbbbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbb1111111111111bbbbbbbbb
            ccccc1111111ccccccccccccccccccccccccbbb11bbbbb1bb1bbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbb111111111111bbbbbbb
            ccccc11111cccccccccccccccccccccccc1b1111111bbbbbbbbbbbbbb111111bbbbb1111bbbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbbbbb1111111111111bbbb
            ccc111cccccccccccccccccccccccccccb111111111bbbbbbbbbbbbb11111111111b1111bbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbb11111111111111111111111
            c11ccccccccccccccccccccccccccccb11111111111bbbbbbbbbbbb111111111111b1111bbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbb111111111111111111111111
            cccccccccccccccccccccccccccccbb111111111111bbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbb111111111111111111111111
            ccccccccccccccccccccccccccb111111111111111bbbbbbbbbb111111111111111111111bbbbbbbbbbbbbbbbbb1111111bbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbb1111111111111111bb111111
            cccccccccccccccccccccc11111111111111111111bbbbbbbbbb1111111111bb11111111bbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbb1111111111bbbbbbbbbbb111111111111111bb111bbbb
            cccccccccccccccccc111111111111111111111111bbbbbbbbbb111111111bbb11111111bbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbb111111111111bbbbbbbbbbbbb111111111111bbb111111b
            cccccccccccccccc11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbb1111111bbbbbbbbbbbbbb1111111111111bbbbbbbbbbbbb1111111111bbbbb111111b
            cccccccccccccbbbb111111111111111111b1111111bbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbbbbbbbb1111111bbbbbbbbbbbbb1111111111111bbbbbbbbbbbbbb111111111bbbbbb111111b
            cccccccbbbb1111111111111111111111bb11111111bbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbbbbbbbb1111111bbbbbbbbbbb111111111111111bbbbbbbbbbbbb111111111bbbbbbb111111b
            ccccc1111111111111111111111bbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbb1111111111111bbbbbbbbbbbbb11111111bbbbbbbbbbb11111111111111bbbbbbbbbbbbbb11111bbbbbbbbbbb111111b
            111111111111111111111bbbbbbbbbbbbbb1111111bbbbbbbbbbbbbbbbbbbbb11111111111111bbbbbbbbbbbb111111111bbbbbbbbbbb11111111111111bbbbbbbbbbbbbb1111bbbbbbbbbbbbb11111b
            1111111111111111111bbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb111111111111111bbbbbbbbbbb111111111bbbbbbbbbbbb1111111111111bbbbbbbbbbbbbbb111bbbbbbbbbbbbbb1111bb
            1111111111bbbbbbbbbbbbbbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbbbbbbbb11111111111111bbbbbbbbbbb1111111bbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        tiles.setCurrentTilemap(tilemap`nivel8`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(0, 12))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(17, 6))
    }
    if (nivel == 6) {
        scene.setBackgroundImage(img`
            7777777771111117777777777711111111111111177771771111111111111177777777777777777111111111111111111117777777711111177777771117777777777777777111177777777711771177
            1111111111111111177777777711111111111111111177711111111111111717717777777777777111111111111111177777777777777777777777777777777777777711117711117777777771771117
            1111111111111111111171111111111111111111111111111111111111117111177711777111111111111111111111711111777777777777711177777711111111111111171177111111111111111111
            1111111171171111111111111111111111111111111111111111111111111111111111171111111117111117111111171111111117111171111111771111111111111111117177111111111111111111
            1117111171177117111177117711111711111771111111111111111111111111111111771111171117111177111117771111711177111711111111117171111111117711111171717171111117171111
            1777117171777177711771777117777711777771111111111711177711717111711111771111771177177777117777771177711111111117711117111111111771171711711771177171171711171717
            7777777777777717177171711171771711771171171111777171777711711711711177771111771777177777777777771777777777777777771111111717711111111771711711777171771711771717
            7777777777717111117171711171711711771711717777777777777117717717177177771777777777777777777777771777717777777777771117111117771111117711117717777711717777771771
            7711177717717111117171711111177177117711171177777777711111177717177777777777777777777777777777777777717777777777771171117717711117117711771711777111717717711171
            7111177111171117111111117111171111717111117177771171111111777777777777777777777777171117777777171711117771717111111111777717711171117111711711711111711117111111
            1111111111111177111171117111111177711111177177117111111111711777111777777777771111117111711717111111117111111111711117111717771171111711711111117111711111111111
            7717117711777777111711177771171777777117777171777111111771171711171771111117717111171111711111111111111111111111711711711117711171717771171111117111111711111171
            7777117711177771171717177717777777777177777117777777111771111177771711177117171117171111171117711711111711111111711777771117111771717711771777717171711717117777
            7777771177717111111171777717777777777777111777777777177771711177771177771111777717177771777777111711117717111711711777777711777111771117777777177717711177717777
            7777777777717117111771771117777777177111717117777777777771771777771777771117777777777777717771111711177111171711117777777777777171717717771771177117111777717717
            7777777777711177111771717111111177111777111711111111171111111777777777777777777717777771717711711111177171171117117777777777777171177717711717171717111777717177
            7777777777717177117771177177711177777777177777777777117771771777111177777771171117711111111111111111777777771111177777777777777771777771177177117717111777711117
            7777777777777777777777777177771717777777777777777777777717771711777111171117117711177111711111111111777777771711777777777777777777777777777177117711117777711117
            7777777777777777777777777777771177777777777777777777777777771177777117117771177717777711717777111777777777777711777777777777777777777777777777177711117777717117
            7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777771177777777777777711777777777776677777777767777777777771117777717777
            7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777771777777777767
            7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
            6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
            6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
            6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
            6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
            6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
            66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
            66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
            66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
            66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
            66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
            6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
            6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
            6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
            bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
            bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
            bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
            bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
            bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
            bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
            bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
            bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
            bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
            bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
            b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
            b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
            b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
            b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
            dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
            9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
            9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
            9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
            9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
            99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
            99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
            9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
            9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
            999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
            d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
            dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
            dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
            dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
            d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
            9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
            d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
            ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
            dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
            ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddeeeeeeeeeebbbbbbddddddddddddddddddddddddeeeeeeeeeebbbbbbddddddddddddddddddddddddeeeeeeeeeebbbbbbddddddddddddddddddddddddeeeeeeeeeebbbbbbddddd
            ddddddddddddddeeeeeeeeeeeeeeeeeeeebdddddddddddddddddddeeeeeeeeeeeeeeeeeeeebdddddddddddddddddddeeeeeeeeeeeeeeeeeeeebdddddddddddddddddddeeeeeeeeeeeeeeeeeeeebddddd
            dddddddddddeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeedddd
            ddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedd
            dddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        tiles.setCurrentTilemap(tilemap`nivel11`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(0, 12))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(45, 11))
    }
    if (nivel == 7) {
        scene.setBackgroundImage(img`
            66666666666666666666666666666666666666666666666666666666666666666666666999999999666661111111111cccccccccccccccccccccccccccccccccccccccccccc111ccccccccccccccc111
            66666666666669999966666666666666666666666666666666666666666699999999999999999999966611111111111cccccccccccccccccccccccccccccccccccccccccccc11cccccccccccccccccc1
            666666669999969966666666666666966666999696666666666666699999999999999999999999999666111111111cccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccccccc1
            66666666999999999999999999999999999999999666666666666666666666999999999999999999666611111111cccccccccccccccccccccccccccccccccccccccccccccc11cccccccccccccccccc11
            6666666699999999999999999999999999999999999999666666666616666666999999999999999966661111111ccccccccccccccccccccccccccccccccccccccccccccccc11c1cccccccccccccccc11
            666666666669999999999999999999999999999999966699666666611666699999999999999999999666111111cccccccccccccccccccccccccccccccccccccccccccccccc11ccccccccccccccccc11c
            66699999999999999999999999999999999999999999999666666661166669999999999999999999666661111c1ccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccc1cc
            999999999999999999999999999999999999999999999666666666111166666669999999999999999966c1111ccccccccccccccccccccccccccccccccccccccccccccccccc1ccccccccccccccc1cc1c1
            66999999999999999999999999999999999999996666666666666111b1666666699999999999999996661111ccccccccccccccccccccccccccccccccccccccccccccccccc11c1ccccccccccccc1c1cc1
            6669966666999999999999999999999999999966666666666666611bb16666666669999999999996666c111cccccccccccccccccccccccccccccccccccccccccccccccccc11cccccccccccccc11ccc11
            6666699999999999999999999999999999966666666666666666111bb11666666666669999999666666111ccccccccccccccccccccccccccccccccccccccccccccccccccc11cccccccccccccc11c1cc1
            6666669999999999999999999999999966666666666666666666111bbb166666666666666666666666c111ccccccccccccccccccccccccccccccccccccccccccccccccccc11ccccccccccccc111ccc11
            66666666699999999999999966666666666666666666696666661b1bbb116666666666666666666666c11c1cccccccccccccccccccccccccccccc11ccccccccccccccccc11c1ccccccccccc111ccc111
            66669999999999999996666666666666666666666699996666611b1bbbb16666666666666666666666c1ccccccccccccccccccccccccccccccccc11ccccccccccccccccc11c1ccccccccccc11cc1c111
            666666699999999996666666666666666666666699999996666111bbbbb1166666666666666666666cccccccccccccccccccccccccccccccccccc11ccccccccccccccccc11cccccccccccc1ccc1c1111
            666699999999996666666666666666666666999999999966661111bbbbbb16666666666666666666ccccccccccccccccccccccccccccccccccccc1ccccccccccccccccc11c1cccccccccc1c1ccc11111
            669999999999966666666666166666669999999999999966611111bbbbb1b6666666666666666666ccccccccccccccccccccccccccccccccccccc1ccccccccccccccccc11c1cccccccccccc1c1111111
            9999999999996666666666611666666969999999999996666111bbbbbbb1b666666666666666666ccccccccccccccccccccccccccccccccccc1c1ccccccccccccccccc111ccccccccccccc11c1111111
            9969999999666666666666611666666699999999999966661111bbbbbbb1166666666666666666cccccccccccccc1ccccccccccccccccccc1ccc1ccccccccccccccccc111cccccccccccc11111111111
            666666666666666666666661166666666999999999999996111bbbb1bbbb116666666699996666ccccccccccccc11ccccccccccccccccccccccccccccccc11c1ccccc111ccccccccccc1c11111111111
            666666666666666666666611166666669999999999999999111bbb11bbbb11666666999999666cccccccccccc111ccccccccccccccccccc1cc1cccccccc111c1ccccc111cccccccccc1c111111111111
            66666666666666666666611116666699999999999996666111bbbb11bbbb11666669999996666ccccccccccc111ccccccccccccccccccc1cc1ccccccccc11ccccccc111cccccccccccc1111111111111
            66666666666666666666d1111d66666999999999966666611bbbbb11bbbbb1b6666666666666ccccccccccc111cccccccccccccccccccccc11ccccccccc11ccccccc1111cccccccccc11111111111111
            6666666666666666666611111166666669999999666666611bbbbb11bbbbbbb6666666666666cccccccccc111ccccccccccccccccccccc1111cccccccc111cccccc1111cccccccccc111111111111111
            666666666666666666661d1d116666666699696666666611bbbbb111bbbbb1bbb6666666666cccccccccc111cccccccccccc111cccccc1111cccccccc111ccccccc1111cccccc1c11111111111111111
            6666666666666666666d111d116666666666666666666111bbbbb111bbbbb11bb6666666666cccccccccc111cccccccc11111cccccc1c1111cccccc11111cccccc1111cccccc11c11111111111111111
            66666666666666666661d1ddd1666666666666666666111bbbbbb1b11bbbbb11bbbbbb6666cccccccccc111cc1ccccc1111ccccccc1c11111ccccc1111111cccc11111ccccc111111111111111111111
            66666666666666666661d1ddd1166666666666666666111bbbbb11bb1bbbbb111111bbbbbbcccccccccc111cccccc11111ccccccc11c11cccccccc111111cccc11111ccccc1111111111111111111111
            666999996669666666111111d116666666666666661111bbbbb111bbb11b11111111111bbbcccccccccc11ccccccc11111cccccc11c111cccccccc111111cccc11111cccc11111111111111111111111
            6699966999966666661d111ddd1666666666666666111bbbbb111bbbbb1111bbb11b11bbbbccccccccc111c1ccccc1111ccccccc11111cccccccccc11111ccc1111cccccc11111111111111111111111
            9999999999966666661d1d1ddd166666666666666611bbbb11111bbbb1111bbbbbb11bbbccccccccccc11ccccccc111ccccccccc1111ccccccccccc111cccc11111ccccc111111111111111111111111
            9669999996666666661d111ddd16666666666666661bbbb111b1bbbbb111bbbbbbbbbcccccccccccccc11ccccccc111ccccccccc111cccccccccccccccccc11111ccccc1111111111111111111111111
            9999999999666666611111ddddd6666666666666611bbb11111bbbbb111bbbbbbbccccccccccccccccc111cccccc11cccccccccccccccccccccccccccccc11111cccccc1111111111111111111111111
            6999999996666666611d11ddddd666666666666661bbbb11111bbbbb111bbbbbbcccccccccccccccccccccccccc111ccccccccccccccccccccccccccccc111111ccc1c11111111111111111111111111
            9999999966666666611d11ddd1d6666666666666bbbbb1b111bbbbbb111bbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111ccc11c11111111111111111111111111
            999996666666666661111dddd1dd66666666611bbbbb1111b1bbbbb111bbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111ccc11111111111111111111111111111
            99699666666666666111dddd11ddd666666611bbbbb11111bbbbbb111bbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111ccc111111111111111111111111111111
            99966666666666666111dddd11dddd11661611bbbb11111bbbbb11111bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111ccc111111111111111111111111111111
            66666666666666666111dddd11dddd111611bbb1111111bbbbb11111bbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111c1c111111111111111111111111111111
            66666666666666666111ddd11111dddd1111bb1111111bbbbb11b11bccccccccccccc11cccccccccccccccccccc11ccccccccccccccccccccccccccc1111111c1c111111111111111111111111111111
            6666666666666661111dddd111111ddd111bbb11b1bb1bbb11111bbcccccccc11111111cc1cccccccccccccccc111ccccccccccccccccccccccccccc1111111111111111111111111111111111111111
            666666666666666111ddddd1111d1ddd111bb1111bbbbbbb111bbbccccccc1111111111cccccccccccccccccc1111ccccccccccccccccccccccccccc1111111111111111111111111111111111111111
            66666666666666111ddddd1111d111dddd1b1111bbbbbbbb11bbbccccccc1111111111ccccccccccccccccc111111ccccccccccccccccccccc11bcccc111111111111111111111111111111111111111
            66666666666666111ddddd1dd1111d1ddd1bbbbbbbbbbbbbbbbcccccccc111111111ccccccccccccccc1111111111ccccccccc111cccccccc111bb1cc111111111111111111111111111111111111111
            66666666666661111dddd11d111d111d1111bbbbbbbbbbbbbbcccccccc111111111cccc1ccccccccc11111111111cccccccccc111cccccccc111bb11cc11111111111111111111111111111111111111
            6666666666666111ddddd1dd11111111d111bbbbbbbbbbbbbccccccc1111111111cccc1c1cccccccc11111111111ccccccccc1111ccccccc1111bb11cc11111111111111111111111111111111111111
            6666666666661111ddddd1dd111111111ddddbbbbbbbbbb11c111111111111111cccc1111cccccccc11111111111cccccccc11111cccccc11111bb111111111111111111111111111111111111111111
            6666666666611111dddd1dd11111111111ddddbbbbbbbb111111111111111111ccccc1111ccccccc111111111c1ccccccccc11111cccccc11111bbb11111111111111111111111111111111111111111
            666666666661111ddd111dd111d1111111dddddbbbbb1111111111111111111cccccc1111ccccccc1111111111ccccccccc11111cccccc111111bbb11111111111111111111111111111111111111111
            66666666661111ddd111ddd111d111111111ddddbbb111111111111111c11ccccccc1111ccccccc111111111c1ccccccc1111111cccc11111111bbbb1111111111111111111111111111111111111111
            66666666661111ddd11ddd11111d111111111dddddb11111111111111cccc1ccccc11111ccccccc1111111111ccccccc1111111cccc111111111bbbb1111111111111111111111111111111111111111
            6666666666111dd1111ddd11111d111111111dddddd11111111111ccccccccccccc11111cccccc11111111111c1ccccc111111ccccc111111111bbbb1111111111111111111111111111111111111111
            66666666611d111111dddd11111dd111111111ddddd11111111111cccccccccc11c1111ccccccc1111111111c111c1c111111ccccc1111111111bbbb1111111111111111111111111111111111111111
            6666666611111dd111ddd1111111d11d11d1111dddd111111cccccccccccccc1111111cccccccc1111111111111c111111111ccccc1111111111bbbb1111111111111111111111111111111111111111
            666666611111dd111ddd1111111d1ddddd11111d11111ccccccccccccccccc11111111cccccccc111111c11111c11c111111ccccc1111111111bbbbbb111111111111111111111111111111111111111
            66666661111d1111dddd1111111dddddd11ddddd1111cccccccccccccccccc111111111cccccc1111111c111111111111111cccc1111111111bbbbbbbb11111111111111111111111111111111111111
            6666611111111111ddd111111111dddd111dddd111ccccccccccccccccccc111111111ccccccc11111111111111111111111ccc111111111111bbbbbbb11111111111111111111111111111111111111
            666611111dd1111ddd1111111111dddd11dddd111ccccccccccccccccccc111111111ccccccc11111111111111111111111ccc1111111111111bbbbbbb11111111111111111111111111111111111111
            66611111d11111dd111111d11111ddd1d1111111ccccccccccccccccccc1111111111ccccccc1111111111111111111111ccc1111111b1111111bbbbbbb1111111111111111111111111111111111111
            61111111111111d1d11111d1111dddd1d1111111ccccccccccccccccc11111111111cccccccc111111111111111111111cccc1111111b11111111bbbbbbb111111111111111111111111111111111111
            11ddd1111d1dddd111111d11111ddd1d1d111111cccccccccccccccccccc11111cccccccccc111111111111111111111ccccc111111bb111b1111bbbbbbbb11111111111111111111111111111111111
            1dddd11111dddd111111d1d11111d111dd11111ccccccccccccccccccccccccccccccccccc1111111111111111111ccccccc111111bbbbbbb1111bbbbbbbbb1111111111111111111111111111111111
            1ddd1111d1ddd111111dd1111111d111dd11111cccccccc1ccccccccccccccccccccccccc1111111111111111111ccccccc1111111bbbbbbbb111bbbbbbbbb1111111111111111111111111111111111
            1dd111111ddd1111111dd11111111d1ddd1111cccccccc11cccccccccccccccccccccccc1111111111111111111ccccccc111111bbbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111
            111111ddddd1111d1dddd11111111d1ddd1111ccccc1111cccccccccccccccccccccccc111111111111111ccccccccccc11111111bbbbbbbbbbbbbbbbbbbbbb111111111111111111111111111111111
            d11ddddddd1111111dddd1111111dddddc111cccccc1111ccccccccccccccccccccccc111111111111111cccccccccccc11111111bbbbbbbbbbbbbbbbb1111bb11111111111111111111111111111111
            1ddddddddd11d1ddddddd111111ddddddc111ccccc1111cccccccccccccccccccccccc11111111111111cccccccccccc111111111bbbbbbbbbbbbbbbbb11111b11111111111111111111111111111111
            ddddddddd1111ddddddd1111111dddddcc111ccccc1111cccccccc1cc1cccccccccc1111111111111cccccccccccccc11111111bbbbbbbbbbbbbbbbbbb11111bb1111111111111111111111111111111
            ddddddd1111ddddddddd111111ddddddcc11ccccc1111cccccccc1c11cccccccc11111111111111ccccccccccccccc11111111bbbbbbbbbbbbbbbbbbbb111111b1111111111111111111111111111111
            dddddd1111ddddddddd1d11111ddddddcc1cccccc1111ccccccccc11ccccccccc1111111111111cccccccccccccccc1b11111bbbbbbbbbbbbbbbbbbbbbb11111b1111111111111111111111111111111
            dddd11111ddddddddd1dd1111dddddddcccccccc11111ccccc1ccccccccccccc1111111111ccccccccccccccccccc11111111bbbbbbbbbbbbbbbbbbbbbbb1111bbb11111111111111111111111111111
            ddd11d1dddddddddd1d111d11dddddddcccccccc11111ccccc11111ccccccc11111111111cccccccccccccccccccb11111111bbbbbbbbbbbbbbbbbbbbbbb1111bbbb1111111111111111111111111111
            d11dddddddddddddd1111111dddddddccccccccc11111c11111111cccc11cc1111111111ccccccccccccccccccccbb1b11111bbbbbbbbbbbbbbbbbbbbbbbb1111bbbb111111111111111111111111111
            d1dddddddddddddd11111111ddddddcccccccccc1111111111111cccc1111111111111cccccccccccccccccccccbbb1b111111bbbbbbbbbbbbbbbbbbbbbbb1111bbbb111111111111111111111111111
            dddddddddddddddd1111111dddddccc111cccccc111111111111cccc1111111111111cccccccccccccccccccccb11bbb111111bbbbbbbbbbbbbbbbbbbbbbb1111bbbbb11111111111111111111111111
            dddddddddddddd11d1d111dddddc111111cccccc11111111111ccccc111111111111cccccccccccccccccccccbb11bbbbbb1111bbbbbbbbbb11111bbbbbbb1111bbbbbb1111111111111111111111111
            dddddddddddd111d1111ddddd111111111cccccc1111111111ccccc111111111cccccccccccccccccccc1cccc1111bbbbb11111bbbbbbbbb111111bbbbbbb1111111bbbb111111111111111111111111
            dddddddddd111111111dddddd111111111ccccc11111111111cccc11111111ccccccccccccccccccccc11ccc1111bbbbbb111111bbb1bbbb111111bbbbbbbb111111bbbbb11111111111111111111111
            dddddddddd11111111dddddd111111111cccccc11111c1111cccc111111ccccccccccccccccccccccc111cc1111bbbbbbb111111bbb1bbb111111bbbbbbbbb111111bbbbbb1111111111111111111111
            ddddddddd1111111ddddd1111111111cccccccc11111c11ccccc1111cccccccccccccccccccccccc111cccc111bbbbbbb111111111111111111bbbbbbbbbbbb11111bbbbbb1111111111111111111111
            ddddddd1111111dddddd1111111111cccccccc111111cc1ccccccccccccccccccccccccc11cccccc11cccc111bbbbbbbb111111111111111111bbbbbbbbbbbb11111bbbbbbb111111111111111111111
            dddd1111111dddddddd11111111111ccccccc111111cc1ccccccccccccccccccccccc1cc11cccccc1cccc1b1bbbbbbb11111111111111111111bbbbbbbbbbbb111111bbbbbbb11111111111111111111
            ddd111111dddddddddd1111111111cccccccc11111cccccccccccccccccccccccccc11c111cccccc1ccc1bb1bbbbbbb1111111111111111111bbbbbbbbbbbbb111111bbbbbbbb1111111111111111111
            dd111ddddddddddddd111111111ccccccccc111111c1cccccccccccccccccccccc1111c11ccccccccccb1bbbbbbbbbb1111111111111111111bbbbbbbbbbbbb111111bbbbbbbbb111111111111111111
            dddddddddddddddd111111111cccccccccc111111cccccccccccccccccccccccc111c1ccccccb1ccccc1bbbbbbbbbb1111111111111bbbbbbbbbbbbbbbbbbbb111111bbbbbbbbbb11111111111111111
            dddddddddddddd111111111cccccccccccc11111cccccccccccccccccccccccc1111cccccccb11bbb111bbbbbbbbb1111111b111bbbbbbbbbbbbbbbbbbbbbbb111111bbb111bbbbb1111111111111111
            dddddddddd111111111111cccccccccccc111111ccccccccccccccccccccccc11111c1cccc111111111bbbbbbb11111111bbb11bbbbbbbbbbbbbbbbbbbbbbbbbb1111bbb111bbbbb1111111111111111
            ddddddddd11111111111ccccccccccccc111111ccccccccccccccc1cccccccc11111cccc1111111bbbbbbbbbbb11111111bbb11bbbbbbbbbbbbbbbbbbbbbbbbbb1111bbb111bbbbbbb11111111111111
            dddddddd1111111111ccccccccccccccc11111c1ccccccccccc1111cccccccc111cccccc1111111bbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbb111bbbbbbbb1111111111111
            ddddddd111111ccccccccccccccccccc11111ccccccccccccc1111ccccccccccccccccb1111111bbbbbbbbb11111111bbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbb111111bbb1111bbbbbbbbb11111111111
            dddddd111111cccccccccccccccccc1111111cc1ccccccc1c11111cccccccccccccccb11111bbbbbbbbbb111111111bbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbb111111bbb11111bbbbbbbbb1111111111
            dddddcc1111ccccccccccccccccc11111111ccccccccc11c11111ccccccccccccccbb1111bbbbbbbbbbbb1111111bbbbbbbbbbbbb11111111bbbbbbbbbbbbbb1111111bb111111bbbbbbbbb111111111
            dddcccc111ccccccccccccccccc1111111ccccccccccccc1111cccccccccccccbb111111111bbbbbbbbbb1111111bbbbbbbbbbb11111111111111bbbbbbbbbb11111111bbb111111bbbbbbbb11111111
            ddcccccccccccccccccccccccc1ccccc1cccccccccccc111111cccccccccccccb11111111bbbbbbbbbbb11111111bbbbbbbbb1111111111111111bbbbbbbbbb111111111bbb111111111bbbbbb111111
            dccccccccccccccccccc1cc1c1c1111cccccccccc1cc1111111cccccccccccc111111bbbbbbbbbbbbb1111111111111bbbbb11111111111111111bbbbbbbbbb111111111bbb1111111111bbbbbb11111
            ccccccccccccccccccccc111cc1111ccccccccc11cc111111cccccccccccccc111b11bbbbbbbbbbb111111111111111bbbb111111111111111111bbbbbbbbbb111111111bbbbbb1111111bbbbbbb1111
            cccccccccccccccccccc111111111ccccccc1cc11111111cccccccccbccccc111111bbbbbbbbb111b111111111111111111111111111111111bbbbbbbbbbbbb111111111bbbbbbbbbb1111bbbbbbb111
            cccccccccccccccccc11111111111cccccc1111111111111cccccccb11c1111111bbbbb111111111111111111111111111111111b111111bbbbbbbbbbbbbbbb11111111111bbbbbbbb1111bbbbbbbb11
            cccccccccccccccc11111111111ccccccc111111111ccccccccccbb111111111bbbbbbb11111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbb111111111111bbbbbbb1111bbbbbbbbbb
            cccccccccccc1c1cc1111111ccccccccc111111111ccccccccbbbb111111111bbbbbbbb11111111111111111111111111111111bbbbbbbbbbbbbbbbbbbbbbb1111b111111111bbbbbb1111bbbbbbbbbb
            ccccccccc1cccccc11111cccccccccccc111111ccccccccccbbbbb11111bbbbbbbbbbbb1111111111111bb1111111111111bbbbbbbbbbbbbbbbbbbbbbbbbb11111bbb11111111111bbb111bbbbbbbbbb
            cccccccccccccc11111cccccccccccccc1111cccccccccbbbbbbb11bbbbbbbbbbbbbb111111111111bbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbbbbbb11111bbbb111111111111111bbbbbbbbbbbb
            cccccccccc11111111ccccccccccccccccccccccccccbbbbbb11b1bbbbbbbbbbbbbbb111111bb111bbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbb111111bbbbb1111111111111111bbbbbbbbbbb
            cccccccc111111111cccccccccccccccccccccccbbbbbbbb11111bbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbb11111111111111111bbbbbbbbbb
            cccccc111111111cccccccccccccccccccccccbbbbbbbbb11111bbbbbbbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbb1111111111111bbbbbbbbb
            ccccc1111111ccccccccccccccccccccccccbbb11bbbbb1bb1bbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbb111111111111bbbbbbb
            ccccc11111cccccccccccccccccccccccc1b1111111bbbbbbbbbbbbbb111111bbbbb1111bbbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbbbbbbb1111111111111bbbb
            ccc111cccccccccccccccccccccccccccb111111111bbbbbbbbbbbbb11111111111b1111bbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbb11111111111111111111111
            c11ccccccccccccccccccccccccccccb11111111111bbbbbbbbbbbb111111111111b1111bbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbb111111111111111111111111
            cccccccccccccccccccccccccccccbb111111111111bbbbbbbbbb11111111111111111111bbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbbb111111bbbbbbbbbbbbbb111111111111111111111111
            ccccccccccccccccccccccccccb111111111111111bbbbbbbbbb111111111111111111111bbbbbbbbbbbbbbbbbb1111111bbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbb1111111111111111bb111111
            cccccccccccccccccccccc11111111111111111111bbbbbbbbbb1111111111bb11111111bbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbb1111111111bbbbbbbbbbb111111111111111bb111bbbb
            cccccccccccccccccc111111111111111111111111bbbbbbbbbb111111111bbb11111111bbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbb111111111111bbbbbbbbbbbbb111111111111bbb111111b
            cccccccccccccccc11111111111111111111111111bbbbbbbbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbb1111111bbbbbbbbbbbbbb1111111111111bbbbbbbbbbbbb1111111111bbbbb111111b
            cccccccccccccbbbb111111111111111111b1111111bbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbbbbbbbb1111111bbbbbbbbbbbbb1111111111111bbbbbbbbbbbbbb111111111bbbbbb111111b
            cccccccbbbb1111111111111111111111bb11111111bbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbbbbbbbb1111111bbbbbbbbbbb111111111111111bbbbbbbbbbbbb111111111bbbbbbb111111b
            ccccc1111111111111111111111bbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbb1111111111111bbbbbbbbbbbbb11111111bbbbbbbbbbb11111111111111bbbbbbbbbbbbbb11111bbbbbbbbbbb111111b
            111111111111111111111bbbbbbbbbbbbbb1111111bbbbbbbbbbbbbbbbbbbbb11111111111111bbbbbbbbbbbb111111111bbbbbbbbbbb11111111111111bbbbbbbbbbbbbb1111bbbbbbbbbbbbb11111b
            1111111111111111111bbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbb111111111111111bbbbbbbbbbb111111111bbbbbbbbbbbb1111111111111bbbbbbbbbbbbbbb111bbbbbbbbbbbbbb1111bb
            1111111111bbbbbbbbbbbbbbbbbbbbbbbb1111bbbbbbbbbbbbbbbbbbbbbbbbb11111111111111bbbbbbbbbbb1111111bbbbbbbbbbbbbbbb11111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            `)
        tiles.setCurrentTilemap(tilemap`nivel9`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(0, 12))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(14, 8))
    }
    if (nivel == 8) {
        scene.setBackgroundImage(img`
            888888888888888888888888888888888888888888889998888888888888888888888888888888888888888888888888888888888ddddddddddddddddddddddddddddddddddddddddddddddddddddbbb
            9999888888888999999999999999999999999999999999999999999999999999999999999999999988888888888899999888888888ddddddddddddddddddddddddddddddddddddddddddddddddddbbbb
            888899998888889999999999988999999999999999999999999999999999999999999999999999999998888999999999988888888dddddddbddddbbddddddddddddddddddddddddddddddddddddddbbb
            888889888999899988899999888888899999999999999999999999999999999999999999999999999888899999999999999999888dddddbdddbbbdddddddddddddddddddddddddddddddddddddbbdddb
            888899999999999999999999999999999999999988899999999999999998888899999999999999999999999998b88888888888988888dddddddddbbddbddddddddddddddddddddddddddddddddddddbb
            8888888889998889998999999999999999999999999999999999999999888888888888889999999999998888bbbb88888888889888ddddddddbbddddddddddddddddddddddbbbdddbbdddbddddbbbbbb
            88888888999999999888888888888899999999998888899888888888999999998888888888999988888888dddddbbbb8888889888dddddddddddddbbbddbbbddddbbddddddddddddddddddddbbbbbbbb
            88888888889999999999999888888888888888888888889999999999999898888888899999999888888888dddbbbbbbb88889888888ddddddddddddbddddddbbbbbbbbbbbbbbbbbbddbbbdddbbbbbbbb
            8888888888998888888888888888888888888888888888899998899999998899999999999988888888888ddddbbbbbbb888988888ddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbb
            bb888d888888888888888888888888888888888888888899999998889988899999999899888888888888ddddddbbbbbbb88988888888ddd8ddddd88bbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbb8
            bbbbddbbbbbbbbb88888888888888888888dddd8888888888888999988888888888899888888888888ddddddddbbbbbb8888998888888888888888888888b888888888888bbbbbbbbbbbbbbbbbbbbb88
            bbddddddddbbbbbb8888888888ddddddddddd8888888888899998889988888888999888888888888dddddddddddbbbbbb8888899999999988888888888888888888888888bbbbb8bbbbb88bbbbbbb888
            bddbbbbbbdddddddddddd88ddddddddd8888888888888889999999988888888998888888888888ddddddddddddbbdbbbb8888889999999999999999999888888888888888888888b888888bb8bb88888
            ddbddddddddddddddddddddd888888888888888888888888888888888888888999999998888888dddddddddddddbbbbbb888889999999999998888888888899999988888888888888888888888888888
            dbdddddddddbbddddddddddddddddddd8888888888888888888888888888888888888998888888ddddddddddbbbbbbbbbb88888899999999999999999999999999999999988888888888888888888888
            ddddddddddbdddddddddddddd88ddd88dddd888888888888888888888888888888889888888888dddddddddddbbbbbbbbb88888888889999888889999999999999998888888888888888888888888888
            811ddddddddbbbbbbbbddddddddddddddddddddddd8888888dd888888888888888898888888888dddddd88dbbbbbbbbbbbb8888888888888889999999999999988888888888888888888999888888998
            111dddddddddbbdddddddddddddddddddddd88dddddddddddddd8888888888888889888888888888888888bbbbbbbbbbb888888888888889999999999998888999999888888888899999988888889998
            111bbdddddddddbbbbbbbddddbbb88ddddddddddddddddd8888888dd88888888888899999988888888888bbbbbbbb8888888888888888899999999999999999999988999999999999998888999999988
            111bbbdddddddddddbbbdddddddddddbbbdddddbb8dddddddddddddd88888888888888998888888888888888888888888888888888888898899988999888899999999999999889999999999889998888
            111bbbbbbbdddddddddddddddddddddddddddddddddddddddbb88888dddddd88888889999999998888888888888888888888888888888889999999999999999998999998889998888888888999888888
            c11bbbbbbbbbbbdddddddddddddddddddddddddddbbbddddddddddddddd888ddd88888888888988888888888889999888888888888888888999989999999999999899889998888999988888999998888
            c1111bbbbbbbbbbbddddddddddddddbbddddddbddddddddbbddd8888888bbbbbdd8888888899999999999999998998888888888899999988999999999999988888999998899999998888999999888888
            cc1c11bbbbbbbbbbbbbbddddddddddddbdddbbbbbbbdddddddddddbb88bbbbdbddd888888888888888888889999888888899999988999999998899999998898899899999989999999999999988888888
            cc1cc1bbbbbbbbbbbbbbbddddddddddddddddddddddddddbbddddddbbbbbbbbdbd8dd888888888888899999999999999998888999999999999999999989998999999888899999998999998899888888c
            ccccc111bbbbbbbbbbbbbbdddddddddddddddddddddddddddbbbbbbbbbbbbdddbb88d888888999999999888899999999999999999888999999999998999899899999889989988999999999998888888c
            ccccc111bbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbddbbbd8d889999999999999999999999999999888888899999999999999999898999999999888999988999999888888888cc
            ccccc1c111bbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddbbbbdddd8d88888888888888999999999988898888888999999999999999999999999999999999998999999998888888888c8c
            cccccc11111bbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddbbdddddd8dd8888888888888999999999999999999999999999999999999999989999999998889999999999888888888888ccc
            ccccccc1111111bbbbbbbbbbbbbddddddddddddddddddddddddddddddbddddddbbddd8888888888888888888888889988899999999999999999999999999999999998999999999988888888888888ccc
            cccccccc11111111bbbbbbbbbbbbbdddddddddddddddddddddddddddbdbbbbbbddddd888888888888888888888889899999999999999999999999999999999999999999999999988888888888888cccc
            cccccccccc11111111bbbbbbbbbbbbbbddddddddddddddddddddddddbbdddddddddddddd88888888888888888889999999988899999999999999999999999999999999998888888888888888811ccccc
            1cccccccccccc111111bb1bbbbbbbbbbbbbbdddddddddddddddddddddddddddbbdddd8dd8dd8888888888888889999998888999999999999999999999999999999999888888888888888111111cccccc
            1c11cc11cccccc111111111bbbbbbbbbbbbbbbbdddddddddddddddddddddddbdddbddddddd88888888888888899999999999999999999999999999999999999999999888888888888111111ccccccccc
            1c11cc111ccccccc1c111111bbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddd8d88888888888888899899999999999999999999999999999999999999999888888881111111c11cccccccc111
            1c1c111111ccccccccc111111bbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbbdddddd888888888888888889999999999999999999999999999999999999999998888888111111111cccccccccc111c
            11cc1c1c11cccccccccccc11111bbbbbbbbbbbbbbbbbbbbbbbddddddddddbbdddddd8dd88888888888888888999999999999999999999999999999999999999988888ccc1111111111ccccccccc11111
            111111cc111cccccccccccc11111111bbbbbbbbbbbbbbbbbbddddddddbbbbbdbdddddd88888888888888889998899999999999999999999999999999999999888888c1111111ccccccccccccccc11111
            111111cc11cccccccccccccccc111111bbbbbbbbbbbbbbbbbbbbbbbdddddbbddddb88888888888888889998999999999999999999999999999999999888888888811111cc1cccccccccccccccc111111
            1111111c11ccccccccccccccccc1111111bbbbbbbbbbbbbbbbbbbdddddddddddddb8888888888888999999999988888999999999999999999999998818888888811111cc11cccccccccccccc11111111
            111111111111c1cccccccccccccc11111111bbbbbbbbbbbbbbbbbbbdddddddddd88888888999999999988889988888999999999999999911199888811111188c1111ccc1c111ccccccccccc111111111
            111111111c1c11cccccccccccccccc1111111bbbbbbbbbbbbbbbbbddddddbd888888888889999998888899988888999999999999999911111111111111111c111ccccc111c11cccccccccc1111111111
            1111111111111ccccccccccccccccc11111111bbbbbbbbbbbbbbbbbbddbbb88888888888888899999999999999999999999999999911111111111111cccc111cccc111cc11cccccccccc111c11111111
            1111111111c111ccccccccccccccccccc111111bbbbbbbbbbbbbbbbbbbbbb8888888888888888999999999999999999999999999111111111111cccccc111ccccccccc11cccccccccc1111111111111c
            1111111111c111ccccccccccccccccccccc111111bbbbbbbbbbbbbbbbb9999988888888888899999999999999999999999999999111111111cccccccc111cccccccc11cccc1cccccc11111c111111111
            11111111111c11ccccccccccccccccccccccc111111b1bb1bbbbbbb999999988888888899999999999999999999999999999999111111111111c1111c11cccccc111c11111c1ccc11111cc1111111c1c
            11111111111c11ccccccccccccccccccccccccc111111111bbbbbbb99b9999998888888899999999999999999999999999999911111111111cc11cc11cccc11111111cccc1111111111cc111111111cc
            11111111111c1c1c1ccccccccccccccccccccccc1c11111111bbbbbbbb9999998888888999999999999999999999999999919911111111cc1111111ccc1111111cccccc11c1111111ccc1111111111cc
            11111111111c1c1111ccccccccccccccccccccccccc1111111111bbbbbb9999999889999999999999999999999999999911111111111cccc1111ccccccccccccccccc11ccc11111111111111111111cc
            1111111111111111c1cccccccccccccccc1cccc1cccccc111111bbbbbbbb9999999999999999999999999999999999111111111111ccc111ccccccccccccccccccc11c11111111111111111111111ccc
            1111111111111c11c1ccc1cccccccccccc11ccc1c1ccc1cc1111111bbbbb99999899999999999999999999919ccccc1c11c111111cc1111cccccccccccccccccc11c111111111111111111111111cccc
            111111111111111111c1c11c1ccccccccc1c1111c1ccc11ccccc11b11b119999999999999999999999999911111111c1111c1111c1111cccccccccccccccccc11c1111cc111111111111111111111111
            11111111111111111111c1111ccccccccc1ccc11111cc1c1cccccc1111119999999999999999999999c111111111111111111111111ccccccccccccccccc111c111c1111cc1111111111111111111111
            1111111111111111111111111c1cccccccc1cc1111111c11cc1ccccccc11199999999999999999999c11111111111cc11c111cccccccccccccccccccc111cc111111cc1111cccc111111111111111111
            1111111111111111c11c11c111c1111cccc11cc11111111c1c11ccccc11119999999999999999ccc11111ccc111ccc1cc111ccccccccccccccccc1111cccc111cccc11c1111111111111111111111111
            1111111111111111c1c11111c1cc1c11cccc1cc111111c1c1111111c11c11999999999999911111111cccccc11c1cccc11cccccccccccccc11111cccccccccccccc1111ccc111111cc11111111111111
            111111111111111111c11111c1ccc11c1cccc1111111111c111111c111111911111111111111cc111ccccccc111ccc111111111111111111ccccccccccccccccccccccccccccccc11111111111111111
            c11111111111111111c111111111111c1cccccc111111111111111cc1111111cc1c111cccccccccccccccccc111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11111c11c
            c11111111111111111c111111111111111cccccc11111111111111ccc11c11111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11ccccccccccccccccccc111111111cc
            c11111111111111111111111111111111111cccc111111111111111cc11cc111c1c111ccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111ccccccccccccccccccccccccccc
            c111111111111111111ccc1111111111111111ccc1111111111111111111ccc11c11c111ccccccccccccccccccccccccccccccccccccccccccccccccc11c1111111111111111111ccccccccccccccccc
            c11111111111c1111111111111111111111111111c111111111111111111111111c1c111111cccccccccccccccccccccccccccccccccccccccccccccc11111111111111111111111111ccccccccccccc
            cc111111111111111111111cccc11111111111111c11111111111111111111111111c111111ccccccccccccccccccccccccccccccccccccccccccc1111111111111111111111111111111111cccccccc
            cc1111111111111111111111111ccc11111111111cc1cc11111111111111111111111111111cccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111111111111111111
            ccc1111111111111111111111c11ccc1111111111cccccc1cc1111111111111111111111111ccccccccccccccccccccccccccccccccccccccc1111111111111111111111111111111111111111111111
            ccc11111111111111111111111c11c1c1c1111111ccccccc111c11111111111111111111111ccc1ccccccccccccccccccccccccccccccc11111c11111111111111111111111111111111111111111111
            cccc1111111111111111111111111c1c11c111c1111cccccccc1c1111111111111111111111c1c11ccccccccccccccccccccccccccccccccccc1c1111111111111111111ccccc1c11111111111111111
            cccc111c11111111111111111111c11c111111c1111c111ccccccc111111111111111111111c1c11cccccccccccccccccccccccccccccccccc11111111111111cccccccccccc11111111111111111111
            cccccc1c111111111111111111111111111111111111111111cccccc111111111111111111111111cccccccccccccccccccccccccccccccc11111c1111111c1cccccccccccccccc11ccc111111111111
            ccccccc1111111111111111111111111111111111111111111111ccc11111111111111111111111c1cccccccccccccccccccccccccccccc11111cc111111c1ccccccccccccccccccc11111ccccc1111c
            ccccccc11cc111111111111111111111111111111111111111111cccc11111111c1cc111111111111cccccccccccccccccccccccccccccccc1c11111111111ccccccccccccccccccc1ccccccccc11ccc
            ccccccc1111c11111111111111111111111111111111111111111cccc111c1c1cc1c1c11111111c111cccccccccccccccccccccccccccccc11111c11111ccccccccccccccccccccccccccccccccccccc
            cccccc11111c11111111111111111111111111111111111111111ccccc1cccccc1c1cc111111111111cccccccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccc
            cccccc111c111111111111111111111111c1111cc1111c1111111cccccccccccc11cc11111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            111ccc11cc111111111111111111111111111c1111c11c11c1111ccccccccccccccc11c1111111111111ccccccccccccccccccccccccccccccccccccccccc11ccccccccccccccccccccccccccc11cccc
            c11cccccccc1c11111111111111111111111111c11c11111111111cccccccccccccc11111111111111111ccccccccccccccccccccccccccccc1111111111111111ccccccc1ccc11cccccc11111111111
            ccc111cccccc111111111111111c1111111111c111c1111111111c1ccccccccccc111cc111111111111111ccccccccccccccccccccccccccc1111111111111cc1ccccc11111111cccc11111111111111
            ccc111cccccc11c1111111111cccc1111111111111cc1c11cc11111cccccccccc1c1ccc111111111111111ccccccccccccccccccccccccc111111111111111111cc111111c11cc111111111111111111
            c1111ccccccccc1111111111111ccc1111111111111c1cc1ccc1111ccccccccc11c111c1111111111111111cccccccccccccccccccccc11cc11111111111111111111111111111111111111111111111
            111ccccccccccc11111111111111111c11111111111c1ccccccc1ccccccccccc11111cc11111111111111c1cccccccccccccccccccccccc11c1111111111111111111111111111111111111111111111
            c11111ccccccccc1111111111111111cc1111111111c1cccccccccccccccccccccc1c1c111111111111c1ccccccccccccccccccccccccc11111111111111111111111111111111111111111111111111
            ccc11cccccccccccc11111111111111ccc111111111c1cccccccccccccccccccc1111cc111111111111ccccccccccccccccccccccccccccccc11111111111111111111111111111111111111111111cc
            cc1111ccccccccccc11111111111111111c111111111ccccccccccccccccccc11cc11cc111111111111ccccccccccccccccccccccccccccccccccc1c11111111111111111111111111111111cccccccc
            ccc11cccccccccccc11111111111111111111cc1c111ccccccccccccccccccc1111111111111111111111111cccccccccccccccccccccccccccccccc11111ccccccccccccccccccccccccccccccccccc
            c111111111cccccccc111111111cc1111111111c11c1ccccccccccccccccccc1111c111111111111111111111cccccccccccccccccccccc11c11111c111111cccccccccccccccccccccccccccccccccc
            111111111111cccccc1111111111c1111111111cccccccccccccccccccccccc111111111111111111111111ccccccccccccccccccccccc111111111c1111111ccccccccccccccccccccccccccccccccc
            ccc11111cc11ccccccc11111111111111111111cc11c1cccccccccccccccccccccc111111111111111111cccccccccccccccccccccccc11111111111111111111c11111ccccccccccccccccccccccccc
            111111111111111ccccc11111111111111111111c11c11cccccccccccccccccccc1111111111111111ccccccccccccccccccccccc111111111111111111111111111ccc111111ccc111111ccc111cccc
            ccc111111111c1ccccccc1111111111111111111111c1c1ccccccccccccccccccc1c1111111111cccc1ccccccccccccccccccccccccc1c1111111111111111111111111cccc11111111c111111111111
            cc1111111111111111ccccc11111111111111111111c111ccccc1111111cc1ccc11c11111111111111ccccccccccccccccccccccccc1cc11111111111111111111111111111111ccc111c1111111111c
            cc1111111111111111ccccc1111111111111111111111111cccccccc11c11111cccc1111111111111cccccccccccccc1ccccccccccc1c1111111111111111111111111111111111111111111111111cc
            c11111111111c11cc1cccccc11111111111111111111111111cccccc1111c1cc1ccc1111111111111cccccccccccc111cccccccccc1111111111111111111111111111111111111111111111111111cc
            11cc1111111111cc1ccccccc1111111111111111111111111c1cccccc1c111111ccc111111ccccccccccccccccc1111ccc1cccccc111111111111111111111111111111111111111111111111111c1cc
            ccccc11111111111111ccccc1111111111111111111111111c11cccc11111111111cccccccccccccccccccccc11111111111ccccc1111111111111111111111c1111111111111111111111111111c11c
            cccccc111111111111111111c111c1111111111111111111111111cc111111111111111ccccccccccccccccc1c1111111c1ccccccc111111111111111111c11111111cc111111111111111111111111c
            ccccccc11111111111111111c11c11c1111111111111111111111111111111111111111ccccccccccccccccc1111111111cccccc1111111111111111111111111cccccc11ccc111111111111111111cc
            cccccccc111111111111111111cccc111111111111111111111111c1111111111111111cc11cccccccccccccc1111111111cccc11cc1111111111111111111ccccccccc11111111111cccccc11cccccc
            ccccc1111111111111111111111cccccc111111111111111111111cc111111111111111c1cccccccccccccccccc1111111cccc1111111111111111111cccccccccccccc1111111ccccccccc1cccccccc
            ccc1111111cc11111111111111ccccccc11c11cc11111111111111ccccc1c11111111111cccccccccccccccccc1111111ccccccc1111111111111111c11cccccccc1cccccccccccccccccccccccccccc
            cc11111111cccc111111111111ccccccccc111c11111c1ccc1c1c1cccccc1111c1cc11ccccccccccccccccccc11c11111cccccc11cccc1111cccc111111cccc11111111ccccccccccccccccccccccccc
            1c111111111111ccccc1111111ccccccccc1c1c1c11c111111cc11cccccccccc1111ccccccccccccccccccccc11111111cccccccccc1111cccccc111111111111111111ccccccccccccccccccccccccc
            11111111111111cccccccccc111cccccccccc11cccc11111c11c11cccccccccccccccccccccccccccccccc111111ccccc1ccccccccc111ccccccc11111111111111111cccccccccccccccccccccccccc
            11111111111111ccccccccccccccccccccccccccccccc11111c11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111111111111111111ccccccccccc1ccccccccc
            1c111111111111cccc1111cccccccccccccccccccccccccc1ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11111111111111111111111cccccccccc11111cccccccc
            11111111111111cc111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cc11111ccc1cccccccccccccccc1111111111111111111cccccccc1111111111ccccccc
            111111111111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11111c11cc111cc1ccccccccccccc111111111111111111111111ccc111111111111111111111
            11111111111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111cccccccccccccc111111111111111111111111111111111111111111111111
            1c11111111111c11111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccc11111111111111111ccccccccccccc11111111111111111111111111111111111111111111111111
            11cc11111c1c1c1111111111111cccccccccccccccccccccccccc1111ccccccccccccccccccccccc1111111111111111111cccccccccc11c1c111111111c111111111111111111111111111111111111
            1111111ccc11cc11111111111111ccccccccccccccccccccccccc11111111ccccccccccccccccccccc1111111111111111cccccccccccccc111111111111111111111111111111111111111111111111
            1111cccccc1cc11111111111111cccccccccccccccccccccccccc11111111111ccccccccccccccccc1111111111111111cccccccccccccccccc111111ccc111111111111111111111111111111111111
            11cccccccc11111c1111111111cccccccccccccccccc111cccccc111111111111ccccc11ccccccc11c11111111111111c11cccccccc1111cccccc1ccccc1ccc111ccccccccc11111111111111111111c
            cccccccc11111111111111c111cccccccccccccc1111c11cccccc1111111111ccccc11ccccccccc111111111111111cc11ccccccc111111111cccccccccccc1111111111111111ccc111111111111ccc
            ccccccc11111111111111111cccccccccccc1cc11c11111cccccc111111111cccc111c111ccccc111111111111111111ccccccc11111111111cccccc111cccccc1111cc1111cccccccccc11111cccccc
            ccccccccccccc111111ccccccccccccccc111cc111111111cccc1c11111111cc111111c11ccccc11111111111111111ccccccccc111111111111cc1111cccccccc11111ccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccc1cc111111111111ccc11111111cccc1111111111ccccc11c1111111111111cccccccccc1111111111111111111ccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccc1ccc11111111111cccc11111ccccc11111111111111ccccc111111111c11cccccccccccc1111111111111111111cc1cccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccc1ccc1111111111111cccccccccccc1111111111111ccccccc111111cc11ccccccccccccc111111111111111111cc1ccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccc111111111111111c1cccccccccccccc1111111111ccccccc1111cccccccccccccccccc11111cc11111111111111111111ccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccc11111111cc1cccccccccccccccccc1111111111cccccccccc11cccccccccccccccccccccccccccc1111111111111cccccccccccccccccccccccccccccccccc
            `)
        tiles.setCurrentTilemap(tilemap`nivel10`)
        tiles.placeOnTile(Camara, tiles.getTileLocation(0, 12))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        tiles.placeOnTile(SpriteGoal, tiles.getTileLocation(15, 7))
    }
    if (nivel == 9) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    }
}
function Nivel_5 () {
    for (let index = 0; index < 8; index++) {
        custom.moverseDerecha()
        custom.saltarDerecha()
    }
    custom.moverseDerecha()
}
function Nivel_2 () {
    for (let index = 0; index < 5; index++) {
        custom.moverseDerecha()
    }
    custom.saltarDerecha()
    for (let index = 0; index < 8; index++) {
        custom.moverseDerecha()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    nivel = nivel + 1
    controlNiveles(nivel)
})
function Nivel_6 () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 15; index++) {
            custom.moverseDerecha()
        }
        custom.saltarDerecha()
    }
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
}
let nivel = 0
let Camara: Sprite = null
let SpriteGoal: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`snow_fox`, SpriteKind.Player)
SpriteGoal = sprites.create(assets.image`myImage1`, SpriteKind.Goal)
Camara = sprites.create(assets.image`Camara`, SpriteKind.Puntero_Camara)
nivel = 1
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

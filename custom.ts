
/**
* Utilice este archivo para definir funciones y bloques personalizados.
* Lea más en https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
        
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function moverseDerecha(): void {
        // Add code her
        animation.runImageAnimation(
            mySprite,
            assets.animation`Walking_Right`,
            100,
            true
        )
        mySprite.vx=49
        mySprite.vy=0
        
        pause(300)
        animation.runImageAnimation(
            mySprite,
            assets.animation`Idle_Right`,
            100,
            true
        )
        mySprite.vx = 0
        mySprite.vy = 0
        pause(300)
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function moverseIzquierda(): void {
        // Add code her
        animation.runImageAnimation(
            mySprite,
            assets.animation`Walking_Left`,
            100,
            true
        )
        mySprite.vx = -45
        mySprite.vy = 0
        pause(300)
        mySprite.ay = 2000
        animation.runImageAnimation(
            mySprite,
            assets.animation`Idle_Left`,
            100,
            true
        )
        mySprite.vx = 0
        mySprite.vy = 0
        pause(300)
        mySprite.ay = 50
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function saltarDerecha(): void {
        // Add code her
        animation.runImageAnimation(
            mySprite,
            assets.animation`Jumping_Right`,
            250,
            true
        )
        mySprite.vx = 0
        mySprite.vy = 40
        mySprite.ay = -100
        pause(700)
        mySprite.vx = 65
        mySprite.vy = 0
        mySprite.ay = 150
        pause(300)
        mySprite.vx = 0
        mySprite.ay = 50
        pause(300)
        animation.runImageAnimation(
            mySprite,
            assets.animation`Idle_Right`,
            100,
            true
        )
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function saltarIzquierda(): void {
        // Add code her
        animation.runImageAnimation(
            mySprite,
            assets.animation`Jumping_Left`,
            250,
            true
        )
        mySprite.vx = 0
        mySprite.vy = 40
        mySprite.ay = -100
        pause(700)
        mySprite.vx = -65
        mySprite.vy = 0
        mySprite.ay = 150
        pause(300)
        mySprite.vx = 0
        mySprite.ay = 50
        pause(300)
        animation.runImageAnimation(
            mySprite,
            assets.animation`Idle_Left`,
            100,
            true
        )
    }

}

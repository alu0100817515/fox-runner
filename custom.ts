
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
    export function mover(): void {
        // Add code her
        //if(y > 0)
         //mySprite.x+=1
        animation.runImageAnimation(
            mySprite,
            assets.animation`Walking`,
            100,
            true
        )
        mySprite.vx=50
        mySprite.vy=0
        
        pause(300)
        animation.runImageAnimation(
            mySprite,
            assets.animation`Idle`,
            100,
            true
        )
        mySprite.vx = 0
        mySprite.vy = 0
        //mySprite.setPosition(mySprite.x + x, mySprite.y - y)
        pause(300)
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function saltar(): void {
        // Add code her
        //if(y > 0)
        //mySprite.x+=1
        animation.runImageAnimation(
            mySprite,
            assets.animation`Jumping`,
            100,
            true
        )
        mySprite.vx = 0
        mySprite.vy = 50
        mySprite.ay = -100
        pause(700)
        animation.runImageAnimation(
            mySprite,
            assets.animation`Idle`,
            100,
            true
        )
        mySprite.vx = 50
        mySprite.vy = 0
        mySprite.ay = 100
        pause(300)
        mySprite.vx = 0
        //mySprite.setPosition(mySprite.x + x, mySprite.y - y)
        pause(300)
    }

}

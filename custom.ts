
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
    export function mover(x: number, y: number): void {
        // Add code here
        //mySprite.setPosition(mySprite.x + x, mySprite.y - y)
        //pause(100)
        controller.moveSprite(mySprite,x,y);  
    }
    /**
         * Control a sprite using the direction buttons from the controller. Note that this will overwrite
         * the current velocity of the sprite whenever a directional button is pressed. To stop controlling
         * a sprite, pass 0 for vx and vy.
         *
         * @param sprite The Sprite to control
         * @param vx The velocity used for horizontal movement when left/right is pressed
         * @param vy The velocity used for vertical movement when up/down is pressed
         */
    //% blockId="ctrlgame_control_sprite" block="%controller move $sprite=variables_get(mySprite) with buttons||vx $vx vy $vy"
    //% weight=100
    //% expandableArgumentMode="toggle"
    //% vx.defl=100 vy.defl=100
    //% help=controller/move-sprite
    //% group="Multiplayer"
    //% vx.shadow="spriteSpeedPicker"
    //% vy.shadow="spriteSpeedPicker"
    //% parts="multiplayer"
    //moveSprite(sprite: Sprite, vx: number = 100, vy: number = 100) {
    //    this._moveSpriteInternal(sprite, vx, vy);
    //}
    
}

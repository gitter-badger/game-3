
var BUTTERFLY_HEALTH = 0;
var BUTTERFLY_LIFE = 1;
var BUTTERFLY_DX_SIZE = 80;
var BUTTERFLY_DY_SIZE = 32;
var BUTTERFLY_AX_SPEED = 4; // degrees per step
var BUTTERFLY_AY_SPEED = 2; // degrees per step

function Butterfly(){
    this.x = 0;
    this.y = 0;
    this.dx = 0; // position deltas
    this.dy = 0;
    this.ax = 0; // angles for computing position delta
    this.ay = 0;
    this.radius = 16;
    this.sprite = null;
    this.type = BUTTERFLY_HEALTH;
    this.facing = 1;

    this.init = function(){
        if(this.type == BUTTERFLY_HEALTH)
            this.sprite = new Animation(sprButterflyHealth, ANIMATION_LOOP_MOVE);
        else
            this.sprite = new Animation(sprButterflyLife, ANIMATION_LOOP_MOVE);
    }

    this.step = function(){
        // change position delta and facing
        this.ax = (this.ax + 4) % 360;
        this.ay = (this.ay + 2) % 360;
        this.dx = BUTTERFLY_DX_SIZE * Math.sin(this.ax * Math.PI / 180);
        this.dy = BUTTERFLY_DY_SIZE * Math.sin(this.ay * Math.PI / 180);
        if(this.ax <= 90 || this.ax > 270 )
            this.facing = -1;
        else
            this.facing = 1;

        this.sprite.nextFrame();
    }

    this.draw = function(){
        this.sprite.drawExt(this.x + this.dx, this.y + this.dy, this.facing, 1, 0);
    }
}

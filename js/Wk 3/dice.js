class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return 'A way of choosing random numbers'
    }
}

Dice.description()


const redDice = new Dice();


redDice instanceof Dice


redDice.sides


redDice.roll()


const blueDice = new Dice(20);


blueDice instanceof Dice


blueDice.sides


blueDice.roll()


class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

const leo = new Turtle('Leonardo');

leo.name;

leo.sayHi();

Turtle.prototype = {};

Turtle.prototype.weapon = {};

Turtle.prototype.attack = function(){
    return `Feel the power of my ${this.weapon}!`;
    }
Turtle.prototype.food = 'Pizza';

Turtle.prototype.eat = function() {
    return 'Mmm, this ${this.food} tastes great!';
}


const raph = new Turtle('Raphael');

const don = new Turtle('Donatello');

const mike = new Turtle('Michelangelo');


leo.weapon = 'Katana Blades';


raph.weapon = 'Sai';


don.weapon = 'Bo Staff';

mike.weapon = 'Nunchakus';


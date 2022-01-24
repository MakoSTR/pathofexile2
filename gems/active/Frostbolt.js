class Frostbolt {

    constructor(levelOfGem = 1, qualityOfGem = 1) {
        this._lvl = levelOfGem
        this._quality = qualityOfGem
        this._tags = ['spell', 'projectile', 'cold']
        this._color = 'blue'
        this._projectiles =  [1]
        this._cast_speed = [0.75]
        this._mana_cost = ['5 + lvl']
        this._type_of_damage = ['cold']
        this._formula_of_damage = ['200 + 5 ** 2']
        this._formula_of_quality = ['damage * quality']
    }

    get levelOfGem() {
        return this._lvl;
    }

    get qualityOfGem() {
        return this._quality;
    }

    get tags() {
        return this._tags;
    }

    get color() {
        return this._color;
    }

    get projectiles() {
        return this._projectiles;
    }

    get cast_speed() {
        return this._cast_speed;
    }

    get type_of_damage() {
        return this._type_of_damage;
    }

    get formula_of_damage() {
        return this._formula_of_damage;
    }

    get formula_of_quality() {
        return this._formula_of_quality;
    }
}

const FrostboltObject = new Frostbolt()
module.exports = {
    FrostboltObject
}
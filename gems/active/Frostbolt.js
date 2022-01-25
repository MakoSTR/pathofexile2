class Frostbolt {

    constructor(levelOfGem, qualityOfGem) {
        this._lvl = levelOfGem
        this._quality = qualityOfGem
        this._tags = ['spell', 'projectile', 'cold']
        this._color = 'blue'
        this._projectiles = [1]
        this._cast_speed = [0.75]
        this._mana_cost = ['5 + lvl']
        this._type_of_damage = ['cold']
        this._formula_of_damage = ['200 + 5 ** 2']
        this._formula_of_quality = ['damage * quality']
        this._name = 'frostbolt'
        this._actions = [
            ['projectiles', 'add', '+', '1'],
            ['cast speed', 'add', '+', '0.75'],
            ['mana cost', 'add', '+', '5 + lvl'],
            ['cold damage', 'add', '+', '200 + 5 ** 2'],
            ['increase', 'damage', 'all', 'qua']
        ]
    }

    get name() {
        return this._name;
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

function getFrostboltObject(lvl, qua) {
    return new Frostbolt(lvl, qua)
}

// const FrostboltObject = new Frostbolt()
module.exports = {
    getFrostboltObject
}
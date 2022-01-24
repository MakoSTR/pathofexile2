class CorruptionSanctuary {
    constructor() {
        this._first_slot = ['blue', 'first_link']
        this._second_slot = ['red', 'first_link']
        this._third_slot = ['blue', 'first_link']
        this._actions = [
            ['stop', 'damage', 'chaos'],
            ['increase', 'damage', 'lightning', '40'],
            ['add', 'damage', '1-5'],
            ['add', 'lvl', 'all', '3'],
            ['add', 'lvl', 'support', '3']
        ]
        this._first_place = 'empty'
        this._second_place = 'empty'
        this._third_place = 'empty'
    }

    get first_slot() {
        return this._first_slot;
    }

    get second_slot() {
        return this._second_slot;
    }

    get third_slot() {
        return this._third_slot;
    }

    get actions() {
        return this._actions
    }

    get first_place() {
        return this._first_place
    }

    get second_place() {
        return this._second_place
    }

    get third_place() {
        return this._third_place
    }
}

const CorruptionSanctuaryObject = new CorruptionSanctuary()
module.exports = {
    CorruptionSanctuaryObject
}
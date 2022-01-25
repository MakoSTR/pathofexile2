class DendrobateChanged {
    constructor() {
        this._first_slot = ['red', 'first_link']
        this._second_slot = ['green', 'first_link']
        this._third_slot = ['blue', 'first_link']
        this._fourth_slot = ['green', 'first_link']
        this._fifth_slot = ['green', 'first_link']
        this._sixth_slot = ['green', 'first_link']
        this._actions = [
            ['increase', 'damage', 'chaos', '80']
        ]
        this._first_place = 'empty'
        this._second_place = 'empty'
        this._third_place = 'empty'
        this._fourth_place = 'empty'
        this._fifth_place = 'empty'
        this._sixth_place = 'empty'
    }

    getSlots() {
        return [
            `1-${this._first_place}`,
            `2-${this._second_place}`,
            `3-${this._third_place}`,
            `4-${this._fourth_place}`,
            `5-${this._fifth_place}`,
            `6-${this._sixth_place}`
        ]
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

    get fourth_slot() {
        return this._fourth_slot;
    }

    get fifth_slot() {
        return this._fifth_slot;
    }

    get sixth_slot() {
        return this._sixth_slot;
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

    get fourth_place() {
        return this._fourth_place
    }

    get fifth_place() {
        return this._fifth_place
    }

    get sixth_place() {
        return this._sixth_place
    }
}

const DendrobateChangedObject = new DendrobateChanged()
module.exports = {
    DendrobateChangedObject
}
const Player = require('./Player')

class OperationWithPlayer {

    setEquipmentBody(equipment) {
        Player.setEquipmentBody(equipment)
    }

    getEquipmentBody() {
        return Player.getEquipmentBody()
    }

    getAllParameters(){
        return Player.getAllParameters()
    }

    checkForPlaceAndColor_setIfWeCan(equipment, place, gem) {
        switch (place) {
            case '1': {
                if (equipment._first_place === 'empty') {
                    let colorOfGem = gem.color
                    if (equipment._first_slot[0] === colorOfGem || equipment._first_slot[0] === 'white'){
                        equipment._first_place = gem
                    }
                }
                break
            }
            case '2': {
                if (equipment._second_place === 'empty') {
                    let colorOfGem = gem.color
                    if (equipment._second_slot[0] === colorOfGem || equipment._second_slot[0] === 'white'){
                        equipment._second_place = gem
                    }
                }
                break
            }
            case '3': {
                if (equipment._third_place === 'empty') {
                    let colorOfGem = gem.color
                    if (equipment._third_slot[0] === colorOfGem || equipment._third_slot[0] === 'white'){
                        equipment._third_place = gem
                    }
                }
                break
            }
            case '4': {
                if (equipment._fourth_place === 'empty') {
                    let colorOfGem = gem.color
                    if (equipment._fourth_slot[0] === colorOfGem || equipment._fourth_slot[0] === 'white'){
                        equipment._fourth_place = gem
                    }
                }
                break
            }
            case '5': {
                if (equipment._fifth_place === 'empty') {
                    let colorOfGem = gem.color
                    if (equipment._fifth_slot[0] === colorOfGem || equipment._fifth_slot[0] === 'white'){
                        equipment._fifth_place = gem
                    }
                }
                break
            }
            case '6': {
                if (equipment._sixth_place === 'empty') {
                    let colorOfGem = gem.color
                    if (equipment._sixth_slot[0] === colorOfGem || equipment._sixth_slot[0] === 'white'){
                        equipment._sixth_place = gem
                    }
                }
                break
            }
            default: {
                console.log('Item dont this place')
            }
        }
    }
}

const OperationWithPlayerObject = new OperationWithPlayer()
module.exports = {
    OperationWithPlayerObject
}
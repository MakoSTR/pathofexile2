const readlineSync = require('readline-sync')
const OperationWithPlayer = require('./player/OperationWithPlayer')
const GetEquipment = require('./equipment/GetEquipment')
const GetGem = require('./gems/GetGem')
const Buttons = require('./keyborad/buttons')
const Calculate = require('./calculate/Calculate')

while (true) {
    let command = readlineSync.question('Select command: ')
    switch (command) {
        // equip body
        case 'equip body': {
            let equipment = readlineSync.question('Select equipment: ')
            equipment = GetEquipment.GetEquipmentObject.setEquipment(equipment)
            OperationWithPlayer.OperationWithPlayerObject.setEquipmentBody(equipment)
            console.log(equipment.getSlots())
            break
        }
        // set gem
        case 'set gem': {
            let typeOfEquipment = readlineSync.question('Select type of equipment: ')
            let placeInEquipment = readlineSync.question('Select place: ')
            let nameOfGem = readlineSync.question('Select gem: ')
            switch (typeOfEquipment) {
                case 'body': {
                    let Gem = GetGem.GetGemObject.getGem(nameOfGem)
                    if (Gem !== false) {
                        console.log(`You set ${nameOfGem} in ${placeInEquipment} slot`)
                        OperationWithPlayer.OperationWithPlayerObject.checkForPlaceAndColor_setIfWeCan(OperationWithPlayer.OperationWithPlayerObject.getEquipmentBody(), placeInEquipment, Gem)
                    }
                    break
                }
                default: {
                    console.log('We dont have this type of equipment')
                    break
                }
            }
            break
        }
        // set button
        case 'set button': {
            let type = readlineSync.question('Select type of equipment: ')
            let button = readlineSync.question('Select button: ')
            let gem = readlineSync.question('Select gem: ')
            let place = readlineSync.question('Select place: ')

            switch (type) {
                case 'body': {
                    var equipment = OperationWithPlayer.OperationWithPlayerObject.getEquipmentBody()
                    switch (place) {
                        case '1': {
                            if (equipment['_first_place']['_name'] === gem) {
                                Buttons.buttons[button] = equipment['_first_place']
                                Buttons.equipment[button] = type
                            } else {
                                console.log('You dont have gem in this slot')
                            }
                            break
                        }
                        case '2': {
                            if (equipment['_second_place']['_name'] === gem) {
                                Buttons.buttons[button] = equipment['_second_place']
                                Buttons.equipment[button] = type
                            } else {
                                console.log('You dont have gem in this slot')
                            }
                            break
                        }
                        case '3': {
                            if (equipment['_third_place']['_name'] === gem) {
                                Buttons.buttons[button] = equipment['_third_place']
                                Buttons.equipment[button] = type
                            } else {
                                console.log('You dont have gem in this slot')
                            }
                            break
                        }
                        case '4': {
                            if (equipment['_fourth_place']['_name'] === gem) {
                                Buttons.buttons[button] = equipment['_fourth_place']
                                Buttons.equipment[button] = type
                            } else {
                                console.log('You dont have gem in this slot')
                            }
                            break
                        }
                        case '5': {
                            if (equipment['_fifth_place']['_name'] === gem) {
                                Buttons.buttons[button] = equipment['_fifth_place']
                                Buttons.equipment[button] = type
                            } else {
                                console.log('You dont have gem in this slot')
                            }
                            break
                        }
                        case '6': {
                            if (equipment['_sixth_place']['_name'] === gem) {
                                Buttons.buttons[button] = equipment['_sixth_place']
                                Buttons.equipment[button] = type
                            } else {
                                console.log('You dont have gem in this slot')
                            }
                            break
                        }
                        default: {
                            console.log('Equipment dont have this place')
                            break
                        }
                    }
                    break
                }
                default: {
                    console.log('You dont have this type of equipment')
                    break
                }
            }
            break
        }
        case 'buttons':{
            console.log(Buttons.buttons)
            console.log(Buttons.equipment)
            break
        }
        case 'press':{
            var button = readlineSync.question('Select button for attack: ')
            if (Buttons.buttons.hasOwnProperty(button)){
                Calculate.Calculate(button)
            }
            OperationWithPlayer.OperationWithPlayerObject.getAllParameters()
            break
        }
        // player body
        case 'player body': {
            console.log(OperationWithPlayer.OperationWithPlayerObject.getEquipmentBody())
            break
        }
    }
}
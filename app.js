const readlineSync = require('readline-sync')
const OperationWithPlayer = require('./player/OperationWithPlayer')
const GetEquipment = require('./equipment/GetEquipment')
const GetGem = require('./gems/GetGem')

while (true) {
    let command = readlineSync.question('Select command: ')
    switch (command) {
        // equip body
        case 'eb': {
            let equipment = readlineSync.question('Select equipment: ')
            equipment = GetEquipment.GetEquipmentObject.setEquipment(equipment)
            OperationWithPlayer.OperationWithPlayerObject.setEquipmentBody(equipment)
            console.log(OperationWithPlayer.OperationWithPlayerObject.getEquipmentBody())
            break
        }
        // set gem
        case 'sg': {
            let typeOfEquipment = readlineSync.question('Select type of equipment: ')
            let placeInEquipment = readlineSync.question('Select place: ')
            let nameOfGem = readlineSync.question('Select gem: ')
            switch (typeOfEquipment) {
                case 'body': {
                    let Gem = GetGem.GetGemObject.getGem(nameOfGem)
                    if (Gem !== false) {
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
        // player body
        case 'pb': {
            console.log(OperationWithPlayer.OperationWithPlayerObject.getEquipmentBody())
            break
        }
    }
}
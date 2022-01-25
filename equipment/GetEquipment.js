const TabulaRasa = require('./TabulaRasa')
const DendrobateChanged = require('./DendrobateChanged')
const CorruptionSanctuaryObject = require('./CorruptionSanctuary');
const Briskwrap = require('./Briskwrap')

class GetEquipment {
    setEquipment(equipment) {
        switch (equipment) {
            case 'tabula rasa': {
                return TabulaRasa.TabulaRasaObject
                break
            }
            case 'dendrobate changed': {
                return DendrobateChanged.DendrobateChangedObject
                break
            }
            case 'corruption sanctuary': {
                return CorruptionSanctuaryObject.CorruptionSanctuaryObject
                break
            }
            case 'briskwrap': {
                return Briskwrap.BriskwrapChangedObject
                break
            }
            default: {
                console.log('We dont have this equipment')
                break
            }
        }
    }
}

const GetEquipmentObject = new GetEquipment()
module.exports = {
    GetEquipmentObject
}
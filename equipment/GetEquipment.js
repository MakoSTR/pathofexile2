const TabulaRasa = require('./TabulaRasa')
const DendrobateChanged = require('./DendrobateChanged')
const CorruptionSanctuaryObject = require('./CorruptionSanctuary');
const Briskwrap = require('./Briskwrap')

class GetEquipment {
    setEquipment(equipment) {
        switch (equipment) {
            case 'tr': {
                return TabulaRasa.TabulaRasaObject
                break
            }
            case 'dc': {
                return DendrobateChanged.DendrobateChangedObject
                break
            }
            case 'cs': {
                return CorruptionSanctuaryObject.CorruptionSanctuaryObject
                break
            }
            case 'bw': {
                return Briskwrap.BriskwrapChangedObject
                break
            }
            default: {
                return 'We dont have this equipment'
            }
        }
    }
}

const GetEquipmentObject = new GetEquipment()
module.exports = {
    GetEquipmentObject
}
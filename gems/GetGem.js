const Frostbolt = require('./active/Frostbolt')

class GetGem {
    getGem(nameOfGem) {
        switch (nameOfGem) {
            case 'fb': {
                return Frostbolt.FrostboltObject
                break
            }
            default: {
                console.log('We dont have this gem')
                return false
            }
        }
    }
}

const GetGemObject = new GetGem()
module.exports = {
    GetGemObject
}
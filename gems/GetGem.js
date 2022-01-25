const Frostbolt = require('./active/Frostbolt')

class GetGem {
    getGem(nameOfGem) {
        var gem = nameOfGem
        var lvl = 1
        var qua = 1
        if (nameOfGem.split('_').length === 3) {
            nameOfGem = nameOfGem.split('_')
            gem = nameOfGem[0]
            lvl = nameOfGem[1]
            qua = nameOfGem[2]
        }
        switch (gem) {
            case 'frostbolt': {
                return Frostbolt.getFrostboltObject(lvl, qua)
                break
            }
            default: {
                console.log(`We dont have this gem ${gem}`)
                return false
            }
        }
    }
}

const GetGemObject = new GetGem()
module.exports = {
    GetGemObject
}
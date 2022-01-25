let Equipment_Body = ''

function setEquipmentBody(equipment) {
    Equipment_Body = equipment
}

function getEquipmentBody() {
    return Equipment_Body
}

var Increase_All_Damage = []
var Projectiles = 0
var Cast_speed = 0
var Mana_cost = 0
var Cold_Damage = 0

function setProjectiles(action, value) {
    Projectiles = eval(`${Projectiles}${action}${value}`)
    return Projectiles
}

function setCastSpeed(action, value) {
    Cast_speed = eval(`${Cast_speed}${action}${value}`)
    return Cast_speed
}

function setManaCost(action, value) {
    Mana_cost = eval(`${Mana_cost}${action}${value}`)
    return Mana_cost
}

function setColdDamage(action, value) {
    Cold_Damage = eval(`${Cold_Damage}${action}${value}`)
    return Cold_Damage
}

function getAllParameters() {
    console.log(
        `
        Projectiles - ${Projectiles}
        Cast_speed - ${Cast_speed}
        Mana_cost - ${Mana_cost}
        Cold_Damage - ${Cold_Damage}
        `
    )
}

module.exports = {
    getAllParameters,
    setEquipmentBody,
    getEquipmentBody,
    setProjectiles,
    setCastSpeed,
    setManaCost,
    setColdDamage
}
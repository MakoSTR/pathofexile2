const Buttons = require('../keyborad/buttons')
const Player = require('../player/Player')

function Calculate(button) {

    if (Buttons.buttons.hasOwnProperty('q')) {
        var lvl = Buttons.buttons['q']['_lvl']
        var qua = Buttons.buttons['q']['_quality']
        var actions = Buttons.buttons['q']['_actions']
        for (var i = 0; i < actions.length; i++) {
            switch (actions[i][0]) {
                case 'projectiles': {
                    switch (actions[i][1]) {
                        case 'add': {
                            switch (actions[i][2]) {
                                case '+': {
                                    Player.setProjectiles('+', actions[i][3])
                                    break
                                }
                                default: {
                                    console.log('Error')
                                    break
                                }
                            }
                            break
                        }
                        default: {
                            console.log('Error')
                            break
                        }
                    }
                    break
                }
                case 'cast speed': {
                    switch (actions[i][1]) {
                        case 'add': {
                            switch (actions[i][2]) {
                                case '+': {
                                    Player.setCastSpeed('+', actions[i][3])
                                    break
                                }
                                default: {
                                    console.log('Error')
                                    break
                                }
                            }
                            break
                        }
                        default: {
                            console.log('Error')
                            break
                        }
                    }
                    break
                }
                case 'mana cost': {
                    switch (actions[i][1]) {
                        case 'add': {
                            switch (actions[i][2]) {
                                case '+': {
                                    var formula = actions[i][3]
                                    Player.setManaCost('+', eval(formula))
                                    break
                                }
                                default: {
                                    console.log('Error')
                                    break
                                }
                            }
                            break
                        }
                        default: {
                            console.log('Error')
                            break
                        }
                    }
                    break
                }
                case 'cold damage': {
                    switch (actions[i][1]) {
                        case 'add': {
                            switch (actions[i][2]) {
                                case '+': {
                                    var formula = actions[i][3]
                                    Player.setColdDamage('+', eval(formula))
                                    break
                                }
                                default: {
                                    console.log('Error')
                                    break
                                }
                            }
                            break
                        }
                        default: {
                            console.log('Error')
                            break
                        }
                    }
                    break
                }
                case 'increase': {
                    switch (actions[i][1]) {
                        case 'damage': {
                            switch (actions[i][2]) {
                                case 'all': {
                                    var formula = actions[i][3]
                                    Player.setColdDamage('*', eval(formula))
                                    break
                                }
                                default: {
                                    console.log('Error')
                                    break
                                }
                            }
                            break
                        }
                        default: {
                            console.log('Error')
                            break
                        }
                    }
                    break
                }
                default: {
                    console.log('Error')
                    break
                }
            }
        }
    }
}

module.exports = {
    Calculate
}
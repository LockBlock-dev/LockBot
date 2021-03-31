const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
const figlet = require("figlet")

module.exports.run = (bot, message, args, settings, lang) => {

    var maxLen = 9 // max characters here

    if (args.join(' ').length > maxLen) return message.channel.send(lang.asciiMaxCaracters)

    figlet(`${args.join(' ')}`, function (err, data) {
        message.channel.send(`${data}`, { code: 'AsciiArt' })
    })

}



module.exports.help = COMMANDS.FUN.ASCII
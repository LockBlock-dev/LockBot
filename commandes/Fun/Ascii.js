const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const figlet = require("figlet")
const fs = require("fs")

module.exports.run = (bot, message, args, settings) => {

    const lang = require(`../../core/languages/${settings.guildLang}.json`)

    var maxLen = 9 // max characters here

    if (args.join(' ').length > maxLen) return message.channel.send(lang.asciiMaxCaracters)

    figlet(`${args.join(' ')}`, function (err, data) {
        message.channel.send(`${data}`, { code: 'AsciiArt' })
    })

}



module.exports.help = MESSAGES.COMMANDS.FUN.ASCII
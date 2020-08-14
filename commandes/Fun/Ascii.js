const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const figlet = require("figlet")
const fs = require("fs")

module.exports.run = (bot, message, args) => {

    const GUILDS = JSON.parse(fs.readFileSync("./core/guildSettings.json", "utf8"))
    const langSet = GUILDS[message.guild.id].language
    const lang = require(`../../core/languages/${langSet}.json`)

    var maxLen = 9 // max characters here

    if (args.join(' ').length > maxLen) return message.channel.send(lang.asciiMaxCaracters)

    figlet(`${args.join(' ')}`, function (err, data) {
        message.channel.send(`${data}`, { code: 'AsciiArt' })
    })

}



module.exports.help = MESSAGES.COMMANDS.FUN.ASCII
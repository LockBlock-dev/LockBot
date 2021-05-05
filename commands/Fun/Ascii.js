const { COMMANDS } = require("../../core/constants.js")
const figlet = require("figlet")

module.exports.run = (bot, message, args, lang) => {

    var maxLen = 20 // max characters here

    if (args.join(' ').length > maxLen) return message.channel.send(bot.error(lang.asciiMaxCaracters, message.author.id, lang))

    figlet(`${args.join(' ')}`, function (err, data) {
        message.channel.send(`${data}`, { code: 'AsciiArt' })
    })

}



module.exports.help = COMMANDS.FUN.ASCII
const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")
const path = require("path")

module.exports.run = async (bot, message, args) => {

  const GUILDS = JSON.parse(fs.readFileSync("./core/guildSettings.json", "utf8"))
  const langSet = GUILDS[message.guild.id].language
  const lang = require(`../../core/languages/${langSet}.json`)

    if(args[1]) {
        return message.channel.send(lang.prefixArgs)
      }

    if(args[0].length > 3) {
        return message.channel.send(lang.prefixLengthMax)
    }

    if(typeof args[0] !== "string"){
      return message.channel.send(lang.prefixNotString)
    }

    const prefixesPath = path.join(__dirname, "../../core/guildSettings.json")

    GUILDS[message.guild.id] = {
      name: [message.guild.name],
      prefix: args[0],
      language: GUILDS[message.guild.id].language
    }

    fs.writeFile(prefixesPath, JSON.stringify(GUILDS), function(err, result) {
        if(err) console.log('error', err);
      })

    message.channel.send(lang.prefixNew + args[0])

}

module.exports.help = MESSAGES.COMMANDS.MODERATION.PREFIX
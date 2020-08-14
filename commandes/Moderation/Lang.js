const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")
const path = require("path")

module.exports.run = async (bot, message, args) => {

  const GUILDS = JSON.parse(fs.readFileSync("./core/guildSettings.json", "utf8"))
  const langSet = GUILDS[message.guild.id].language
  const lang = require(`../../core/languages/${langSet}.json`)

  setLang = () => {

    const languagesPath = path.join(__dirname, "../../core/guildSettings.json")

      GUILDS[message.guild.id] = {
            name: [message.guild.name],
            prefix: GUILDS[message.guild.id].prefix,
            language: args[0]
      }

      fs.writeFile(languagesPath, JSON.stringify(GUILDS), function(err, result) {
        if(err) console.log('error', err);
      })

      message.channel.send(lang.langNew + args[0])
  }

    if(args[1]) {
        return message.channel.send(lang.langArgs)
      }

    if(args[0].length > 2) {
        return message.channel.send(lang.langTooLong)
    }

    if(typeof args[0] !== "string"){
      return message.channel.send(lang.langNotString)
    }

    if(args[0] === "fr") {
      setLang()
    }

    else if(args[0] === "en") {
      setLang()
    }
    
    else {
        return message.channel.send(lang.langUnknown)
    }
}

module.exports.help = MESSAGES.COMMANDS.MODERATION.LANG
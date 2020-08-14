const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message, args) => {

  const GUILDS = JSON.parse(fs.readFileSync("./core/guildSettings.json", "utf8"))
  const langSet = GUILDS[message.guild.id].language
  const lang = require(`../../core/languages/${langSet}.json`)

    const deleteCount = parseInt(args[0], 10)

    if(deleteCount < 1 || deleteCount > 100){
        return message.channel.send(lang.clearHowMany)
    }
      
      await message.channel.bulkDelete(deleteCount)

      await message.channel.send(deleteCount + lang.clearCount).then(message => message.delete({ timeout: 5000 }))
    }



module.exports.help = MESSAGES.COMMANDS.MODERATION.CLEAR
const { MESSAGES } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (message.author.id !== process.env.DEV_ID) return message.reply("LockBot isn\'t your bot !")

    const content = args.join(" ")

    console.log(content)

    message.channel.send(content)

    var found = false

    message.guild.channels.cache.forEach = (channel) => {
      if(found == true || channel.type != "text") {
        return
      }
      if(message.guild.me.permissionsIn(channel).has("SEND_MESSAGES") && message.guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
        found = true
        return channel.send(content)
      }
  }
  
}



module.exports.help = MESSAGES.COMMANDS.DEV.BROADCAST
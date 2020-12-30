const { MESSAGES } = require("../../core/constants.js")

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (message.author.id !== "249899689028091904") return message.reply("LockBot isn\'t your bot !")

    const content = args.join(" ")

    console.log(content)

    message.channel.send(content)

    var found = false

    guild.channels.cache.forEach = (channel) => {
      if(found == true || channel.type != "text") {
        return
      }
      if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
        found = true
        return channel.send(content)
      }
  }
  
}



module.exports.help = MESSAGES.COMMANDS.DEV.BROADCAST
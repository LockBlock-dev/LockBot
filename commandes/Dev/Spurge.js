const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const chalk = require("chalk")

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== "249899689028091904") return message.reply("LockBot isn't your bot !")
    
    message.delete()

    let messagecount = parseInt(args[0]) || 1

    var deletedMessages = -1

    message.channel.messages.fetch({ limit: 100 }).then(messages => {
        messages.some(m => {
            if (m.author.id == bot.user.id) {
                m.delete().catch(console.error)
                deletedMessages++
            }
			if (deletedMessages >= messagecount){return true}
        })
    }).then(() => {
        if (deletedMessages === -1) deletedMessages = 0
        message.channel.send(`${deletedMessages} messages deleted.`)
        setTimeout(function(){
            m.delete()
    }, 1000)
    })
}



module.exports.help = MESSAGES.COMMANDS.DEV.SPURGE
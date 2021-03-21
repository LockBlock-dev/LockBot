const Discord = require("discord.js")
const bot = require("../../index.js")
const chalk = require("chalk")
require('dotenv').config()

bot.on("message", async message => {

  if(message.channel.type === "dm") {
    return
  }

  var settings = await bot.getGuild(message.guild.id)
 
  const lang = require(`../../core/languages/${settings.guildLang}.json`)
  const prefix = settings.guildPrefix

  const mentionArgs = message.content.split(" ")

  if(message.author.id !== bot.user.id){
    const mention = message.mentions.users.first()
    if (mention) {
      if(!message.content.startsWith(prefix)){
          if(message.mentions.users.first().id === bot.user.id){
            if(!mentionArgs[1]) {
              message.channel.send(`${lang.messageEventBotPing} \`${prefix}\``)
            }
        }
      }
    }
  }

  if (!message.content.startsWith(prefix) || message.channel.type === "dm" || message.author.bot) {
    return
  }

  const messageArray = message.content.split(" ")
  const cmd = messageArray[0].toLowerCase()
  const args = messageArray.slice(1)
  const comd = cmd.slice(prefix.length)
  const commandFile = bot.commands.get(comd) || bot.commands.find(cmd => cmd.help.aliases.includes(comd))

    if (!commandFile) {
      return
    }

    if (commandFile.help.isDevRestricted) {
      
      if (message.author.id !== process.env.DEV_ID) {

        return message.reply("LockBot isn\'t your bot !")
      }
    }

    if (commandFile.help.isUserAdmin && !message.member.hasPermission('MANAGE_GUILD')) {

      return message.reply(lang.messageEventMissingPermManageGuild)
    }

    if (commandFile.help.args && !args.length) {
      var noArgsReply = `${lang.messageEventCommandNeedArg} <@${message.author.id}> !`
  
      if (commandFile.help.usage) {
        noArgsReply += `\n${lang.messageEventCommandUsage} \`${prefix}${commandFile.help.name} ${commandFile.help.usage}\``
      }
  
      return message.channel.send(noArgsReply)
    }

    const someUser = await bot.getBlacklistedUser(message.author.id)

    if(someUser) {
      return
    }
  
    if(commandFile) {
      commandFile.run(bot, message, args, settings)
    }
})

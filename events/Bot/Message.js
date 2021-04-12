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

        return message.channel.send(bot.error("LockBot isn\'t your bot !", message.author.id, lang))
      }
    }

    var errorMessage

    if (commandFile.help.permissionNeeded && !message.member.hasPermission(commandFile.help.permissionNeeded)) {
      errorMessage = `${lang.messageEventMissingPerm1}\`${commandFile.help.permissionNeeded}\`${lang.messageEventMissingPerm2}`

      return message.channel.send(bot.error(errorMessage, message.author.id, lang))
    }

    if (commandFile.help.permissionNeeded && !message.guild.me.hasPermission(commandFile.help.permissionNeeded)) {
      errorMessage = `${lang.messageEventBotMissingPerm1}\`${commandFile.help.permissionNeeded}\`${lang.messageEventBotMissingPerm2}`

      return message.channel.send(bot.error(errorMessage, message.author.id, lang))
    }

    if (commandFile.help.args > 0 && args.length < commandFile.help.args) {
      if (commandFile.help.args < 2) {
        errorMessage = `${lang.messageEventCommandNeedArg1}${commandFile.help.args}${lang.messageEventCommandNeedArg2one} <@${message.author.id}> !\n${lang.messageEventCommandUsage} \`${prefix}${commandFile.help.name} ${commandFile.help.usage}\``
      } else {
        errorMessage = `${lang.messageEventCommandNeedArg1}${commandFile.help.args}${lang.messageEventCommandNeedArg2multiple} <@${message.author.id}> !\n${lang.messageEventCommandUsage} \`${prefix}${commandFile.help.name} ${commandFile.help.usage}\``
      }
      
   
      return message.channel.send(bot.error(errorMessage, message.author.id, lang))
    }

    const someUser = await bot.getBlacklistedUser(message.author.id)

    if(someUser) {
      return
    }
  
    if(commandFile) {
      commandFile.run(bot, message, args, lang, settings)
    }
})

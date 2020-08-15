const Discord = require("discord.js")
const config = require('../../config.json')
const bot = require("../../index.js")
const fs = require("fs")

bot.on("message", async message => {

  const GUILDS = JSON.parse(fs.readFileSync("./core/guildSettings.json", "utf8"))
    
    if (!GUILDS[message.guild.id]) {
      GUILDS[message.guild.id] = {
        name: [message.guild.name],
        prefix: config.prefix,
        language: config.lang
      }

      fs.writeFile("./core/guildSettings.json", JSON.stringify(GUILDS), function(err, result) {
        if(err) console.log('error', err)
      })
    }

  const prefix = GUILDS[message.guild.id].prefix
  const langSet = GUILDS[message.guild.id].language
  const lang = require(`../../core/languages/${langSet}.json`)

  const mentionArgs = message.content.split(" ")

  if(message.author.id !== bot.user.id){
    const mention = message.mentions.users.first()
    if (mention) {
      if(!message.content.startsWith(prefix)){
          if(message.mentions.users.first().id === bot.user.id){
            if(!mentionArgs[1]) {
              message.channel.send(lang.messageEventBotPing + `\`${prefix}\``)
            }
        }
      }
    }
  }

  if (!message.content.startsWith(prefix) || message.channel.type === "dm" || message.author.bot)
    return

  const messageArray = message.content.split(" ")
  const cmd = messageArray[0].toLowerCase()
  const args = messageArray.slice(1)
  const comd = cmd.slice(prefix.length)
  const commandfile = bot.commands.get(comd) || bot.commands.find(cmd => cmd.help.aliases.includes(comd))

    if (!commandfile)
      return

    if (commandfile.help.isUserAdmin && !message.member.hasPermission('MANAGE_GUILD'))
  
    return message.reply(lang.messageEventMissingPermManageGuild)

    else if (commandfile.help.isUserMod && !message.member.hasPermission('MANAGE_MESSAGES'))
  
    return message.reply(lang.messageEventMissingPermManageMessages)

     if (commandfile.help.args && !args.length) {
       var noArgsReply = lang.messageEventCommandNeedArg + `<@${message.author.id}> !`
  
     if (commandfile.help.usage) noArgsReply += `\n` + lang.messageEventCommandUsage + `\`${prefix}${commandfile.help.name} ${commandfile.help.usage}\``
  
     return message.channel.send(noArgsReply)
       }
  
  
     if(commandfile) commandfile.run(bot, message, args)
})

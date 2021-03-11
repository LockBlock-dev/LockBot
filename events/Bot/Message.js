const Discord = require("discord.js")
const bot = require("../../index.js")
const chalk = require("chalk")

bot.on("message", async message => {

  if(message.channel.type === "dm")
    return

  var settings = await bot.getGuild(message.guild.id)

  if (typeof settings === 'undefined') {
    console.log(`${chalk.bgRed("[Error]")} Error while asking for guild settings in guild : ${message.guild.id} ${message.guild.name}`)

    const newGuild = {
      guildID: message.guild.id,
      guildName: message.guild.name
    }
  
    await bot.createGuild(newGuild)
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

  if (!message.content.startsWith(prefix) || message.channel.type === "dm" || message.author.bot)
    return

  const messageArray = message.content.split(" ")
  const cmd = messageArray[0].toLowerCase()
  const args = messageArray.slice(1)
  const comd = cmd.slice(prefix.length)
  const commandfile = bot.commands.get(comd) || bot.commands.find(cmd => cmd.help.aliases.includes(comd))

    if (!commandfile)
      return

    if (commandfile.help.isUserAdmin && !message.member.hasPermission('MANAGE_GUILD')) {
  
    return message.reply(lang.messageEventMissingPermManageGuild)
    }

    if (commandfile.help.args && !args.length) {
      var noArgsReply = `${lang.messageEventCommandNeedArg} <@${message.author.id}> !`
  
    if (commandfile.help.usage) noArgsReply += `\n ${lang.messageEventCommandUsage} \`${prefix}${commandfile.help.name} ${commandfile.help.usage}\``
  
    return message.channel.send(noArgsReply)
      }

    const someUser = await bot.getBlacklistedUser(message.author.id)

    if(someUser) {
      return
    }
  
    if(commandfile) commandfile.run(bot, message, args, settings)
})

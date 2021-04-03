const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = (bot, message, args, settings, lang) => {

  function checkDays(date) {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / 86400000)
    return days + (days == 1 ? lang.userInfoDay : lang.userInfoDays) 
  }

  var member
     
  if(args.length == 0) {

    member = message.author

  } else {

    if (message.mentions.members.first()) {
      member = message.mentions.members.first().user
    }
    
    if (message.guild.members.cache.get(args[0])) {
      member = message.guild.members.cache.get(args[0]).user
    }       
  }

  if (!member) {
    return message.channel.send(bot.error(lang.errorUserNotFound, message.author.id, lang))
  }

  if (member.bot) {
    bot = "Bot"
  } else {
    bot = lang.userInfoUserIsNotBot
  }

  if (member.premiumSince) {
    boost = lang.userInfoBoostYes
  } else {
    boost = lang.userInfoBoostNo
  }

  const guildMember = message.guild.members.cache.get(member.id)
  
  const embed = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}>`)
    .setThumbnail(member.avatarURL({ format: 'png', dynamic: true}))
    .addField(lang.userInfoUsername,`<@${member.id}>`, true)
    .addField(lang.userInfoNickname, `${guildMember.nickname !== null ? `${guildMember.nickname}` : lang.userInfoNoNickname}`, true)
    .addField("Bot ?", bot, true)
    .addField("Booster", boost, true)
    .addField("ID", member.id,true)
    .addField(lang.userInfoJoinedDate, `${guildMember.joinedAt.toUTCString().substr(0, 16)} (${checkDays(guildMember.joinedAt)})`)
    .addField(lang.userInfoCreatedDate, `${member.createdAt.toUTCString().substr(0, 16)} (${checkDays(member.createdAt)})`)
    .addField("Roles", `${guildMember.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`)
    .setColor("#FF8A33")
    .setFooter("© LockBot")
    .setTimestamp()
      
  message.channel.send(embed)

}



module.exports.help = COMMANDS.INFOS.USERINFO
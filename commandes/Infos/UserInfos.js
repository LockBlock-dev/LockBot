const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

function checkDays(date) {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / 86400000)
  return days + (days == 1 ? " day" : " days") 
}

module.exports.run = (bot, message, args, settings, lang) => {

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
  
  const embed = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}>`)
    .setThumbnail(member.avatarURL({ format: 'png', dynamic: true}))
    .addField(lang.userInfoUsername,`<@${member.id}>`, true)
    .addField(lang.userInfoNickname, `${message.guild.members.cache.get(member.id).nickname !== null ? `${message.guild.members.cache.get(member.id).nickname}` : lang.userInfoNoNickname}`, true)
    .addField("Bot ?", bot, true)
    .addField("Booster", boost, true)
    .addField("ID", member.id,true)
    .addField(lang.userInfoJoinedDate, `${member.createdAt.toUTCString().substr(0, 16)} (${checkDays(member.createdAt)})`)
    .addField("Roles", `${message.guild.members.cache.get(member.id).roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`)
    .setColor("#FF8A33")
    .setFooter("© LockBot")
    .setTimestamp()
      
  message.channel.send(embed)

}



module.exports.help = COMMANDS.INFOS.USERINFO
const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = (bot, message, args, lang) => {

  const member = bot.memberFinder(message, args, 0)

  if (!member) {
    return message.channel.send(bot.error(lang.errorUserNotFound, message.author.id, lang))
  }

  if (member.bot) {
    isBot = "Bot"
  } else {
    isBot = lang.userInfoUserIsNotBot
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
    .addField(lang.userInfoStatus, isBot, true)
    .addField("Booster", boost, true)
    .addField("ID", member.id,true)
    .addField(lang.userInfoJoinedDate, `${guildMember.joinedAt.toUTCString().substr(0, 16)} (${bot.checkDays(guildMember.joinedAt, lang)})`)
    .addField(lang.userInfoCreatedDate, `${member.createdAt.toUTCString().substr(0, 16)} (${bot.checkDays(member.createdAt, lang)})`)
    .addField("Roles", `${guildMember.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`)
    .setColor("#FF8A33")
    .setFooter("© LockBot")
    .setTimestamp()
      
  message.channel.send(embed)

}



module.exports.help = COMMANDS.INFOS.USERINFO
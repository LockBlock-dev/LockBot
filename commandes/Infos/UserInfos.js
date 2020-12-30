const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")

function checkDays(date) {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / 86400000)
  return days + (days == 1 ? " day" : " days") 
}

module.exports.run = (bot, message, args, settings) => {

  const lang = require(`../../core/languages/${settings.guildLang}.json`)
     
  const member = message.mentions.members.first()

  if (member.user.bot) {bot = "Bot"} else {bot = lang.userInfoUserIsNotBot}
  if (member.user.premiumSince) {boost = lang.userInfoBoostYes} else {boost = lang.userInfoBoostNo}

  const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag)
                .setThumbnail(member.user.avatarURL({format:'png', dynamic:true, size:4096}))
                .setDescription(`<@${member.user.id}>`)
                .addField("ID", member.user.id,true)
                .addField(lang.userInfoNickname, `${member.nickname !== null ? `${member.nickname}` : lang.userInfoNoNickname}`, true)
                .addField(lang.userInfoJoinedDate, `${member.user.createdAt.toUTCString().substr(0, 16)} (${checkDays(member.user.createdAt)})`)
                .addField("Bot ?", bot, true)
                .addField("Boost", boost, true)
                .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`)
                .setColor("#FF8A33")
                .setFooter("© LockBot")
                .setTimestamp()
    
            message.channel.send(embed)
}



module.exports.help = MESSAGES.COMMANDS.INFOS.USERINFO
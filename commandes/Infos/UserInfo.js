const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")

function checkDays(date) {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / 86400000)
  return days + (days == 1 ? " day" : " days") 
}

module.exports.run = (bot, message, args) => {

  const GUILDS = JSON.parse(fs.readFileSync("./core/guildSettings.json", "utf8"))
  const langSet = GUILDS[message.guild.id].language
  const lang = require(`../../core/languages/${langSet}.json`)

  const status = {
    online: lang.userInfoOnline,
    idle: "AFK",
    dnd: lang.userInfoDnd,
    offline: lang.userInfoOffline
  }
       
  const member = message.mentions.members.first()

  const clientStatus = member.user.presence.clientStatus
  const userActivity = member.user.presence.activities[0]
  
  if (member.user.presence.status == "offline")
  {
    userActivityType = "OFFLINE"
    support = lang.userInfoSupportOffline
    userActivityState = lang.userInfoUserActivityStateoffline
  }
  else {
    if(!userActivity) {
      userActivityState = ""
      userActivityType = "NULL"
    } else {
    userActivityType = userActivity.type
    userActivityState = userActivity.state
    }

    if (member.user.bot) {support = "Bot"}
    else {
      if (clientStatus.desktop) {support = "PC"}
      if (clientStatus.web) {support = "Web"}
      if (clientStatus.mobile) {support = lang.userInfoSupportPhone}
    }
  }

  if (member.user.bot) {bot = "Bot"} else {bot = lang.userInfoUserIsNotBot}
  if (member.user.premiumSince) {boost = lang.userInfoBoostYes} else {boost = lang.userInfoBoostNo}

  if (userActivityType == "PLAYING") {userActivityTypeFormated = lang.userInfoUserActivityTypePlaying}
  if (userActivityType == "STREAMING") {userActivityTypeFormated = "Stream : "}
  if (userActivityType == "LISTENING") {userActivityTypeFormated = lang.userInfoUserActivityTypeListening}
  if (userActivityType == "WATCHING") {userActivityTypeFormated = lang.userInfoUserActivityTypeWatching}
  if (userActivityType == "CUSTOM_STATUS") {userActivityTypeFormated = lang.userInfoUserActivityTypeCustom}
  if (userActivityType == "OFFLINE") {userActivityTypeFormated = lang.userInfoUserActivityTypeOffline}
  if (userActivityType == "NULL") {userActivityTypeFormated = lang.userInfoUserActivityTypeNull}


  const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag)
                .setThumbnail(member.user.avatarURL({format:'png', dynamic:true, size:4096}))
                .setDescription(`<@${member.user.id}>`)
                .addField("ID", member.user.id,true)
                .addField(lang.userInfoNickname, `${member.nickname !== null ? `${member.nickname}` : lang.userInfoNoNickname}`, true)
                .addField(lang.userInfoJoinedDate, `${member.user.createdAt.toUTCString().substr(0, 16)} (${checkDays(member.user.createdAt)})`)
                .addField("Bot ?", bot, true)
                .addField(lang.userInfoStatus, status[member.user.presence.status], true)
                .addField("Boost", boost, true)
                .addField(lang.userInfoSupport, support, true)
                .addField(lang.userInfoActivity, userActivityTypeFormated + " " + userActivityState, true)
                .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`)
                .setColor("#FF8A33")
                .setFooter("© LockBot")
                .setTimestamp()
    
            message.channel.send(embed)
}



module.exports.help = MESSAGES.COMMANDS.INFOS.USERINFO
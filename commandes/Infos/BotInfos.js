const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
require('dotenv').config()

function checkDays(date) {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / 86400000)
    return days + (days == 1 ? " day" : " days") 
}

module.exports.run = (bot, message, args, settings, lang) => {

    const boticon = bot.user.displayAvatarURL()
    const usersize = bot.users.cache.size
    const channelsize = bot.channels.cache.size
    const serversize = bot.guilds.cache.size

    const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .setThumbnail(boticon)
        .addField(lang.botInfoName, bot.user.username, true)
        .addField("Owner", `<@${process.env.DEV_ID}>`, true )
        .addField("Version", "1.5", true)
        .addField(lang.botInfoServers, serversize, true)
        .addField("Channels", channelsize, true)
        .addField(lang.botInfoMembers, usersize, true)
        .addField("API", "Discord.js V12", true)
        .addField(lang.botInfoCreationDate, `${bot.user.createdAt.toUTCString().substr(0, 16)} (${checkDays(bot.user.createdAt)})`, true)
        .addField(lang.botInfosLanguages, "English, French, Spanish, German")
        .setColor("#FF8A33")
        .setFooter("© LockBot")
        .setTimestamp()

    message.channel.send(embed)
}



module.exports.help = COMMANDS.INFOS.BOTINFO
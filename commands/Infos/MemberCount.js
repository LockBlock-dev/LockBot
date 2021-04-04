const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = (bot, message, args, settings, lang) => {

    const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .addField(lang.serverInfoMembers, message.guild.memberCount)
        .setColor("#FF8A33")
        .setFooter("© LockBot")
        .setTimestamp()

    message.channel.send(embed)
}



module.exports.help = COMMANDS.INFOS.MEMBERCOUNT
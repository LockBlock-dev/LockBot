const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = (bot, message, args, lang) => {
	
	const embed = new Discord.MessageEmbed()
		.setDescription(`<@${message.author.id}>`)
		.addField(lang.serverInfoName, message.guild.name, true)
		.addField("ID", message.guild.id, true)
		.setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true}))
		.addField("Owner", `<@${message.guild.ownerID}>`, true)
		.addField("Channels", message.guild.channels.cache.size, true)
		.addField("Roles", message.guild.roles.cache.size, true)
		.addField(lang.serverInfoMembers, message.guild.memberCount, true)
		.addField("Emojis", message.guild.emojis.cache.size, true)
		.addField("Region", message.guild.region.toUpperCase(), true)
		.addField(lang.serverInfoCreationDate, `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${bot.checkDays(message.channel.guild.createdAt, lang)})`, true)
		.setColor("#FF8A33")
		.setFooter("© LockBot")
		.setTimestamp()
			
	message.channel.send(embed)
		
}



module.exports.help = COMMANDS.INFOS.SERVERINFO
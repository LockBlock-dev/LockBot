const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")
const { cpuUsage } = require("process")

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

	
		const embed = new Discord.MessageEmbed()
			.setAuthor(message.author.tag)
			.addField(lang.serverInfoName, message.guild.name, true)
			.addField("ID", message.guild.id, true)
			.setThumbnail(message.guild.iconURL())
			.addField("Owner", bot.users.cache.get(message.guild.ownerID).username, true)
			.addField("Channels", message.guild.channels.cache.size, true)
			.addField("Roles", message.guild.roles.cache.size, true)
			.addField(lang.serverInfoMembers, message.guild.members.cache.size, true)
			.addField("Emojis", message.guild.emojis.cache.size, true)
			.addField("Region", message.guild.region.toUpperCase(), true)
			.addField(lang.serverInfoCreationDate, `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
			.setColor("#FF8A33")
			.setFooter("© LockBot")
			.setTimestamp()
			
		message.channel.send(embed)

		
}



module.exports.help = MESSAGES.COMMANDS.INFOS.SERVERINFO
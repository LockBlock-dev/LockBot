const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message, args) => {

	const GUILDS = JSON.parse(fs.readFileSync("./core/guildSettings.json", "utf8"))
    const langSet = GUILDS[message.guild.id].language
    const lang = require(`../../core/languages/${langSet}.json`)

	users = message.guild.members.cache.filter(member => !member.user.bot).size
	bots = message.guild.members.cache.filter(member => member.user.bot).size
	total = message.guild.members.cache.size
	
	const embed = new Discord.MessageEmbed()
		.setAuthor(message.author.tag, message.author.avatarURL)
		.addField(lang.countMembers,users)
		.addField("Bots",bots)
		.addField("Total",total)
        .setColor("#FF8A33")
		.setFooter("© LockBot")
		.setTimestamp()
    message.channel.send(embed)
}



module.exports.help = MESSAGES.COMMANDS.INFOS.COUNT
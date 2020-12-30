const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message) => {

	const settings = await bot.getGuild(message)
    const lang = require(`../../core/languages/${settings.guildLang}.json`)

    const embed = new Discord.MessageEmbed()
	.setDescription(`<@${message.author.id}>`)
	.addField(lang.vote,"https://top.gg/bot/695719962240876544")
	.setColor("#FF8A33")
	.setFooter("© LockBot")
	.setTimestamp()
	
	message.channel.send(embed)
}



module.exports.help = MESSAGES.COMMANDS.LOCKBOT.VOTE
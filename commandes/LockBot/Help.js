const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, settings) => {

	const lang = require(`../../core/languages/${settings.guildLang}.json`)
	
const embed = new Discord.MessageEmbed()
	.setDescription(`<@${message.author.id}>`)
	.addField("Fun",`\`Ascii, Emojify, FBI, Gamerometer, Hack, Meme\``)
	.addField("Infos",`\`BotInfos, ProfilePicture, ServerInfos, UserInfos\``)
	.addField("LockBot",`\`Help, Invite\``)
	.addField("Misc",`\`Ping, Poll, Say\``)
	.addField("Moderation",`\`Config, Nuke\``)
	.addField(lang.helpSupportServer,"https://discord.gg/ef5zSRF5e2")
	.setColor("#FF8A33")
	.setFooter("© LockBot")
	.setTimestamp()
	
	message.channel.send(embed)
	}



module.exports.help = MESSAGES.COMMANDS.LOCKBOT.HELP

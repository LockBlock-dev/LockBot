const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
	
const embed = new Discord.MessageEmbed()
	.setDescription(`<@${message.author.id}>`)
	.addField("Fun",`\`Ascii, Emojify, FBI, Gamerometer, Hack, Meme\``)
	.addField("Infos",`\`BotInfos, MemberCount, ProfilePicture, ServerInfos, UserInfos\``)
	.addField("LockBot",`\`Help, Invite\``)
	.addField("Misc",`\`Ping, Poll, Say\``)
	.addField("Moderation",`\`Lang, Nuke, Prefix\``)
	.setColor("#FF8A33")
	.setFooter("© LockBot")
	.setTimestamp()
	
	message.channel.send(embed)
	}



module.exports.help = MESSAGES.COMMANDS.LOCKBOT.HELP

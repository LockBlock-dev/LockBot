const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message) => {

	const settings = await bot.getGuild(message.guild.id)
	const lang = require(`../../core/languages/${settings.guildLang}.json`)
	
	const embed = new Discord.MessageEmbed()
	.setDescription(`<@${message.author.id}>`)
	.addField("Fun 🎉",`\`Ascii, Emojify, FBI, Gamerometer, Hack, Meme, Hentai\``)
	.addField("Infos 🔎",`\`BotInfos, ProfilePicture, ServerInfos, UserInfos\``)
	.addField("LockBot 🤖",`\`Help, Invite\``)
	.addField("Misc 📦",`\`Ping, Poll, Say, Base64\``)
	.addField("Moderation 🔧",`\`Config, Nuke\``)
	.addField(lang.helpSupportServer,"https://discord.gg/R2KVJNr4Ta")
	.setColor("#FF8A33")
	.setFooter("© LockBot")
	.setTimestamp()
	
	message.channel.send(embed)
}



module.exports.help = MESSAGES.COMMANDS.LOCKBOT.HELP

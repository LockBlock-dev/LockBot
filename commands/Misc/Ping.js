const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, lang) => {

	message.channel.send("Pinging...").then(m => {
	const ping = m.createdTimestamp - message.createdTimestamp

	m.delete()

	const embed = new Discord.MessageEmbed()
		.setDescription(`<@${message.author.id}> 🏓 Pong ! `)
        .addField(`${lang.pingLatencyBot}`, `${ping} ms`)
		.addField(`${lang.pingLatencyAPI}`, `${Math.round(bot.ws.ping)} ms`)
        .setColor("#FF8A33")
        .setTimestamp()
	    .setFooter("© LockBot")

    message.channel.send(embed)

	})
}



module.exports.help = COMMANDS.MISC.PING
const { MESSAGES } = require("../../core/constants.js")

module.exports.run = async (bot, message) => {

	const settings = await bot.getGuild(message.guild.id)
    const lang = require(`../../core/languages/${settings.guildLang}.json`)

	message.channel.send("Pinging...").then(m => {
	const ping = m.createdTimestamp - message.createdTimestamp

	m.delete()

	message.channel.send(`Pong ! :ping_pong: ${lang.pingLatencyBot} ${ping} ms ${lang.pingLatencyAPI} ${Math.round(bot.ws.ping)} ms`)

	})
}



module.exports.help = MESSAGES.COMMANDS.MISC.PING
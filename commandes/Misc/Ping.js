const Discord = require("discord.js")
const { MESSAGES } = require("../../core/constants.js")
const fs = require("fs")

module.exports.run = async (bot, message) => {

	const GUILDS = JSON.parse(fs.readFileSync("./core/guildSettings.json", "utf8"))
    const langSet = GUILDS[message.guild.id].language
    const lang = require(`../../core/languages/${langSet}.json`)

	message.channel.send("Pinging...").then(m => {
	const ping = m.createdTimestamp - message.createdTimestamp

	m.delete()

	message.channel.send("Pong ! :ping_pong:")
	message.channel.send(lang.pingLatencyBot + ping + lang.pingLatencyAPI + Math.round(bot.ws.ping) + "ms")

	})
}



module.exports.help = MESSAGES.COMMANDS.MISC.PING
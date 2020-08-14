const bot = require("../../index.js")
const fs = require("fs")
const path = require('path')
const { Message } = require("discord.js")

bot.on('guildDelete', guild => {

	const ID = guild.id

	bot.user.setActivity(`&help | in ${bot.guilds.cache.size} servers`, { type: 'WATCHING' })

	const settingsPath = path.join(__dirname, "../../core/guildSettings.json")
	var GUILDS = JSON.parse(fs.readFileSync(settingsPath, "utf8"))
	delete GUILDS[ID]
	return fs.writeFileSync(settingsPath, JSON.stringify(GUILDS))
})
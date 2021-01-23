const bot = require("../../index.js")

bot.on('guildDelete', async guild => {

	await bot.deleteGuild(guild)

	bot.user.setActivity(`+help | in ${bot.guilds.cache.size} servers`, { type: 'WATCHING' })
})

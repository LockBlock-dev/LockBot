const bot = require("../../index.js")

bot.on('guildDelete', async guild => {

	await bot.deleteGuild(guild)

	console.log(`${chalk.red("[Bot]")} Guild left : ${guild.id} ${guild.name}.`)
	
	bot.user.setActivity(`+help | in ${bot.guilds.cache.size} servers`, { type: 'WATCHING' })
})

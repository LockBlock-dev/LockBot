const chalk = require("chalk")
const bot = require("../../index.js")

bot.on("ready", () => {
    console.log(chalk.red("[Bot]") + ` Activated with ${bot.users.cache.size} users, in ${bot.guilds.cache.size} servers.`)
    bot.user.setStatus('Online')
    bot.user.setActivity(`+help | in ${bot.guilds.cache.size} servers`, { type: 'PLAYING' })
})

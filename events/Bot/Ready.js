const chalk = require("chalk")
const bot = require("../../index.js")

bot.on("ready", () => {
    console.log(chalk.red("[Bot]") + ` Activated with ${bot.users.cache.size} users, in ${bot.guilds.cache.size} servers.`)
    bot.user.setStatus('Online')
    bot.user.setActivity(`+help | in ${bot.guilds.cache.size} servers`, { type: 'WATCHING' })
<<<<<<< HEAD
})
=======
})
>>>>>>> 1b8ca7a4ed82a8fc07a3c74754fc6dda59b5ce2f

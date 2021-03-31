const bot = require("../../index.js")
const chalk = require("chalk")

bot.on("guildUpdate", async (oldGuild, newGuild) => {

    if (oldGuild.name !== newGuild.name) {
        await bot.updateGuild(newGuild.id, { guildName: newGuild.name})

	    console.log(`${chalk.red("[Bot]")} Guild edited : ${newGuild.id} ${oldGuild.name} => ${newGuild.name}.`)
    }
})

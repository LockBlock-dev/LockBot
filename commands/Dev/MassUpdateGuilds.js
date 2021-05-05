const { COMMANDS } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message) => {

    message.delete()

    message.author.send("Trying to update servers in DB..")

    const guilds = bot.guilds.cache.map(guild => [guild.id, guild.name])

    for (const server in guilds) {
        await bot.updateGuild(guilds[server][0], { param: ""})
    }
}



module.exports.help = COMMANDS.DEV.MUG
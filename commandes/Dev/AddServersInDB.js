const { COMMANDS } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args) => {

    message.delete()

    message.author.send("Trying to add servers in DB..")

    const guilds = bot.guilds.cache.map(guild => [guild.id, guild.name])

    for (const server in guilds) {
        const test = await bot.getGuild(guilds[server][0])
        if (typeof test === 'undefined') {
            const newGuild = {
                guildID: guilds[server][0],
                guildName: guilds[server][1]
              }
            
              await bot.createGuild(newGuild)
        }
    }
}



module.exports.help = COMMANDS.DEV.ASIDB
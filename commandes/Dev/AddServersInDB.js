const { MESSAGES } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (message.author.id !== process.env.DEV_ID) return message.reply("LockBot isn\'t your bot !")

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



module.exports.help = MESSAGES.COMMANDS.DEV.ASIDB
const { MESSAGES } = require("../../core/constants.js")

module.exports.run = async (bot, message, args, settings) => {

	//const settings = await bot.getGuild(message.guild.id)
    const lang = require(`../../core/languages/${settings.guildLang}.json`)



}



module.exports.help = MESSAGES.COMMANDS.MISC.DECODE
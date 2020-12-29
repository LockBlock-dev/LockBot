const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (bot, message, args, settings) => {

    const lang = require(`../../core/languages/${settings.guildLang}.json`)

    const gamer = Math.round(Math.random() * 100)
	const member = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()
        .setColor("#FF8A33")
        .setDescription(`:video_game: **${member.username}` + lang.gamerometer1 + `${gamer}` + lang.gamerometer2 +`** :video_game:`)
    message.channel.send(embed)
}



module.exports.help = MESSAGES.COMMANDS.FUN.GAMER
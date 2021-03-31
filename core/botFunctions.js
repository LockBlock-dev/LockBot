const Discord = require("discord.js")

module.exports = bot => {

    bot.error = (error, id, lang) => {
        const embed = new Discord.MessageEmbed()
            .setDescription(`<@${id}>`)
            .addField(lang.errorMessage, error)
            .setColor("#FF0000")
            .setFooter("© LockBot")
            .setTimestamp()
    
        return embed
    }

}
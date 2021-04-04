const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, settings, lang) => {

    const replies = lang.eightBallAnswers
    const response = Math.floor(Math.random() * replies.length)

    const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}> 🎱`)
        .addField(`${lang.eightBallYourQuestion}`, `${args.join(" ")}`)   
        .addField(`${lang.eightBallTheAnswer}`, `${replies[response]}`)     
        .setColor("#FF8A33")
        .setFooter("© LockBot")
        .setTimestamp()

    message.channel.send(embed)
}



module.exports.help = COMMANDS.FUN.EIGHTBALL
const Discord = require("discord.js")
const { MESSAGES } = require("../../core/constants.js")
const fs = require("fs")

module.exports.run = async (bot, message, args, settings) => {

    const lang = require(`../../core/languages/${settings.guildLang}.json`)
    
    var emojiList = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟']
    const messageWithoutCmd = message.content.slice(6)

    var optionsList = messageWithoutCmd.split(",")

    if (optionsList.length > 10)
        return message.channel.send(lang.pollOptionsListLength + `<@${message.author.id}> !`)

    if (optionsList.length < 2) {
        const embed = new Discord.MessageEmbed()
        .setTitle(lang.pollSimpleTitle)
        .setAuthor(`${message.author.tag}`, message.author.avatarURL)
        .setDescription(args.join(" "))
        .setColor("#FF8A33")
        .setTimestamp()
	    .setFooter("© LockBot")

        message.channel.send({embed})
        .then(async function (message) {
            await message.react("✔️")
            await message.react("❌")
        })
    }

    var optionsText = ""

    for (var i = 0; i < optionsList.length; i++) { 
        optionsText += emojiList[i] + " " + optionsList[i] + "\n"
    }

    const question = optionsList.splice(0, 1)
    const optionsArgsCommas = optionsList.toString()
    const optionsArgs = optionsArgsCommas.split(",").join(" | ")

    if (optionsList.length >= 2) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
        .addField(`${question} :`, optionsArgs)
        .setColor("#FF8A33")
        .setTimestamp()
	    .setFooter("© LockBot")

        message.channel.send({embed})
            .then(async function (message) {
                var reactionArray = [];
                for (var i = 0; i < optionsList.length; i++) { 
                    reactionArray[i] = await message.react(emojiList[i]);
                }
            })
    }
}



module.exports.help = MESSAGES.COMMANDS.MISC.POLL
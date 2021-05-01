const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
const { serialize } = require("superagent")

module.exports.run = async (bot, message, args, lang) => {
    
    const emojiList = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟']
    const numbers = ['1','2','3','4','5','6','7','8','9','10']

    const joinPoll = (array, separator) => {
        var joined = ""

        for (e in array) {
            joined += `${numbers[e]}. ${array[e]}${separator}`
        }
        return joined
    }

    var optionsList = args.join(" ").split(",")

    if (optionsList.length > 10)
        return message.channel.send(bot.error(lang.pollOptionsListLength, message.author.id, lang))

    if (optionsList.length < 2) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .addField(lang.pollSimpleTitle, args.join(" "))
        .setColor("#FF8A33")
        .setTimestamp()
	    .setFooter("© LockBot")

        message.channel.send(embed)
        .then(async (message) => {
            await message.react("<:LockBot_check:831926276792385586>")
            await message.react("<:LockBot_cross:831926276935385130>")
        })
    }

    if (optionsList.length >= 2) {
        var optionsText = ""

        for (var i = 0; i < optionsList.length; i++) { 
            optionsText += `${emojiList[i]} ${optionsList[i]}\n`
        }

        const question = optionsList.splice(0, 1)
        const optionsArgs = joinPoll(optionsList, "\n")

        const embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}>`)
            .addField(`${question} :`, `${optionsArgs}`)
            .setColor("#FF8A33")
            .setTimestamp()
	        .setFooter("© LockBot")

        message.channel.send(embed)
            .then(async (message) => {
                var reactionArray = []
                for (var i = 0; i < optionsList.length; i++) { 
                    reactionArray[i] = await message.react(emojiList[i])
                }
            })
    }
}



module.exports.help = COMMANDS.MISC.POLL
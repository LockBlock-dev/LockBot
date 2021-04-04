const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, lang) => {
    
    var emojiList = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟']

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
        .then(async function (message) {
            await message.react("✔️")
            await message.react("❌")
        })
    }

    if (optionsList.length >= 2) {
        var optionsText = ""

        for (var i = 0; i < optionsList.length; i++) { 
            optionsText += emojiList[i] + " " + optionsList[i] + "\n"
        }

        const question = optionsList.splice(0, 1)
        const optionsArgs = optionsList.toString().split(",").join(" | ")

        const embed = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}>`)
            .addField(`${question} :`, optionsArgs)
            .setColor("#FF8A33")
            .setTimestamp()
	        .setFooter("© LockBot")

        message.channel.send(embed)
            .then(async function (message) {
                var reactionArray = [];
                for (var i = 0; i < optionsList.length; i++) { 
                    reactionArray[i] = await message.react(emojiList[i]);
                }
            })
    }
}



module.exports.help = COMMANDS.MISC.POLL
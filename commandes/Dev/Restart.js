const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const chalk = require("chalk")
const config = require("../../config.json")

module.exports.run = async (bot, message) => {

    if (message.author.id !== "249899689028091904") return message.reply("LockBot isn't your bot !")
	message.delete()
    message.channel.send("Redémarrage...")
    .then(m => m.delete(100))
    .then(bot.destroy())
    .then(() => bot.login(config.token))
    console.log(chalk.red("[Bot] ") + "Restart command: LOADING.")
    message.channel.send("Restart successful !")

console.log(chalk.red("[Bot] ") + "Restart command: SUCCESS.")
}

module.exports.help = MESSAGES.COMMANDS.DEV.RESTART
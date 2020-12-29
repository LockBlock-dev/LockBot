const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const chalk = require("chalk")
require('dotenv').config()

module.exports.run = async (bot, message) => {

    if (message.author.id !== "249899689028091904") return message.reply("LockBot isn't your bot !")
	message.delete()
    message.channel.send("Restarting...")
    .then(m => m.delete(100))
    .then(process.exit())
    console.log(chalk.red("[Bot] ") + "Restart command: LOADING.")
    message.channel.send("Restart successful !")

    console.log(chalk.red("[Bot] ") + "Restart command: SUCCESS.")
}

module.exports.help = MESSAGES.COMMANDS.DEV.RESTART
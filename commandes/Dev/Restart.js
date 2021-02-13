const { MESSAGES } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message) => {

    if (message.author.id !== process.env.DEV_ID) return message.reply("LockBot isn't your bot !")
	message.delete()
    message.channel.send("Restarting...")
    .then(m => m.delete(100))
    .then(process.exit())
    console.log(chalk.red("[Bot] ") + "Restart command: LOADING.")
    message.channel.send("Restart successful !")

    console.log(chalk.red("[Bot] ") + "Restart command: SUCCESS.")
}

module.exports.help = MESSAGES.COMMANDS.DEV.RESTART
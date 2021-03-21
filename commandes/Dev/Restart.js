const { COMMANDS } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message) => {

	message.delete()
    
    message.channel.send("Restarting...")
    .then(m => m.delete(100))
    .then(process.exit())
    console.log(chalk.red("[Bot] ") + "Restart command: LOADING.")
    message.channel.send("Restart successful !")

    console.log(chalk.red("[Bot] ") + "Restart command: SUCCESS.")
}

module.exports.help = COMMANDS.DEV.RESTART
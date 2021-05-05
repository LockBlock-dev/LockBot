const { Client } = require("discord.js")
require('dotenv').config()

const bot = new Client({disableMentions: 'everyone'})

module.exports = bot

bot.config = require("./config.js")

require("./core/DBfunctions.js")(bot)

bot.mongoose = require("./core/mongoose.js")

bot.mongoose.init()

const { loadCommands, loadEvents } = require("./core/loader.js")

loadEvents()
loadCommands()

require("./core/botFunctions.js")(bot)

bot.login(process.env.DISCORD_TOKEN)
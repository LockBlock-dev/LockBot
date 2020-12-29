const { Client } = require("discord.js")
require('dotenv').config()

const bot = new Client({disableEveryone: true})

module.exports = bot

bot.config = require("./config.js")

require("./core/DBfunctions.js")(bot)

bot.mongoose = require("./core/mongoose.js")

const { loadCommands, loadEvents } = require("./core/loader.js")

loadCommands()
loadEvents()
bot.mongoose.init()

bot.login(process.env.DISCORD_TOKEN)

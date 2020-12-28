const { Client } = require("discord.js")
const bot = new Client({disableEveryone: true})
require('dotenv').config()
//const config = require("./config.json")

module.exports = bot

const { loadCommands, loadEvents } = require("./core/loader.js")

loadCommands()
loadEvents()

bot.login(process.env.DISCORD_TOKEN)
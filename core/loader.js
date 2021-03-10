const bot = require("../index.js")
const chalk = require("chalk")
const { readdirSync } = require("fs")
const { Collection } = require("discord.js")
bot.commands = new Collection()
  
module.exports.loadCommands = () => {
  const dircommand = "./commandes"
  readdirSync(dircommand).forEach(dirs => {
    const commands = readdirSync(`${dircommand}/${dirs}/`).filter(files => files.endsWith(".js"))

    for (const file of commands) {
      const getFileName = require(`../${dircommand}/${dirs}/${file}`)
      bot.commands.set(getFileName.help.name, getFileName)
      console.log(`${chalk.yellow("[Command Handler] ")} ${chalk.bold(`${file}`)} module detected.`)
    }
  })
}

module.exports.loadEvents = () => {

  const direvent = "./events"
  readdirSync(direvent).forEach(dirs => {
      const events = readdirSync(`${direvent}/${dirs}/`).filter(files => files.endsWith(".js"))

      for (const file of events) {
        require(`../${direvent}/${dirs}/${file}`)
        console.log(`${chalk.yellow("[Event Handler] ")} ${chalk.bold(`${file}`)} module detected.`)
      }
  })
}
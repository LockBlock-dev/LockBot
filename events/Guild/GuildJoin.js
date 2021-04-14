const bot = require("../../index.js")
const chalk = require("chalk")

bot.on("guildCreate", async guild => {

  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  }

  const settings = await bot.getGuild(guild.id)

  if (typeof settings === 'undefined') {
    await bot.createGuild(newGuild)
  }

  console.log(`${chalk.red("[Bot]")} New guild joined : ${guild.id} ${guild.name}`)
    
  bot.user.setActivity(`+help | in ${bot.guilds.cache.size} servers`, { type: 'WATCHING' })

  var found = false

  guild.channels.cache.forEach = channel => {
      if(found == true || channel.type != "text") {
        return
      }
      if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
        found = true
        return channel.send("🇺🇸 Hello !\nTo get started you can do +help in your server ! If you want to configure the bot do +help config !\n\n🇫🇷 Bonjour !\nPour commencer vous pouvez faire +help dans votre serveur ! Si vous voulez configurer le bot faîtes +help config !")
      
      } else {
        return guild.owner.send("🇺🇸 Hello !\nTo get started you can do +help in your server ! If you want to configure the bot do +help config !\n\n🇫🇷 Bonjour !\nPour commencer vous pouvez faire +help dans votre serveur ! Si vous voulez configurer le bot faîtes +help config")
      }
  }
})
const bot = require("../../index.js")

bot.on("guildCreate", async guild => {

  const newGuild = {
    guildID: guild.id,
    guildName: guild.name
  }

  const settings = await bot.getGuild(guild.id)

  if (typeof settings === 'undefined') {
    await bot.createGuild(newGuild)
  }
    
  bot.user.setActivity(`+help | in ${bot.guilds.cache.size} servers`, { type: 'WATCHING' })

  var found = false

  guild.channels.cache.forEach = channel => {
      if(found == true || channel.type != "text") {
        return
      }
      if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
        found = true
        return channel.send("🇺🇸 Hello ! \nTo get started you can change my language and my prefix in your server ! \n \n🇫🇷 Bonjour ! \nPour commencer vous pouvez changer ma langue et mon préfixe dans votre serveur ! \n \n+config prefix <prefix>  |  +config lang <fr> / <en> / <es> / <de>")
      }
  }
})
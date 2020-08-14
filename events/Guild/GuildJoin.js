const bot = require("../../index.js")

bot.on("guildCreate", guild => {

    bot.user.setActivity(`&help | in ${bot.guilds.cache.size} servers`, { type: 'WATCHING' })

    var found = false

    guild.channels.cache.forEach(function(channel, id) {
        if(found == true || channel.type != "text") {
          return
        }
        if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
          found = true
          return channel.send("Hello ! \nTo get started you can change my language and my prefix in your server ! \n \nBonjour ! \nPour commencer vous pouvez changer ma langue et mon préfixe dans votre serveur ! \n \n&prefix <prefix>  |  &lang <fr> or <en>")
        }
    })
})
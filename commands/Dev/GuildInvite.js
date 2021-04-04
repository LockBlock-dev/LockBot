const { COMMANDS } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args) => {
    
    message.delete()

    const guild = bot.guilds.cache.get(args[0])
    if (!guild) return message.channel.send(bot.error("The bot isn't in the guild with this ID.", message.author.id, lang))

    const invitechannels = guild.channels.cache.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))
    if(!invitechannels) return message.channel.send(bot.error("No channels found with permissions to create Invite in !", message.author.id, lang))

    invitechannels.random().createInvite()
    .then(invite=> message.channel.send("Found Invite : " + "https://discord.gg/" + invite.code))
}



module.exports.help = COMMANDS.DEV.GUILDINVITE
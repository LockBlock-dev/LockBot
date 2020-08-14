const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
    message.delete()
    
    if (message.author.id !== "249899689028091904") return message.reply("LockBot isn\'t your bot !")

    const guild = bot.guilds.cache.get(args[0])
    if (!guild) return message.reply("The bot isn't in the guild with this ID.")

    const invitechannels = guild.channels.cache.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))
    if(!invitechannels) return message.channel.send("No channels found with permissions to create Invite in !")

    invitechannels.random().createInvite()
    .then(invite=> message.channel.send("Found Invite : " + "https://discord.gg/" + invite.code))
}



module.exports.help = MESSAGES.COMMANDS.DEV.GUILDINVITE
const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    message.delete()
  
    const parentid = message.channel.parentID
    const nukedchannel = message.channel
    const nukelchannelname = message.channel.name
    const position = message.channel.position
    const guild = message.guild

    nukedchannel.clone()
    .then(nukedchannel.delete())

    setTimeout(function(){ 
        const newClonedChannel = guild.channels.cache.find(channel => channel.name === nukelchannelname)

        const newClonedChannelID = newClonedChannel.id

        newClonedChannel.setParent(parentid)
        newClonedChannel.setPosition(position)

        bot.channels.cache.get(newClonedChannelID).send("Nuked :ok_hand: \nhttps://tenor.com/tZlA.gif")

        setTimeout(function(){
            newClonedChannel.lockPermissions()
                .catch(error => " ")

        }, 1000)
    }, 1000)
}



module.exports.help = MESSAGES.COMMANDS.MODERATION.NUKE
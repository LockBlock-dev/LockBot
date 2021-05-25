const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, lang, settings) => {

    message.delete()

    const Filter = (reaction, user) => user.id == message.author.id

    const embed = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .addField(lang.nukeWarning, lang.nukeDescription)
        .setColor("FF0000")
        .setTimestamp()
        .setFooter("© LockBot")
        
    const reactionMessage = await message.channel.send(embed)

    await reactionMessage.react("✔️")
    await reactionMessage.react("❌")

    reactionMessage.awaitReactions(Filter, {max: 1, time: 10000, errors: ["time"]}).then(collected => {

        const reaction = collected.first()
        
        switch (reaction.emoji.name) {
            case "✔️":
                var parentid = message.channel.parentID
                var nukedchannel = message.channel
                var nukedchannelname = message.channel.name
                var position = message.channel.position
                var guild = message.guild

                nukedchannel.clone().then(nukedchannel.delete())

                setTimeout(() => { 
                    const newClonedChannel = guild.channels.cache.find(channel => channel.name === nukedchannelname)

                    const newClonedChannelID = newClonedChannel.id

                    newClonedChannel.setParent(parentid)
                    newClonedChannel.setPosition(position)

                    bot.channels.cache.get(newClonedChannelID).send("Nuked :ok_hand: \nhttps://tenor.com/tZlA.gif")

                    setTimeout(() => {
                        newClonedChannel.lockPermissions()
                            .catch(err => console.log(err))

                            if (settings.guildLogChannel) {
                                const channel = message.guild.channels.cache.get(settings.guildLogChannel)
                    
                                if (channel) {
                                    channel.send(bot.log("Nuke", message.author, `<#${newClonedChannelID}>`, lang))
                                } else {
                                    return message.channel.send(bot.error(lang.errorChannelLogNotFound, message.author.id, lang))
                                }
                            }

                    }, 1000)
                }, 1000)
                break

            case "❌":
                break
        }
    }).catch()

    setTimeout(() => {
        reactionMessage.delete()

        const embed2 = new Discord.MessageEmbed()
        .setDescription(`<@${message.author.id}>`)
        .addField(lang.nukeAborted, lang.nukeAbortedWhy)
        .setColor("FF0000")
        .setTimestamp()
        .setFooter("© LockBot")
        
        message.channel.send(embed2)
    }, 12000)

}



module.exports.help = COMMANDS.MODERATION.NUKE
const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, lang) => {

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
                const parentid = message.channel.parentID
                const nukedchannel = message.channel
                const nukedchannelname = message.channel.name
                const position = message.channel.position
                const guild = message.guild

                nukedchannel.clone().then(nukedchannel.delete())

                setTimeout(() => { 
                    const newClonedChannel = guild.channels.cache.find(channel => channel.name === nukedchannelname)

                    const newClonedChannelID = newClonedChannel.id

                    newClonedChannel.setParent(parentid)
                    newClonedChannel.setPosition(position)

                    bot.channels.cache.get(newClonedChannelID).send("Nuked :ok_hand: \nhttps://tenor.com/tZlA.gif")

                    setTimeout(() => {
                        newClonedChannel.lockPermissions()
                            .catch(error => " ")

                    }, 1000)
                }, 1000)
                break

            case "❌":
                break
        }
    })

    setTimeout(() => {
        reactionMessage.delete()
    }, 10000)
}



module.exports.help = COMMANDS.MODERATION.NUKE
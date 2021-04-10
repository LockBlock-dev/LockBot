const Discord = require("discord.js")

module.exports = bot => {

    bot.error = (error, id, lang) => {
        const embed = new Discord.MessageEmbed()
            .setDescription(`<@${id}>`)
            .addField(lang.errorMessage, error)
            .setColor("#FF0000")
            .setFooter("© LockBot")
            .setTimestamp()
    
        return embed
    }

    bot.checkDays = (date, lang) => {
        const now = new Date()
        const diff = now.getTime() - date.getTime()
        const days = Math.floor(diff / 86400000)

        return days + (days == 1 ? lang.userInfoDay : lang.userInfoDays) 
    }

    bot.memberFinder = (message, args, pos) => {
        var member
     
        if(args.length == 0) {

            member = message.author

        } else {

            if (message.mentions.members.first()) {
                member = message.mentions.members.first().user
            }
    
            if (message.guild.members.cache.get(args[pos])) {
                member = message.guild.members.cache.get(args[pos]).user
            }       
        }

        return member
    }

    bot.channelFinder = (message, args, pos) => {
        var channel
     
        if(args.length == 0) {

            channel = message.channel

        } else {

            if (message.mentions.channels.first()) {
                channel = message.mentions.channels.first()
            }
    
            if (message.guild.channels.cache.get(args[pos])) {
                channel = message.guild.channels.cache.get(args[pos])
            }       
        }

        return channel
    }

}
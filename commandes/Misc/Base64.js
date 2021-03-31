const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = (bot, message, args, settings, lang) => {

    const prefix = settings.guildPrefix

    const getAction = args[0]
    
    if (!args[1]) {  
        return message.channel.send(`${lang.messageEventCommandNeedArg} <@${message.author.id}> !\n${lang.messageEventCommandUsage} \`${prefix}${COMMANDS.MISC.BASE64.name} ${COMMANDS.MISC.BASE64.usage}\``)
    }

    const content = args.slice(1).join(" ")

    if (content.length > 100) {
        return message.channel.send(bot.error(lang.base64ContentLength, message.author.id, lang))
    }
  
    switch(getAction) {
        case "encode": {

            const encoded = Buffer.from(content).toString('base64')

            const embed = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}>`)
                .addField(`Text :`, content)
                .addField(`Base64 :`, encoded)
                .setColor("#FF8A33")
                .setTimestamp()
	            .setFooter("© LockBot")
        
            message.channel.send(embed)
           
            break
        }
        case "decode": {

            const decoded = Buffer.from(content, 'base64').toString('utf8')

            const embed = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}>`)
                .addField(`Base64 :`, content)
                .addField(`Text :`, decoded)
                .setColor("#FF8A33")
                .setTimestamp()
	            .setFooter("© LockBot")
        
            message.channel.send(embed)
                                          
            break
        }
    }

}



module.exports.help = COMMANDS.MISC.BASE64
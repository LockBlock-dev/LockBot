const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = (bot, message, args) => {

    const GUILDS = JSON.parse(fs.readFileSync("./core/guildSettings.json", "utf8"))
    const langSet = GUILDS[message.guild.id].language
    const lang = require(`../../core/languages/${langSet}.json`)
  
    const member = message.mentions.members.first()

    const embed = new Discord.MessageEmbed()
                .setTitle(message.author.username)
                .addField(lang.profilePicture, member.user.tag)
                .setImage(member.user.avatarURL({format:'png', dynamic:true, size:4096}))
                .setColor("#FF8A33")
    
            message.channel.send(embed)
}



module.exports.help = MESSAGES.COMMANDS.INFOS.PROFILEPICTURE
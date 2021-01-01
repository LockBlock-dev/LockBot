const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const got = require("got")

module.exports.run = async (bot, message) => {

    const settings = await bot.getGuild(message.guild.id)
    const lang = require(`../../core/languages/${settings.guildLang}.json`)

    if (message.channel.nsfw) {

        got(`https://www.reddit.com/r/hentai/random/.json?sort=top&t=week`).then(response => {
            try {
                        const content = JSON.parse(response.body)
                        const hentaiType = content[0].data.children[0].data.post_hint
                        const permalink = content[0].data.children[0].data.permalink
                        const hentaiUrl = `https://reddit.com${permalink}`
                        const hentaiImage = content[0].data.children[0].data.url
                        const hentaiTitle = content[0].data.children[0].data.title
                        const hentaiUpvotes = content[0].data.children[0].data.ups
                        const hentaiNumComments = content[0].data.children[0].data.num_comments
                        
                        const embed = new Discord.MessageEmbed()
                            .setTitle(hentaiTitle)
                            .setImage(hentaiImage)
                            .setURL(hentaiUrl)
                            .setColor("#FF8A33")
                            .setFooter("👍 " + hentaiUpvotes + " | 💬 " + hentaiNumComments + " | © LockBot")
                            .setTimestamp()

                            message.channel.send(embed)

            } catch(err) {
            message.channel.send("💥")
            }
        })

    } else {
        message.channel.send(lang.hentaiChannelNotNSFW)
    }
}



module.exports.help = MESSAGES.COMMANDS.FUN.HENTAI
const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
const got = require("got")
const pkg = require("../../package.json")

module.exports.run = async (bot, message, args, lang) => {

    if (message.channel.nsfw) {

        got(`https://www.reddit.com/r/hentai/random/.json?sort=top&t=week`, {
            headers: {
                "user-agent": `LockBot ${pkg.version} (https://github.com/LockBlock-dev/LockBot)`
            }
        }).then(response => {
            try {
                        const content = JSON.parse(response.body)
                        //const hentaiType = content[0].data.children[0].data.post_hint
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
                            .setFooter(`👍 ${hentaiUpvotes} | 💬 ${hentaiNumComments} | © LockBot`)
                            .setTimestamp()

                            message.channel.send(embed)

            } catch(err) {
                return message.channel.send(bot.error("💥", message.author.id, lang))
            }
        })

    } else {
        message.channel.send(bot.error(lang.hentaiChannelNotNSFW, message.author.id, lang))
    }
}



module.exports.help = COMMANDS.FUN.HENTAI

const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")
const got = require("got")

module.exports.run = async (bot, message, args, settings, lang) => {

    got(`https://www.reddit.com/r/dankmemes/random/.json?sort=top&t=week`).then(response => {
            try {
                        const content = JSON.parse(response.body)
                        const memeType = content[0].data.children[0].data.post_hint
                        const permalink = content[0].data.children[0].data.permalink
                        const memeUrl = `https://reddit.com${permalink}`
                        const memeImage = content[0].data.children[0].data.url
                        const memeTitle = content[0].data.children[0].data.title
                        const memeUpvotes = content[0].data.children[0].data.ups
                        const memeNumComments = content[0].data.children[0].data.num_comments
                        
                        const embed = new Discord.MessageEmbed()
                            .setTitle(memeTitle)
                            .setImage(memeImage)
                            .setURL(memeUrl)
                            .setColor("#FF8A33")
                            .setFooter("👍 " + memeUpvotes + " | 💬 " + memeNumComments + " | © LockBot")
                            .setTimestamp()

                            message.channel.send(embed)

            } catch(err) {
                return message.channel.send(bot.error("💥", message.author.id, lang))
            }
        })
}



module.exports.help = COMMANDS.FUN.MEME
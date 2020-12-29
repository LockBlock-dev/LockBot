const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const fs = require("fs")
const got = require("got")

module.exports.run = async (bot, message, settings) => {

    const lang = require(`../../core/languages/${settings.guildLang}.json`)

    if (lang == "fr") {
        var subreddit = "frenchmemes"
    } else {
        var subreddit = "memes"
    }

    got(`https://www.reddit.com/r/${subreddit}/random/.json?sort=top&t=week`).then(response => {
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
            message.channel.send("💥")
            }
        })
}



module.exports.help = MESSAGES.COMMANDS.FUN.MEME
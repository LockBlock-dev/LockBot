const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const got = require("got")

module.exports.run = async (bot, message) => {

    const reddit = [
        "memes",
        "pcmasterrace"
    ]

    const subreddit = reddit[Math.floor(Math.random() * reddit.length)]

    got("https://www.reddit.com/r/" + subreddit + ".json?sort=top&t=week").then(response => {
    const content = JSON.parse(response.body)
    const permalink = content[0].data.children[0].data.permalink
    const memeUrl = `https://reddit.com${permalink}`
    const memeImage = content[0].data.children[0].data.url
    const memeTitle = content[0].data.children[0].data.title
    const memeUpvotes = content[0].data.children[0].data.ups
    const memeNumComments = content[0].data.children[0].data.num_comments
    })

    const embed = new Discord.MessageEmbed()
        .setTitle(memeTitle)
        .setImage(memeImage)
        .setURL(memeUrl)
        .setColor("#FF8A33")
        .setFooter("👍 " + memeUpvotes + " | 💬 " + memeNumComments + " | © LockBot")
        .setTimestamp()
        
    message.channel.send(embed)
}



module.exports.help = MESSAGES.COMMANDS.FUN.MEME
const { MESSAGES } = require("../../core/constants.js")
const Discord = require("discord.js")
const snekfetch = require("snekfetch")

module.exports.run = async (bot, message, args) => {

    const reddit = [
        "memes",
        "pcmasterrace"
    ]

    const subreddit = reddit[Math.floor(Math.random() * reddit.length)]


    const { body } = await snekfetch
            .get("https://www.reddit.com/r/" + subreddit + ".json?sort=top&t=week")
            .query({ limit: 100 })
    const allowed = body.data.children.filter(post => !post.data.over_18)
    const randomnumber = Math.floor(Math.random() * allowed.length)
    const embed = new Discord.MessageEmbed()
        .setTitle(allowed[randomnumber].data.title)
        .setImage(allowed[randomnumber].data.url)
        .setURL(allowed[randomnumber].data.url)
        .setColor("#FF8A33")
        .setFooter("👍 " + allowed[randomnumber].data.ups + " | 💬 " + allowed[randomnumber].data.num_comments + " | © LockBot")
        .setTimestamp()

    message.channel.send(embed)
}



module.exports.help = MESSAGES.COMMANDS.FUN.MEME
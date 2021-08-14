const got = require('got')
const pkg = require('../../package.json')
const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'meme',
	description: '🐸 Show a meme',
	usage: '/meme',
	async execute(client, interaction) {
		got(`https://www.reddit.com/r/dankmemes/random/.json?sort=top&t=week`, {
            headers: {
                'user-agent': `LockBot ${pkg.version} (https://github.com/LockBlock-dev/LockBot)`
            }
        }).then(async response => {
            try {
                const content = JSON.parse(response.body)
                //const memeType = content[0].data.children[0].data.post_hint
                const permalink = content[0].data.children[0].data.permalink
                const memeUrl = `https://reddit.com${permalink}`
                const memeImage = content[0].data.children[0].data.url
                const memeTitle = content[0].data.children[0].data.title
                const memeUpvotes = content[0].data.children[0].data.ups
                const memeNumComments = content[0].data.children[0].data.num_comments
                
                const embed = new MessageEmbed()
                    .setTitle(memeTitle)
                    .setImage(memeImage)
                    .setURL(memeUrl)
                    .setColor('#FF8A33')
                    .setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`)

                await interaction.reply({ embeds: [embed] })

            } catch(err) {
                console.log(err)
                return await interaction.reply({ embeds: [client.newError('Something went wrong while fetching the meme')], ephemeral: true  })
            }
        })
	}
}
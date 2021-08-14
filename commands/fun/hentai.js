const got = require('got')
const pkg = require('../../package.json')
const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'hentai',
	description: '🔞 Show a hentai',
	usage: '/hentai',
	async execute(client, interaction) {
		if (interaction.channel.nsfw) {
            got(`https://www.reddit.com/r/hentai/random/.json?sort=top&t=week`, {
                headers: {
                    'user-agent': `LockBot ${pkg.version} (https://github.com/LockBlock-dev/LockBot)`
                }
            }).then(async response => {
                try {
                    const content = JSON.parse(response.body)
                    //const hentaiType = content[0].data.children[0].data.post_hint
                    const permalink = content[0].data.children[0].data.permalink
                    const hentaiUrl = `https://reddit.com${permalink}`
                    const hentaiImage = content[0].data.children[0].data.url
                    const hentaiTitle = content[0].data.children[0].data.title
                    const hentaiUpvotes = content[0].data.children[0].data.ups
                    const hentaiNumComments = content[0].data.children[0].data.num_comments
                    
                    const embed = new MessageEmbed()
                        .setTitle(hentaiTitle)
                        .setImage(hentaiImage)
                        .setURL(hentaiUrl)
                        .setColor('#FF8A33')
                        .setFooter(`👍 ${hentaiUpvotes} | 💬 ${hentaiNumComments}`)

                    await interaction.reply({ embeds: [embed] })

                } catch(err) {
                    console.log(err)
                    return await interaction.reply({ embeds: [client.newError('Something went wrong while fetching the hentai')], ephemeral: true  })
                }
            })
        } else {
            return await interaction.reply({ embeds: [client.newError('This channel isn\'t NSFW')], ephemeral: true  })
        }
	}
}
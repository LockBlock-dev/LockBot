const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'nuke',
	description: '💣 Nuke a channel',
	usage: '/nuke (channel)',
    userFlag: 'MANAGE_CHANNELS',
    clientFlag: 'MANAGE_CHANNELS',
    options: [
        {
            name: 'channel',
            type: 'CHANNEL',
            description: 'The channel you want to nuke (leave empty for this channel)',
            required: false,
        }
    ],
	async execute(client, interaction) {
        const channel = interaction.options.getChannel('channel', false)
        const nukedChannel = channel ? channel : interaction.channel
        const res = new MessageEmbed()
            .setDescription(`💣 <#${nukedChannel.id}> will be nuke`)
            .setColor('#FF8A33')

        await interaction.reply({ embeds: [res], ephemeral: true })

        nukedChannel.clone()
            .then(nukedChannel.delete())

        setTimeout(() => { 
            const newClonedChannel = interaction.guild.channels.cache.find(channel => channel.name === nukedChannel.name)

            newClonedChannel.setParent(nukedChannel.parentID)
            newClonedChannel.setPosition(nukedChannel.position)

            setTimeout(() => {
                newClonedChannel.lockPermissions()
                    .catch(() => {})

                const embed = new MessageEmbed()
                    .setDescription(`💣 <#${newClonedChannel.id}> was nuked`)           
                    .setColor('#FF8A33')

                client.channels.cache.get(newClonedChannel.id).send({ embeds: [embed] })
            }, 1000)
        }, 1000)
	}
}
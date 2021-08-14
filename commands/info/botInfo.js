const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'botinfo',
	description: '🔎 Information on LockBot',
	usage: '/botinfo',
	async execute(client, interaction) {
        const embed = new MessageEmbed()
            .setDescription(`🔎 Information on <@${client.user.id}>`)
            .setThumbnail(client.user.displayAvatarURL())
            .addField('Owner', `<@${process.env.DEV_ID}>`, true)
            .addField('Version', '3.0', true)
            .addField('API', 'Discord.js V13', true)
            .addField('Servers', `${client.guilds.cache.size}`, true)
            .addField('Channels', `${client.channels.cache.size}`, true)
            .addField('Members', `${client.users.cache.size}`, true)
            .addField('Created', `<t:${Math.floor(client.user.createdTimestamp / 1000)}:R>`, true)
            .setColor('#FF8A33')


        await interaction.reply({ embeds: [embed] })
	}
}
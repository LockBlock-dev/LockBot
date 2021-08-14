const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'vote',
	usage: '/vote',
	description: '🗳 Vote for LockBot',
	async execute(client, interaction) {
		const embed = new MessageEmbed()
			.setDescription(`🗳 Vote here: https://top.gg/bot/812368677726060586`)
			.setColor('#FF8A33')

		await interaction.reply({ embeds: [embed] })
	}
}
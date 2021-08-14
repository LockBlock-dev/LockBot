const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'roll',
	usage: '/roll',
	description: '🎲 Roll a number between 0 and 100',
	async execute(client, interaction) {
        const random = Math.floor(Math.random() * 100)

		const embed = new MessageEmbed()
			.setDescription(`🎲 You rolled a ${random}`)
			.setColor('#FF8A33')

		await interaction.reply({ embeds: [embed] })
	}
}
const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'ping',
	description: '🏓 Pong !',
	usage: '/ping',
	async execute(client, interaction) {
		const latency = Math.round(client.ws.ping)

		const embed = new MessageEmbed()
			.setDescription(`🏓 Pong in ${latency} ms!`)
			.setColor('#FF8A33')

		await interaction.reply({ embeds: [embed] })
	}
}
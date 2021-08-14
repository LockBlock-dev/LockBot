const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'invite',
	usage: '/invite',
	description: '🔗 Invite link of LockBot',
	async execute(client, interaction) {
		const embed = new MessageEmbed()
			.setDescription(`🔗 Invite: https://discord.com/api/oauth2/authorize?client_id=812368677726060586&permissions=1476765782&scope=bot`)
			.setColor('#FF8A33')

		await interaction.reply({ embeds: [embed] })
	}
}
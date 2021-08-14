const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'say',
	description: '📨 Repeat a message',
	usage: '/say [text]',
    options: [{
		name: 'message',
		type: 'STRING',
		description: 'The input to repeat',
		required: true,
	}],
	async execute(client, interaction) {
        await interaction.channel.send(`${interaction.options.getString('message', true)}\n\n- **${interaction.user.tag}**`)

        const embed = new MessageEmbed()
			.setDescription('✉ Message sent!')
			.setColor('#FF8A33')

		await interaction.reply({ embeds: [embed], ephemeral: true })
	}
}
const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'gamerometer',
	description: '🔎 Are you a gamer ?',
	usage: '/gamerometer (user)',
    options: [{
        name: 'user',
		type: 'USER',
		description: 'The user you want to know if he is a "GAMER"',
		required: false,
    }],
	async execute(client, interaction) {
		var member = interaction.options.getMember('user', false)

        if (!member) {
            member = interaction.member
        }

        const random = Math.round(Math.random() * 100)

        const embed = new MessageEmbed()
            .setDescription(`🎮 <@${member.user.id}> is **${random}**% a gamer`)
            .setColor('#FF8A33')


        await interaction.reply({ embeds: [embed] })
	}
}
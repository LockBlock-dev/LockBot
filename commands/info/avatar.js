const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'avatar',
	description: '🔎 Avatar of an user',
	usage: '/avatar (user)',
    options: [{
        name: 'user',
		type: 'USER',
		description: 'The user of which you want to have the avatar',
		required: false,
    }],
	async execute(client, interaction) {
		var member = interaction.options.getMember('user', false)

        if (!member) {
            member = interaction.member
        }

        const embed = new MessageEmbed()
            .setDescription(`🔎 Avatar of <@${member.user.id}>`)
            .setImage(member.user.avatarURL({ format: 'png', dynamic: true, size: 4096 }))
            .setColor('#FF8A33')


        await interaction.reply({ embeds: [embed] })
	}
}
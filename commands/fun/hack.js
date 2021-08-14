const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'hack',
	description: '🔎 Information of an user',
	usage: '/hack [user]',
    options: [{
        name: 'user',
		type: 'USER',
		description: 'The user you want to hack',
		required: true,
    }],
	async execute(client, interaction) {
		var member = interaction.options.getMember('user', false)


        const embed = new MessageEmbed()
            .setDescription(`👨‍💻 Hacking <@${member.user.id}>`)
            .addField('\u200B', 'Did you really believe it?')
            .setColor('#FF8A33')


        await interaction.reply({ embeds: [embed] })
	}
}
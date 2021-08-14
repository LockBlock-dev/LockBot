const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'membercount',
	description: '🔎 Member count',
	usage: '/membercount',
	async execute(client, interaction) {
        const embed = new MessageEmbed()
            .setDescription(`🔎 Member count`)
            .setThumbnail(interaction.guild.iconURL({ format: 'png', dynamic: true}))
            .addField('Members', `${interaction.guild.memberCount}`)
            .setColor('#FF8A33')


        await interaction.reply({ embeds: [embed] })
	}
}
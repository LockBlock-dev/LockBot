const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'userinfo',
	description: '🔎 Information of an user',
	usage: '/userinfo (user)',
    options: [{
        name: 'user',
		type: 'USER',
		description: 'The user on which you want to have info',
		required: false,
    }],
	async execute(client, interaction) {
		var member = interaction.options.getMember('user', false)

        if (!member) {
            member = interaction.member
        }

        const isBot = member.user.bot ? 'Bot' : 'Human'
        const isBooster = member.premiumSince ? 'Yes' : 'No'

        const embed = new MessageEmbed()
            .setDescription(`🔎 Information of <@${member.user.id}>`)
            .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
            .addField('Nickname', member.nickname ? member.nickname : 'Not any', true)
            .addField('Status', isBot, true)
            .addField('Booster', isBooster, true)
            .addField('ID', member.user.id)
            .addField('Joined the server', `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`)
            .addField('Created his account', `<t:${Math.floor(member.user.createdTimestamp / 1000)}:R>`)
            .addField('Roles', `${member.roles.cache.filter(r => r.id !== interaction.guild.id).map(roles => `<@&${roles.id}>`).join(' **|** ') || 'No roles'}`)
            .setColor('#FF8A33')


        await interaction.reply({ embeds: [embed] })
	}
}
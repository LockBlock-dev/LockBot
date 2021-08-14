const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'kick',
	description: '🔨 Kick an user',
	usage: '/kick [user] (reason)',
    userFlag: 'KICK_MEMBERS',
    clientFlag: 'KICK_MEMBERS',
    options: [
        {
            name: 'user',
            type: 'USER',
            description: 'The user you want to kick',
            required: true,
        },
        {
            name: 'reason',
            type: 'STRING',
            description: 'The reason of the kick',
            required: false,
        }
    ],
	async execute(client, interaction) {
		var member = interaction.options.getMember('user', true)
        const reason = interaction.options.getString('reason', false)

        if (member.id == interaction.member.user.id) {
            return await interaction.reply({ embeds: [client.newError('You can\'t kick yourself')], ephemeral: true })
        }

        if (member.kickable) {
            await member.kick(reason)

            const embed = new MessageEmbed()
            .setAuthor(`🔨 ${member.user.tag} was kicked`, member.user.avatarURL({ format: 'png', dynamic: true }))           
            .setColor('#FF8A33')

            return await interaction.reply({ embeds: [embed] })
        } else {
            return await interaction.reply({ embeds: [client.newError('I couldn\'t kick this user')], ephemeral: true })
        }
	}
}
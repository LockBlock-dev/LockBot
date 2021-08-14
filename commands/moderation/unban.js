const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'unban',
	description: '🔨 Unban an user',
	usage: '/unban [user id] (reason)',
    userFlag: 'BAN_MEMBERS',
    clientFlag: 'BAN_MEMBERS',
    options: [
        {
            name: 'user',
            type: 'STRING',
            description: 'The id of the user you want to unban',
            required: true,
        },
        {
            name: 'reason',
            type: 'STRING',
            description: 'The reason of the unban',
            required: false,
        }
    ],
	async execute(client, interaction) {
		var member = interaction.options.getString('user', true)
        const reason = interaction.options.getString('reason', false)

        if (member == interaction.member.user.id) {
            return await interaction.reply({ embeds: [client.newError('You can\'t unban yourself')], ephemeral: true })
        }

        var user

        try {
            user = await client.users.fetch(member)
        } catch(err) {
            return await interaction.reply({ embeds: [client.newError('User not found')], ephemeral: true })
        }

        try {
            const bans = await interaction.guild.bans.fetch()
            const banned = bans.get(member)

            if (banned) {
                await interaction.guild.members.unban(user, { reason: reason })

                const embed = new MessageEmbed()
                    .setAuthor(`🔨 ${user.tag} was unbanned`, user.avatarURL({ format: 'png', dynamic: true }))           
                    .setColor('#FF8A33')

                return await interaction.reply({ embeds: [embed] })
            } else {
                return await interaction.reply({ embeds: [client.newError('This user isn\'t banned')], ephemeral: true })
            }

            
        } catch(err) {
            return await interaction.reply({ embeds: [client.newError('I couldn\'t unban this user')], ephemeral: true })
        }
	}
}
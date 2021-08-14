const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'ban',
	description: '🔨 Ban a user',
	usage: '/ban by-user [user] (reason)\n/ban by-id [id] (reason)',
    userFlag: 'BAN_MEMBERS',
    clientFlag: 'BAN_MEMBERS',
    options: [
        {
            name: 'by-user',
            description: 'Ban an user by user',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'user',
                    type: 'USER',
                    description: 'The user you want to ban',
                    required: true,
                },
                {
                    name: 'reason',
                    type: 'STRING',
                    description: 'The reason of the ban',
                    required: false,
                }
            ]
        },
        {
            name: 'by-id',
            description: 'Ban an user by id',
            type: 'SUB_COMMAND',
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
                    description: 'The reason of the ban',
                    required: false,
                }
            ]
        }
    ],
	async execute(client, interaction) {
        const method = interaction.options.getSubcommand(true)
        const reason = interaction.options.getString('reason', false)
        const embed = new MessageEmbed()
            .setColor('#FF8A33')

        switch(method) {
            case 'by-user':
                var member = interaction.options.getMember('user', true)

                if (member.id == interaction.member.user.id) {
                    return await interaction.reply({ embeds: [client.newError('You can\'t ban yourself')], ephemeral: true })
                }

                if (member.bannable) {
                    await member.ban({ reason: reason })

                    embed
                    .setAuthor(`🔨 ${member.user.tag} was banned`, member.user.avatarURL({ format: 'png', dynamic: true }))           
                    .setColor('#FF8A33')

                    return await interaction.reply({ embeds: [embed] })
                } else {
                    return await interaction.reply({ embeds: [client.newError('I couldn\'t ban this user')], ephemeral: true })
                }
            case 'by-id':
                var member = interaction.options.getString('user', true)

                if (member == interaction.member.user.id) {
                    return await interaction.reply({ embeds: [client.newError('You can\'t ban yourself')], ephemeral: true })
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
        
                    if (!banned) {
                        await interaction.guild.members.ban(user, { reason: reason })
        
                        const embed = new MessageEmbed()
                            .setAuthor(`🔨 ${user.tag} was banned`, user.avatarURL({ format: 'png', dynamic: true }))           
                            .setColor('#FF8A33')
        
                        return await interaction.reply({ embeds: [embed] })
                    } else {
                        return await interaction.reply({ embeds: [client.newError('This user is already banned')], ephemeral: true })
                    }
        
                    
                } catch(err) {
                    return await interaction.reply({ embeds: [client.newError('I couldn\'t ban this user')], ephemeral: true })
                }
        }
	}
}
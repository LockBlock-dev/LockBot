const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'blacklist',
	description: '🤖 Blacklist an user',
	usage: '/blacklist [user id] (reason)',
    defaultPermission: false,
    options: [
        {
            name: 'add',
            description: 'Add an user to the blacklist',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'user',
                    type: 'STRING',
                    description: 'The id of the user you want to blacklist',
                    required: true,
                },
                {
                    name: 'reason',
                    type: 'STRING',
                    description: 'Reason to add to the blacklist',
                    required: false,
                }
            ]
        },
        {
            name: 'remove',
            description: 'Remove an user from the blacklist',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'user',
                    type: 'STRING',
                    description: 'The id of the user you want to remove from the blacklist',
                    required: true,
                },
                {
                    name: 'reason',
                    type: 'STRING',
                    description: 'Reason to remove from the blacklist',
                    required: false,
                }
            ]
        }
    ],
	async execute(client, interaction) {
        const method = interaction.options.getSubcommand(true)
		var member = interaction.options.getString('user', true)
        var reason = interaction.options.getString('reason', false)
        const embed = new MessageEmbed()
            .setColor('#FF8A33')

        reason = reason ? reason : 'no reason provided'

        if (member == interaction.member.user.id) {
            return await interaction.reply({ embeds: [client.newError('You can\'t blacklist yourself')], ephemeral: true })
        }

        var user

        try {
            user = await client.users.fetch(member)
        } catch(err) {}

        switch(method) {
            case 'add':
                var err

                try {
                    user = await client.users.fetch(member)
                } catch(err) {}

                await client.blacklistManager.add({
                    id: user ? user.id : member,
                    username: user ? user.username : null,
                    reason: reason
                })

                if (user) {
                    await user.send(`You are blacklisted from the bot for the following reason: ${reason}`).catch(async () => {
                        err = 'User has closed his DMs or is not in any mutual server with the bot'
                    })
                }

                embed
                    .setDescription('🤖 Blacklist manager')
                    .addField('Status', `${user ? user.id : member} is now blacklisted`)
                if (err) {
                    embed.addField('Error', err)
                }
                break
            case 'remove':
                await client.blacklistManager.remove({
                    id: user ? user.id : member,
                    reason: reason
                })

                embed
                    .setDescription('🤖 Blacklist manager')
                    .addField('Status', `${user ? user.id : member} is removed from the blacklist`)
                break
        }

        await interaction.reply({ embeds: [embed], ephemeral: true })
	}
}
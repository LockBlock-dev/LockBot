const parse = require('parse-duration')
const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'clear',
	description: '🔧 Clear messages',
	usage: '/clear [amount]',
    userFlag: 'MANAGE_MESSAGES',
    clientFlag: 'MANAGE_MESSAGES',
    options: [
        {
            name: 'amount',
            type: 'INTEGER',
            description: 'The amount of messages to delete',
            required: false,
        },
        {
            name: 'user',
            type: 'USER',
            description: 'The user whose messages you want to erase',
            required: false,
        },
        {
            name: 'expression',
            type: 'STRING',
            description: 'The text to match',
            required: false,
        }
    ],
	async execute(client, interaction) {
		var amount = interaction.options.getInteger('amount', false)
        const member = interaction.options.getMember('user', false)
        const match = interaction.options.getString('expression', false)
        var messages

        if (amount) {
            messages = await interaction.channel.messages.fetch({ limit: amount > 100 ? 100 : amount })

            if (member) {
                var userMessages = messages.filter(m => m.author.id == member.user.id)
                if (match) {
                    userMessages = userMessages.filter(m => m.content.includes(match))
                }
                await interaction.channel.bulkDelete(userMessages)
            } else if (match) {
                var toDelete = messages
                if (match) {
                    toDelete = toDelete.filter(m => m.content.includes(match))
                }
                await interaction.channel.bulkDelete(toDelete)
            } else {
                var toDelete = messages
                if (match) {
                    toDelete = toDelete.filter(m => m.content.includes(match))
                }
                await interaction.channel.bulkDelete(toDelete)
            }
        } else if (!amount && member) {
            messages = await interaction.channel.messages.fetch()

            var toDelete = messages.filter(m => m.author.id == member.user.id)

            if (match) {
                toDelete = toDelete.filter(m => m.content.includes(match))
            }

            await interaction.channel.bulkDelete(toDelete)
        } else if (!amount && !member && match) {
            messages = await interaction.channel.messages.fetch()

            var toDelete = messages.filter(m => m.content.includes(match))

            await interaction.channel.bulkDelete(toDelete)
        }

        const embed = new MessageEmbed()
        .setDescription(`🔧 Messages cleared`)  
        .setColor('#FF8A33')

        return await interaction.reply({ embeds: [embed], ephemeral: true  })
    }
}
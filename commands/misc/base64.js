const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'base64',
	description: '🔧 Decode from or Encode to Base64',
	usage: '/base64 encode [text]\n/base64 decode [text]',
    options: [
        {
            name: 'decode',
            description: 'Decode a Base64 encoded text',
            type: 'SUB_COMMAND',
            options: [{
                name: 'text',
                type: 'STRING',
                description: 'Base64 encoded text',
                required: true,
            }]
        },
        {
            name: 'encode',
            description: 'Encode a text to Base64',
            type: 'SUB_COMMAND',
            options: [{
                name: 'text',
                type: 'STRING',
                description: 'Text',
                required: true,
            }]
        }
    ],
	async execute(client, interaction) {
		const method = interaction.options.getSubcommand(true)
        const content = interaction.options.getString('text', true)
        const embed = new MessageEmbed()
            .setColor('#FF8A33')

        if (content.length > 400) {
            return await interaction.reply({ embeds: [client.newError('Content length must be less than `400` characters')], ephemeral: true })
        }

        switch(method) {
            case 'decode':
                embed
                    .addField('Base64', content)
                    .addField('Text', Buffer.from(content, 'base64').toString('utf8'))
                break
            case 'encode':
                embed
                    .addField('Text', content)
                    .addField('Base64', Buffer.from(content).toString('base64'))
                break
        }

        await interaction.reply({ embeds: [embed] })
	}
}
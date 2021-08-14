const figlet = require('figlet')

module.exports = {
	name: 'ascii',
	description: 'Text to ASCII Art',
	usage: '/ascii [text]',
    options: [{
		name: 'text',
		type: 'STRING',
		description: 'The text to transform in ASCII Art',
		required: true,
	}],
	async execute(client, interaction) {
        const str = interaction.options.getString('text', true)

        if (str.length > 20) {
            return await interaction.reply({ embeds: [client.newError('Content length must be less than `20` characters')], ephemeral: true })
        }

        const content =
            `\`\`\`AsciiArt
            ${figlet.textSync(str)}
            \`\`\``

		await interaction.reply({ content: content })
	}
}
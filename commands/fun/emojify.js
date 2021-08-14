module.exports = {
	name: 'emojify',
	description: '😂 Emojify a text',
	usage: '/emojify [text]',
    options: [{
		name: 'text',
		type: 'STRING',
		description: 'The text to emojify',
		required: true,
	}],
	async execute(client, interaction) {
        const str = interaction.options.getString('text', true)

        if (str.length > 400) {
            return await interaction.reply({ embeds: [client.newError('Content length must be less than `400` characters')], ephemeral: true })
        }

        const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
        const content = Array.prototype.map.call(str, (e, i, a) => {
            if (/[aA][bB]/.test(e+a[i+1])) {
                return ':ab:'
            } else if (/[oO]/.test(e)) {
                return ':o2:'
            } else if (/[aA]/.test(e)) {
                return ':a:'
            } else if (/[bB]/.test(e)) {
                if (/[aA]/.test(a[i-1])) {
                    return
                } else {
                    return ':b:'
                }
            } else if (/[a-zA-Z]/.test(e)) {
                return `:regional_indicator_${e.toLowerCase()}:`
            } else if (/[0-9]/.test(e)) {
                return `:${ones[e]}:`
            } else {
                return e
            }
        }).join('\u200C')

		await interaction.reply({ content: content })
	}
}
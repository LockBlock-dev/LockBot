const { MessageEmbed } = require('discord.js')

module.exports = {
	name: '8ball',
	description: '🎱 Answer your question',
	usage: '/8ball [question]',
    options: [{
		name: 'question',
		type: 'STRING',
		description: 'The question for which you want to have an answer',
		required: true,
	}],
	async execute(client, interaction) {
        const question = interaction.options.getString('question', true)
		const answers = ['It\'s no', 'You can count on it', 'It\'s a good start', 'It is certain', 'Yes absolutely', 'No opinion', 'It is decidedly so', 'Don\'t dream', 'It\'s your destiny', 'Without a doubt', 'Yes', 'Definitely', 'You may rely on it', 'As I see it', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Try again', 'Ask again later', 'Better not tell you now', 'According to me yes', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'The die is cast', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'Impossible']
		const random = Math.floor(Math.random() * answers.length)

		const embed = new MessageEmbed()
            .setDescription('🎱 Magic 8-Ball')
			.addField('Your question was', question)
            .addField('The answer is', answers[random])
            .setColor('#FF8A33')

		await interaction.reply({ embeds: [embed] })
	}
}
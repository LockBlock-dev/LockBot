const { MessageEmbed } = require('discord.js')

const joinPoll = (array, separator) => {
    var joined = ""

    for (var e in array) {
        joined += `${numbers[e]}. ${array[e]}${separator}`
    }
    return joined.slice(0, -1)
}

module.exports = {
	name: 'poll',
	description: '🗳 Make a poll',
	usage: '/poll simple [question]\n/poll multiple [question] [choices (separated by a `/`, maximum 10)]',
    options: [
        {
            name: 'simple',
            description: 'Make a simple poll yes | no',
            type: 'SUB_COMMAND',
            options: [{
                name: 'question',
                type: 'STRING',
                description: 'Question to be polled',
                required: true
            }]
        },
        {
            name: 'multiple',
            description: 'Make a multiple poll with custom choices',
            type: 'SUB_COMMAND',
            options: [
                {
                    name: 'question',
                    type: 'STRING',
                    description: 'Question to be polled',
                    required: true
                },
                {
                    name: 'choices',
                    type: 'STRING',
                    description: 'Choices for your question separated with a /, maximum 10',
                    required: true
                }
            ]
        }
    ],
	async execute(client, interaction) {
		const method = interaction.options.getSubcommand(true)
        const question = interaction.options.getString('question', true)
        var message
        const emojiList = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟']
        const numbers = ['1','2','3','4','5','6','7','8','9','10']
        const embed = new MessageEmbed()
            .setColor('#FF8A33')
            .setDescription('🗳 Poll')

        switch(method) {
            case 'simple':
                embed.addField(question, '\u200B')
                await interaction.reply({ embeds: [embed] })
                message = await interaction.fetchReply()
                await message.react("<:LockBot_check:831926276792385586>")
                await message.react("<:LockBot_cross:831926276935385130>")
                //await message.react('✅')
                //await message.react('❌')
                break
            case 'multiple':
                const choices = (interaction.options.getString('choices', true)).split('/')
                if (choices.length > 10) {
                    return await interaction.reply({ embeds: [client.newError('Poll is limited to `10` choices maximum')], ephemeral: true })
                }
                embed.addField(question, joinPoll(choices, "\n"))
                await interaction.reply({ embeds: [embed] })
                message = await interaction.fetchReply()
                var reactionArray = []
                for (var i = 0; i < choices.length; i++) { 
                    reactionArray[i] = await message.react(emojiList[i])
                }
                break
        }
	}
}
const fs = require('fs')
const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'help',
	description: '💡 Help of LockBot',
	usage: '/help (command)',
    options: [{
		name: 'command',
		type: 'STRING',
		description: 'The command you want help with',
		required: false,
	}],
	async execute(client, interaction) {
		const command = interaction.options.getString('command')
		const embed = new MessageEmbed()
			.setColor('#FF8A33')
		
		if (command) {
			const commandFile = client.commands.get(command)

			if (!commandFile) {
				return await interaction.reply({ embeds: [client.newError(`I couldn't find the \`${command}\` command!`)], ephemeral: true })
			}

			embed
				.setDescription(`💡 Help of the \`${command}\` command`)
				.addField('Reminder', '[value] = required\n(value) = optional')
				.addField('Description', commandFile.description)
				.addField('Usage', commandFile.usage)
		} else {
			embed.setDescription(`💡 List of commands`)

			fs.readdirSync('./commands').forEach(dir => {
				const commandsFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'))
				const commands = []
				var category

				commandsFiles.forEach(command => {
					commands.push(`\`${command.split('.js')[0]}\``)
				})

				switch(dir) {
					case 'fun': { category = '🎉 Fun'; break }
					case 'info': { category = '🔎 Info'; break }
					case 'lockbot': { category = '🤖 LockBot'; break }
					case 'misc': { category = '📦 Misc'; break }
					case 'moderation': { category = '🔧 Moderation'; break }
				}
				embed.addField(category, commands.join(', '))
			})
		}

		embed.addField('\u200B', 'If you need help join the support server: https://discord.gg/R2KVJNr4Ta')
		await interaction.reply({ embeds: [embed] })
	}
}
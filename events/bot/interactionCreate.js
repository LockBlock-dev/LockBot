const { Permissions } = require('discord.js')

module.exports = {
	name: 'interactionCreate',
	once: false,
	async execute(interaction, client) {
        if (!interaction.channel.type === 'DM') return
        if (!interaction.isCommand()) return
        if (!client.commands.has(interaction.commandName)) return

        const isBlacklisted = await client.blacklistManager.get(interaction.member.user.id)

        if (isBlacklisted) return

        if (client.commands.get(interaction.commandName).userFlag && !interaction.member.permissionsIn(interaction.channel).has(Permissions.FLAGS[client.commands.get(interaction.commandName).userFlag])) {      
            return await interaction.reply({ embeds: [client.newError(`You don\'t have the \`${client.commands.get(interaction.commandName).userFlag}\` permission to execute this command`)], ephemeral: true })
        }

        if (client.commands.get(interaction.commandName).clientFlag && !interaction.guild.me.permissionsIn(interaction.channel).has(Permissions.FLAGS[client.commands.get(interaction.commandName).clientFlag])) {      
            return await interaction.reply({ embeds: [client.newError(`I don\'t have the \`${client.commands.get(interaction.commandName).clientFlag}\` permission to execute this command`)], ephemeral: true })
        }

        try {
            await client.commands.get(interaction.commandName).execute(client, interaction)
        } catch (error) {
            console.error(error)
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
        }
	}
}
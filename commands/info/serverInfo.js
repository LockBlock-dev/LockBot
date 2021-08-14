const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'serverinfo',
	description: '🔎 Information of the server',
	usage: '/serverinfo',
	async execute(client, interaction) {
        const embed = new MessageEmbed()
            .setDescription(`🔎 Information of ${interaction.guild.name}`)
            .setThumbnail(interaction.guild.iconURL({ format: 'png', dynamic: true}))
            .addField('Owner', `<@${interaction.guild.ownerId}>`, true)
            .addField('ID', interaction.guildId)
            .addField('Channels', `${interaction.guild.channels.cache.size}`, true)
            .addField('Roles', `${interaction.guild.roles.cache.size}`, true)
            .addField('Members', `${interaction.guild.memberCount}`, true)
            .addField('Emojis', `${interaction.guild.emojis.cache.size}`, true)
            .addField('Boosts', `${interaction.guild.premiumSubscriptionCount}`, true)
            .addField('Boost level', `${isNaN(parseInt(interaction.guild.premiumTier.slice(-1))) ? '0': interaction.guild.premiumTier.slice(-1)}`, true)
            .addField('Created', `<t:${Math.floor(interaction.channel.guild.createdTimestamp / 1000)}:R>`)
            .setColor('#FF8A33')


        await interaction.reply({ embeds: [embed] })
	}
}
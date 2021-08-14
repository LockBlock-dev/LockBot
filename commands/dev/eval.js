const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'eval',
	description: '🤖 Evaluate Javascript code',
	usage: '/eval [code]',
    defaultPermission: false,
    options: [{
        name: 'code',
        type: 'STRING',
        description: 'Javascript code',
        required: true,
    }],
	async execute(client, interaction) {
		const code = interaction.options.getString('code', true)
        const embed = new MessageEmbed()
            .setColor('#FF8A33')

        const codeblock = (language, code) => {       
            return `\`\`\`${language}\n${code}\n\`\`\``
        }

        eval(code)

        //available languages : apache, asciidoc, autohotkey, bash, coffeescript, cpp, cs, css, diff, fix, glsl, ini, js, json, md, ml, prolog, py, tex, xl, xml

        embed
            .setDescription('🤖 Javascript evaluation')
            .addField('Code', codeblock("js", code))
          

        await interaction.reply({ embeds: [embed], ephemeral: true })
	}
}
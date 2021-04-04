const { COMMANDS } = require("../../core/constants.js")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, lang, settings) => {

	const getCommands = (category) => {
		var commands = []
		for (cmd in COMMANDS[category]) {
			commands.push(COMMANDS[category][cmd])
		}
		return commands
	}

	const getNames = (cat) => {
		var names = []
		for (cmd of getCommands(cat)) {
			names.push(cmd.name)
		}
		return names
	}

	const embed = new Discord.MessageEmbed()
	
	if(args.length == 0) {
		
		var categories = Object.keys(COMMANDS)

		const pos = categories.indexOf('DEV')

		categories.splice(pos, 1)

		for (cat of categories) {
			switch(cat) {
				case "FUN": {catName = "Fun 🎉"; break}
				case "INFOS": {catName = "Infos 🔎"; break}
				case "LOCKBOT": {catName = "LockBot 🤖"; break}
				case "MISC": {catName = "Misc 📦"; break}
				case "MODERATION": {catName = "Moderation 🔧"; break}
			}

			embed.addField(`${catName}`,`\`${getNames(cat).join(', ')}\``)
		}

	} else {

		const command = args[0]

		const commandFile = bot.commands.get(command) || bot.commands.find(cmd => cmd.help.aliases.includes(command))

		if (!commandFile)
      		return

    	if (commandFile.help.isDevRestricted)
  			return

		embed
		.addField(lang.helpCommandName,`${commandFile.help.name}`)
		.addField(lang.helpCommandDescription,`${commandFile.help.description}`)
		.addField(lang.helpCommandUsage,`${settings.guildPrefix}${commandFile.help.name} ${commandFile.help.usage}`)
		.addField(lang.helpCommandAliases,`${commandFile.help.aliases.join(', ')}`)

		if (commandFile.help.isUserAdmin) {
			embed.addField(lang.helpCommandPermissions,`\`MANAGE_GUILD\``)
		}
	}

	embed
	.setDescription(`<@${message.author.id}>`)
	.addField(lang.helpSupportServer,"https://discord.gg/R2KVJNr4Ta")
	.setColor("#FF8A33")
	.setFooter("© LockBot")
	.setTimestamp()

	message.channel.send(embed)

}



module.exports.help = COMMANDS.LOCKBOT.HELP

module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message, client) {
                if (!message.channel.type === 'DM') return
                if (message.author.bot) return

                const isBlacklisted = await client.blacklistManager.get(message.member.user.id)

                if (isBlacklisted) return

                if (message.author.id !== client.user.id && message.mentions.users.first() && !message.content.startsWith(process.env.PREFIX)) {
                        if (message.mentions.users.first().id === client.user.id) {
                                return await message.reply({ content: `Hello, I'm a robot. I don't have steel legs or laser beams, but I can help you!\nMy prefix is \`${process.env.PREFIX}\`, but I suggest you to use the new slash commands!` })
                        }
                }

                if (message.content.indexOf(process.env.PREFIX) !== 0) return

                const oldCommands = ['ascii','emojify','8ball','eightball','gamerometer','gamerometre','gamer','hack','fbi','meme','hentai','si','serverinfo','sinfo','ui','userinfo','uinfo','whois','bi','botinfo','binfo','membercount','count','pfp','pp','pdp','profilepicture','vote','help','invite','base64','b64','ping','say','poll','sondage','ask','config','settings','parametres','parameters','nuke','clearall','kick','ban','unban','deban','slowmode']

                const command = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g)
                const commandFile = oldCommands.includes(command[0])

                if (!commandFile) return

                await message.reply({ content: 'Message commands are no longer a thing! Find out why here: https://support-dev.discord.com/hc/en-us/articles/4404772028055' })
	}
}
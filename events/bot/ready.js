module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.time('[Bot] Fetching commands & assigning permissions')

        client.user.setStatus('Online')
        client.user.setActivity(`${client.guilds.cache.size} servers`, { type: 'WATCHING' })

		if (!client.dev) {
			await client.application.commands.set(client.commands.map(({ execute, ...data }) => data))

			const commands = client.application.commands.fetch()
			
			commands.forEach(async c => {
				if (!client.commands.get(c.name).defaultPermission) {
					const permissions = [{
						id: process.env.DEV_ID,
						type: 'USER',
						permission: true
					}]
			
					await c.permissions.add({ permissions }).then(() => console.log(`[Bot] Applied perms for: ${c.name}`))
				}
			})
		} else {
			await client.guilds.cache.get('824939694793424906')?.commands.set(client.commands.map(({ execute, ...data }) => data))

			const commands = await client.guilds.cache.get('824939694793424906')?.commands.fetch()
			
			commands.forEach(async c => {
				if (client.commands.get(c.name).defaultPermission == false) {
					const permissions = [{
						id: process.env.DEV_ID,
						type: 'USER',
						permission: true
					}]
			
					await c.permissions.add({ permissions }).then(() => console.log(`[Bot] Applied perms for: ${c.name}`))
				}
			})
		}

		console.log(`[Bot] Online in ${client.guilds.cache.size} servers.`)
		console.timeEnd('[Bot] Fetching commands & assigning permissions')
	}
}
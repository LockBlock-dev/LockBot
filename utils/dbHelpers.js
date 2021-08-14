const { Guild, Blacklist } = require('./models/index.js')

module.exports = client => {
    client.blacklistManager = {
        get: async id => {
            const data = await Blacklist.findOne({ id: id })
            if (data) return data
        },

        add: async user => {
            const newUser = await new Blacklist(user)
            await newUser.save()
            console.log(`[Database] User added to blacklist: ${user.id} ${user.username} for reason: ${user.reason}`)
        },

        remove: async user => {
            const data = await client.blacklistManager.get(user.id)
            await data.remove()
            console.log(`[Database] User removed from blacklist : ${user.id} for reason: ${user.reason}}`)
        }
    },

    client.guildsManager = {
        get: async id => {
            const data = await Guild.findOne({ id: id })
            if (data) return data
        },

        create: async guild => {
            const newGuild = await new Guild(guild)
            await newGuild.save()
            console.log(`[Database] Guild created : ${guild.id} ${guild.name}`)
        },

        update: async (id, settings) => {
            var data = await client.guildsManager.get(id)
            if (typeof data !== 'object') {
                data = {}
            }

            const res = await data.updateOne(settings)
            data = await client.guildsManager.get(id)

            if (res.nModified > 0) {
                console.log(`[Database] Guild updated : ${data.id} ${data.name}. Settings updated : ${JSON.stringify(settings)}`)
            }
        },

        delete: async guild => {
            const data = await client.guildsManager.get(guild.id)
            await data.remove()
            console.log(`[Database] Guild deleted : ${data.id} ${data.name}`)
        }
    }
}
const fs = require('fs')
const mongoose = require('mongoose')
const { Collection } = require('discord.js')

module.exports = client => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false, // Don't buiLd indexes
        poolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // CLose sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6 
    }

    mongoose.connect(process.env.MONGODB_URL, options).catch(error => console.error(error))
    mongoose.Promise = global.Promise
    mongoose.connection.on('connected', () => console.log('[Database] MongoDB is online.'))

    client.commands = new Collection()
    
    fs.readdirSync('./commands').forEach(dir => {
        const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'))
    
        commands.forEach(file => {
            const command = require(`../commands/${dir}/${file}`)
            client.commands.set(command.name, command)
        })
    })
    
    fs.readdirSync('./events').forEach(dir => {
        const events = fs.readdirSync(`./events/${dir}/`).filter(file => file.endsWith('.js'))

        events.forEach(file => {
            const event = require(`../events/${dir}/${file}`)
            event.once
                ? client.once(event.name, (...args) => event.execute(...args, client))
                : client.on(event.name, (...args) => event.execute(...args, client))
        })
    })

    require('./helpers.js')(client)
    require('./dbHelpers.js')(client)
}
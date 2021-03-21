const mongoose = require("mongoose")
const chalk = require("chalk")
const { DBCONNECTION: connection } = require("../config.js")


module.exports = {
    init: () => {
        const options = {
            useNewUrlParser: true,
            //useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false, // Don't buiLd indexes
            poolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // CLose sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6 
        }
        mongoose.connect(connection.adress, options).catch((error) => {console.error(error)})
        mongoose.Promise = global.Promise
        mongoose.connection.on("connected", () =>console.log( `${chalk.green("[Database] ")} ${chalk.bold("Mongoose")} is online.`))
    }
}
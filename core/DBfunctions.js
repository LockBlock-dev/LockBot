const bot = require("../index.js")
const chalk = require("chalk")
const mongoose = require("mongoose")
const { Guild } = require("../models/exportGuild.js")


module.exports = bot => {
    bot.createGuild = async guild => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild)
        const createGuild = await new Guild(merged)
        await createGuild.save()
        console.log(`${chalk.green("[Database]")} Guild created : ${guild.guildID} ${guild.guildName}`)
    }

    bot.getGuild = async id => {
        const data = await Guild.findOne({ guildID: id })
        if(data) return data
    }

    bot.modifyGuild = async (id, settings) => {
        var data = await bot.getGuild(id)
        if (typeof data !== "object") {
            data = {}
        }

        for (const key in settings) {
            if (data[key] !== settings[key]) {
                data[key] = settings[key]
            }
        }
        return data.updateOne(settings)
    }

    bot.deleteGuild = async guild => {
        var data = await bot.getGuild(guild.id)
        data.remove()
        console.log(`${chalk.green("[Database]")} Guild deleted : ${guild.guildID} ${guild.guildName}`)
    }
}
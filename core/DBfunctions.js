const bot = require("../index.js")
const chalk = require("chalk")
const mongoose = require("mongoose")
const { Guild, Blacklist } = require("../models/export.js")


module.exports = bot => {
    bot.addToBlacklist = async user => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user)
        const newBlacklistedUser = await new Blacklist(merged)
        await newBlacklistedUser.save()
        console.log(`${chalk.green("[Database]")} User added to blacklist : ${user.userID} ${user.userName} for reason : ${user.reason}`)
    }

    bot.removeFromBlacklist = async user => {
        var data = await bot.getBlacklistedUser(user.id)
        const ID = data.userID
        const username = data.userName
        await data.remove()
        console.log(`${chalk.green("[Database]")} User removed from blacklist : ${ID} ${username}`)
    }

    bot.getBlacklistedUser = async id => {
        const data = await Blacklist.findOne({ userID: id })
        if(data) return data
    }

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
        return await data.updateOne(settings)
    }

    bot.deleteGuild = async guild => {
        var data = await bot.getGuild(guild.id)
        const ID = data.guildID
        const guildname = guild.Name
        await data.remove()
        console.log(`${chalk.green("[Database]")} Guild deleted : ${ID} ${guildname}`)
    }
}
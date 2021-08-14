const { MessageEmbed } = require('discord.js')

module.exports = client => {
    client.newError = error => {
        const embed = new MessageEmbed()
            .setDescription(error)
            .setColor('#FF0000')
    
        return embed
    }

    client.sToHMS = (time) => {
        var h = Math.floor(time / 3600)
        var m = Math.floor(time % 3600 / 60)
        var s = Math.floor(time % 3600 % 60)

        var str = ""
        h < 1 ? null : str += `${h}h`
        m < 1 ? null : str += `${m}m`
        s < 1 ? null : str += `${s}s`

        return str
    }
}
const parse = require("parse-duration");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "slowmode",
    description: "🔧 Edit slowmode of the channel",
    usage: "/slowmode [time]\n/slowmode off",
    userFlag: "MANAGE_CHANNELS",
    clientFlag: "MANAGE_CHANNELS",
    options: [
        {
            name: "time",
            type: "STRING",
            description: "The time of the slowmode (ex: 3600 | 1m10s | off)",
            required: true,
        },
    ],
    async execute(client, interaction) {
        const time = interaction.options.getString("time", true);
        const oldDuration = interaction.channel.rateLimitPerUser == 0 ? "disabled" : client.humanize(interaction.channel.rateLimitPerUser * 1000);

        var newDuration = parse(time, "s");
        newDuration = Number.isInteger(newDuration) ? newDuration : newDuration * 1000;

        if (isNaN(newDuration)) {
            return await interaction.reply({ embeds: [client.newError("Incorrect time was provided")], ephemeral: true });
        } else if (newDuration >= 21600) {
            return await interaction.reply({ embeds: [client.newError("Duration can't be greater than `21600` seconds")], ephemeral: true });
        } else {
            interaction.channel.setRateLimitPerUser(newDuration);

            const embed = new MessageEmbed()
                .setDescription(`🔧 Slowmode of <#${interaction.channel.id}>`)
                .addField("Old rate limit", `${oldDuration}`)
                .addField("New rate limit", `${newDuration == 0 ? "disabled" : client.humanize(newDuration * 1000)}`)
                .setColor("#FF8A33");

            return await interaction.reply({ embeds: [embed] });
        }
    },
};

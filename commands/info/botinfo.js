const { MessageEmbed } = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    name: 'botinfo',
    aliases: ['yuii'],
    utilisation: '{prefix}botinfo',
    category: 'info',

    execute(client, message) {
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embed = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL({dynamic: true, format: "png"}))
        .setTitle("Yuii Bot Info")
        .setThumbnail(client.user.displayAvatarURL({dynamic: true, format: "png"}))
        .addField("Npm version", "8.1.2")
        .addField("Node version", "v16.13.1")
        .addField("Discord.js version", "^13.1.0")
        .addField("Bot Developer", "inazys#0001")
        .addField("Bot ID", `${client.user.id}`)
        .addField("Bot Prefix", "?")
        .addField("Bot Uptime", `${duration}`)
        .addField("Bot invite link", `[Click Here](https://discord.com/api/oauth2/authorize?client_id=898425545346396200&permissions=8&scope=bot)`)
        .setFooter("Made with heart by Inazys ❤️", message.author.avatarURL({ dynamic: true }))
        .setTimestamp()
        message.channel.send({ embeds: [embed] })
    },
};
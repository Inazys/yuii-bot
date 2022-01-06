const { MessageEmbed } = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    name: 'uptime',
    aliases: ['up'],
    utilisation: '{prefix}uptime',
    category: 'utilities',

    execute(client, message) {
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embed = new MessageEmbed()
            .setTitle("**STATISTICS**")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }))
            .setColor("BLUE")
            .addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
            .setTimestamp()
            .addField("Uptime", `${duration}`)
            .setFooter('Made with heart by Inazys ❤️', message.author.avatarURL({ dynamic: true }))
            message.channel.send({ embeds: [embed] });
    },
};
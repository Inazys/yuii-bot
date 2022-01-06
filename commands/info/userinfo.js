const { MessageEmbed, Permissions } = require('discord.js');
const moment = require("moment");
module.exports = {
    name: 'userinfo',
    aliases: ['whois'],
    utilisation: '{prefix}userinfo <user>',
    category: 'info',

    execute(client, message, args) {
        let target = message.mentions.users.first() || message.author;
        let member = message.guild.members.cache.get(target.id)
        const permissions = member.permissions.toArray().map(perm => {
            return perm
              .toLowerCase()
              .replace(/_/g, " ") // Replace all underscores with spaces
              .replace(/\w\S*/g, txt => {
                // Capitalize the first letter of each word
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
              });
          });
        if(target) {
        const embed = {
            color: member.displayColor,
            author: {
                name: `${target.tag}`,
                icon_url: `${member.displayAvatarURL({dynamic: true, format: "png"})}`,
                url: '',
            },
            description: `${member}`,
            thumbnail: {
                url: member.displayAvatarURL({dynamic: true, format: "png"}),
            },
            fields: [
                {
                    name: 'Joined',
                    value: `${moment.utc(member.joinedAt).format('ddd, MMM D, YYYY HH:mm A')}\n - ${moment(member.joinedAt).startOf('day').fromNow()}`,
                    inline: true
                },
                {
                    name: 'Registered',
                    value: `${moment(target.createdAt).format("ddd, MMM D, YYYY HH:mm A")}\n - ${moment(target.createdAt).startOf('day').fromNow()}`,
                    inline: true,
                },
                {
                    name: `Roles [${member.roles.cache.size - 1}]`,
                    value: member.roles.cache.map(r => r).join(' ').replace("@everyone", " ") || "None",
                    inline: false,
                },
                {
                    name: `Key Permissions`,
                    value: permissions.join(', '),
                    inline: false,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: `ID: ${member.id}`,
            },
        };
        message.channel.send({embeds: [embed]});
        }
    },
};
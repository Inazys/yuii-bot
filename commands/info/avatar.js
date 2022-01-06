const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'avatar',
    aliases: [],
    utilisation: '{prefix}avatar <user>',
    category: 'info',

    execute(client, message) {
        let target = message.mentions.users.first() || message.author;
        if(target) {
            const embed = {
                color: target.displayColor,
                author: {
                    name: `${target.tag}`,
                    icon_url: `${target.displayAvatarURL({dynamic: true})}`,
                    url: '',
                },

                title: `Avatar`,
                timestamp: new Date(),
                footer: {
                    text: `ID: ${target.id}`,
                },
                image: {
                    url: `${target.displayAvatarURL({size: 4096, dynamic: true, format: "png"})}`,
                },
            };
            message.channel.send({embeds: [embed]});
        }
    },
};
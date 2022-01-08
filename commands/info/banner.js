const { MessageEmbed } = require('discord.js');
const { getUserBanner } = require("discord-banner");
require("discord-banner")("BOTTOKEN")
module.exports = {
    name: 'banner',
    aliases: ['bg'],
    utilisation: '{prefix}banner <user>',
    category: 'info',

    execute(client, message) {
        let target = message.mentions.users.first() || message.author;
        let ids = target.id
        getUserBanner(ids).then(banner => {
            if(target) {
                const embed = {
                    color: target.displayColor,
                    author: {
                        name: `${target.tag}`,
                        icon_url: `${target.displayAvatarURL({dynamic: true})}`,
                        url: '',
                    },
    
                    title: `Banner`,
                    timestamp: new Date(),
                    footer: {
                        text: `ID: ${target.id}`,
                    },
                    image: {
                        url: `${banner.url}`,
                    },
                };
                message.channel.send({embeds: [embed]});
            }
        });
    },
};
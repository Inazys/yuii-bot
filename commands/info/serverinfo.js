const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const verificationLevels = {
    NONE: "None",
    LOW: "Low",
    MEDUIM: "Medium",
    HIGH: "High",
    VERY_HIGH: "Very High"
}
module.exports = {
    name: 'serverinfo',
    aliases: [],
    utilisation: '{prefix}serverinfo',
    category: 'info',

    async execute(client, message) {
        const owner = await message.guild.fetchOwner();
        const members = message.guild.members.cache;
        const embed = {
            color: "RANDOM",
            author: {
                name: `${message.guild.name}`,
                icon_url: `${message.guild.iconURL({dynamic: true, format: "png"})}`,
                url: '',
            },
            thumbnail: {
                url: message.guild.iconURL({dynamic: true, format: "png", size: 4096}),
            },
            fields: [
                {
                    name: 'Owner',
                    value: `${owner.user.tag}`,
                    inline: true
                },
                {
                    name: 'Category Channels',
                    value: `${message.guild.channels.cache.filter(c => c.type === 'GUILD_CATEGORY').size}`,
                    inline: true,
                },
                {
                    name: `Text Channels`,
                    value: `${message.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').size}`,
                    inline: true,
                },
                {
                    name: `Voice Channels`,
                    value: `${message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size}`,
                    inline: true,
                },
                {
                    name: `Members`,
                    value: `${message.guild.memberCount}`,
                    inline: true,
                },
                {
                    name: `Roles`,
                    value: `${message.guild.roles.cache.size}`,
                    inline: true,
                },
                {
                    name: `Role List [${message.guild.roles.cache.size}]`,
                    value: `${message.guild.roles.cache.map(r => r).join(', ')}`,
                    inline: false,
                },
            ],
            footer: {
                text: `ID: ${message.guild.id} | Server created • ${moment(message.guild.createdTimestamp).format('DD/MM/YYYY')} `,
            },
        };
        message.channel.send({ embeds: [embed] });
    },
};

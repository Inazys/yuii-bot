const { Client, Message, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'badges',
    aliases: [],
    utilisation: '{prefix}badges <user>',
    category: 'info',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute(client, message) {
        const user = message.mentions.users.first() || message.author;
        const flags = user.flags.toArray();
        console.log(flags);     
        message.channel.send(`${user}'s badges: ${flags.join(', ')}`)
    },
};
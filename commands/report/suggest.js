const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'suggest',
    aliases: [],
    utilisation: '{prefix}suggest <text>',
    category: 'report',

    execute(client, message, args) {
        const suggestchannel = client.channels.cache.get("929751826167918652");
        const suggest = args.join(" ");
        if (!suggest) {
            return message.channel.send("Enter the Description of the bug you encountered!");
          }
        message.channel.send(`${message.author}, Thanks for Suggesting Features for Yuii. Our Mod team will inform you if your suggestion is accepted or not!`);
        const embed = new MessageEmbed()
        .setTitle(":white_check_mark: New Suggestion! :white_check_mark:")
        .setDescription(`Description: ${suggest} \n\nSuggestion by: ${message.author.tag}\nGuild : ${message.guild.name} - ${message.guild.id}`)
        .setFooter(`User ID: ${message.author.id}`)
        .setColor("GREEN");
        suggestchannel.send({embeds: [embed]});
    },
};
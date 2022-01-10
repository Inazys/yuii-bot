const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'report',
    aliases: [],
    utilisation: '{prefix}report <text>',
    category: 'report',

    execute(client, message, args) {
        const reportchannel = client.channels.cache.get("929416687021875262");
        const report = args.join(" ");
        if (!report) {
            return message.channel.send("Enter the Description of the bug you encountered!");
          }
        message.channel.send(`${message.author}, Your Report has been Successfully Submitted. Our Mod Team will reply to you as soon as possible`);
        const embed = new MessageEmbed()
        .setTitle(":exclamation: New Bug Report :exclamation: ")
        .setDescription(`Description: ${report} \n\nBug reported by: ${message.author.tag}\nGuild : ${message.guild.name} - ${message.guild.id}`)
        .setFooter(`User ID: ${message.author.id}`)
        .setColor("RED");
        reportchannel.send({embeds: [embed]});
    },
};
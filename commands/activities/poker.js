const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'poker',
    aliases: [],
    utilisation: '{prefix}poker',
    category: 'activities',

    async execute(client, message, args) {
        if (!message.member.voice.channelId) {
            return message.channel.send('You need to join a voice channel first!')
          }
            client.discordTogether.createTogetherCode(message.member.voice.channelId, 'poker').then(async(invite) => {
                
                let embed = new MessageEmbed()
                .setTitle("Poker.io")
                .setDescription(`[Click Here](${invite.code}) to play Poker.io!\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
                .setColor("GREEN")
                .setFooter(`Requested By: ${message.author.tag}`)
                
                return message.channel.send({ embeds: [embed] });
            });
    },
};
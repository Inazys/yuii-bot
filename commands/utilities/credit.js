const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'credit',
    aliases: [],
    utilisation: '{prefix}credit',
    category: 'utilities',

    execute(client, message) {
        const embed = new MessageEmbed()
        const image = client.user.displayAvatarURL()
        embed.setTitle("Credit")
        embed.setImage(image)
        embed.addField("People who made this bot", "-> Thanks to **ZeroDev** for tutorial!\n -> Bot main programmer: **Inazys**")
        embed.setTimestamp()
        message.channel.send({ embeds: [embed] });
    },
};
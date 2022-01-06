const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'help',
    aliases: [],
    utilisation: '{prefix}help',
    category: 'utilities',

    execute(client, message, args) {
        const categories = [];
        client.commands.forEach((command) => categories.includes(command.category) ? false : categories.push(command.category));

        const embed = new MessageEmbed();
        const commands = client.commands.filter(x => x.showHelp !== false)
        embed.setColor('BLUE');
        embed.setTitle('Help Menu');
        embed.setThumbnail(client.user.avatarURL({ size: 1024, dynamic: true, format: "png"}));
        embed.setDescription(`Find all the commands here, total command **${commands.size}**`);
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true, format: "png" }));
        categories.map((category) => {
            const cmd = client.commands.filter((cmd) => cmd.category === category);

            embed.addField(category.charAt(0).toUpperCase() + category.slice(1) + " | " + cmd.size, cmd.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));
        });
        embed.setTimestamp();
        embed.setFooter('Made with heart by Inazys ❤️', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};
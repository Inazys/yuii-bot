const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,
    category: 'music',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const time = timestamp.current
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        embed.setDescription(`Volume **${queue.volume}**%\nDuration **${trackDuration}**\nLoop mode **${methods[queue.repeatMode]}**\nRequested by ${track.requestedBy}`);

        embed.setTimestamp();
        embed.setFooter('Made with heart by Inazys ❤️', message.author.avatarURL({ dynamic: true }));
        const musicEmbed = {
            color: "BLUE",
            title: `${track.title ? "Now Playing" : "🎵  Playing"}`,
            description: `[${track.title}](${track.url})\n\`[${time} / ${track.duration}]\`\n\nRequested by: ${track.requestedBy}`,
            thumbnail: {
                url: `${track.thumbnail}`,
            },
            timestamp: new Date(),
          };
        const saveButton = new MessageButton();
        

        saveButton.setLabel('Save this track');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('SUCCESS');

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [musicEmbed], components: [row] });
    },
};
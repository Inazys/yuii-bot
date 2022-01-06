module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,
    category: 'music',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        queue.destroy();

        message.channel.send(`✅ Stopped music playback and left the voice channel.`);
    },
};
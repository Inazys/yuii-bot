const { getData, getPreview, getTracks } = require('spotify-url-info')
player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    if (track.url.includes('youtube') || track.url.includes("youtu.be")) {
        const musicEmbed = {
            color: "BLUE",
            title: `${track.title ? "Now Playing" : "🎵  Playing"}`,
            description: `[${track.title}](${track.url})\n\`[0:00 / ${track.duration}]\`\n\nRequested by: ${track.requestedBy}`,
            thumbnail: {
                url: `${track.thumbnail}`,
            },
            timestamp: new Date(),
          };
        queue.metadata.send({ embeds: [musicEmbed] });
    }
    if (track.url.includes('spotify')) {
    getPreview(track.url).then((data) => {
        const musicEmbed = {
            color: "BLUE",
            title: `${track.title ? "Now Playing" : "🎵  Playing"}`,
            description: `[${track.title} - ${data.artist}](${track.url})\n\`[0:00 / ${track.duration}]\`\n\nRequested by: ${track.requestedBy}`,
            thumbnail: {
                url: `${data.image}`,
            },
            timestamp: new Date(),
          };
        queue.metadata.send({ embeds: [musicEmbed] });
        });
    }
    });
player.on('trackAdd', (queue, track) => {
    const num = queue.getTrackPosition(track)
    const currentTrackPosition = num + 1
    if (track.url.includes('youtube') || track.url.includes("youtu.be")) {
        const musicEmbed = {
            title: 'Queued',
            description: `[${track.title}](${track.url})`,
            thumbnail: {
              url: `${track.thumbnail}`,
            },
            footer: {
                text: `In position #${currentTrackPosition}`,
            },
            timestamp: new Date(),
          };
        queue.metadata.send({ embeds: [musicEmbed] });
    }
    if (track.url.includes('spotify')) {
    getPreview(track.url).then((data) => {
        const musicEmbed = {
            title: 'Queued',
            description: `[${track.title} - ${data.artist}](${track.url})`,
            thumbnail: {
              url: `${data.image}`,
            },
            footer: {
                text: `In position #${currentTrackPosition}`,
            },
            timestamp: new Date(),
          };
        queue.metadata.send({ embeds: [musicEmbed] });
        });
    }
    })
player.on('botDisconnect', (queue) => {
    queue.metadata.send('Disconnected from the voice channel!, clearing queue... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Nobody is in the voice channel, leaving voice... ❌');
});

/*player.on('queueEnd', (queue) => {
    queue.metadata.send('Finished playing all the song! ✅');
}); */
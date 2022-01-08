const { QueryType } = require('discord-player');
const playdl = require("play-dl");
module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,
    category: 'music',

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Please enter a valid search ${message.author}... try again ? ❌`);
        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`No results found ${message.author}... try again ? ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel,
            leaveOnEnd: false,
            leaveOnStop: true,
            initialVolume: 80,
            leaveOnEmptyCooldown: 60 * 1000 * 3,
            leaveOnEmpty: true,
            disableVolume: true,
            async onBeforeCreateStream(track, source, queue) {
                let vid;
                try {
                    if(track.url.includes("youtube.com"))
                        vid = (await playdl.stream(track.url)).stream;
                    else
                        vid = (await playdl.stream(await playdl.search(`${track.author} ${track.title} lyric`, { limit : 1, source : { youtube : "video" } }).then(x => x[0].url))).stream;
                } catch {
                    queue.metadata.send("Error while searching for song!");
                    vid = (await playdl.stream("https://www.youtube.com/watch?v=Wch3gJG2GJ4", { quality: 0 })).stream; // a 1 second video. if u have a better way to do this, feel free to open a PR/issue :)
                }
                return vid;
            }

        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`I can't join the voice channel ${message.author}... try again ? ❌`);
        }

        await message.channel.send(`Loading your ${res.playlist ? 'playlist' : 'track'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};

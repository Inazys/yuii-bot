module.exports = {
    app: {
        px: '-',
        token: 'ODk4NTMxNDAzOTk2NzM3NTM2.YWlklA.t-a-oVIWRDv6ZnK8eX3NGbjDZeA',
        playing: 'New Year!'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25,
                dlChunkSize: 0,
            }
        }
    }
};

module.exports = {
    app: {
        px: 'YOURPREFIX',
        token: 'YOURTOKEN',
        playing: 'ANYTHING'
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

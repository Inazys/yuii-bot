<div align="center">
  <br />
  <p>
    <a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
  </p>
  <br />
</div>
# yuii-bot
A very cool music bot made by inazys
A complete code to download for a music bot
### ⚡ Configuration

Open the configuration file `config.js`.

```js
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
```

Basic configuration

- `app/px`, the prefix
- `app/token`, the token of the bot [Discord Developers](https://discordapp.com/developers/applications)
- `app/playing`, activity of the bot


### 📑 Installation

You need these thing

[FFmpeg](https://www.ffmpeg.org) to process audio

[Node JS](https://nodejs.org/en/) (v16)

Also after download use ```js
npm i``` to install all dependencies

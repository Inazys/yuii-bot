const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const { DiscordTogether } = require('discord-together');
/*
Please remember to use npm i to install all dependencies and the bot will work
*/

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');
client.discordTogether = new DiscordTogether(client);
global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

client.login(client.config.app.token);

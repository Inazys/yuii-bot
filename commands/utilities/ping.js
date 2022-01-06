const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',
    category: 'utilities',

    execute(client, message) {
        message.channel.send(`Last heartbeat calculated ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} ago **${client.ws.ping}ms** 🛰️`);
        message.channel.send(`Websocket ping: ${client.ws.ping}ms`)
    },
};
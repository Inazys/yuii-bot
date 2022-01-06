const invite = "https://discord.gg/gdnUzXekqT"
module.exports = {
    name: 'minecraft',
    aliases: ['mc'],
    utilisation: '{prefix}minecraft',
    category: 'utilities',

    execute(client, message) {
        message.channel.send(`Join my discord server! - ${invite}`)
    },
};
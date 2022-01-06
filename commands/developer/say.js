const owner = ["903121413920133132"]
module.exports = {
    name: 'say',
    aliases: [],
    utilisation: '{prefix}say <text>',
    category: 'developer',

    execute(client, message, args) {
        if (message.author.id != owner) {
            return message.channel.send("You can't use this command!")
          }
        if (message.author.id == owner) {
            const say = args.join(' ')
            message.delete(0)
            return message.channel.send(say)
        }
    },
};
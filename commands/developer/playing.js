const owner = ["903121413920133132"]
module.exports = {
    name: 'playing',
    aliases: [],
    utilisation: '{prefix}playing',
    category: 'developer',

    execute(client, message, args) {
        if (message.author.id != owner) {
            return message.channel.send("You can't use this command!")
          }
            try {
                const status = args.join(' ')
              if (!status) {
                 return message.channel.send("Please input a status to display!")
              }
              if(status) {
                client.user.setActivity(`${status}`, { type: 'PLAYING' });
                message.reply(`Status changed to playing \`${status}\``)
                console.log(`Status changed to playing ${status}`)
              }
            } catch (err) {
              message.channel.send("Error!");
          }
    },
};
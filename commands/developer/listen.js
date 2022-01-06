const owner = ["903121413920133132"]
module.exports = {
    name: 'listen',
    aliases: [],
    utilisation: '{prefix}ping',
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
                client.user.setActivity(`${status}`, { type: 'LISTENING' });
                message.reply(`Status changed to listening to \`${status}\``)
                console.log(`Status changed to listening to ${status}`)
              }
            } catch (err) {
              message.channel.send("Error!");
          }
    },
};
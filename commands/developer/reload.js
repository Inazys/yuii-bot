const config = require('../../config.js');
module.exports = {
    name: 'reload',
    aliases: ['rl', 'fix'],
    utilisation: '{prefix}reload [Category] [Command]',
    category: 'developer',

    execute(client, message, args) {
        if (message.author.id != config.app.ownerid) {
            return message.channel.send("You can't use this command!");
        }

        if(!args[0]) return message.reply(`Provide the category & commands to reload \`reload [Category] [Command]\``)
        if(!args[1]) return message.reply(`Provide a command to reload \`${config.app.px}reload [Category] [Command]\``)

        let category = args[0].toLowerCase()
        let command = args[1].toLowerCase()
      
        try {
            delete require.cache[require.resolve(`../../commands/${category}/${command}.js`)];
            client.commands.delete(command);
            
            const pull = require(`../../commands/${category}/${command}.js`)
            client.commands.set(command, pull)
            console.log(`Reloaded command: Category:${category}, ${command}`)
            return message.channel.send(`Reloaded Command: **\`${command}\`**`)

        } catch (error) {
            return message.reply(` Cannot reload **\`${command}\`**\`\`\`${error}\`\`\``)
        }
    },
};
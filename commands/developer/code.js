const fs = require('fs');
const config = require('../../config.js');
module.exports = {
    name: 'code',
    aliases: ['showcode', 'source'],
    utilisation: '{prefix}code [Category] [Command]',
    category: 'developer',

    execute(client, message, args) {
        if (message.author.id != config.app.ownerid) {
            return message.channel.send("You can't use this command!");
        }
        if(!args[0]) return message.reply(`Provide the category & commands  \`code [Category] [Command]\``)
        if(!args[1]) return message.reply(`Provide a command  \`${config.app.px}code [Category] [Command]\``)
        let category = args[0].toLowerCase()
        let command = args[1].toLowerCase()
        const code = require.resolve(`../../commands/${category}/${command}.js`);
        fs.readFile(`${code}`, 'utf8', function(err, contents) {
            if(contents.length > 2000) return message.channel.send("File too long!")
            message.channel.send(`\`\`\`js\n${contents}\`\`\``)
        });
    },
};
const figlet = require("figlet");
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ascii',
    aliases: [],
    utilisation: '{prefix}ascii <text>',
    category: 'fun',

    async execute(client, message, args) {
        let text = args.join(" ");
        if (!text) {
          return message.channel.send(`\`Usage: =ascii <msg>\``);
        }
        if (text.length > 20) {
          return message.channel.send(
            `Please put text that has 20 characters or less because the conversion won't be good!`
          );
        }
        figlet(text, function (err, data) {
          message.channel.send(`\`\`\`${data}\`\`\``, {
            code: 'AsciiArt',
          });
        });
    },
};
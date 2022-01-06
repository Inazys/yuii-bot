const owner = ["903121413920133132"];
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'eval',
    aliases: ['execute'],
    utilisation: '{prefix}eval <code>',
    category: 'developer',

    execute(client, message) {
        if (message.author.id != owner) {
            return message.channel.send("Only the bot developer can use this command!")
          }
            try {
              const code = message.content.slice(6).trim();
              if (!code) {
                 return message.channel.send("What do you want to evaluate?")
              }
              
              let evaled = eval(code);
      
              if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
      
                let embed = new MessageEmbed()
                .setAuthor("Eval", message.author.avatarURL())
                .addField("Input", `\`\`\`${code}\`\`\``)
                .addField("Output", `\`\`\`${evaled}\`\`\``)
                .setColor("GREEN")
              console.log(`${message.author.username} just evaled ${code} output is ${evaled}`)
              message.channel.send({embeds: [embed]});
            } catch (err) {
              message.channel.send(`\`ERROR\` \`\`\`\n${err}\`\`\``);
          }
    },
};
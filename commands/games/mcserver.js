const util = require("minecraft-server-util");
const { MessageEmbed } = require('discord.js');
const { ar } = require("translate-google/languages");
module.exports = {
    name: 'mcserver',
    aliases: [],
    utilisation: '{prefix}minecraft',
    category: 'games',

    execute(client, message, args) {
        if(!args[0]) return message.channel.send("Please enter a minecraft server ip!")
        util.status(args[0], 25565).then((result) => {
            const embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("Minecraft server status!")
            .addField('Server IP', `${args[0]}`)
            .addField('Online Players', result.players.online.toString())
            .addField('Max Players', result.players.max.toString())
            .addField('Version', result.version.name)
            .addField('Server MOTD', result.motd.clean)
            message.channel.send({embeds: [embed]})
        })
        .catch((err) =>{
            message.channel.send("There was an error!")
            throw err;
        })
    },
};
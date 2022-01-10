const { MessageEmbed } = require('discord.js');
const translate = require('translate-google')
module.exports = {
    name: 'translate',
    aliases: ['tr'],
    utilisation: '{prefix}translate <text1>',
    category: 'fun',

    async execute(client, message, args) {
        translate(args.join(" "), {to : 'en'}).then(res => {
            message.channel.send(res)
        }).catch(err => {
            message.channel.send('An error has occured')
            console.log(err)
        })
    },
};
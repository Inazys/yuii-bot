const { MessageAttachment } = require('discord.js');
const ameClient = require("amethyste-api");
const ameAPI = new ameClient("47eeeda9bdc50206ffd8d3ae06dc8c1c281ea149c46d02d15d1c7ea115646a88d03d508d54869c49fcbcee4b300d12807d785fc25a6b344e37c0fcf5d4208948")
module.exports = {
    name: 'versus',
    aliases: ['vs'],
    utilisation: '{prefix}versus <someone>',
    category: 'image',

    async execute(client, message) {
        const you =  message.author
        const user = message.mentions.users.first() || message.author
        const buffer = await ameAPI.generate("vs", { url: you.displayAvatarURL({ format: "png", size: 512 }), avatar: user.displayAvatarURL({ format: "png", size: 512 }), type: 3});
        const attachment = new MessageAttachment(buffer);
        message.channel.send({ files: [attachment]})
    },
};
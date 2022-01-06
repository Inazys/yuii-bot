const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'wallpaper',
    aliases: ['wp'],
    utilisation: '{prefix}wallpaper',
    category: 'image',

    async execute(client, message) {
        const url = 'https://nekos.life/api/v2/img/wallpaper';
		let image;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.url;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}
        message.channel.send("Random wallpaper")
        message.channel.send(image)
        
    },
};
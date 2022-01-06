const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'pat',
    aliases: [],
    utilisation: '{prefix}pat <Someone Name>',
    category: 'image',

    async execute(client, message) {
        let user = message.mentions.members.first();
        if(user) {
        const url = 'http://api.nekos.fun:8080/api/pat';
		let image;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.image;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}
		const embed = new MessageEmbed()
			.setTitle('Patting Gif')
			.setColor("RANDOM")
            .setDescription(`Patted ${user} aww`)
			.setImage(image);
		return message.channel.send({embeds: [embed]});
        }
        else {
            const url = 'https://nekos.life/api/v2/img/pat';
            let image;
            try {
                const { data } = await axios.get(url);
                console.log(data);
                image = data.url;
            } catch (e) {
                return message.channel.send('An error occured, please try again!');
            }
            const embed = new MessageEmbed()
                .setTitle("Patting")
                .setColor("RANDOM")
                .setDescription("Got no one to pat bruh?")
                .setImage(image);
            return message.channel.send({embeds: [embed]});

        }
    },
};
const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'hug',
    aliases: [],
    utilisation: '{prefix}hug <Someone Name>',
    category: 'image',

    async execute(client, message) {
        let user = message.mentions.members.first();
        if(user) {
        const url = 'http://api.nekos.fun:8080/api/hug';
		let image;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.image;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}
		const embed = new MessageEmbed()
			.setTitle('Hugging Gif')
			.setColor("RANDOM")
            .setDescription(`Hugged ${user} aww`)
			.setImage(image);
		return message.channel.send({embeds: [embed]});
        }
        else {
            const url = 'https://nekos.life/api/v2/img/hug';
            let image;
            try {
                const { data } = await axios.get(url);
                console.log(data);
                image = data.url;
            } catch (e) {
                return message.channel.send('An error occured, please try again!');
            }
            const embed = new MessageEmbed()
                .setTitle("Hugging")
                .setColor("RANDOM")
                .setDescription("Guess you're alone")
                .setImage(image);
            return message.channel.send({embeds: [embed]});

        }
    },
};
const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'cry',
    aliases: [],
    utilisation: '{prefix}cry',
    category: 'image',

    async execute(client, message) {
        const url = 'http://api.nekos.fun:8080/api/cry';
		let image;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.image;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}
		const embed = new MessageEmbed()
			embed.setTitle('Crying 😭')
			embed.setColor("RANDOM")
            embed.setDescription(`Requested by ${message.author}`)
			embed.setImage(image)
            embed.setTimestamp()
            embed.setFooter('Sitting in a pool of water :<',message.author.avatarURL({ dynamic: true }))
		return message.channel.send({embeds: [embed]});
    },
};
const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'baka',
    aliases: [],
    utilisation: '{prefix}baka',
    category: 'image',

    async execute(client, message) {
        const url = 'https://nekos.life/api/v2/img/baka';
		let image;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.url;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}
		const embed = new MessageEmbed()
			embed.setTitle('Baka!')
			embed.setColor("RANDOM")
            embed.setDescription(`Requested by ${message.author}`)
			embed.setImage(image)
            embed.setTimestamp()
            embed.setFooter('Baka!',message.author.avatarURL({ dynamic: true }))
		return message.channel.send({embeds: [embed]});
    },
};
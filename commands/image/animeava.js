const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'animeava',
    aliases: ['anime'],
    utilisation: '{prefix}waifu',
    category: 'image',

    async execute(client, message) {
        const url = 'https://nekos.life/api/v2/img/avatar';
		let image;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.url;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}
		const embed = new MessageEmbed()
			embed.setTitle('Random anime avatar for weeb like you')
			embed.setColor("RANDOM")
            embed.setDescription(`Requested by ${message.author}`)
			embed.setImage(image)
            embed.setTimestamp()
            embed.setFooter('weebs',message.author.avatarURL({ dynamic: true }))
		return message.channel.send({embeds: [embed]});
    },
};
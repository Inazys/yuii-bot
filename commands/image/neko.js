const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'neko',
    aliases: ['cat'],
    utilisation: '{prefix}neko',
    category: 'image',

    async execute(client, message) {
        const url = 'https://nekos.life/api/neko';
		let image;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.neko;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}
		const embed = new MessageEmbed()
			embed.setTitle('Neko or cat')
			embed.setColor("RANDOM")
            embed.setDescription(`Requested by ${message.author}`)
			embed.setImage(image)
            embed.setTimestamp()
            embed.setFooter('meow~ owo',message.author.avatarURL({ dynamic: true }))
		return message.channel.send({embeds: [embed]});
    },
};
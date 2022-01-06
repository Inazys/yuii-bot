const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'poke',
    aliases: [],
    utilisation: '{prefix}poke',
    category: 'image',

    async execute(client, message) {
        const url = 'https://nekos.life/api/v2/img/poke';
		let image;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.url;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}
		const embed = new MessageEmbed()
			embed.setTitle('Poking stop it!')
			embed.setColor("RANDOM")
            embed.setDescription(`Requested by ${message.author}`)
			embed.setImage(image)
            embed.setTimestamp()
            embed.setFooter('Awww man!',message.author.avatarURL({ dynamic: true }))
		return message.channel.send({embeds: [embed]});
    },
};
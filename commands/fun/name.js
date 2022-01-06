const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'name',
    aliases: [],
    utilisation: '{prefix}name',
    category: 'fun',

    async execute(client, message) {
        const url = 'https://nekos.life/api/v2/name';
		let text;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			text = data.name;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}
		const embed = new MessageEmbed()
			embed.setColor("RANDOM")
            embed.setDescription(`Requested by ${message.author}`)
            embed.addField("Random name", `\`${text}\``)
            embed.setTimestamp()
		return message.channel.send({embeds: [embed]});
    },
};
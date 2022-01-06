const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'meme',
    aliases: [],
    utilisation: '{prefix}meme',
    category: 'fun',

    async execute(client, message) {
        let res = await axios.default.get(`https://www.reddit.com/r/memes/random/.json`);
        if(!res || !res.data || !res.data.length)
            return message.channel.send("Error!")
        res = res.data[0].data.children[0].data
		const embed = new MessageEmbed()
			embed.setColor("RANDOM")
            embed.setTitle(res.title)
            embed.setImage(res.url)
            embed.setURL(`https://www.reddit.com${res.permalink}`)
            embed.setFooter(`👍 ${res.ups} | 💬 ${res.num_comments}`)
            embed.setTimestamp()
		return message.channel.send({embeds: [embed]});
    },
};
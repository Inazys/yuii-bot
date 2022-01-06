const axios = require("axios")
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'urban',
    aliases: [],
    utilisation: '{prefix}urban <text>',
    category: 'info',

    async execute(client, message, args) {
        let query = args.join(' ')
        if(!query) {
            return message.channel.send("What are you looking for bro?")
        }
        let link = "https://api.urbandictionary.com/v0/define?term=";
        let fetch = await axios(link + encodeURI(query));
        fetch= fetch.data.list;
        if(fetch.length === 0) {
            return message.channel.send("Your query cannot found!");
        }
        let data = fetch[0];
        let definition = data.definition;
        let example = data.example;
        let permalink = data.permalink;
        let thumbsUp = data.thumbs_up;
        let thumbsDown = data.thumbs_down;
        let title = data.word
        definition = definition.length >= 1024 ? definition.slice(0, 1020) + "..." : definition;
        example = example.length >= 1024 ? example.slice(0,1020) + "..." : example;
        const embed = new MessageEmbed()
        .setTitle(title)
        .setURL(permalink)
        .setColor("BLUE")
        .addField("Definition: ", definition)
        .addField("Example: ", example)
        .setFooter(`👍: ${thumbsUp} | 👎: ${thumbsDown}`)
        return message.channel.send({embeds: [embed]});
    },
};
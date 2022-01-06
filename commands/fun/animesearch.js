const { MessageEmbed } = require('discord.js');
const malScraper = require('mal-scraper');
module.exports = {
    name: 'animesearch',
    aliases: [],
    utilisation: '{prefix}animesearch <anime>',
    category: 'fun',

    async execute(client, message, args) {
        const search = `${args}`;
        malScraper.getInfoFromName(search)
        .then((data) => {
        const malEmbed = new MessageEmbed()
          .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
          .setThumbnail(data.picture)
          .setColor("RANDOM")
          .addField('English Title', data.englishTitle)
          .addField('Japanese Title', data.japaneseTitle)
          .addField('Type', data.type)
          .addField('Episodes', data.episodes)
          .addField('Rating', data.rating)
          .addField('Aired', data.aired)
          .addField('Score', data.score)
          .addField('Score Stats', data.scoreStats)
          .addField('Link', data.url);
          message.channel.send({embeds: [malEmbed]}) 
        }).catch((err) => message.channel.send("Error"));
    },
};
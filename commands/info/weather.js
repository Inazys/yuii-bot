const weather = require('weather-js')
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'weather',
    aliases: [],
    utilisation: '{prefix}weather <location>',
    category: 'info',

    execute(client, message, args) {
        if(args.length === 0){
            let errorembed = new MessageEmbed()
            .setTitle("Error")
            .setDescription("Please enter a location!")
          return message.channel.send({embeds: [errorembed]});
        }
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
        if(err) return message.channel.send(err);
        if(result === undefined || result.length === 0) {
            let errorembed = new MessageEmbed()
            .setTitle("Error")
            .setDescription("**Invalid** location")
            return message.channel.send({embeds: [errorembed]})
    };
        var current = result[0].current;
        var location = result[0].location;  
        const embed = new MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(0x00AE86)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', location.degreetype, true)
            .addField('Temperature', `${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)
            .addField('Day', `${current.day}`,true)
            .addField('Date', `${current.date}`, true)
            .addField('Observation Time', `${current.observationtime}`,true)
            .setFooter('Data is collected every 1 hour')
            .setTimestamp()
            message.channel.send({embeds: [embed]})
        });   
    },
};
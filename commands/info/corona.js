const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'corona',
    aliases: ['covid'],
    utilisation: '{prefix}corona <country>',
    category: 'info',

    async execute(client, message, args) {
        const country = args.join(' ')
        if(country){
            fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.cases.toLocaleString()
                let deaths = data.deaths.toLocaleString()
                let recovered = data.recovered.toLocaleString()
                let flag = data.countryInfo.flag
                let todayCases = data.todayCases.toLocaleString()
                let todayDeaths = data.todayDeaths.toLocaleString()
                let todayRecovered = data.todayRecovered.toLocaleString()
                const embed = new MessageEmbed()
                .setColor("BLUE")
                .setTitle(`COVID-19 Stats for **${country}**`)
                .setThumbnail(flag)
                .addField('Confirmed Cases', confirmed)
                .addField('Deaths', deaths)
                .addField('Recovered', recovered)
                .addField('Today cases', todayCases)
                .addField('Today deaths', todayDeaths)
                .addField('Today recovered', todayRecovered)

                message.channel.send({ embeds: [embed] });
            }).catch(e => {
                return message.channel.send('Invalid country provided')
            })
        } else {
            fetch(`https://disease.sh/v3/covid-19/all`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.cases.toLocaleString()
                let recovered = data.recovered.toLocaleString()
                let deaths = data.deaths.toLocaleString()
                let todayCases = data.todayCases.toLocaleString()
                let todayDeaths = data.todayDeaths.toLocaleString()
                let todayRecovered = data.todayRecovered.toLocaleString()
                const embed = new MessageEmbed()
                .setColor("BLUE")
                .setTitle(`Worldwide COVID-19 Stats 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
                .addField('Today cases', todayCases)
                .addField('Today recovered', todayRecovered)
                .addField('Today death', todayDeaths)
                message.channel.send({ embeds: [embed] });
            })  
        } 
    },
};
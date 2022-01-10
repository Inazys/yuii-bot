const img = require('images-scraper')
const google = new img({
    puppeteer : {
        headless : true,
    }
})
module.exports = {
    name: 'image',
    aliases: ['img'],
    utilisation: '{prefix}image <query>',
    category: 'image',

    async execute(client, message, args) {
        const query = args.join(" ")
        if(!query) return message.channel.send('Please enter a search query')
        let start = Date.now();
        const load = await message.channel.send("Please wait while I am searching! - This may took a while")
        const results = await google.scrape(query, 1)
        load.edit(results[0].url);
        let end = Date.now();
        message.channel.send(`Time took to search ${(end - start)/1000}s`)
    },
};
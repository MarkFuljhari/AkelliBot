const Discord = require('discord.js');
const superagent = require("superagent");
exports.run = async function(client, message, args) {
    let {
        body
    } = await superagent
        .get(`https://api-to.get-a.life/meme`);
    const memembed = new Discord.RichEmbed()
        .setTitle("Life is a meme !")
        .setColor("RANDOM")
        .setImage(body.url)
message.channel.send(memembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['fun','lol','memes'],
    permLevel: 0
  };
  
exports.help = {
    name: 'meme',
    description: 'With this command you can get random memes asap.',
    usage: 'meme'
  };
const Discord = require('discord.js');
const superagent = require("superagent");
exports.run = async function(client, message, args) {
    let {
        body
    } = await superagent
        .get(`https://random.dog/woof.json`);
    const dogembed = new Discord.RichEmbed()
        .setTitle("Aww... Doggie!")
        .setColor("RANDOM")
        .setImage(body.url)
    message.channel.send(dogembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['doogie','wufl'],
    permLevel: 0
  };
  
exports.help = {
    name: 'dog',
    description: 'Wanna get a random picture of a cute dog well if you use this command you will get it asap !',
    usage: 'dog'
  };
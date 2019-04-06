const Discord = require('discord.js');
const superagent = require("superagent");
exports.run = async function(client, message, args) {
    let {
        body
    } = await superagent
        .get(`http://aws.random.cat/meow`);
    const catembed = new Discord.RichEmbed()
        .setTitle('Aww... Kitty!')
        .setColor("RANDOM")
        .setImage(body.file)
    message.channel.send(catembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kitty','cats'],
    permLevel: 0
  };
  
exports.help = {
    name: 'cat',
    description: 'With this command you can get a random picture of a cat asap !',
    usage: 'cat'
  };
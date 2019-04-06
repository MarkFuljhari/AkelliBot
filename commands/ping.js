const Discord = require("discord.js");
exports.run = (client, message) => {
 let msgping1 = new Date();

 let botping = new Date() - message.createdAt;

 let msgping2 = new Date() - msgping1;

 let pingembed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .addField('API Ping : ', Math.floor(botping) + 'ms')
     .addField('Bot Ping : ', Math.floor(botping) + 'ms')
     .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
     .setTimestamp(new Date())
     .setFooter(`Requested by ${message.author.tag}`);
     
      message.channel.send('Ping?')
      .then(message => {

        message.edit(pingembed);
      });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    description: 'Ping/Pong command. I wonder what this does? /sarcasm',
    usage: 'ping'
  };
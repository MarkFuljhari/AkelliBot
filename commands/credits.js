const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let ccreator = ("TheBestGamerYT#6781 and MarkF#4978");

    let ccommunity = ("Everyone that supports us!");

    let chosting = ("Heroku Services Company");

    let bicon = client.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
            .setColor("#9B59B6")
            .setThumbnail(bicon)
            .addField("Developed by:", ccreator)
            .addField("Ideas:", ccommunity)
            .addField("Bot Hosting:", chosting)

    message.channel.send({embed: embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['credit','credts'],
    permLevel: 0
  };
  
exports.help = {
    name: 'credits',
    description: 'Take a look at who made Akelli Bot using this command. ',
    usage: 'credits'
  };
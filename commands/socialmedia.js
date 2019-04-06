exports.run = function(client, message, args) {
    message.channel.send({embed:{
        "plainText": "Online",
        "title": "Akelli",
        "description": "Make sure to follow us for future updates!",
        "author": {
        "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
        },
        "color": 15105570,
        "footer": {
        "text": "© Copyright Akelli Company",
        "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
        },
        "thumbnail": "https://cdn.discordapp.com/attachments/344215127828070401/538810804024377374/20190117_091141.jpg",
        "fields": [
        {
        "name": "• Instagram",
        "value": "https://www.instagram.com/akellicompany",
        "inline": false
         },
         {
        "name": "• Twitter",
        "value": "https://www.twitter.com/akellicompany",
        "inline": false
        },
        {
        "name": "• Discord",
        "value": "https://www.discord.me/akellibot",
        "inline": false
        }
        ]
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['social','media'],
    permLevel: 0
  };
  
exports.help = {
    name: 'socialmedia',
    description: 'Wanna find out whats up ? Well...you can do that easly as we the Akelli Company are very active on social accounts. ',
    usage: 'socialmedia'
  };
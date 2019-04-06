exports.run = function(client, message, args) {
    message.channel.send({embed:{
        "plainText": "AkelliBot Invite",
        "title": "Invite Bot",
        "url": "https://discordapp.com/oauth2/authorize?client_id=534003592542027786&scope=bot&permissions=8",
        "author": {
        "name": "Do you wish to invite AkelliBot? Press the link below!"
        },
        "color": 3447003,
        "footer": {
        "text": "© Copyright Akelli Company",
        "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
         }
         }
      });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i','inv'],
    permLevel: 0
  };
  
exports.help = {
    name: 'invite',
    description: 'In case... , you know , you might wish to invite Akelli bot to your server this command is the way to do it.',
    usage: 'invite'
  };
const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!akelli ";

client.on('guildMemberAdd', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Please welcome ${member} to the server!`);
  });
  
  client.on('guildMemberRemove', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Please say goodbye to ${member} we will miss you!`);
  });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('I am online !');
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity(`!akelli help | ${client.guilds.size} Servers`, { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : `!akelli help | ${client.guilds.size} Servers`}`))
    .catch(console.error);
  });

client.on('message', async msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    var argresult = args.join(' ');
    
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if(msg.author.bot) return;

  if(msg.content.indexOf(prefix) !== 0) return;

  if (msg.content.startsWith(prefix + 'ping')) {
    const m = await msg.channel.send("Ping ?");
    m.edit(`Pong! Latency is **${m.createdTimestamp - msg.createdTimestamp}**ms. API Latency is **${Math.round(client.ping)}**ms`);
  }

 if (msg.content.startsWith(prefix + 'help')) {
    msg.channel.send({embed:{
  "title": "My commands:",
      "description": "**-----------------------------**\n**»** `Server Owner (Level 3)`\nHas access to all of the commands.\n**»** `Server Administrator (Level 2)`\n ban, unban, kick.\n**»** `Server Moderator (Level 1)`\n mute, unmute, warn.\n» `Server Member (Level 0)`\n help, ping, avatar, play, search, stop.\n**-----------------------------**\n\nExpect more commands to be added soon upon future developement !",
      "color": 6402937,
      "footer": {
        "text": "©️ Copyright Akelli Company 2019"
      },
      "author": {
        "name": "Akelli",
        "url": "https://thebestgameryt.github.io/AkelliBot/",
        "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
      }
}
    });
}
    if (msg.content.startsWith(prefix + 'myavatar')){
    msg.member.send(msg.author.avatarURL);
    msg.reply(', I will send you a private message!👍');
  }
  if (msg.content.startsWith(prefix + 'avatar')){
    let member = msg.mentions.members.first();
    msg.member.send(member.user.displayAvatarURL);
    msg.reply(', I will send you a private message!👍');
  }
  if (msg.content.startsWith(prefix + 'social')){
  msg.channel.send({embed:{
    "plainText": "**My Social Media:**",
    "title": "AkelliBot\'s Social Media accounts",
    "description": "•Instagram \https://www.instagram.com/akellicompany/",
    "color": 53380,
    "footer": {
      "text": "©️ Copyright Akelli Company 2019"
    },
    "fields": [
        
        {
        "name": "•Instagram",
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
}
    
});

client.login(process.env.BOT_TOKEN);

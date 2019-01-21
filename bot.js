const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!akelli ";

client.on('guildMemberAdd', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Please welcome ${member.user.tag} to the server!`);
  });
  
  client.on('guildMemberRemove', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Please say goodbye to ${member.user.tag} we will miss you!`);
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
  "title": "My Commands:",
      "description": "**-----------------------------**\n**»** `Server Owner (Level 3)`\nHas access to all of the commands.\n**»** `Server Administrator (Level 2)`\n ban, unban, kick.\n**»** `Server Moderator (Level 1)`\n mute, unmute, warn.\n» `Server Member (Level 0)`\n help, ping, avatar, play, search, stop.\n**-----------------------------**\n\nExpect more commands to be added soon upon future developement !",
      "color": 6402937,
      "timestamp": "2019-01-15T18:23:37.774Z",
      "footer": {
        "text": "©️ Copyright Akelli Company 2019"
      },
      "author": {
        "name": "Akelli",
        "url": "https://thebestgameryt.github.io/AkelliBot/",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
      }
}
    });
}
    
});

client.login(process.env.BOT_TOKEN);

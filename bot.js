// This two lines are constants the stuff that you need in order for bot to run should be all declared on the begging of the code
const Discord = require('discord.js'); //This one tells you that constant with the name Discord in order to work requires discord.js library
const client = new Discord.Client();   //This one here tells you that constant with the name client in order to work requires a new Discord client which basicly means that it creates a new client/bot/user

// BOT PREFIX : EX: a!help , b!help , !akelli
var prefix = "!akelli ";

// GREET COMMANDS
client.on('guildMemberAdd', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Everyone, welcome ${member} to the server!`);
  });

  client.on('guildMemberRemove', member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`${member} has left the server!`);
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
    
 // EXAMPLE COMMAND    
 // if (msg.content === 'example') { // the { here signs the start of the scope(of the if sentence)
//    msg.reply('This is an example command!');
//  } // the } here signs the end of the scope(if sentence)   
    
  if(msg.author.bot) return; //This here means that if message was sent from the other bots expect Akelli, our bot(Akelli) won't sent anything in the chat(thats whay return is there e.g return, returns you to somewhere or something) this prevents bot-ception(when multiple bots were to use same prefix)

  if(msg.content.indexOf(prefix) !== 0) return;
    
// PING COMMAND - MISC CMDS
  if (msg.content.startsWith(prefix + 'ping')) {
    const m = await msg.channel.send("Ping ?");
    m.edit(`Pong! Latency is **${m.createdTimestamp - msg.createdTimestamp}**ms. API Latency is **${Math.round(client.ping)}**ms`);
  }
// BOT HELP COMMAND - MISC CMDS
 if (msg.content.startsWith(prefix + 'help')) {
    msg.channel.send({embed:{
  "title": "My commands:",
      "description": "**-----------------------------**\n**»** `Server Owner (Level 3)`\nHas access to all of the commands.\n**»** `Server Administrator (Level 2)`\n ban, unban, kick.\n**»** `Server Moderator (Level 1)`\n mute, unmute, warn.\n» `Server Member (Level 0)`\n help, ping, avatar, play, search, stop.\n**-----------------------------**\n\nExpect more commands to be added soon upon future development !",
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
// USER COMMANDS: AVATAR ETC. - MISC CMDS
    if (msg.content.startsWith(prefix + 'myavatar')){
    msg.member.send(msg.author.avatarURL);
    msg.reply('I shall send you your profile picture!👍');
  }

    if (msg.content.startsWith(prefix + 'avatar')){
    let member = msg.mentions.members.first();
    msg.member.send(member.user.displayAvatarURL);
    msg.reply('that user\'s profile picture shall be send to you! ✅');
  }
// BOT INFORMATION - MISC CMDS
  if (msg.content.startsWith(prefix + 'socialmedia')){
  msg.channel.send({embed:{
    "plainText": "**My Social Media:**",
    "title": "AkelliBot\'s Social Media accounts",
    "description": "",
    "color": 53380,
    "footer": {
      "text": "©️ Copyright Akelli Company 2019, @akellicompany"
    },
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
}
 // ADMIN & MODERATOR COMMANDS - AkelliCompany MANAGEMENT & STAFF ONLY
    if (msg.content.startsWith(prefix + 'setgame')) {
    if(!msg.member.roles.some(r=>["AC Management","Akelli BotMod"].includes(r.name)) )
    return msg.reply("you don't have sufficient access to execute this command! ⚠️ \nRequirement: Management Team or Staff Moderator");

    let result = args.slice(1).join(' ');
    
    client.user.setActivity(result);
    msg.reply("command accepted! ✅ \n⭕ Requested activity message set!👍");
  }
    
});

client.login(process.env.BOT_TOKEN);

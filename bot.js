//--------------{Copyright  ©️ Akelli Company 2019}---------------
/* This is a full code of Akelli Bot (The brains of the bot).
This code basicly gives the bot knowledge of what to do and how to act when you interact with him within a Discord server or PM.
Below here is an example of the code:
--------------------------------------------------------------------------------
client.on('message', async msg => {
   EXAMPLE COMMAND INSTRUCTION & MEANINGS:
      if (msg.content === 'example') { the { here signs the start of the scope (of the if sentence).
         msg.reply('This is an example command !'); This command basicly replys to an user when the user uses a prefix + example in server it looks like this (keep in mind = is the example prefix here):  example it would send a message in the same channel saying YourName#1000, this is an example command!
        } the } here signs the end of the scope(of the if sentence)
});

*/
//-------------------------------------------------------------------
// This lines are here, because they are constants. Constants are basicly the stuff that you need in order for bot to run, they should all be declared on the begging of the code.

const Discord = require('discord.js');
const client = new Discord.Client();
const superagent = require("superagent");

//CONST SphereAvatar = require("vue-sphere-avatar"); DON'T MIND IT PLS ALSO DON'T DELETE IT
const osu = require('os-utils');
const os = require('os');
const cpu = require('windows-cpu');
const platform = require('platform');
const prettyMs = require('pretty-ms');
const fs = require('fs');
const ms = require('ms');
const responseObject = {
    "ayy": "Ayy, lmao!",
    "wat": "Say what?",
    "lol": "What ?",
    "Whats your name ?": "My name is Alex !",
    "How old are you ?": "I am 9 year old raised by PewDiePie",
    "PewDiePie":":clap: Its Meme Review !",
    "Hmmm":"Don't overthink dude"
  };

// This line below basicly exports the warnings into the seperate file
//  let warns = JSON.stringify(fs.readFileSync("./warnings.json", "utf8"));

//------------------------|
// BOT PREFIX: EXAMPLE: ! , a!, $ , b$ , b! etc. |
var prefix = "=";  //-- This is the default prefix of the bot |
//------------------------|

//// SERVER GREETINGS SECTION, (FULLY EMBED) ////

// NEW USER JOINS THE SERVER (RESPONSE: DEFAULT CHANNEL)

client.on('guildMemberAdd', member => {
    let guild = member.guild;
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("Welcome")
    .setTitle(member)
    .setImage(member.user.avatarURL)
    .setTimestamp()
    guild.defaultChannel.send(embed);
});

 // USER LEAVES THE SERVER (RESPONSE: DEFAULT CHANNEL)
  client.on('guildMemberRemove', member => {
    let guild = member.guild;
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("Sad to say: Goodbye!")
    .setTitle(member.user.tag)
    .setImage(member.user.avatarURL)
    .setTimestamp()
    guild.defaultChannel.send(embed);
  });

//// CONSOLE REPLY & GAME ACTIVITY STATUS OF THE BOT: ////
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Success! I am online on DiscordApp.');
    console.log(`Bot has woken up! With ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`);
    client.user.setActivity(`=help | ${client.guilds.size} servers`, { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : `=help | ${client.guilds.size} servers`}`))
    .catch(console.error);
  });

//// SHORTCUT TEXTS IN THE JAVASCRIPT (CODE): ////

client.on('message', async msg => {
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);

  if(msg.author.bot) return;

  if(msg.content.indexOf(prefix) !== 0) return;
// |MISC COMMANDS|----------------------> [Current Cmds: Ping,Help,commands,myavatar,avatar,stats,server,credits,socialmedia,invite] <----------------------------|


//// BOT INTRODUCTION SECTION: HELP & COMMANDS CMD:

  // HELP CMD (EMBED)
  if (msg.content.startsWith(prefix + 'help')) {
    msg.channel.send({embed:{
      "title": "",
      "description": "Hi! I'm AkelliBot! \nI am developed by my Management Team and incredible Staff.\nI am very intelligent and I contain entertaining & information commands. \n\nFor a list of commands send **=commands** \n\nDo you wish to add Akelli in your server? \nSend **=invite** \n\nNeed support? Join our server!\nhttps://discord.gg/j39xBQa",
      "color": 3447003,
      "footer": {
      "text": "© Akelli Company, @akellicompany"

      },
      "author": {
      "name": "Akelli Help & Introduction",
      "url": "https://thebestgameryt.github.io/AkelliBot/",
      "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
      }
      }
      });
      }

   // COMMANDS CMD (EMBED)
   if (msg.content.startsWith(prefix + 'commands')) {
    msg.member.send({embed:
      {
      "title": "Default prefix: =",
      "description": "Need help? Join our Discord server.",
      "author": {
        "name": "AkelliBot Commands",
        "icon_url": "https://cdn.discordapp.com/avatars/534003592542027786/10199bbc68d2c69dea28e76772e175ba.png?size=2048"
      },
      "color": 553380,
      "footer": {
        "text": "© Copyright Akelli Company, @akellicompany"
      },
      "fields": [
        {
          "name": "» Information",
          "value": "=ping, =myavatar, =avatar, =stats, =serverinfo, =credits, =socialmedia, =invite",
          "inline": false
        },
        {
          "name": "» Entertainment",
          "value": "=poke, =hi, =weed, =haveibeenpwned, =dog, =cat, =meme, =boob, =slots, =8ball",
          "inline": false
        },
        {
          "name": "» Administration",
          "value": "=ban, =kick, =report, =poll, =purge, =mute, =warn, =setgame, =setprefix",
          "inline": false
        },
        {
          "name": "» Music",
          "value": "Currently available on Akelli Music bot. Join our Discord for more info!",
          "inline": false
        }
      ]
    }
  });
msg.reply('I\'ve sent you a PM! 🤳');
   }

     //// INFORMATION SECTION ////

     if (msg.content.startsWith(prefix + 'ping')) {
    //   const t = await msg.channel.send("Ping ?");  DON'T DELETE THIS
    //   t.edit(`Pong! Latency is **${t.createdTimestamp - msg.createdTimestamp}**ms. API Latency is **${Math.round(client.ping)}**ms`); DON'T DELETE THIS EITHER
    let msgping1 = new Date();
    let botping = new Date() - msg.createdAt;
    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('Discord API Ping: ', Math.floor(botping) + 'ms')
        .addField('Bot Ping: ', Math.floor(botping) + 'ms')
        .addField('Message Ping: ', '~' + Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`Requested by ${msg.author.tag}`);

   return msg.channel.send(pingembed);
   }

       // MYAVATAR CMD
       if (msg.content.startsWith(prefix + 'myavatar')){
        msg.member.send(msg.author.avatarURL);
        msg.reply('I will send you your profile picture!');
        }

       // AVATAR @USER CMD
       if (msg.content.startsWith(prefix + 'avatar')){
        let member = msg.mentions.members.first();
        msg.member.send(member.user.displayAvatarURL);
        msg.reply('user\'s profile picture sent to you!');
   }

      // STATS COMMAND
   if (msg.content.startsWith(prefix + 'stats')){
    let FooterHinami = [
        `${client.user.username} is here to support!`,
        `${client.user.username} brought some coffee!`,
        `${client.user.username} is providing any assistance when ready`,
        `${client.user.username} is stalking you`,
        `${client.user.username} is accepting your support..\nTreat ${client.user.username} well or she will haunt you.`
      ]
      try {
        cpu.cpuInfo().then(cpus => {        })
        let cpus = await cpu.cpuInfo();
        let datainfoEmbed = new Discord.RichEmbed(msg)
        .setAuthor(client.user.username, client.user.avatarURL)
        .setFooter(FooterHinami[Math.floor(Math.random() * FooterHinami.length)])
        .setColor(0x0000ff)
        .addField("Neural Network Terminal [NNL]", "Statics for the server as well as the server I am being run on!\n Yay for me to exist & to serve Coffee!", false)
        .addField("Total Memory", `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
        .addBlankField(true)
        .addField("CPU Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`, true)
        .addField("Current System CPU", `${cpus}`, true)
        .addBlankField(true)
        .addField(`Users Logged`, `${client.users.size}`, true)
        .addField(`Servers Logged`, `${client.guilds.size}`, true)
        .addField(`Channels Logged`, `${client.channels.size}`, true)
        .addField(`Current Operating System`, `${platform.os}`, true)
        .addField(`Hinami System Time`, `${prettyMs(osu.processUptime())}`, true)
        .addField(`Datacentre Server Time`, `${prettyMs(osu.sysUptime())}`, true)
        msg.channel.send(datainfoEmbed)

      } catch (err) {console.log("Error With Stats - Please see below\n"+err)}
}

    // SERVERINFO CMD (EMBED)
if (msg.content.startsWith(prefix + 'server')){
  let online = msg.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = msg.guild.createdAt.getDate()
  let month = 1 + msg.guild.createdAt.getMonth()
  let year = msg.guild.createdAt.getFullYear()
   let sicon = msg.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(msg.guild.name, sicon)
   .setFooter(`Server Created • ${day}.${month}.${year}`)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("ID", msg.guild.id, true)
   .addField("Name", msg.guild.name, true)
   .addField("Owner", msg.guild.owner.user.tag, true)
   .addField("Region", msg.guild.region, true)
   .addField("Channels", msg.guild.channels.size, true)
   .addField("Members", msg.guild.memberCount, true)
   .addField("Humans", msg.guild.memberCount - msg.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", msg.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Roles", msg.guild.roles.size, true);
   msg.channel.send(serverembed);
}

 // CREDITS CMD (EMBED)
if (msg.content.startsWith(prefix + 'credits')){

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

            msg.channel.send({embed: embed});
  }

// SOCIAL MEDIA CMD
  if (msg.content.startsWith(prefix + 'socialmedia')){
    msg.channel.send({embed:{
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
    }

// BOT INVITATION CMD:
if (msg.content.startsWith(prefix + 'invite')){
  msg.channel.send({embed:{
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
   }

       //// ENTERTAINMENT COMMANDS: ////

// POKE CMD
if (msg.content.startsWith(prefix + 'poke')){
let member = msg.mentions.members.first();
msg.channel.send(`${member} has been poked by ${msg.author}`);
}

// HI CMD
if (msg.content.startsWith(prefix + 'hi')){
msg.channel.send('Hi there! How are you? 👋');
}

// HAND WAVE CMD
if (msg.content.startsWith(prefix + 'wave')){
let member = msg.mentions.members.first();
msg.channel.send(`${member} , ${msg.author} decided to wave at you 👋`);
}

// WEED CMD
if (msg.content.startsWith(prefix + 'weed')){
  return msg.channel.send("**Smoking!**").then(async msg => {
    setTimeout(() => {
        msg.edit('🚬');
    }, 500);
    setTimeout(() => {
        msg.edit('🚬 ☁ ');
    }, 700);
    setTimeout(() => {
        msg.edit('🚬 ☁☁ ');
    }, 900);
    setTimeout(() => {
        msg.edit('🚬 ☁☁☁ ');
    }, 1000);
    setTimeout(() => {
        msg.edit('🚬 ☁☁☁');
    }, 1100);
    setTimeout(() => {
        msg.edit('🚬 ☁☁');
    }, 1200);
    setTimeout(() => {
        msg.edit('🚬 ☁');
    }, 1300);
    setTimeout(() => {
        msg.edit(`**Finished smoking!**`);
    }, 1500);
    setTimeout(() => {
        msg.delete(`**Finished Smoking!**`);
    }, 6000);
  });
}

// HAVEIBEENPWNED CMD
if (msg.content.startsWith(prefix + 'haveibeenpwned')){
  await msg.delete(300);
  let {
      body
  } = await superagent
      .get(`https://haveibeenpwned.com/api/v2/breachedaccount/${args[0]}`)
      .catch(err => {
          msg.channel.send(`Phew.. no results found for \`\`${args[0]}\`\``)
      });

  let out = `Oh NO! breaches found for: ${args[0]}`;
  let po = 0;
  const format = body.forEach(i => {
      po++;
      out += `\n${po}.   ${i.Name}   breached on:   ${i.BreachDate}`
  })
  msg.author.send(out);
}

// DOG CMD
if (msg.content.startsWith(prefix +'dog')){
  let {
    body
} = await superagent
    .get(`https://random.dog/woof.json`);
const dogembed = new Discord.RichEmbed()
    .setTitle("Aww... Doggie!")
    .setColor("RANDOM")
    .setImage(body.url)
msg.channel.send(dogembed);
}

// CAT CMD
if (msg.content.startsWith(prefix + 'cat')){
  let {
    body
} = await superagent
    .get(`http://aws.random.cat/meow`);
const catembed = new Discord.RichEmbed()
    .setTitle('Aww... Kitty!')
    .setColor("RANDOM")
    .setImage(body.file)
msg.channel.send(catembed);
}

// MEME CMD
if (msg.content.startsWith(prefix + 'meme')){
    let {
        body
    } = await superagent
        .get(`https://api-to.get-a.life/meme`);
    const memembed = new Discord.RichEmbed()
        .setTitle("Life is a meme !")
        .setColor("RANDOM")
        .setImage(body.url)
    msg.channel.send(memembed);
}

// BOOB CMD (FAKE NSFW)
if (msg.content.startsWith(prefix + 'boob')){
  let {
    body
} = await superagent
    .get(`http://api.oboobs.ru/boobs/0/1/random`);
const boobembed = new Discord.RichEmbed()
    .setTitle("Look at those mellon boobies! SIKE! You're naughty.")
    .setColor("RANDOM")
    .setImage(body.url)
msg.channel.send(boobembed);
}

// SLOT MACHINE CMD
if (msg.content.startsWith(prefix + 'slots')){
  if (!msg.guild.member(client.user).hasPermission("SEND_MESSAGES")) return msg.author.send('I don\'t have permission to Send Messages. Please enable send messages for my role!');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = msg.author.displayName;
    let aicon = msg.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        msg.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        msg.channel.send(embed);
    }
}

// 8BALL CMD
if (msg.content.startsWith(prefix + '8ball')){
  if (!args[2]) return msg.reply("please ask a full question!");
  let replies = ["Why ask me that? :laughing:","Yes, Certainly :8ball:", "No, Never :8ball:", "Please ask again :8ball:"]
  let result = Math.floor((Math.random() * replies.length));

  let question = args.slice().join(" ");

  let embedz = new Discord.RichEmbed()
      .setAuthor(msg.author.username + " asks: " + question)
      .setColor("#D3D3D3")
      .addField("Answer", "Asked by " + msg.author.tag + "\nAnswer: " + replies[result] + "")

  msg.channel.send(embedz)
}

// A.I Custom made smart bots intelligence

if (responseObject[msg.content]){
  msg.channel.send(responseObject[msg.content]);
}

//// ADMINISTRATION COMMANDS SECTION [Current Cmds: Ban,Kick,Report,Poll,Purge,Mute,Warn,Setgame,SetPrefix] <----------------------------|

// BAN @USER <REASON> COMMAND:
if (msg.content.startsWith(prefix + 'ban')) {
  const banlog = msg.guild.channels.find(channel => channel.name === 'mod-logs');
  const mod = msg.author;
  if(!msg.member.roles.some(r=>["AC Management","Akelli Staff"].includes(r.name)) )
  return msg.reply("you don\'t have permission to use that!");
  let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!user)
  return msg.reply("please mention a valid member of this server.");
if(!user.bannable)
  return msg.reply("unable to ban.\nIs this user a higher/the highest member?\nMake sure I have enough privileges.");

let reason = args.slice(1).join(' ');
if(!reason) reason = "No reason provided by executer.";

await user.ban(reason)
  .catch(error => msg.reply(`Sorry ${mod} I couldn't ban because of : ${error}`));
  const banembed = new Discord.RichEmbed()
            .setAuthor(' Action | Ban', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('User', `<@${user.id}>`)
            .addField('Reason', `${reason}`)
            .addField('Moderator', `${mod}`)
            .setColor('#D9D900')
        banlog.send(banembed)
}

// KICK @USER <REASON> COMMAND:
if (msg.content.startsWith(prefix + 'kick')){
  const kicklog = msg.guild.channels.find(channel => channel.name === 'mod-logs');
  const mod = msg.author;
if(!msg.member.roles.some(r=>["AC Management","Akelli Staff"].includes(r.name)) )
  return msg.reply("you don\'t have permission to use that!");
  let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
      if(!user)
        return msg.reply("please mention a valid member of this server");
      if(!user.kickable)
        return msg.reply("unable to kick.\nIs this user a higher/the highest member?\nMake sure I have enough privileges.");
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "No reason provided by executer.";
      await user.kick(reason)
        .catch(error => msg.reply(`Sorry ${msg.author} I couldn't kick because of : ${error}`));
        const kickembed = new Discord.RichEmbed()
        .setAuthor(' Action | Ban', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
        .addField('User', `<@${user.id}>`)
        .addField('Reason', `${reason}`)
        .addField('Moderator', `${mod}`)
        .setColor('#D9D900')
    kicklog.send(kickembed)
}

// REPORT @USER <REASON> COMMAND:
if(msg.content.startsWith(prefix + 'report')){
  if(!msg.member.roles.some(r=>["AC Management","Akelli Staff"].includes(r.name)) )
  return msg.reply("you don't have sufficient access to execute this command! \n Requirement: Management Team or Staff Member.");

    var logs = msg.guild.channels.find('name', 'mod-logs');
    let member = msg.mentions.members.first() || msg.guild.members.get(args[0]);
    if (!member)
        return msg.reply("please mention a valid member of this server.");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason provided by executer.";
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(msg.author.avatarURL)
        .setTitle('Report')
        .addField('Reported by:', msg.author)
        .addField('\n\n Who was reported:', member.user)
        .addField('\n\n Reason:', reason)
        .setFooter(`Submitted by ${msg.author.username}.`)
        .setTimestamp()
    msg.channel.send(embed);
}

// POLL COMMAND:
if (msg.content.startsWith(prefix + 'poll')){
  if(!msg.member.roles.some(r=>["AC Management","Akelli Staff"].includes(r.name)) )
  return msg.reply("you don't have sufficient access to execute this command! \n Requirement: Management Team or Staff Member");

    if (!msg.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
		msg.channel.send('Invalid permissions.');
		return;
	}

    // (CHECK FOR INPUT)
    if (!args[0]) return msg.channel.send('Proper usage: a.poll <question>');

    // (CREATE EMBED)
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('React to Vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll Created By ${msg.author.username}`);

    let msgSent = await msg.channel.send(embed)
        .then(function (msgSent) {
            msgSent.react("❎");
            msgSent.react("✅"); // You can only add two reacts
            msg.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
}

// PURGE <AMMOUNT> COMMAND:
if (msg.content.startsWith(prefix + 'purge')){
    if (!msg.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return msg.channel.send(':no_entry `I do not have the correct permissions.`').catch(console.error);
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send(":no_entry: `Sorry, but you do not have valid permissions! If you beleive this is a error, contact an owner.`");
    if (isNaN(args[1])) return msg.channel.send(':warning: `Please supply a valid amount of messages to purge`');
    if (args[1] > 100) return msg.channel.send(':warning: `Please supply a number less than 100`');
            msg.channel.bulkDelete(args[1]);
            var cleanEmbed = new Discord.RichEmbed()
            .setAuthor('Akelli Channel Cleaning')
            .setDescription(`Cleaned **${args[1]}** messages :white_check_mark:`)
            .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
            .setColor('#ffffff');
            msg.channel.send(cleanEmbed);
}

// MUTE @USER COMMAND:
if (msg.content.startsWith(prefix + 'mute')){
    if (!msg.member.hasPermissions ('MUTE_MEMBERS')) return msg.channel.send("You need **MUTE MEMBERS** permissions in order to use this command.")
    const modlog = msg.guild.channels.find(channel => channel.name === 'mod-logs');
    const mod = msg.author;
    let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
    if (!user) return msg.channel.send("Couldn't find user.")
    let reason = msg.content.split(" ").slice(2).join(" ");
    if (!reason) return msg.channel.send('lease specify a reason for the mute!')
    let muterole = msg.guild.roles.find(`name`, "Muted");
    if(args[0] == "help"){
      msg.reply("Usage: k!mute <user> <reason>");
      return;
    }
  let muteChannel = msg.guild.channels.find(`name`, "mod-logs");
  if (!muteChannel) return msg.channel.send('**Please create a channel with the name `mod-logs`**')
  if (!muterole) {
        try {
            muterole = await msg.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('User', `<@${user.id}>`)
            .addField('Reason', `${reason}`)
            .addField('Lasting For', `${mutetime}`)
            .addField('Moderator', `${mod}`)
            .setColor('#D9D900')
        modlog.send(muteembed)


}

// WARN @USER <REASON> COMMAND
if (msg.content.startsWith(prefix + 'warn')){

if (!msg.member.hasPermission("KICK_MEMBERS")) return msg.reply("No can do pal!");
let wUser = msg.guild.member(msg.mentions.users.first()) || msg.guild.members.get(args[0])
if (!wUser) return message.reply("Couldn't find them yo");
//if (wUser.hasPermission("MANAGE_ROLES")) return msg.reply("They waaaay too kewl");
let reason = args.join(" ").slice(12);

let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(msg.author.username)
    .setColor("#fc6400")
    .addField("Warned User", `<@${wUser.id}>`)
    .addField("Warned In", msg.channel)
//  .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason);

let warnchannel = msg.guild.channels.find(`name`, "mod-logs");
if (!warnchannel) return msg.reply("Couldn't find channel. Make sure you create the mod-logs channel!");

warnchannel.send(warnEmbed);

}

// SET GAME ACTIVITY STATUS OF THE BOT MANUALLY (WITHOUT ENTERING SCRIPT/CODE)
// SETGAME <TEXT>
if (msg.content.startsWith(prefix + 'setgame')) {
  if(!msg.member.roles.some(r=>["AC Management","Akelli Staff"].includes(r.name)) )
  return msg.reply("you don't have sufficient access to execute this command! \n Requirement: Management Team or Staff Member");

  let result = args.slice(1).join(' ');

  client.user.setActivity(result);
  msg.reply("command accepted! \nNew game activity message set!");
  }

// PREFIX <PREFIX> COMMAND
if (msg.content.startsWith(prefix + 'setprefix')){
  if(!msg.member.roles.some(r=>["AC Management","Akelli Staff"].includes(r.name)) )
  return msg.reply("you don't have sufficient access to execute this command! \n Requirement: Management Team or Staff Member");

  let result = args.slice(1).join(' ');

  client.user.setPrefix(result);
  msg.reply("command accepted! \nNew Prefix has been set!");
}

});

client.login(process.env.BOT_TOKEN);

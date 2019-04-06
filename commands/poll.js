const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    
let pollContent = args.slice().join(" ");

if (!message.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
    message.channel.send('Invalid permissions.');
    return;
}

// (CHECK FOR INPUT)
if (!args[0]) return message.channel.send('Proper usage: poll <question>');

// (CREATE EMBED)
const embed = new Discord.RichEmbed()
    .setColor("#ffffff") //To change color do .setcolor("#fffff")
    .setFooter('React to Vote.')
    .setDescription(pollContent)
    .setTitle(`Poll Created By ${message.author.username}`);

let msgSent = await message.channel.send(embed)
    .then(function (msgSent) {
        msgSent.react("✅");
        msgSent.react("❎"); // You can only add two reacts
        message.delete({timeout: 1000});
        }).catch(function(error) {
        console.log(error);
});

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['POLL'],
    permLevel: 2
  };
  
  exports.help = {
    name: 'poll',
    description: 'Make a fully custom embed poll for people to vote on it which makes your desicions easier.',
    usage: 'poll [content]'
  };
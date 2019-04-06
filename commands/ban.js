const Discord = require('discord.js');
exports.run = async function(client, message, args) {
    const banlog = message.guild.channels.find(channel => channel.name === 'mod-logs');
    const mod = message.author;
    let reason = args.join(" ").slice(22);
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!user)
    return message.reply("please mention a valid member of this server.");
  if(!user.bannable)
    return message.reply("unable to ban.\nIs this user a higher/the highest member?\nMake sure I have enough privileges.");
  
  if(!reason) reason = "No reason provided by executer.";
  
  await user.ban(reason)
    .catch(error => message.reply(`Sorry ${mod} I couldn't ban because of : ${error}`));
    const banembed = new Discord.RichEmbed()
              .setAuthor(' Action | Ban', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
              .addField('User', `<@${user.id}>`)
              .addField("Reason", reason)
              .addField('Moderator', `${mod}`)
              .setColor('#D9D900')
  banlog.send(banembed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bann'],
    permLevel: 3
  };
  
exports.help = {
    name: 'ban',
    description: 'This command bans a mentioned user.',
    usage: 'ban'
  };
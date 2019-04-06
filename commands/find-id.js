exports.run = function(client, message, args) {
if (message.channel.type === "dm") return;
let member = message.guild.member(message.mentions.users.first() || message.guild.get(args[0]));

message.channel.send(`**${member} **` + "His ID is: " + `__${member.id}__`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['id-finder', 'id-find'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'find-id',
    description: 'With this command you can find out ids of other peoples ',
    usage: 'find-id [mention someone here]'
  };
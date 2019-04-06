exports.run = function(client, message, args) {
if (message.channel.type === "dm") return;   
message.channel.send(`**${message.author.username} **` + "Your ID is: " + `__${message.author.id}__`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['id', 'userid'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'id',
    description: 'With this command you can find out only your id',
    usage: 'id'
  };
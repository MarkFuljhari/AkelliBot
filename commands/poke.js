exports.run = async (client, message, args) => {
let user = message.mentions.users.first()
message.channel.send(`${user} has been poked by ${message.author}`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pke','POKE'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'poke',
    description: 'You can poke member plus mention it twice, ha ! ...you get two things for price of one xD . ',
    usage: 'poke [Member to poke]'
  };
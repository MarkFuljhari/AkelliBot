exports.run = async (client, message, args) => {
message.channel.send('Hi there! How are you? 👋');
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hei','HI','Hello'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hi',
    description: 'Akelli says hi to you and wishes you an enjoyable user expirience',
    usage: 'hi'
  };
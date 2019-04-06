exports.run = function(client, message, args) {
message.member.send(message.author.avatarURL);
message.reply('I will send you your profile picture!');
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mineavatar','myicon'],
    permLevel: 0
  };
  
exports.help = {
    name: 'myavatar',
    description: 'With this command you can get full sized avatar from your Discord user only. ',
    usage: 'myavatar'
  };
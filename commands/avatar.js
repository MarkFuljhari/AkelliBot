exports.run = function(client, message, args) {
    let member = message.mentions.members.first();
    message.member.send(member.user.displayAvatarURL);
    message.reply('user\'s profile picture sent to you!');
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['icon','ico'],
    permLevel: 0
  };
  
exports.help = {
    name: 'avatar',
    description: 'With this command you can get full sized avatar from any Discord user you like. ',
    usage: 'avatar [mention Discord user to get his avatar]'
  };
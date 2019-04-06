exports.run = async (client, message, args) => {

let result = args.slice(1).join(' ');

client.user.setActivity(result);
message.reply("command accepted! \nNew game activity message set!");

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['setgame','SETGAME'],
    permLevel: 3
  };
  
  exports.help = {
    name: 'setGame',
    description: 'Change a game sign that bot currently has to the one that you want him to have.',
    usage: 'setGame [a new game to be set]'
  };
const Discord = require ("discord.js");
const superagent = require ("superagent");

exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send('You can use this commands in NSFW Channel only!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hentai-girls','animes'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hentai',
    description: 'With this command you can get some hentai nudes in NSFW channels only offcourse ',
    usage: 'hentai'
  };
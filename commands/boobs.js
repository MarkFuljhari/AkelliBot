const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = function(client, message, args) {
if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");

    var subreddits = [
        'boobs',
        'BigBoobsGW',
        'fortyfivefiftyfive'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor("Here are your mellons...", client.user.avatarURL)
                .setImage(url);
            message.channel.send({
                embed
            });
        });
    };
    exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: ['boobies','boob'],
            permLevel: 0
          };
          
    exports.help = {
            name: 'boobs',
            description: 'With this command you can get some nude boobs in NSFW channels only offcourse ',
            usage: 'boobs'
          };
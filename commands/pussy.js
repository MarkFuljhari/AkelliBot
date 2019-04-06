const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = function(client, message, args) {
if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");

    var subreddits = [
        'pussy',
        'GodPussy',
        'rearpussy'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor("Here are your pussies...", client.user.avatarURL)
                .setImage(url);
            message.channel.send({
                embed
            });
        });
    };
    exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: ['bush'],
            permLevel: 0
          };
          
    exports.help = {
            name: 'pussy',
            description: 'With this command you can get some nude pussy pics in NSFW channels only offcourse ',
            usage: 'pussy'
          };
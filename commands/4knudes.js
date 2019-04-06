const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = function(client, message, args) {
if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor("4k", client.user.avatarURL)
                .setFooter("xD")
                .setImage(url);
            message.channel.send({
                embed
            });
        });
    };
    exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: ['4k','nudess'],
            permLevel: 0
          };
          
    exports.help = {
            name: '4knudes',
            description: 'With this command you can get some nudes in 4K only in NSFW channels only offcourse ',
            usage: '4knudes'
          };
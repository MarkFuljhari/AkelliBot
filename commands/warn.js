//exports.run = function(client, message, args) {};

const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

exports.run = async (bot, message, args) => {

    //!warn @mentionUser <reason>
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!wUser) return message.reply("Couldn't find them yo");
    let reason  = args.join(" ").slice(22);

    if (!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });

    let warnEmbed = new Discord.RichEmbed()
        .setDescription("Warns")
        .setAuthor(message.author.username)
        .setColor("#fc6400")
        .addField("Warned User", `<@${wUser.id}>`)
        .addField("Warned In", message.channel)
        .addField("Number of Warnings", warns[wUser.id].warns)
        .addField("Reason", reason);

    let warnchannel = message.guild.channels.find(`name`, "mod-logs");
    if (!warnchannel) return message.reply("Couldn't find channel");

    warnchannel.send(warnEmbed);

    if (warns[wUser.id].warns == 2) {
        let muterole = message.guild.roles.find(`name`, "Muted");
        if (!muterole) return message.reply("You should create that role dude.");

        let mutetime = "10s";
        await (wUser.addRole(muterole.id));
        message.channel.send(`<@${wUser.id}> has been temporarily muted`);

        setTimeout(function() {
            wUser.removeRole(muterole.id)
            message.reply(`<@${wUser.id}> has been unmuted.`)
        }, ms(mutetime))
    }
    if (warns[wUser.id].warns == 3) {
        message.guild.member(wUser).ban(reason);
        message.reply(`<@${wUser.id}> has been banned.`)
    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i','inv'],
    permLevel: 2
  };
  
exports.help = {
    name: 'warn',
    description: 'This command warns a mentioned user.',
    usage: 'warn'
  };
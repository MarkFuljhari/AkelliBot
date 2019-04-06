const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (!args[2]) return msg.reply("please ask a full question!");
  let replies = ["Why ask me that? :laughing:","Yes, Certainly :8ball:", "No, Never :8ball:", "Please ask again :8ball:"]
  let result = Math.floor((Math.random() * replies.length));

  let question = args.slice().join(" ");

  let embedz = new Discord.RichEmbed()
      .setAuthor(message.author.username + " asks: " + question)
      .setColor("#D3D3D3")
      .addField("Answer", "Asked by " + message.author.tag + "\nAnswer: " + replies[result] + "")

  message.channel.send(embedz)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['8BALL','8bal'],
    permLevel: 0
  };
  
  exports.help = {
    name: '8ball',
    description: 'Ask 8ball anything and she will tell you true answer.',
    usage: '8ball [the question]'
  };
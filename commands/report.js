const Discord = require('discord.js');
exports.run = function(client, message, args) {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("I couldn't find user that was specified.");
        let reason  = args.join(" ").slice(22);
   
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Report")
        .setColor("#15f153")
        .addField("Reported User:", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported by:", `${message.author} with ID: ${message.author.id}`)
        .addField("In Channel:", message.channel)
        .addField("Time:", message.createdAt)
        .addField("Reason:", reason);
        
        let reportsChannel = message.guild.channels.find(`name`, "reports");
        if(!reportsChannel) return message.channel.send("I couldn't find a reports channel.");
   
        message.delete().catch(O_o=>{});
   
        reportsChannel.send(reportEmbed);
        return;
};

exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['report'],
        permLevel: 0
      };
      
      exports.help = {
        name: 'report',
        description: 'With this command you can find out ids of other peoples ',
        usage: 'report [mention user to report] [reason]'
      };
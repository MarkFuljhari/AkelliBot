const osu = require('os-utils');
const os = require('os');
const cpu = require('windows-cpu');
const platform = require('platform');
const prettyMs = require('pretty-ms');
const Discord = require("discord.js");
exports.run = async function(client, message) {
 let FooterHinami = [
    `${client.user.username} is here to support!`,
    `${client.user.username} brought some coffee!`,
    `${client.user.username} is providing any assistance when ready`,
    `${client.user.username} is stalking you`,
    `${client.user.username} is accepting your support..\nTreat ${client.user.username} well or she will haunt you.`
  ]
  try {
    cpu.cpuInfo().then(cpus => {        })
    let cpus = await cpu.cpuInfo();
    let datainfoEmbed = new Discord.RichEmbed(message)
    .setAuthor(client.user.username, client.user.avatarURL)
    .setFooter(FooterHinami[Math.floor(Math.random() * FooterHinami.length)])
    .setColor(0x0000ff)
    .addField("Neural Network Terminal [NNL]", "Statics for the server as well as the server I am being run on!\n Yay for me to exist & to serve Coffee!", false)
    .addField("Total Memory", `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
    .addBlankField(true)
    .addField("CPU Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`, true)
    .addField("Current System CPU", `${cpus}`, true)
    .addBlankField(true)
    .addField(`Users Logged`, `${client.users.size}`, true)
    .addField(`Servers Logged`, `${client.guilds.size}`, true)
    .addField(`Channels Logged`, `${client.channels.size}`, true)
    .addField(`Current Operating System`, `${platform.os}`, true)
    .addField(`Hinami System Time`, `${prettyMs(osu.processUptime())}`, true)
    .addField(`Datacentre Server Time`, `${prettyMs(osu.sysUptime())}`, true)
    message.channel.send(datainfoEmbed)

 } catch (err) {console.log("Error With Stats - Please see below\n"+err)}

};

 exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['statistics','STATS'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'stats',
    description: 'Some statistic data for you on display. ',
    usage: 'stats'
  };
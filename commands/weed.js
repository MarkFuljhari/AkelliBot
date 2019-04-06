exports.run = async (client, message, args) => {
message.channel.send("**Smoking!**").then(async message => {
    setTimeout(() => {
        message.edit('🚬');
    }, 500);
    setTimeout(() => {
        message.edit('🚬 ☁ ');
    }, 700);
    setTimeout(() => {
        message.edit('🚬 ☁☁ ');
    }, 900);
    setTimeout(() => {
        message.edit('🚬 ☁☁☁ ');
    }, 1000);
    setTimeout(() => {
        message.edit('🚬 ☁☁☁');
    }, 1100);
    setTimeout(() => {
        message.edit('🚬 ☁☁');
    }, 1200);
    setTimeout(() => {
        message.edit('🚬 ☁');
    }, 1300);
    setTimeout(() => {
        message.edit(`**Finished smoking!**`);
    }, 1500);
    setTimeout(() => {
        message.delete(`**Finished Smoking!**`);
    }, 6000);
});

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['smoke','WEED'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'weed',
    description: 'Hi, there let me give you a cigratte so you can smoke it !',
    usage: 'weed'
  };
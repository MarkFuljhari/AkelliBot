const chalk = require('chalk');
module.exports = client => {
	console.log(chalk.bgGreen.black('I\'m Online\nI\'m Online'));
	console.log(`Logged in as ${client.user.tag}!`);
    console.log('Success! I am online on DiscordApp.');
    console.log(`Bot has woken up! With ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`);
    client.user.setActivity(`=help | ${client.guilds.size} servers`, { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : `=help | ${client.guilds.size} servers`}`))
.catch(console.error);
}
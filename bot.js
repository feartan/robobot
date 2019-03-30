var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // !n-word
           case 'n-word':
                bot.sendMessage({ to: channelID, message: 'You are under arrest! I am on the way.' });
                break;
            // !report
           case 'report':
                bot.sendMessage({ to: channelID, message: 'There is no crime on the server except a few dumbasses playing Roblox.' });
                break;
           // !time
           case 'time':
                bot.sendMessage({ to: channelID, message: 'It is time to shut your mouth up.' });
                break;
             // !hello
           case 'hello':
                bot.sendMessage({ to: channelID, message: 'I am not programmed for this.' });
                break;
           case 'Bořek':
                bot.sendMessage({ to: channelID, message: 'https://www.youtube.com/watch?v=FdRklzmfzRM'});
                break;
           case 'commands':
                bot.sendMessage({ to: channelID, message: ' n-word \n report \n time \n hello \n Bořek \n'});
                break;
           case 'pokemon':
                bot.sendMessage({ to: channelID, message: 'Here is a list of all Pokémons: http://pokemon.cz/pokedex/'})
                break;
           case 'default':
                bot.sendMessage({ to: channelID, message: 'I dont understand your shitty language'});
                break;
         }
     }
});

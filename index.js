//PLUGINS
const commando = require('discord.js-commando');
const Discord = require('discord.js');
const prefix = "!";
const bot = new commando.Client({
    commandPrefix: prefix
});
const Music = require('discord.js-musicbot-addon');
//PLUGINS

//BOT TOKEN
bot.login();
//BOT TOKEN

//GETS THE BOT ONLINE
bot.on('ready',function(){
    console.log(`Bot is now online!, watching ${bot.users.size} users, in the ABCIS discord server.`);
    bot.user.setActivity(`!help | Slender Man`, { type: 'PLAYING' });
});

//GETS THE BOT ONLINE

//REGISTIES
bot.registry.registerGroup('admin', 'ADMIN');
bot.registry.registerGroup('games', 'GAMES');
bot.registry.registerGroup('fun', 'FUN');
bot.registry.registerGroup('essential', 'ESSENTIAL');
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();
//REGISTIES

//ANTI-SWEAR GUARDIAN
bot.on('message', async message => {
    //blacklisted words
    let blacklisted = ["asshole", "fuck", "nigger", "faggot", "retard", " ass ", "whore", "slut", "pussy", "nigga", "shit", "cunt", "whore", "dick", "vagina", "Bitch"]; //words put , after the word
  
    //2 looking for words
    let foundInText = false;
    for (var i in blacklisted) { // loops through the blacklisted list
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
  
    //3 deletes and send message
      if (foundInText) {
        message.delete();
        message.channel.send(`Slender man has caught ${message.author} cussing and has been kidnapped.`);
        bot.channels.get('508462044584869907').send({embed: new Discord.RichEmbed()
            .setTitle("**Slender [] Chat Filter**")
            .setColor("#BFB4FF")
            .addField("Message author", message.author.tag)
            .addField("Text sent", message.content)
            .setTimestamp()
            .setFooter("Slender Bot [] hieu#0843")})
    }
});
//ANTI-SWEAR GUARDIAN

//WELCOME MESSAGE
bot.on('guildMemberAdd', (member) => {
  const welcomechannel = member.guild.channels.find('name', `👋-welcome`);
  welcomechannel.send({embed: new Discord.RichEmbed()
      .setColor("#BFB4FF")
      .setTitle("**New Member**")
      .setDescription(`:busts_in_silhouette:|**Greetings,** ${member}. Welcome to the **Alpha Network**.`)});
})
//WELCOME MESSAGE

//YT STUFF
global.servers = {};
//YT STUFF


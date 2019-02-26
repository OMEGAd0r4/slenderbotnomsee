const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
  commandPrefix: prefix
});

class warnCommand extends commando.Command{
  constructor(client) 
  {
    super(client, {
      name: 'warn', 
      group: 'admin',
      memberName: 'warn',
      description: "Warns a user"
    });
  }
  async run (message, args)
  {

        message.delete(3000).catch(O_o=>{});

        var warnargs = message.content.slice(prefix.length).split(/ + /); 

        var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(warnargs[0]));

        var warnreason = warnargs.join(" ").slice(27);

        if (!warnUser) return message.channel.send("Usage: !warn ``user`` ``reason``");
    
        var adminrole = message.guild.roles.find(`name`, "Staff");
        
        if (!message.member.roles.has(adminrole.id)) return message.channel.send("``Insufficient permission. You do not have permission to warn others``");

        if (warnUser.roles.has(adminrole.id)) return message.channel.send("``Insufficient permission. You do not have permission to warn staff members``");
        
        if (!warnreason) return message.channel.send("Usage: !warn ``user`` ``reason``");
        
          var warnembed = new Discord.RichEmbed()
          .setColor("#BFB4FF")
          .setTitle('**Slender [] Warn**')
          .setDescription(`${warnUser}, Warned by ${message.author}`)
          .addField(`**Reason:**`, warnreason)
          .setTimestamp()
          .setFooter("Slender Bot [] hieu#0843")

          var logschannel = message.guild.channels.find(`name`, "moderation-log");

          if (!logschannel) return message.channel.send("``Couldn't find the logs channel``");

          logschannel.send(warnembed);

        message.channel.send(`${warnUser} ``has been warned```)

        warnUser.sendMessage(warnUser + " Hey you have been warned from the Alpha Network for the reason of " + '[' + warnreason + ']').catch()

  }
}

module.exports = warnCommand

const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
  commandPrefix: prefix
});

class announceCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'announce', 
      group: 'admin',
      memberName: 'announce',
      description: "Announces a message in #announcement"
    });
  }

  async run (message, args)
  {

    message.delete(3000).catch(O_o=>{});

    let announcementargs = message.content.slice(prefix.length).split(/ + /); 

    let announcementmessage = announcementargs.join(" ").slice(9);

    var announcementschannel = message.guild.channels.find(`name`, "📌-announcement");

    if (!announcementschannel) return message.channel.send("Couldn't find the #announcement channel");

    if (!announcementmessage) return message.channel.send("Usage: !announce ``message``");

    var adminrole = message.guild.roles.find(`name`, "Staff");

    if (!message.member.roles.has(adminrole.id)) return message.channel.send("Insufficient permission. You do not have permission to announce messages");

    announcementschannel.send(announcementmessage);

  }
}

module.exports = announceCommand;

//!announce <message>

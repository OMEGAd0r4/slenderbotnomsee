const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
  commandPrefix: prefix
});

class sofiaCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'sofia', 
      group: 'fun',
      memberName: 'sofia',
      description: "Sofia's custom command"
    });
  }

  async run (message, args)
  {

    message.delete(3000).catch(O_o=>{});
    
        var sofiarole = message.guild.roles.find(`name`, "toxic tity");
        
    if (!message.member.roles.has(sofiarole.id)) return message.channel.send("``Insufficient permission. You do not have a role called 'toxic tity'``");

    message.channel.send({embed: new Discord.RichEmbed()
      .setTitle("**Sofia has autism not even joking**")
      .setColor("#f442df")
      .addField("STFU before I rip ur tiny 455 balls off.", "- Sofia 2k19")})
  }
}

module.exports = sofiaCommand;

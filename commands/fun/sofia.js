const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
  commandPrefix: prefix
});

class bkeditCommand extends commando.Command {
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

    message.channel.send({embed: Discord.richEmbed()
      .setTitle("**Sofia has autism not even joking**")
      .setColor("#f442df")
      .addField("STFU before I rip ur tiny 455 balls off.", "- Sofia 2k19")})

  }
}

module.exports = sofiaCommand;

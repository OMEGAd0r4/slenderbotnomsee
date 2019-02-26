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
      name: 'bkedit', 
      group: 'fun',
      memberName: 'bkedit',
      description: "B.K will edit a photo for you"
    });
  }

  async run (message, args)
  {

    message.delete(3000).catch(O_o=>{});

    let bkeditargs = message.content.slice(prefix.length).split(/ + /); 

    let bkeditmessage = bkeditargs.join(" ").slice(7);

    var bkeditchannel = message.guild.channels.find(`name`, "marks-long-arse-ride");

    if (!bkeditmessage) return message.channel.send("Usage: !bkedit ``photo edit request``");

    bkeditchannel.send({embed: new Discord.RichEmbed()
        .setTitle("**Slender [] Edit Request**")
        .setColor("#BFB4FF")
        .setFooter("Slender Bot [] hieu#0843")
        .setTimestamp()
        .setDescription(`Requested by: ${message.author.tag} - ${bkeditmessage}`)})

  }
}

module.exports = bkeditCommand;

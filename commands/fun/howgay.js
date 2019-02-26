const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
  commandPrefix: prefix
});

class howgayCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'howgay', 
      group: 'fun',
      memberName: 'howgay',
      description: "Tells you how gay you are"
    });
  }

  async run (message, args)
  {

    message.delete(3000).catch(O_o=>{});

    var gaypercentage = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 1000];

    message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Slender [] Gay Rate Machine**")
        .setColor("#BFB4FF")
        .setDescription("You are " + gaypercentage[Math.floor(Math.random() * gaypercentage.length)] + " % gay 🏳️‍🌈")
        .setFooter("Slender Bot [] hieu#0843")
        .setTimestamp()})

  }
}

module.exports = howgayCommand;

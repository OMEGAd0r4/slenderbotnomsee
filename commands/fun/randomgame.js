const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
  commandPrefix: prefix
});

class randomgameCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'randomgame', 
      group: 'fun',
      memberName: 'randomgame',
      description: "Randomizes a game to play"
    });
  }

  async run (message, args)
  {

    message.delete(3000).catch(O_o=>{});

    var games = ["Skrbbl.io - https://skribbl.io/", "Krunker - https://krunker.io/", "Watch a video together - https://sync-video.com/", "Type Racer - https://play.typeracer.com/", "Zombs Royale - https://zombsroyale.io/"];

    message.channel.send({embed: new Discord.RichEmbed()
      .setTitle("**Slender [] RandomGames**")
      .setColor("#BFB4FF")
      .addField("The slender bot suggests you to play:", games[Math.floor(Math.random() * games.length)])
      .setFooter("Slender Bot [] hieu#0843")
      .setTimestamp()})

  }
}

module.exports = randomgameCommand;

//!randomgame

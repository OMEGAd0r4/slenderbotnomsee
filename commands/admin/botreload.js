const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
  commandPrefix: prefix
});

class botreloadCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'botreload', 
      group: 'admin',
      memberName: 'botreload',
      description: "Reloads the slender bot"
    });
  }

  async run (message, args)
  {

    message.delete(3000).catch(O_o=>{});

    var botownerrole = message.guild.roles.find(`name`, "*");

    if (!message.member.roles.has(botownerrole.id)) return message.channel.send("Insufficient permission. You do not have permission to reload the bot");

    if (message.member.roles.has(botownerrole.id))

    {

      bot.destroy()

      bot.login(process.env.token);

      console.clear()

      message.channel.send("``Bot has been successfully reloaded``")
    }


  }
}

module.exports = botreloadCommand;

//!botreload

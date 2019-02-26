const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = "!";
const bot = new commando.Client({
    commandPrefix: prefix
});

class truthordareCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'truthordare',
        group: 'admin',
        memberName: 'truthordare',
        description: 'A truth or dare game'
      });
    }

    async run(message, args)
    {
        message.delete(3000).catch(O_o=>{});

        var victims = ["Hieu L", "Quan", "Win", "Nhan", "Sophia", "Jaden", "T.A", "Kavish", "Ella", "B.K", "G.H", "Hieu N", "David"];

        var punishments = ["**Record** yourself doing 10 push ups", "**Record** youself recreating an old vine", "**Record** youself pouring water on your head", "**Record** yourself singing (30 seconds)", "**Record** youself cutting a 10, 000 vnd note"]; //var punishments = ["**Record** yourself doing 10 push ups", "**Record** youself recreating an old vine", "**Record** youself pouring water on your head", "**Record** yourself singing (30 seconds)", "**Record** youself cutting a 10, 000 vnd note"];

        var dareoption = ["Take an embarrassing selfie and post it as your profile picture or all social media account", "Turn ultra instinct ( In school)", "Expose someone's darkest secret (In school)", "Flirt with someone in school (In school)", "Count up to 500 (In school)", "Buy someone a drink (Opposite gender | In school)", "Scream out loud 'I am crazy' (In school)", "Put a 50 000 vnd in the bin (In school)", "Point at a girl and say 'loi ra kia' (In school)", "No dare, answer the truth"]; //var dareoption = ["Expose someone's darkest secret (In school)", "Flirt with someone in school (In school)", "Count up to 500 (In school)", "Buy someone a drink (Opposite gender | In school)", "Scream out loud 'I am crazy' (In school)", "Put a 50 000 vnd in the bin (In school)", "Point at a girl and say 'loi ra kia' (In school)"];

        var truthoption = ["Have you ever tried to kill a friend?", "What is your darkest secret?", "Have you ever cheated during an exam?", "What’s the dumbest thing you ever said or did, around a boy/girl you liked?", "Do you bite your toe nails?", "What was your most embarrassing farting moment?", "Have you ever broken something and blamed someone else?", "No truth, do the dare"]

        let truthordarechannel = message.guild.channels.find(`name`, "truth-or-dare");

        if (!truthordarechannel) return message.channel.send("Couldn't find the #truth-or-dare channel");

        var adminrole = message.guild.roles.find(`name`, "Staff");

        if (!message.member.roles.has(adminrole.id)) return message.channel.send("Insufficient permission. You do not have permission to start this game");
        
        truthordarechannel.send({embed: new Discord.RichEmbed()
            .setTitle("**Slender [] Truth OR Dare**")
            .setColor("#BFB4FF")
            .setFooter("Slender Bot [] hieu#0843")
            .setTimestamp()
            .setDescription("The slenderman is now hungry for some answers. He has found his victim: " + victims[Math.floor(Math.random() * victims.length)])
            .addField("If you don't respond to one answer within 1 day or do not do the dare / tell us the truth, you will have to: ", punishments[Math.floor(Math.random() * punishments.length)])
            .addField("__Truth Option__", truthoption[Math.floor(Math.random() * truthoption.length)])
            .addField("__Dare Option__", dareoption[Math.floor(Math.random() * dareoption.length)
            .addField("By not doing any of the options will lead into a **kick** / **ban** / **rank downgrade** from the server", ":)")])}) 
    }
}

module.exports = truthordareCommand;

//!truthordare

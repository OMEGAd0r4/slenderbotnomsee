const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
  commandPrefix: prefix
});

class killmarykissCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'killmarrykiss', 
      group: 'games',
      memberName: 'killmarrykiss',
      description: "Kill, Marry, Kiss game"
    });
  }

  async run (message, args)
  {

    message.delete(3000).catch(O_o=>{});

    var adminrole = message.guild.roles.find(`name`, "Staff");

    if (!message.member.roles.has(adminrole.id)) return message.channel.send("Insufficient permission. You do not have permission to start this game")

    var killmarrykisschannel = message.guild.channels.find(`name`, "kill-marry-kiss");

    if (!killmarrykisschannel) return message.channel.send("The #kill-marry-kiss doesn't exist");

    var killmarrykissusers = ["Hieu L", "Duong", "Bill", "Danny", "Quan", "Win", "Nhan", "Jack", "Minseo", "Yoonseo", "Vinh", "Hieu N", "Ly", "Sophia", "Polly", "Khanh han", "Yen", "Trung", "Dan", "Kyu Na", "Ye Young", "Yebin", "Vy", "Tran", "Bach", "Gia Hy", "Khoa", "Khue", "Trung Anh", "Bao Khanh", "Ford", "Toan", "Ella", "Siyeon", "Yuki", "Jolie", "David", "Ann", "Princess"];

    var killmarrykissplayers = ["Quan", "Danny", "Bill", "Nhan", "Ella", "David", "Win", "Sophia", "Hieu L", "Hieu N", "B.K", "Nhan", "Gia Hy (Bald)", "Gia Hy (Black)", "James", "Nhi"];

    killmarrykisschannel.send({embed: new Discord.RichEmbed()
      .setTitle("**Kill, Marry, Kiss**")
      .setColor("#BFB4FF")
      .setFooter("Slender Bot [] hieu#0843")
      .setTimestamp()
      .setDescription("The slenderman is now ready for you to spill the beans. He has caught his first victim in his forest: " + killmarrykissplayers[Math.floor(Math.random() * killmarrykissplayers.length)])
      .addField("User 1:", killmarrykissusers[Math.floor(Math.random() * killmarrykissusers.length)])
      .addField("User 2:", killmarrykissusers[Math.floor(Math.random() * killmarrykissusers.length)])
      .addField("User 3:", killmarrykissusers[Math.floor(Math.random() * killmarrykissusers.length)])
      .addField("If you dip out, you will eliminated from this game permanently", ";)")})

    .then(msg => {
        msg.react('💯');
    })
    .catch(() => console.error('Emoji failed to react.'));

  }
}

module.exports = killmarykissCommand;

//!killmarrykiss

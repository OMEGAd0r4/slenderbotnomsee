const Discord = require("discord.js");
const commando = require('discord.js-commando');
const prefix = "!";
const bot = new commando.Client({
  commandPrefix: prefix
});
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(`${server.queue[0]}`, {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if (server.queue[0])
        {
            Play (connection, message);
        }
        else
        {
            connection.disconnect()
          {
              message.channel.send("``Slenderman has successfully left the voice channel``")
          }
        }
    })
}

class joinCommand extends commando.Command{
    constructor(client){
        super(client,{
            name: 'join',
            group: 'essential',
            memberName: 'join',
            description: 'Joins a voice channel'
        })
    }
    async run(message, args)
    {

    message.delete(3000).catch(O_o=>{});

    if (message.guild.me.voiceChannel) return message.channel.send("``Sorry, Slenderman is not in a currently in a voice channel!``");

    if (!args) message.channel.send("Usage: !join ``music-url``");
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        if (!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                var server = servers[message.guild.id]
                message.member.voiceChannel.join()
                    .then(connection =>{
                        server.queue.push(args);
                        Play(connection, message);
                    })
          .then(connection => { // Connection is an instance of VoiceConnection

            message.reply('``Slenderman has successfully connected to the channel``');
          })
          .catch(console.log);
      } else {
        message.reply('``You need to join a voice channel first to sumon Slenderman``');
      }
    }
}

module.exports = joinCommand;

//!join <url>







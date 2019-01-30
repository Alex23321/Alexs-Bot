const Discord = require("discord.js");
 const Bot = new Discord.Client();
const Token = 'NTM5NzYyODg1NjY5NDIxMDk3.DzHIWg.ry8Wz_JoSP5neb4DotMVGoHjeXw'

Bot.on('message', function(message){
    if(message.content == 'Hello'){
        message.reply('Hi! Make sure to check out Alex RBLX on Youtube!');
    }
})

client.login(process.env.BOT_TOKEN);

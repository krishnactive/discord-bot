// bot to login as a user
const { Client, GatewayIntentBits, Integration } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ], 
}); 
// virtual client through which we intereact with our server

client.on('messageCreate', (message)  => {
    if(message.author.bot)return;
    message.reply({
        content: "Hi From Bot"
    })
    // console.log(message);
})

client.on('interactionCreate', interaction=>{
    console.log(interaction);
    interaction.reply("pong!!");
})

client.login(
    "Token required"
)
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
    //to do replying with short ID 
    // todo integrating AI/chat gpt to reply in chat/discord bot
    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1];
        return message.reply({
            content: "Generating Short ID for "+ url,
        });
    }
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
    "token-required"
)
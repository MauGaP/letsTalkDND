const Discord = require('discord.js');
const config = require('./config.json');
const { handle } = require('./commands/handleCommands');

const { Client, GatewayIntentBits } = Discord;

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
        await handle(interaction);
    }
});

client.login(config.DISCORD_BOT_TOKEN);

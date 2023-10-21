const Discord = require('discord.js');
const { handle } = require('./commands/handleCommands');
const { Client, GatewayIntentBits } = Discord;

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('interactionCreate', async interaction => {
  if (interaction.isCommand()) {
    await handle(interaction);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

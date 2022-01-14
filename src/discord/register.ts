import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    new SlashCommandBuilder().setName('fuck').setDescription('fuck'),
]
	.map(command => command.toJSON());

function init(client_id: string, guild_id: string, token: string) {
    const rest = new REST({ version: '9' }).setToken(token);

    rest.put(Routes.applicationGuildCommands(client_id, guild_id), { body: commands })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);
}

export {init};
import { Client } from 'discord.js';
import fs from 'fs';

export function init(client: Client) {
    const eventFiles = fs.readdirSync(`${__dirname}/events`).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const event = require(`${__dirname}/events/${file}`);
        client.on(event.name, (...args) => event.execute(...args));

        console.log(`registered event ${event.name}`);
    }
}
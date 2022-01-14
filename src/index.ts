import {getVideoInfo} from "../lib/bilibili/bilibili_player"
import { Client, Intents } from "discord.js";
import {token, client_id, guild_id} from "../config.json";
import * as register from "./discord/register";
import * as event_handler from "./discord/event_handler";

async function init(): Promise<Client> {
    // Create a new client instance
    register.init(client_id, guild_id, token);

    const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

    // When the client is ready, run this code (only once)
    client.once('ready', (client) => {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    });

    return client;
}

async function main(){
    // getVideoInfo("BV1Zm4y1X7A2");
    let client = await init();

    event_handler.init(client);

    // Login to Discord with your client's token
    await client.login(token);
}


main()
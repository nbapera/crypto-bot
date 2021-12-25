import { Client } from "discord.js";
import config from './config.json'

import commands from "./commands/commands";

const client = new Client({intents: ['GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILDS']});

client.on("ready", () => {
    console.log("[+] Crypto started");
})

commands(client)

client.login(`${config.token}`);
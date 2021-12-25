import { Client } from "discord.js";
import getBitcoin from "./bitcoin";
import getHelp from "./help";
import statusPing from "./ping"
import getTrending from "./trending";


function commands(client: Client) {
    statusPing(client)
    getTrending(client)
    getHelp(client)
    getBitcoin(client)
}

export default commands


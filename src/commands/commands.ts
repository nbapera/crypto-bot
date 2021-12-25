import { Client } from "discord.js";
import getBinanceCoin from "./binance";
import getBitcoin from "./bitcoin";
import getDogeCoin from "./dogecoin";
import getEthereum from "./ethereum";
import getHelp from "./help";
import getMonero from "./monero";
import statusPing from "./ping"
import getShibaInu from "./shibainu";
import getTrending from "./trending";

function commands(client: Client) {
    statusPing(client)
    getTrending(client)
    getHelp(client)
    getBitcoin(client)
    getEthereum(client)
    getBinanceCoin(client)
    getDogeCoin(client)
    getShibaInu(client)
    getMonero(client)
}

export default commands


import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'
import axios from "axios";

import { addComas } from "../misc";
import { addCommasDecimal } from "../misc";

const embed = new MessageEmbed()
.setColor('#a368dd')
.setTitle('BNB :rocket: :new_moon:')

export default function getBinanceCoin(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}binancecoin`
         || message.content == `${config.prefix}binance`
         || message.content == `${config.prefix}bnb`) {
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd&include_market_cap=true')
            .then(resp => {
                embed.fields =[]
                embed.addField("**BINANCE COIN** :coin:", `**PRICE**: ${addComas(resp.data.binancecoin.usd)}$
                **MKTCAP**: ${addCommasDecimal(resp.data.binancecoin.usd_market_cap)}$ :moneybag:`)
                if (resp.status == 200) {
                    message.channel.send({ embeds: [embed] })
                }
            })
        }
    });
}

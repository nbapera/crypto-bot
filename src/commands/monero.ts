import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'
import axios from "axios";

import { addComas } from "../misc";
import { addCommasDecimal } from "../misc";

const embed = new MessageEmbed()
.setColor('#a368dd')
.setTitle('XMR :rocket: :new_moon:')

export default function getMonero(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}monero` 
        || message.content == `${config.prefix}xmr`) {
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=usd&include_market_cap=true')
            .then(resp => {
                embed.fields =[]
                embed.addField("**MONERO** :coin:", `**PRICE**: ${addComas(resp.data.monero.usd)}$
                **MKTCAP**: ${addCommasDecimal(resp.data.monero.usd_market_cap)}$ :moneybag:`)
                if (resp.status == 200) {
                    message.channel.send({ embeds: [embed] })
                }
            })
        }
    });
}

import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'
import axios from "axios";

import { addComas } from "../misc";
import { addCommasDecimal } from "../misc";

const embed = new MessageEmbed()
.setColor('#a368dd')
.setTitle('ETH :rocket: :new_moon:')

export default function getEthereum(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}ethereum` || message.content == `${config.prefix}eth`) {
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true')
            .then(resp => {
                embed.fields =[]
                embed.addField("**ETHEREUM** :coin:", `**PRICE**: ${addComas(resp.data.ethereum.usd)}$
                **MKTCAP**: ${addCommasDecimal(resp.data.ethereum.usd_market_cap)}$ :moneybag:`)
                if (resp.status == 200) {
                    message.channel.send({ embeds: [embed] })
                }
            })
        }
    });
}

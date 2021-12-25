import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'
import axios from "axios";

import { addComas } from "../misc";
import { addCommasDecimal } from "../misc";

const embed = new MessageEmbed()
.setColor('#a368dd')
.setTitle('DOGE :rocket: :new_moon:')

export default function getDogeCoin(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}dogecoin` || message.content == `${config.prefix}doge`) {
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd&include_market_cap=true')
            .then(resp => {
                embed.fields =[]
                embed.addField("**DOGECOIN** :coin:", `**PRICE**: ${addComas(resp.data.dogecoin.usd)}$
                **MKTCAP**: ${addCommasDecimal(resp.data.dogecoin.usd_market_cap)}$ :moneybag:`)
                if (resp.status == 200) {
                    message.channel.send({ embeds: [embed] })
                }
            })
        }
    });
}

import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'
import axios from "axios";

import { addComas } from "../misc";
import { addCommasDecimal } from "../misc";

const embed = new MessageEmbed()
.setColor('#a368dd')
.setTitle('SHIB :rocket: :new_moon:')

export default function getShibaInu(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}shiba` 
        || message.content == `${config.prefix}shib`
         || message.content == `${config.prefix}shibainu`) {
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=shiba-inu&vs_currencies=usd&include_market_cap=true')
            .then(resp => {
                embed.fields =[]
                embed.addField("**SHIBAINU** :coin:", `**PRICE**: ${addComas(resp.data['shiba-inu'].usd)}$
                **MKTCAP**: ${addCommasDecimal(resp.data['shiba-inu'].usd_market_cap)}$ :moneybag:`)
                if (resp.status == 200) {
                    message.channel.send({ embeds: [embed] })
                }
            })
        }
    });
}

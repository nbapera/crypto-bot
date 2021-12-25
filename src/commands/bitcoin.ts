import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'
import axios from "axios";
import { addComas } from "../misc";
import { addCommasDecimal } from "../misc";

const embed = new MessageEmbed()
.setColor('#a368dd')
.setTitle('BTC :rocket: :new_moon:')

export default function getBitcoin(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}bitcoin` || message.content == `${config.prefix}btc`) {
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true')
            .then(resp => {
                embed.fields =[]
                embed.addField("**BITCOIN** :coin:", `**PRICE**: ${addComas(resp.data.bitcoin.usd)}$
                **MKTCAP**: ${addCommasDecimal(resp.data.bitcoin.usd_market_cap)}$ :moneybag:`)
                if (resp.status == 200) {
                    message.channel.send({ embeds: [embed] })
                }
            })
        }
    });
}
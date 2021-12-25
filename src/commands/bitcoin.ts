import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'
import axios from "axios";

const embed = new MessageEmbed()
	.setColor('#a368dd')
	.setTitle('BTC :rocket: :new_moon:')


export default function getBitcoin(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}bitcoin`) {
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true')
            .then(resp => {
                embed.addField("**BITCOIN** :coin:", `**PRICE**: ${resp.data.bitcoin.usd}$
                **MKTCAP**: ${resp.data.bitcoin.usd_market_cap}$ :moneybag:`)
                if (resp.status == 200) {
                    message.channel.send({ embeds: [embed] })
                }
            })
        }
    });
}
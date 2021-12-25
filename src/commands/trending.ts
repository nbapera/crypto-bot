import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'
import axios from 'axios';

const embed = new MessageEmbed()
.setColor('#a368dd')
.setTitle('Trending Coins :fire:')

export default function getTrending(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}trending`) {
            axios.get('https://api.coingecko.com/api/v3/search/trending')
            .then(resp => {
                embed.fields = []
                resp.data.coins.map(coin => embed.addField(coin.item.name, 
                    `PRICE :money_with_wings: : **${coin.item.price_btc}** BTC :coin:` ))
                message.channel.send({embeds: [embed]})
            })
        }
    });
}
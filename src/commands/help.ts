import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'

const embed = new MessageEmbed()
.setColor('#a368dd')
.setTitle('Crypto BOT :rocket:')
.addFields(
    { name: '>help', value: 'Prints out this message :rocket:', },
    { name: '>ping', value: 'Checks if the API is live :green_circle: ' },
    { name: '>trending', value: 'Prints out trending coins :fire: ' },
    { name: '>btc', value: 'Prints out the current price of Bitcoin in USD :coin: ' },
    { name: '>eth', value: 'Prints out the current price of Ethereum in USD :coin: ' },
    { name: '>bnb', value: 'Prints out the current price of Binance Coin coin in USD :coin: ' },
    { name: '>doge', value: 'Prints out the current price of DogeCoin in USD :coin: ' },
    { name: '>shib', value: 'Prints out the current price of Shiba inu in USD :coin: ' },
    { name: '>xmr', value: 'Prints out the current price of Monero in USD :coin: ' },
    )

export default function getHelp(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}help`) {
            message.channel.send({embeds: [embed]})
        }
    });
}
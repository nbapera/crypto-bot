import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'
import axios from 'axios';

const embed = new MessageEmbed()
	.setColor('#a368dd')
	.setTitle('Crypto :rocket:')
	.addFields(
		{ name: 'BOT', value: '**LIVE**  :green_circle:' },
		{ name: 'API', value: '**LIVE**  :green_circle:' },
        {name: 'DONATE :moneybag:', value: '**4A1fuTbeX51cYdmUXXzoYp9ors2kqKsvpZytGxNEk9hQXAG5KdFzYUwit5Tn7a2FStd1cAfy9rbBP87sdjrUwPrbT9zQ8z4**'}
        )

export default function statusPing(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}ping`) {
            axios.get('https://api.coingecko.com/api/v3/ping')
            .then(resp => {
                if (resp.status == 200) {
                    message.channel.send({ embeds: [embed] })
                }
            })
        }
    });
}
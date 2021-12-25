import { Client, MessageEmbed } from "discord.js";
import config from '../config.json'
import axios from 'axios';

const embed = new MessageEmbed()
	.setColor('#a368dd')
	.setTitle('Crypto BOT :rocket:')
	.addFields(
		{ name: '>help', value: 'Prints out this message :rocket:', },
        { name: '>ping', value: 'Checks if the API is live :green_circle: ' },
        { name: '>trending', value: 'Prints out trending coins :fire: ' },
        )

export default function getHelp(client: Client)
{
    client.on('messageCreate', (message) => {
        if (message.content == `${config.prefix}help`) {
            message.channel.send({embeds: [embed]})
        }
    });
}
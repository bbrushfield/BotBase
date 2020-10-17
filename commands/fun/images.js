
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
module.exports = {
    name: "dog",
    category: "fun",
    description: "Gives you random images from a listed file",
    usage: "dog",
    run: async (client, message, args) => {

        const res = await snekfetch.get('https://random.dog/woof.json')
        const image = res.body.url;

        const embed = new Discord.RichEmbedgit ()
            .setImage(image)
            .setDescription(`[Url](${image})`)
            .setFooter('HMRG Management')
            .setColor('#71A3BE')
        message.channel.send({ embed });

    }
}
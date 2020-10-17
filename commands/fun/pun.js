const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");
const puns = require("./puns.json");

module.exports = {
    name: "pun",
    category: "fun",
    description: "Gives you a random pun each time!",
    usage: "rps",
    run: async (client, message, args) => {
        var randomItem = puns[Math.floor(Math.random()*puns.length)];
        message.channel.send(randomItem)
    }
}
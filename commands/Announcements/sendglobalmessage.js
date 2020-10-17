const { Client, RichEmbed, Collection } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "sendglobalmessage",
    aliases: ["global", "guildann", "guildannounce"],
    category: "Announcements",
    description: "Sends a message to all current servers. Can only be used in a specific server.",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        if (message.channel.name === "global-message") {
            let rMember = message.author
            const embed = new RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter('This message was sent to all FAAA Discords.', message.author.displayAvatarURL)
            .setTitle('GLOBAL MESSAGE')
            .setDescription(stripIndents`** Announcement by:** ${message.author.username}

            ${args.slice(0).join(" ")}`);
            //const channel = message.guild.channels.find(c => c.name === "announcements")
    
            client.guilds.forEach(guild => {
                guild.channels.find(t => t.name == 'announcements').send(embed);
            })
    } else {
        message.channel.send("You cannot send this here, you do not have permission!")
    }
    }
}

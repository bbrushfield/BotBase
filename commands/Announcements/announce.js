const { Client, RichEmbed, Collection } = require("discord.js");
const { stripIndents } = require("common-tags");

const { getMember, formatDate } = require("../../functions.js");
module.exports = {
    name: "announce",
    aliases: ["ann", "a"],
    category: "Announcements",
    description: "Announces in specified channel",
    run: async (client, message, args) => {
        let rMember = message.author
        const embed = new RichEmbed()
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setDescription(stripIndents`** Announcement by:** ${message.author.username}

         ${args.slice(0).join(" ")}`);

        const channel = message.guild.channels.find(c => c.name === "announcements")
        if(message.member.roles.find(role => role.name === "ANNOUNCER")) {
            channel.send(embed);
        } else {
            message.channel.send("Sorry, you don't have the correct roles!")
            return;
        }
    }
}

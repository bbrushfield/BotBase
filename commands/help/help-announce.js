const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "help-announce",
    aliases: ["helpa", "help-a"],
    category: "help",
    description: "Shows what you can use for announcements",
    usage: "Speech",
    run: async (client, message, args) => {
        const created = formatDate(message.author.createdAt);

        const embed = new RichEmbed()
            .setFooter(message.author.name, message.author.displayAvatarURL)
            .setThumbnail(message.author.displayAvatarURL)
            .setColor(message.author.displayHexColor === '#000000' ? '#ffffff' : message.author.displayHexColor)
            .setTitle("!announce")
            .addField('Command Descriptions:', stripIndents`
            **> Command is used to announce important information / notify others of changes**
            > Command ran by doing !announce [ANNOUNCEMENT]`, true)

            .addField('Available uses:', stripIndents`> Will be announced in the announcement channel\n
            > Channel cannot be changed\n
            > Only specific roles can use this command.`, true)
            .addField(`Aliases:`, `
            !a
            !ann`)
            .setTimestamp()
        message.channel.send(embed);
    }
}
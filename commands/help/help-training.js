const { RichEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions.js");
const { stripIndents } = require("common-tags");
module.exports = {
    name: "help-training",
    aliases: ["helpt", "help-t"],
    category: "help",
    description: "Shows what you can use for training",
    usage: "!training [Identifier] [Add Info]",
    run: async (client, message, args) => {
        const created = formatDate(message.author.createdAt);

        const embed = new RichEmbed()
            .setFooter(message.author.displayName, message.author.displayAvatarURL)
            .setThumbnail(message.author.displayAvatarURL)
            .setColor(message.author.displayHexColor === '#000000' ? '#ffffff' : message.author.displayHexColor)
            .setTitle("!training")
            .addField('Command Descriptions:', stripIndents`
            **> Command is used to post a pre specified training / tryout announcement**
            > The command is used by doing the command !training [IDENTIFIER] [ADDITIONAL INFO]`, true)

            .addField('Available uses:', stripIndents`BT - Basic Training
            Deploy - Deployment
            SSU - Server Startup
            Mount - Mount
            Ins - Inspection`, true)
            .addField(`Aliases:`, `
            !post
            !train`)
            
            .setTimestamp()
        message.channel.send(embed);
    }
}
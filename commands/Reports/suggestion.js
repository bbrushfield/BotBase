const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "suggest",
    category: "Reports",
    description: "Posts suggestions",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();


      //  if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
      //      return message.channel.send("Can't report that member").then(m => m.delete(5000));

        if (!args[0])
            return message.channel.send("Please provide text for the feedback").then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(c => c.name === "suggestions")
        if (!channel)
            return message.channel.send("Couldn't find a `#feedback` channel").then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setTitle("New Suggestion!")
            .setFooter(message.guild.name, message.guild.iconURL)
            .setDescription(stripIndents`**- Suggestion by by:** ${message.member}
            **- Suggestion:** ${args.slice(0).join(" ")}`);

        channel.send(embed).then(sentEmbed => {
            sentEmbed.react('👍')
            sentEmbed.react('👎');
        })
        
    }
}
const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "bugreport",
    alises: ["bug", "breport"],
    category: "Reports",
    description: "gives feedback a member",
    usage: "<mention, id>",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();


      //  if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
      //      return message.channel.send("Can't report that member").then(m => m.delete(5000));

        if (!args[0])
            return message.channel.send("Please provide text for the bug report (What the bug is)").then(m => m.delete(5000));
        
        const channel = message.guild.channels.find(c => c.name === "bugs")
            
        if (!channel)
            return message.channel.send("Couldn't find a `#bugs` channel").then(m => m.delete(5000));

        const embed = new RichEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setTitle("New Bug Report!")
            .setFooter(message.guild.name, message.guild.iconURL)
            .setDescription(stripIndents`**- Bug reported by:** ${message.member}
            **- Bug:** ${args.slice(0).join(" ")}`);

        return channel.send(embed);
    }
}
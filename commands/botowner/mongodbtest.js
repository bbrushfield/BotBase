const Discord = require("discord.js");
const Report = require("../../models/report.js");
const mongoose = require("mongoose");



module.exports = {
    name: "testreport",
    category: "botowner",
    description: "Database",
    run: async (client, message, args) => {

        mongoose.connect('mongodb://localhost:27017/Reports');
        await message.delete();
        if (message.author.id != '129495170390556672') return;
        let rUser = message.mentions.members.first();
        if (!rUser) return message.reply("I cannot find that member");
        let rreason = args.slice(1).join(" ");
        if (!rreason) return message.reply("Please supply a reason")

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#FF0000")
        .addField("Reported User", `${rUser} with ID ${rUser.id}`)
        .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", rreason);

        const report = new Report({
            username: rUser.user.username,
            userID: rUser.ID,
            reason: rreason,
            rUsername: message.author.username,
            rID: message.author.id,
            time: message.createdAt
        });

        report.save()
        .then(result => console.log(result))
        .catch(err => console.log(err))

        message.reply("That report has been saved to the database")
        message.channel.send(reportEmbed)


    }

};
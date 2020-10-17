const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const { getMember, formatDate } = require("../../functions.js");
module.exports = {
    name: "training",
    aliases: ["train", "post"],
    category: "Announcements",
    description: "Announces in specified channel",
    run: async (client, message, args) => {
        let variablee;
        let linkss;
        let name;
        let correct;
        var extra = args.slice(0).join(" ")
        let addition = args.slice(1).join(" ")
        var extraa = extra.toLowerCase();
        // if statements to check if the argument slice(0) converted to lower case (extraa) include the two letters together,
        // if the code finds one with e.g. rt, it will change the variables specified to then be inputted into the embed.
        // e.g. !post ins Inspection! would first go through RT, PT, JT, CT, and will finally find ins is a match, so it will change 
        // the variables "variablee", "linkss" and "name" to match specified, and then will proceed to post the embed with that information
        if(message.member.roles.find(role => role.name === "TRAINING")) {
        if (extraa.includes("bt")) {
            variablee = "Basic Training"
            linkss = "https://www.roblox.com/games/3510748323/Wellington-Barracks-London-District"
            name = "Wellington Barracks"
        }
        else if (extraa.includes("ssu")) {
            variablee= "SSU"
            linkss = "https://www.roblox.com/games/3510748323/Wellington-Barracks-London-District"
            name = "Wellington Barracks"
        }
        else if (extraa.includes("deploy")) {
            variablee = "Deployment"
            linkss = "https://www.roblox.com/games/3510748323/Wellington-Barracks-London-District"
            name = "Afghanistan"
        }
        else if (extraa.includes("mount")) {
            variablee = "Mount"
            linkss = "https://www.roblox.com/games/3510748323/Wellington-Barracks-London-District"
            name = "Wellington Barracks"
        }
        else if (extraa.includes("")) {
            message.channel.send("Sorry, this is not correct, please retry the command")
            return;
        }
        } else if (extraa.includes("ins")) {
            if(message.member.roles.find(role => role.name === "INSPECTION")) {
                variablee = "Inspection"
                linkss = "https://www.roblox.com/games/3510748323/Wellington-Barracks-London-District"
                name = "Wellington Barracks"
            } else {
                // If someone tried to do !post ins hey and did not have the specified roles, they would be given this else message.
                message.channel.send("Sorry, you don't seem to have the correct role to initiate an inspection!")
                return;
            }
        
        } else {
            // If nothing is found, the else: here will be put into place, e.g. if someone does !post hahs haha it will come up with the error message.
            message.channel.send("Sorry! This is either: \n Not a type of training \n You do not have the correct role \n There is an error. If you think you are correct, please message my creator.")
            return;
        }
        //${message.guild.iconURL}
        let rMember = message.author
        const embed = new RichEmbed()
        .setColor("#ff0000")
        .setAuthor(`${message.guild.name}`)
        .setTitle(`${variablee}`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setDescription(stripIndents`There is a ${variablee} at ${name}\n Promotions will be given out to those deserving.`)
        .addField(`Link: ${linkss}`, `\n Additional Information: \n ${addition}`);

        const channel = message.guild.channels.find(c => c.name === "event-announcements")
        channel.send(embed);
    }
}

const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const { getMember, formatDate } = require("../../functions.js");
module.exports = {
    name: "serverlist",
    aliases: ["list"],
    category: "Owner",
    description: "Sends a list of servers",
    run: async (client, message, args) => {

        let i0 = 0;
        let i1 = 10;
        let page = 1;

        let utils = message.language.get("UTILS");

        let description = 
        `${utils.TOTAL_SERVERS} : ${message.client.guilds.size}\n\n`+
        message.client.guilds.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
        .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} ${utils.MEMBERS.toLowerCase()}`)
        .slice(0, 10)
        .join("\n");

        let embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor(data.config.embed.color)
            .setFooter(message.client.user.username)
            .setTitle(`${utils.PAGE}: ${page}/${Math.ceil(message.client.guilds.size/10)}`)
            .setDescription(description);

        let msg = await message.channel.send(embed);
        
        await msg.react("⬅");
        await msg.react("➡");
        await msg.react("❌");

        let collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);

        collector.on("collect", async(reaction, user) => {

            if(reaction._emoji.name === "⬅") {

                // Updates variables
                i0 = i0-10;
                i1 = i1-10;
                page = page-1;
                
                // if there is no guild to display, delete the message
                if(i0 < 0){
                    return msg.delete();
                }
                if(!i0 || !i1){
                    return msg.delete();
                }
                
                description = `${utils.TOTAL_SERVERS} : ${message.client.guilds.size}\n\n`+
                message.client.guilds.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
                .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} ${utils.MEMBERS.toLowerCase()}`)
                .slice(i0, i1)
                .join("\n");

                // Update the embed with new informations
                embed.setTitle(`${utils.PAGE}: ${page}/${Math.round(message.client.guilds.size/10)}`)
                .setDescription(description);
            
                // Edit the message 
                msg.edit(embed);
            
            };

            if(reaction._emoji.name === "➡"){

                // Updates variables
                i0 = i0+10;
                i1 = i1+10;
                page = page+1;

                // if there is no guild to display, delete the message
                if(i1 > message.client.guilds.size + 10){
                    return msg.delete();
                }
                if(!i0 || !i1){
                    return msg.delete();
                }

                description = `${utils.TOTAL_SERVERS} : ${message.client.guilds.size}\n\n`+
                message.client.guilds.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
                .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} ${utils.MEMBERS.toLowerCase()}`)
                .slice(i0, i1)
                .join("\n");

                // Update the embed with new informations
                embed.setTitle(`${utils.PAGE}: ${page}/${Math.round(this.client.guilds.size/10)}`)
                .setDescription(description);
            
                // Edit the message 
                msg.edit(embed);

            };

            if(reaction._emoji.name === "❌"){
                return msg.delete(); 
            }

            // Remove the reaction when the user react to the message
            await reaction.users.remove(message.author.id);

        });
    }

}

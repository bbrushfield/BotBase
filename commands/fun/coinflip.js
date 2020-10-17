const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");

const chooseArr = ["🗻", "📰"];

module.exports = {
    name: "coinflip",
    aliases: ["cf", "flip"],
    category: "fun",
    description: "Flip a coin and see if you win",
    usage: "!coinflip",
    run: async (client, message, args) => {
        const randomchoice = chooseArr[Math.floor(Math.random() * chooseArr.length)]
        const choiceembed = new RichEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setDescription(`Choose one!`)
            .setTimestamp();
        const m = await message.channel.send(choiceembed);
        //Reacts to the message
        const reacted = await promptMessage(m, message.author, 30, chooseArr);
        //Chooses randomly between the two coin sides
        const coinflipped = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        //Awaits the result of the user
        // The getresult function will operate with the two parameters given. So "correct" in the function will be 
        const result = await getResult(reacted, coinflipped);
        await m.clearReactions();
        choiceembed
            .setDescription("")
            .addField(result, `Correct: ${coinflipped}, You chose ${reacted}`);
        m.edit(choiceembed);

        //The function that decides the fate of it
        function getResult(correct, clientChosen) {
            if (correct == clientChosen) {
                return "You win"
            } else {
                return "You loose!"
            }
        }

    }
}
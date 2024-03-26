/**
    @name TypeShiBot.js
    @author CentricGamer834 aka GasMoonK3B
*/

const discord = require("discord.js");
const client = new discord.Client();

const token = "DiscordTokenHere";


Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
};

client.on("message", message => {
    if (message.author.id === client.user.id) return;
    if (message.guild && !message.guild.member(client.user).permissions.has("SEND_MESSAGES")) return;

    const responses = [
        "type shi",
        "type shi.",
        "type shi..",
        "type shi?",
        "type shit.",
        "type shit...",
        "type shit?",
        "type shiit",
        "gay people"
    ];

    const response = responses.random();

    message.channel.send(response).catch(console.error);
});

client.login(token);

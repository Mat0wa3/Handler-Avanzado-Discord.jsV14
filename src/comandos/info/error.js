const {EmbedBuilder} = require('discord.js');
module.exports = {
    DESCRIPTION: "Sirve para ver el ping del bot",
    PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"],
    OWNER: true,
    async execute(client, message, args, prefix) {
        return niby.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle(`🤖 Ping`)
                .addFields({name: "Bot", value: `\`${client.ws.ping}ms\``})
            ]
        })
    }
}
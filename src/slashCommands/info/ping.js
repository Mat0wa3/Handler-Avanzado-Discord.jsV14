const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    CMD: new SlashCommandBuilder()
    .setDescription("Sirve para ver el ping del bot"),

    async execute(client, interaction, prefix) {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle(`🤖 Ping`)
                .addFields({name: "Bot", value: `\`${client.ws.ping}ms\``})
            ]
        })
    }
}
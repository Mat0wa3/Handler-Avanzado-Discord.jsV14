const {EmbedBuilder} = require('discord.js');
module.exports = {
    DESCRIPTION: "Sirve para ver el ping del bot",
    PERMISSIONS: ["Administrator", "KickMembers", "BanMembers"],
    OWNER: true,
    async execute(client, message, args, prefix) {
        const Response = new EmbedBuilder()
        .setColor("Aqua")
        .addFields(
            {name: "Cliente", value: `\`🟢 EN LINEA\` - \`${client.ws.ping}ms\``},
            {name: "Hora", value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`}
        )

        message.reply({embeds: [Response]})
    }
}
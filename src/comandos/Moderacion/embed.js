const {EmbedBuilder} = require('discord.js');
module.exports = {
    DESCRIPTION: "Sirve para ver el ping del bot",
    PERMISSIONS: ["ManageMessages"],
    async execute(client, message, args, prefix) {
        let texto = args.join(` `)
        if(!texto) return message.reply("Debes ingresar tu mensaje\nEjemplo de como lo debes hacer\n[Titulo] >> [Descripción] >> [Color]")

        let opciones = texto.split(" >> ")

        message.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle(`${opciones[0]}`)
                .setDescription(`${opciones[1]}`)
                .setColor(`${opciones[2]}`)
                .setFooter({text: `Ejecutado por: ${message.author.tag}`, iconURL: message.author.displayAvatarURL()})
            ]
        })
    }
}
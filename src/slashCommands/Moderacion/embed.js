const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    CMD: new SlashCommandBuilder()
        .setDescription('Crea un embed')
        .setName('embed')
        .setDescription('Crea un embed.')
        .addStringOption(option =>
            option.setName('descripción')
                .setDescription('Escribe la descripción del embed.')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('título')
                .setDescription('Escribe el título del embed.')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('miniatura')
                .setDescription('Escribe el link de la miniatura del embed.')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('nf1')
                .setDescription('Escribe el nombre del field 1 del embed.')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('vf1')
                .setDescription('Escribe el valor del field 1 del embed.')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('nf2')
                .setDescription('Escribe el nombre del field 2 del embed.')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('vf2')
                .setDescription('Escribe el valor del field 2 del embed.')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('imagen')
                .setDescription('Escribe el link de la imagen del embed.')
                .setRequired(false)
        )
        .addStringOption(option =>
            option.setName('color')
                .setDescription('Escribe el color del embed.')
                .setRequired(false)
        ),

    async execute(client, interaction, prefix) {
        const título = interaction.options.getString('título')
        const descripción = interaction.options.getString('descripción')
        const miniatura = interaction.options.getString('miniatura')
        const nf1 = interaction.options.getString('nf1')
        const vf1 = interaction.options.getString('vf1')
        const nf2 = interaction.options.getString('nf2')
        const vf2 = interaction.options.getString('vf2')
        const imagen = interaction.options.getString('imagen')
        const color = interaction.options.getString('color')
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription("✅ Embed enviado correctamente.")
                    .setColor("Green")
                    .setFooter({ text: `${client.user.username}.`, iconURL: client.user.displayAvatarURL() })
                    .setTimestamp()
            ], ephemeral: true
        })
        interaction.channel.send({
            embeds: [
                new EmbedBuilder()
                    .setTitle(título)
                    .setDescription(descripción)
                    .setThumbnail(miniatura || " ")
                    .addFields([
                        { name: nf1, value: vf1, inline: true },
                        { name: nf2, value: vf2, inline: true }
                    ])
                    .setImage(imagen || " ")
                    .setColor(color)
                    .setFooter({ text: `${client.user.username}.`, iconURL: client.user.displayAvatarURL() })
                    .setTimestamp()
            ]
        })
    }
}
const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    CMD: new SlashCommandBuilder()
    .setDescription('Elimina mensajes de un canal.')
    .addIntegerOption(option => 
        option.setName('cantidad')
        .setDescription('Numero de mensajes para Eliminar.')
        .setRequired(true)
    )
    .addUserOption(option =>
        option.setName('usuario')
        .setDescription('Usuario a eliminar mensajes')
        .setRequired(false)
    ),
    PERMISSIONS: ["ManageChannels"],
    BOT_PERMISSIONS: ["ManageChannels"],

    async execute(client, interaction, prefix) {
        const cantidad = interaction.options.getInteger('cantidad');
        const usuario = interaction.options.getUser('usuario');

        if(usuario) {
            let i = 0;
            const filtrar = [];
            (await Mensaje).filter((m) => {
                if(m.author.id === Usuario.id && Cantidad > i) {
                    filtrar.push(m);
                    i++;
                }
            })

            await interaction.channel.bulkDelete(filtrar, true).catch(e => {
                console.error(e);
                interaction.reply({content: `Hubo un problema intentando borrar los mensajes de este chat`, ephemeral: true});
            });

            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`\`${cantidad}\` | 🗑 | Mensajes eliminados de: ${usuario.user.tag} correctamente`)
                    .setColor("Green")
                ],
                ephemeral: true
            })
        } else {
            await interaction.channel.bulkDelete(cantidad, true).catch(e => {
                console.error(e);
                interaction.reply({content: `Hubo un problema intentando borrar los mensajes de este chat`, ephemeral: true});
            });

            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setTitle(`\`${cantidad}\` | 🗑 | Mensajes eliminados correctamente`)
                    .setColor("Green")
                ],
                ephemeral: true
            })
        }
    }
}
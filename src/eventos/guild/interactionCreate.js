module.exports = async (client, interaction) => {
    const COMANDO = client.slashCommands.get(interaction?.commandName);

    if (COMANDO) {
        if(COMANDO.OWNER) {
            const DUEÑOS = process.env.OWNERS_IDS.split(" ");
            if (!DUEÑOS.includes(interaction.user.id)) return interaction.reply({content: `❌ **Solo los dueños de este bot pueden ejecutar este comando!**\nDueños del bot: ${DUEÑOS.map(DUEÑO => `<@${DUEÑO}>`).join(", ")}`});
        }

        if(COMANDO.BOT_PREMISSIONS) {
            if(!interaction.guild.members.me.permissions.has(COMANDO.BOT_PREMISSIONS)) return interaction.reply({content: `❌ **Necesito los siguientes permisos para ejecutar este comando!**\n${COMANDO.BOT_PREMISSIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`});
        }

        if(COMANDO.PERMISSIONS) {
            if(!interaction.member.permissions.has(COMANDO.PREMISSIONS)) return interaction.reply({content: `❌ **Necesitas los siguientes permisos para ejecutar este comando!**\n${COMANDO.BOT_PREMISSIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`});
        }

        try {
            COMANDO.execute(client, interaction, "/");
        } catch (e) {
            interaction.reply({content: `**Ha ocurrido un error ejecutando el comando!**\n*Mira la consola para mas detalle!*`});
            console.log(e);
        }
    }
}
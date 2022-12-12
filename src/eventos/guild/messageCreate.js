module.exports = async (client, message) => {
    
    if(!message.content.startsWith(process.env.PREFIX)) return;

    const ARGS = message.content.slice(process.env.PREFIX.length).trim().split(/ +/)
    const CMD = ARGS?.shift()?.toLowerCase();

    const COMANDO = client.commands.get(CMD) || client.commands.find(c => c.ALIASES && c.ALIASES.includes(CMD));


    if (COMANDO) {
        if(COMANDO.OWNER) {
            const DUEÑOS = process.env.OWNERS_IDS.split(" ");
            if (!DUEÑOS.includes(message.author.id)) return message.reply({content: `❌ **Solo los dueños de este bot pueden ejecutar este comando!**\nDueños del bot: ${DUEÑOS.map(DUEÑO => `<@${DUEÑO}>`).join(", ")}`});
        }

        if(COMANDO.BOT_PREMISSIONS) {
            if(!message.guild.members.me.permissions.has(COMANDO.BOT_PREMISSIONS)) return message.reply({content: `❌ **Necesito los siguientes permisos para ejecutar este comando!**\n${COMANDO.BOT_PREMISSIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`});
        }

        if(COMANDO.PERMISSIONS) {
            if(!message.member.permissions.has(COMANDO.PREMISSIONS)) return message.reply({content: `❌ **Necesitas los siguientes permisos para ejecutar este comando!**\n${COMANDO.BOT_PREMISSIONS.map(PERMISO => `\`${PERMISO}\``).join(", ")}`});
        }

        try {
            COMANDO.execute(client, message, ARGS, process.env.PREFIX);
        } catch (e) {
            message.reply({content: `**Ha ocurrido un error ejecutando el comando!**\n*Mira la consola para mas detalle!*`});
            console.log(e)
            return;
        }
    }
}
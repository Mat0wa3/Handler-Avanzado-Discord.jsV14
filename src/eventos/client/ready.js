module.exports = client => {
    console.log(`Sesión iniciada como ${client.user.tag}`);

    if(client?.application?.commands) {
        client.application.commands.set(client.slashArray);
        console.log(`(/) ${client.slashCommands.size} Comandos Publicados!`)
    }
}
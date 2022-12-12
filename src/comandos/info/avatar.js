const {EmbedBuilder} = require('discord.js');

module.exports = {
    DESCRIPTION: "Sirve para ver tu avatar o el de cualquier usuario",

    async execute(client, message, args, prefix) {
        let user = message.mentions.users.first() || message.author;

        message.reply({
            embeds: [
                new EmbedBuilder()
                .setAuthor({name: `${user.tag}`, iconURL: `${user.displayAvatarURL()}`})
                .setTitle(`Avatar Link`)
                .setURL(`${user.displayAvatarURL({size: 4096})}`)
                .setImage(`${user.displayAvatarURL({ size: 1024, dynamic: true})}`)
                .setFooter({text: `Solicitado por: ${message.author.tag}`, iconURL: message.author.displayAvatarURL()})
                .setColor(process.env.COLOR)
            ]
        })
    }
}
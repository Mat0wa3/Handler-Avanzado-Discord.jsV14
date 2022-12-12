const {EmbedBuilder, AttachmentBuilder} = require('discord.js');
module.exports = {
    DESCRIPTION: "Sirve para hacer un comentario tipo pornhub",
    async execute(client, message, args, prefix) {
        const texto = args.join(" ");

        if(!texto) return message.reply({ embeds: [ new EmbedBuilder().setDescription(`❌ **Debes escribir algún comentario!**`)]});

        let attachment = new AttachmentBuilder(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${texto}&username=${message.author.username}&raw=1`, {name: 'comentario.png'});

        message.reply({files: [attachment]});
    }
}
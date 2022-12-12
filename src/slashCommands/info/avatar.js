const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    CMD: new SlashCommandBuilder()
    .setDescription("Sirve para ver tu avatar o el de cualquier usuario")
    .addUserOption(option =>
        option.setName('member')
        .setDescription("Menciona a un usuario")
        .setRequired(false)
    ),

    async execute(client, interaction, prefix) {
        const member = interaction.options.getMember("member") || interaction.member;
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setAuthor({name: `${member.user.tag}`, iconURL: `${member.user.displayAvatarURL()}`})
                .setTitle(`Avatar Link`)
                .setURL(`${member.user.displayAvatarURL({size: 4096})}`)
                .setImage(`${member.user.displayAvatarURL({ size: 1024, dynamic: true})}`)
                .setFooter({text: `Solicitado por: ${interaction.member.user.tag}`, iconURL: interaction.member.displayAvatarURL()})
                .setColor(process.env.COLOR)
            ]
        })
    }
}
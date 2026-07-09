const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('البوت كيهدر بالنص لي كتكتب')
    .addStringOption(option =>
      option.setName('message')
        .setDescription('النص لي بغيتي البوت يقوله')
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages), // غير الناس عندهم صلاحية يقدرو يستعملوه

  async execute(interaction) {
    const message = interaction.options.getString('message');

    // كيرد على المستخدم بشكل خفي (باش ماتبانش رسالة "used /say")
    await interaction.reply({ content: 'تصيفط ✅', ephemeral: true });

    // كيصيفط الرسالة فنفس القناة
    await interaction.channel.send(message);
  },
};

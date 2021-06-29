module.exports = {
    name: 'davet-sıralaması',
    cooldown: 1,
    aliases: ["davet-sırası", "ds"],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){

     if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  let invites = await message.guild.fetchInvites().catch(error => {
    return message.channel.send(
      ":x: | Davetleri Göremiyorum! Yeterli Yetkim Yok!"
    );
  });

  invites = invites.array();

  let possibleinvites = [];
  invites.forEach(function(invites) {
    possibleinvites.push(
      `:small_orange_diamond: | ${invites.inviter.username} | Davet: ${invites.uses}`
    );
  });

  const CrewCode = new Discord.MessageEmbed()
    .setTitle(`**📧 SUNUCU DAVET BİLGİLERİ 🔐**`)
    .setColor("RANDOM")
    .addField(":arrow_right_hook: Davet Bilgileri :leftwards_arrow_with_hook:", `**${possibleinvites.join("\n")}**`)
    .setTimestamp()
    .setFooter(`Komutu Kullanan: ${message.author.username}`);
  message.channel.send(CrewCode);
}



}

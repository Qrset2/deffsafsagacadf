module.exports = {
    name: 'renkara',
    cooldown: 1,
    aliases: ['renka'],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
      const { MessageEmbed } = require("discord.js");
        var Renk = args[0];
  var hata = args[0];
  var narcosrenkResimi = `https://dummyimage.com/1920x1080/${Renk}/ffffff&text=%20`;

  if (!hata) {
    const renkYok = new MessageEmbed()
      .setColor("RED")
      .addField(
        `**${client.user.username} | Renk Komutu**`,
        `Lütfen Bir Renk Belirtin!\nÖrnek: \${önEk}renk #ffffff`
      )
      .setFooter(client.user.username)
      .setThumbnail(client.user.avatarURL())
      .setTimestamp();

    message.channel.send(renkYok);
  }
  if (Renk) {
    message.channel.send(
      new MessageEmbed()
        .setColor(Renk)
        .setTitle(`İşte ${args[0]} Rengi`)
        .setURL(narcosrenkResimi)
        .setImage(narcosrenkResimi)
    );
  }
    }
}
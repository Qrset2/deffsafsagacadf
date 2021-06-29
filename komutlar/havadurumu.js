module.exports = {
    name: 'havadurumu',
    cooldown: 1,
    aliases: ['havadurumu'],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
     const { MessageEmbed } = require("discord.js");
     const weather = require("weather-js");


  weather.find({ search: args.join(" "), degreeType: "C" }, function(
    err,
    result
  ) {
    if (result === undefined || result.length === 0) {
      message.reply("Lokasyon Gir.");
      return;
    }
    var current = result[0].current;
    var location = result[0].location;
    const embed = new MessageEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(
        `${current.observationpoint} için hava durumu`,
        client.user.avatarURL()
      )
      .setThumbnail(current.imageUrl)
      .setColor("#9dff72")
      .addField("Zaman Dilimi", `UTC${location.timezone}`, true)
      .addField("Derece Türü", location.degreetype, true)
      .addField("Sıcaklık", `${current.temperature} Derece`, true)
      .addField("Hava", `${current.feelslike}`, true)
      .addField("Rüzgar", current.winddisplay, true)
      .addField("Nem", `${current.humidity}%`, true);
    message.channel.send(embed);
  });
}

}

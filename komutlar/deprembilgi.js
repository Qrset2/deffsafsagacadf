module.exports = {
    name: 'deprembilgi',
    cooldown: 1,
    aliases: ["depremler", "deprem-bilgi"], 
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
const fetch = require("node-fetch");


   await fetch(
    `https://api.orhanaydogdu.com.tr/deprem/live.php?limit=10`
  )
    .then(res => res.json())
    .then(json => {
      let cikti = json.result;
      var efe = "";
      const embed = new Discord.MessageEmbed()
        .setAuthor("Türkiyedeki Son 10 Deprem")
        .setColor("#728bd6")
        .setThumbnail(
          "https://upload.wikimedia.org/wikipedia/tr/0/0f/Kandilli_Rasathanesi_ve_Deprem_Ara%C5%9Ft%C4%B1rma_Enstit%C3%BCs%C3%BC_logosu.jpg"
        )
        .setFooter(
          `Komut ${message.author.tag} tarafından kullanıldı.`,
          message.author.displayAvatarURL({ dynamic: true })
        );
      for (const ayn of cikti) {
        embed.addField(
          `${ayn.lokasyon}`,
          ` **Zaman:** ${ayn.date} **Büyüklük:** ${ayn.mag} - **Derinlik:** ${ayn.depth}km \n`
        );
      }

      message.channel.send(embed);
    });
  }



}

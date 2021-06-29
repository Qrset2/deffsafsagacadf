module.exports = {
  name: 'ticket',
  cooldown: 120,
  aliases: ['tk','TICKET'],
  permissions: [],
  async execute(message, args, cmd, client, Discord, profileData) {

    let kilitlimi = false

    const kanalKapatmaEmoji = '🗑️';
    const kilitEmoji = '🔒'


    const channel = await message.guild.channels.create(`Oda: ${message.author.tag}`);
    


    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    

    let embed = new Discord.MessageEmbed()
            .setColor('#2ECC71')
            .setTitle('Tebba Hotel || DESTEK')
            .setDescription('Botumuz veya Sunucumuz İle İlgili Bilgi Almak İstediğiniz İçin Çok Mutluyuz!\n\n'
            + `**Üyeler İçin (Herkesde Çalışır):**\n\n`
            + `Kanalı Kapatmak İçin ${kanalKapatmaEmoji} Emojisine Basın!\n\n`
            + `**Yetkililer İçin (Normal Üyelerde Çalışmaz!):**\n\n`
            + `Kanalı Kitlemek İçin ${kilitEmoji} Emojisine Basın!`)
            .setAuthor(`${message.author.tag}`)

            const ticketMessage = await channel.send(embed);
 
        

    try {
      await ticketMessage.react("🔒");
      await ticketMessage.react("🗑️");
    } catch (err) {
      channel.send("Emoji Gönderemiyorum!");
      throw err;
    }

    const collector = ticketMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
         
         if (user.hasPermission('MANAGE_CHANNELS')) {
          if (kilitlimi === false) {
           let embed6 = new Discord.MessageEmbed()
             .setColor('#F1C40F')
             .setTitle('Tebba Hotel || DESTEK')
             .setDescription('Bu Kanalı  Kitliyorum!')
             .setAuthor(`${message.author.tag}`)

           channel.updateOverwrite(message.author, {
            SEND_MESSAGES: false
           });

           channel.send(embed6)

            kilitlimi = true
          } else {
           let embed6 = new Discord.MessageEmbed()
             .setColor('#F1C40F')
             .setTitle('Tebba Hotel || DESTEK')
             .setDescription('Bu Kanalın Kilidini Açıyorum!')
             .setAuthor(`${message.author.tag}`)

           channel.updateOverwrite(message.author, {
            SEND_MESSAGES: true
           });  

           channel.send(embed6)

            kilitlimi = false
          }
         }

          



          break;
        case "🗑️":
          let embed2 = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Tebba Hotel || DESTEK')
            .setDescription('Bu Kanalı 5 Saniye İçinde Siliyorum!')
            .setAuthor(`${message.author.tag}`)

          channel.send(embed2)
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });

    let embed3 = new Discord.MessageEmbed()
            .setColor('#2ECC71')
            .setTitle('Tebba Hotel || DESTEK')
            .setDescription(`Sizinle Birazdan İlgileneceğiz! ${channel}`)
            .setAuthor(`${message.author.tag}`)

    message.channel
      .send(embed3)
      .then((msg) => {
        setTimeout(() => msg.delete(), 7000);
        setTimeout(() => message.delete(), 3000);
      })
      .catch((err) => {
        throw err;
      });
  },
};

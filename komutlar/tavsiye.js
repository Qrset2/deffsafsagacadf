



module.exports = {
  name: 'tavsiye',
  cooldown: 120,
  aliases: ['tv', 'öneri', 'TAVSIYE'],
  permissions: [],
  async execute(message, args, cmd, client, Discord, profileData) {

    let SendedMessage = args.join(' ')

    if (SendedMessage) {
      let embed = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic: true }))
         .setColor("#2ECC71")
         .setTitle(`**${message.author.tag}** Adlı Kullanıcının Tavsiyesi:`)
         .addFields(
           {name: 'Kullanıcı',  value: `Kullanıcı: **${message.author.tag}**`},
           {name: 'Tavsiye (Komut Alanına t!tavsiye Yazarak Tavsiye Verebilirsiniz!)', value: `${SendedMessage}`})
         
      
  
      const embedMessage = await message.channel.send(embed)

      let embed2 = new Discord.MessageEmbed()
       .setTitle("Tebba Hotel || Küfür Kontrol")
       .setDescription(`**${message.author.tag}** Adlı Kullanıcı Şöyle Bir Tavsiyede Bulundu: ${SendedMessage}\n\n`
       + 'Onaylamak İçin ✅ Emojisine Basın.\n\n'
       + 'Reddetmek İçin ❎ Emojisine Basın.')
     

      let silindiEmbed = new Discord.MessageEmbed()
       .setTitle("Bu Tavsiye Küfürlü İçerik Yüzünden Silinmiştir.")

      let silindiEmbed2 = new Discord.MessageEmbed()
       .setTitle("Bu Tavsiye +18 İçerik Yüzünden Silinmiştir.")

       let embed3 = new Discord.MessageEmbed()
       .setTitle("Tebba Hotel || +18 Kontrol")
       .setDescription(`**${message.author.tag}** Adlı Kullanıcı Şöyle Bir Tavsiyede Bulundu: ${SendedMessage}\n\n`
       
       + 'Onaylamak İçin ✅ Emojisine Basın.\n\n'
       + 'Reddetmek İçin ❎ Emojisine Basın.')

      const embed2Message = await message.channel.send(embed2)


     const collector = embed2Message.createReactionCollector(
       (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
       { dispose: true }
     );



    
    

     try {
      await embedMessage.react("👍");
      await embedMessage.react("👎");
      await embed2Message.react("✅");
      await embed2Message.react("❎");
      await message.delete();
     } catch (err) {
      channel.send("Emoji Gönderemiyorum!");
      throw err;
     }

     collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "❎":
         embedMessage.edit(silindiEmbed)
      };
     })
    }

    

  }
}
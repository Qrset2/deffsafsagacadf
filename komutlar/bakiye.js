module.exports = {
  name: "bakiye",
  cooldown: 5,
  aliases: ["bak", "bk"],
  permissions: [],
  async execute(message, args, cmd, client, Discord, profileData) {



   if (args[0] === 'cüzdan') {
    let embed = new Discord.MessageEmbed()
      .setTitle(`**${message.author.username}** Adlı Kullanıcının `)
      .setDescription( `Cüzdanında **🪙${profileData.coins}** Coini Var.`)
      .setColor('RANDOM')

      message.channel.send(embed);
   } 

   if (args[0] === 'banka') {
     let embed2 = new Discord.MessageEmbed()
      .setTitle(`**${message.author.username}** Adlı Kullanıcının `)
      .setDescription( `Bankasında **🪙${profileData.bank}** Coini Var.`)
      .setColor('RANDOM')


      message.channel.send(embed2);
   }


   if (!args[0]) {
     message.channel.send(`<@${message.author.id}>, Lütfen Coininizin Olduğu Yeri Yazın. [Örnek: !bakiye banka]`)
   }
   


  },
};
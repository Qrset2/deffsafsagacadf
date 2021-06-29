const profileModel = require("../models/profileSchema");

const adminids = [
  '592433817353191463',
  '488670929711529997'
];


module.exports = {
  name: "admin-coinver",
  cooldown: 5,
  aliases: [],
  permissions: ["ADMINISTRATOR"],
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!adminids.includes(message.member.id)) return message.channel.send(`Üzgünüm Sadece **Krichi** ve **Qrset** Bu Komutu Kullanabilir 😔`);
    if (!args.length) return message.channel.send("Coin Vermek İçin Birini Eklemelisin.");
    const amount = args[1];

    if (amount > 1000000) return message.reply("DataBasenin çökmemesi için maksimum  :coin:1000000 coin verebilirsin")
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("Kullanıcıyı Bulamıyorum!");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Verilecek Coin Miktarı Bir Sayı Olmalıdır.");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`Bu Kullanıcı Verilerime Tanımlanmamış.`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: amount,
          },
        }
      );

      return message.channel.send(`${target} Adlı Kullanıcıya **🪙${amount}** Coin Başarıyla Verildi`);
    } catch (err) {
      console.log(err);
    }
  },
};
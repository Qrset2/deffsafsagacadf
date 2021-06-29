const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  cooldown: 5,
  aliases: ["wd"],
  permissions: [],
  async execute(message, args, cmd, client, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send(`<@${message.author.id}>, Çekilecek Miktar Bir Sayı Olmalı.`);

    try {
      if (amount > profileData.bank) return message.channel.send(`<@${message.author.id}>, Yeterli Paranız Yok.`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );

      return message.channel.send(`<@${message.author.id}>, Bankanızdan **🪙${amount}** Coin Çektiniz.`);
    } catch (err) {
      console.log(err);
    }
  },
};
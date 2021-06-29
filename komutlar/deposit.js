const profileModel = require("../models/profileSchema");


module.exports = {
  name: "deposit",
  cooldown: 5,
  aliases: ["dep"],
  permissions: [],
  async execute(message, args, cmd, client, Discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send(`<@${message.author.id}>, Yatıracağınız Miktarı Bir Sayı Olarak Girin.`);
    try {
      if (amount > profileData.coins) return message.channel.send(`<@${message.author.id}>, Yeterli Paranız Yok.`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(`<@${message.author.id}>, Bankanıza **🪙${amount}** Coin Yatırdınız.`);
    } catch (err) {
      console.log(err);
    }
  },
};
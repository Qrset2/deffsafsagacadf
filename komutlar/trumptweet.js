
const { get } = require("superagent");

module.exports = {
  name: 'trumptweet',
  cooldown: 5,
  aliases: ['tt','TRUMPTWEET'],
  permissions: [],
  async execute(message, args, cmd, client, Discord, profileData) {

        try {
            if(!args[0]){
    message.channel.send(' **UYARI**\n`Yazı giriniz Türkçe karakter kullanmayınız Örnek: **ı** yerine **i** giriniz.!`')
    return;
    }
            let url = `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${args.join(" ")}`
            get(url).then(res => {
                const embed = new Discord.MessageEmbed()
                 .setColor("0x36393E")
                 .setAuthor("Trump diyorki..")
                  .setImage(res.body.message)
            setTimeout(() => {
                return message.channel.send(embed);
            }, 100);
        });
    } catch(err) {
        console.log(err)    
    }
  }
}
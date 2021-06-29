module.exports = {
    name: 'yaz-tatili',
    cooldown: 1,
    aliases: [''],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
      const ms = require("parse-ms");



  let silivri = new Date("2021-07-02 00:00:00");
  let soguktur = ms(silivri - Date.now());

const tayyipmk = new Discord.MessageEmbed()
.setTitle(`**YAZ TATİLİNE NE KADAR KALDI?**`)
.addField('GÜN:', soguktur.days)
.addField('SAAT:', soguktur.hours)
.addField('DAKİKA:', soguktur.minutes)
.addField(':white_check_mark:','bu kadar kaldı.')
.setTimestamp()
.setFooter('Silivri soğuktur')
message.channel.send(tayyipmk)

  

  }
}
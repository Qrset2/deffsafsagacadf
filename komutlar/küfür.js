module.exports = {
    name: 'küfür-ayarla',
    cooldown: 1,
    aliases: ['küfür'],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
    const db = require('quick.db')

   
if(args[0] === 'aktif') {
    db.set(`kufur_${message.guild.id}`, "acik")
    message.channel.send('Başarılı Şekilde `Aktif` Edildi.')
  return
}

if(args[0] === 'deaktif') {
    db.delete(`kufur_${message.guild.id}`)
    message.channel.send('Başarılı Şekilde `Deaktif` Edildi')
    return
}


  message.channel.send('Lüten `Aktif` yada `Deaktif` Yazın!')

  }
}
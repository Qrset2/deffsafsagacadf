const ascii = require('ascii-table');

const prettyMilliseconds = require('pretty-ms');

const phaseOption = process.env.LOG_phaselogs

let table = new ascii("Hazırlık Aşaması | Aşama 3")
table.setHeading('Hazırlanacaklar', 'Durum', 'Önyükleme Durumu')


module.exports = (Discord, client) =>{

  
  if (client.user) {
    table.addRow('Bot Hesabı', 'Bot Hesabı Doğrulandı', 'Önyükleme Tamamlandı')
  } else {
    table.addRow('Bot Hesabı', 'Bot Hesabı Doğrulanamadı', 'Önyükleme Bir Hata Yüzünden Tamamlanamadı')
  }

  if (Discord) {
    table.addRow('Dosyalar', 'Dosyalar Doğrulandı', 'Önyükleme Tamamlandı')
  } else {
    table.addRow('Dosyalar', 'Dosyalar Doğrulanamadı', 'Önyükleme Bir Hata Yüzünden Tamamlanamadı')
  }

  if (phaseOption === 'true') {
   console.log(table.toString())
  }

  client.user.setActivity('Tebba Türkiye | www.tebba.biz')

 }


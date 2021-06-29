const Discord = require('discord.js');




const client = new Discord.Client();

const logOption = process.env.LOG_modulelogs
const phaseOption = process.env.LOG_phaselogs

const logs = require('discord-logs');
logs(client);



client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.logger =  require('./utils/logger.js'), (client)
process.on('unhandledRejection', rejection => client.logger.error('unhandledRejection', rejection));


['commandLoader', 'eventLoader'].forEach(handler =>{
  require(`./loaders/${handler}`)(client, Discord);
})

const keepAlive = require('./utils/server')



if (logOption === 'true') {
 client.logger.info('Komut İzinleri Modülü', 'Komut İzinleri Modülü Yükleniyor...')


 client.logger.info('Cooldown Modülü', 'Cooldown Modülü Yükleniyor...')

 client.logger.info('Mesaj Modülü', 'Mesaj Modülü Yükleniyor...')

 client.logger.info('Komut İzinleri Modülü', 'Komut İzinleri Modülü Başarıyla Yüklendi Ve Çalıştırılmaya Hazır.')

 client.logger.info('Cooldown Modülü', 'Cooldown Modülü Başarıyla Yüklendi Ve Çalıştırılmaya Hazır.')

 client.logger.info('Mesaj Modülü', 'Mesaj Modülü Başarıyla Yüklendi Ve Çalıştırılmaya Hazır.')
}







client.logger.info('Log Sistemi',`LOG_modulelogs ayarı: ${logOption}`)
client.logger.info('Log Sistemi',`LOG_phaselogs ayarı: ${phaseOption}`)

console.log(' ')

client.logger.warn('Dikkat', 'Lütfen Aşamalardaki Yüklendi, Durum gibi şeylere güvenmeyin şuan v2 sürümünde olan log sistemi, tahminen v12 sürümünde tam çalışır hale gelecektir.')



const db = require('quick.db')

client.on("message", async msg => {
  

 const i = await db.fetch(`kufur_${msg.guild.id}`)
    if (i == "acik") {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  
  
 const i = db.fetch(`${oldMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete();
                          
                      return oldMessage.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

const mongoose = require('mongoose');
const mongooseUrl = 'mongodb+srv://dbUser4:asas5654s@pyhe-bot.k89cv.mongodb.net/test';
mongoose
  .connect(mongooseUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }).then(() => {
    console.log(' ');
  }).catch((err) => {
    console.log(err)
  })

keepAlive();


client.login('ODU1MDM0Nzc0Mzc1NDk3NzQ4.YMsnLw.q2idZF6v9jYMJ1D6_hvhHW7F6sY')


const logOption = process.env.LOG_modulelogs



const captcha = require("captcha-plus");


const cooldowns = new Map();

const fs = require('fs')

const profileModel = require('../../models/profileSchema');





module.exports = async (Discord, client, message) => {

  


  const prefix = process.env.PREFIX






  if (message.channel.type === "dm") {
     console.log(`Mesaj Alındı: ${message.content} || ${message.author.username} Tarafından Gönderildi ||${message.author.username}_dm Kanalına Gönderildi! 💬`);    
     console.log(' ')
  } 


  if (message.channel.type === "text") {
     console.log(`Mesaj Alındı: ${message.content} || ${message.author.username} Tarafından Gönderildi || #${message.channel.name} Kanalına Gönderildi || ${message.channel.guild} Sunucusuna Gönderildi! 💬`);
     console.log(' ')
  }


   if (logOption === 'true') {
    client.logger.info('Mesaj Modülü', 'Mesaj Alındı Ve Gerekli İşlemler Başlatıldı.')

    console.log(' ')
   }



    let profileData;

    try {
      profileData = await profileModel.findOne({ userID: message.author.id });
      if (!profileData) {
        let profile = await profileModel.create({
          userID: message.author.id,
          serverID: message.guild.id,
          coins: 100,
          bank: 0,
        });
        profile.save();
      }
    } catch (err) {
      console.log(err);
    }
   
   if (logOption === 'true') {
    client.logger.info('DataBase Modülü', 'DataBase Hazırlandı.')

    console.log(' ')
   }


    if(!message.content.startsWith(prefix) || message.author.bot) return;

   if (logOption === 'true') {
    client.logger.info('Mesaj Modülü', 'Prefix Bulundu.')

    console.log(' ')
   }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (!cmd) return;



    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (!command) return;

    if (logOption === 'true') {
     client.logger.info('Mesaj Modülü', 'Komut Doğrulandı, Komut İzinleri Modülü Başlatılıyor..')

     console.log(' ')
    }
    

    

 



    const validPermissions = [
      "CREATE_INSTANT_INVITE",
      "KICK_MEMBERS",
      "BAN_MEMBERS",
      "ADMINISTRATOR",
      "MANAGE_CHANNELS",
      "MANAGE_GUILD",
      "ADD_REACTIONS",
      "VIEW_AUDIT_LOG",
      "PRIORITY_SPEAKER",
      "STREAM",
      "VIEW_CHANNEL",
      "SEND_MESSAGES",
      "SEND_TTS_MESSAGES",
      "MANAGE_MESSAGES",
      "EMBED_LINKS",
      "ATTACH_FILES",
      "READ_MESSAGE_HISTORY",
      "MENTION_EVERYONE",
      "USE_EXTERNAL_EMOJIS",
      "VIEW_GUILD_INSIGHTS",
      "CONNECT",
      "SPEAK",
      "MUTE_MEMBERS",
      "DEAFEN_MEMBERS",
      "MOVE_MEMBERS",
      "USE_VAD",
      "CHANGE_NICKNAME",
      "MANAGE_NICKNAMES",
      "MANAGE_ROLES",
      "MANAGE_WEBHOOKS",
      "MANAGE_EMOJIS",
    ]


   
  if (command){
    if(command.permissions.length){
      let invalidPerms = []
      for(const perm of command.permissions){
        if(!validPermissions.includes(perm)){
          return console.log(`Bilinmeyen ${perm} İzin.`);
        }
        if(!message.member.hasPermission(perm)){
          invalidPerms.push(perm);
        }
      }
      if (invalidPerms.length){
        return message.channel.send(`Bu Komudu Kullanabilmek İçin \`${invalidPerms}\` İzinlerine Sahip Olmalısın`);
      }
    }
  }
   if (logOption === 'true') {
    client.logger.info('Permissions Modülü', 'Komut İzinleri Doğrulandı, Cooldown Modülü Başlatılıyor..')

    console.log(' ')
   }
  

  

    



    


   
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`Lütfen, ${command.name} Komudunu Çalıştırmak İçin ${time_left.toFixed(1)} Saniye Bekleyin!`);
        }
    }

     
    time_stamps.set(message.author.id, current_time);
   
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    if (logOption === 'true') {
     client.logger.info('Cooldown Modülü', 'Komut Cooldownu Doğrulandı, Komut Başlatılıyor..')

     console.log(' ')
    }
    





    try{
       command.execute(message, args, cmd, client, Discord, profileData);
       client.logger.log('message.js',`Komut Çalıştırıldı: ${command.name} || ${message.author.username} Tarafından`)
       console.log(' ')
    } catch (err){
        client.logger.error('message.js',`${command.name} Komudunu Çalıştırırken Bir Sorun Oluştu!`);
        console.log(err);
    }
}


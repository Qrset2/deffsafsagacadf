const fs = require('fs');

const ascii = require('ascii-table');

const phaseOption = process.env.LOG_phaselogs

const prettyMilliseconds = require('pretty-ms');

let table = new ascii("Komut Yükleme Aşaması | Aşama 1")
table.setHeading('Komutlar', 'Durum', 'Yükleme Durumu')



module.exports = (client, Discord) =>{
 const commandFiles = fs.readdirSync('./komutlar/').filter(file =>  file.endsWith('.js'));
 for(const file of commandFiles){
     const command = require(`../komutlar/${file}`);
    

     if (command.name) {
      client.commands.set(command.name, command)
      table.addRow(file, "Başarılı", "Yüklendi")
     } else {
      table.addRow(file, "Başarısız", "Yüklenemedi")
      continue;
     }
  }
 
  if (phaseOption === 'true') {
   console.log(table.toString())
  }
}

 

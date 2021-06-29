const fs = require('fs');

const ascii = require('ascii-table')
let table = new ascii("Event Yükleme Aşaması | Aşama 2")
table.setHeading('Eventler', 'Durum', 'Yükleme Durumu')

const phaseOption = process.env.LOG_phaselogs

module.exports = (client, Discord) =>{
  const load_dir = (dirs) =>{
    const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));

    for(const file of event_files){
     

      if (file) {
        const event = require(`../events/${dirs}/${file}`);
        const event_name = file.split('.')[0];

        if (event) {
          table.addRow(file, "Başarılı", "Yüklendi")
          client.on(event_name, event.bind(null, Discord, client));
        } else {
          table.addRow(file, "Başarısız", "Yüklenemedi")
          continue;
        }
      }
     }
    }
  

  ['client', 'guild'].forEach(e => load_dir(e));

  if (phaseOption === 'true') {
   console.log(table.toString())
  }
}
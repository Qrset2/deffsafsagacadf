module.exports = {
    name: 'ping',
    cooldown: 1,
    aliases: ['ping'],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
    const db = require('wio.db');


  
  const kinda = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setDescription('Ping Hesaplanıyor...')
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(kinda)
   let diff = (Date.now() - start); 
   let API = (Discord.ws.ping).toFixed(2)
    
    setInterval(() => {
        
   const only = new Discord.MessageEmbed()
   
   .setDescription(`\nMesaj Gecikme Süresi ; **${diff}Ms** \n\nBot Gecikme Süresi ; **${API}Ms**`)
   .setColor('GREEN')
   
    mesaj.edit(only);
      
    }, 5000)
  
  
  
  



 }
}
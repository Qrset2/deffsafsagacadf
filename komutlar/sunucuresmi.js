module.exports = {
    name: 'sunucuresmi',
    cooldown: 1,
    aliases: ['sunucuresmi', "swresmi"],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
 
   if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  
  const CrewCodeembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.guild.name} Adlı Sunucunun Resmi`)
  .setImage(message.guild.iconURL())
  message.channel.send(CrewCodeembed)


  }
}
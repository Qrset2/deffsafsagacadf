module.exports = {
    name: 'kare',
    cooldown: 1,
    aliases: ['kare'],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
      const math = require('mathjs');
const data = require('quick.db');

if(await data.fetch(`slm.${message.author.id}.${message.guild.id}.kare`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**6 saniyenin altında hızlı kullanamazsın!**`));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`${message.author} **Örnek verelim**:
\`\`\`a!kare 10\`\`\`
**olarak giriniz.**`)).then(a => a.delete({timeout: 10000}))

const embed = new Discord.MessageEmbed()
.setThumbnail('https://cdn.glitch.com/322deae8-c50e-4ad8-a7d2-ff13f650466d%2Fsource%20(4).gif')
.setColor('#f1c335')
.setDescription(`• \`${args[0]}²\` **sayısının karesi**:
\`\`\`${math.evaluate(`${args[0]} * ${args[0]}`)}\`\`\``)
.addField('Nasıl oluyor?', `\`\`\`${args[0]} x ${args[0]} Çarpıyoruz.\`\`\``)
.setFooter(`${message.author.username}: ${args[0]} Sayısının karesini öğrendi`);

message.channel.send(embed);
message.delete({timeout: 5000});
data.set(`slm.${message.author.id}.${message.guild.id}.kare`, 'codare');
setTimeout(() => {
data.delete(`slm.${message.author.id}.${message.guild.id}.kare`);
}, 6000);


  }
}
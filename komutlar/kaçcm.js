module.exports = {
    name: 'kaçcm',
    cooldown: 1,
    aliases: ['kaçcm'],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
const data = require('quick.db');


  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }
let slm = ['2', '4', '8', '12', '15', '20', '24', '26', '32', '38', '41', '54', '60'];
message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription(`${message.author} **Hemen ölçüyoruz 1 saniye...**`)).then(m => {
setTimeout(() => {
m.edit(new Discord.MessageEmbed().setDescription(`${message.author} **Malafatın __${slm.random()}CM__ 🍆**`).setImage('https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2Feggplant-transparent-animated-gif-3.gif'))
}, 4500)
})



  }
}
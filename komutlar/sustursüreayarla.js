
const reasons = [
  'SPAM',
  'REKLAM',
  'KUFUR',
  'ARGO'
]



module.exports = {
  name: 'susturmasüreayarla',
  cooldown: 5,
  aliases: ['ssa', 'SSA'],
  permissions: [],
  async execute(message, args, cmd, client, Discord, profileData) {
     const db = require('quick.db')

     const kategori = args[0]

     if (!kategori) return

     const sure = args[1]

     if (!sure) return

     if (!reasons.includes(kategori)) return message.reply('Lütfen Geçerli Bir Nedeni Ayarlamaya Çalışın. [Örnek: !ssa REKLAM 2]')

     db.set(`${kategori}_${message.guild.id}`, sure)

     message.reply(`${kategori} Adlı Nedenin Süresi **${sure} SAAT** olarak ayarlandı.`)
  }
}
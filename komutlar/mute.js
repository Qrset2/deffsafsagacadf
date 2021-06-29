const muteSchema = require('../models/muteSchema')




module.exports = {
    name: 'mute',
    cooldown: 5,
    aliases: ['MUTE','sustur'],
    permissions: ["ADMINISTRATOR", "MANAGE_ROLES"],
    async execute(message, args, cmd, client, Discord, profileData){
      const { guild, author: staff } = message

      const db = require('quick.db')

      const reasons = {
       SPAM: db.fetch(`SPAM_${message.guild.id}`),
       REKLAM: db.fetch(`REKLAM_${message.guild.id}`),
       KUFUR: db.fetch(`KUFUR_${message.guild.id}`),
       ARGO: db.fetch(`ARGO_${message.guild.id}`)
      }


      if (!reasons[args[1]]) return message.reply(`Lütfen İlk ${args[1]} Nedeninin Süresini Ayarlayın`)


      if (args.length !== 2) {
        message.reply(
          `Doğru Kullanılışı: !mute <Kullanıcı> <Sebep>`
        )
        return
      }

      const target = message.mentions.users.first()
      if (!target) {
        message.reply('Lütfen Susturulacak Kullanıcıyı Etiketleyin.')
        return
      }

      const reason = args[1].toUpperCase()
      if (!reasons[reason]) {
        let validReasons = ''
        for (const key in reasons) {
          validReasons += `${key}, `
        }
        validReasons = validReasons.substr(0, validReasons.length - 2)

        message.reply(
          `Bilinmeyen Sebep. Girilebilecek Sebepler: ${validReasons}`
        )
        return
      }

      const previousMutes = await muteSchema.find({
        userId: target.id,
      })

      const currentlyMuted = previousMutes.filter((mute) => {
        return mute.current === true
      })

      if (currentlyMuted.length) {
        message.reply('Kullanıcı Zaten Susturulmuş.')
        return
      }

      let duration = reasons[reason] * (previousMutes.length + 1)

      const expires = new Date()
      expires.setHours(expires.getHours() + duration)

      const mutedRole = guild.roles.cache.find((role) => {
        return role.name === 'mute'
      })

      const defaultRole = guild.roles.cache.find((role) => {
        return role.name === 'member'
      })
      if (!mutedRole) {
        message.reply('"mute" rolü bulunamadı.')
        return
      }

      if (!mutedRole) {
        message.reply('"member" rolü bulunamadı.')
        return
      }
      const targetMember = (await guild.members.fetch()).get(target.id)

      if (!targetMember) return message.reply('Kullanıcı Bulunamadı.')
      targetMember.roles.add(mutedRole)
      targetMember.roles.remove(defaultRole)

      await new muteSchema({
        userId: target.id,
        guildId: guild.id,
        reason,
        staffId: staff.id,
        staffTag: staff.tag,
        expires,
        current: true,
      }).save()

      message.reply(
        `<@${target.id}> kullanıcısını "${reason}" Sebebiyle susturdunuz. **${duration} SAAT** sonra susturulması kaldırılacak.`
      )
  }
    }






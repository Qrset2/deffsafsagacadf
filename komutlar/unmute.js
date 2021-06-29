
const muteSchema = require('../models/muteSchema')

module.exports = {
    name: 'unmute',
    cooldown: 5,  
    aliases: ['um','umute','UNMUTE'],
    permissions: ["ADMINISTRATOR", "MANAGE_ROLES"],
    async execute(message, args, cmd, client, Discord, profileData){
      
      const { guild } = message

      if (args.length !== 1) {
        message.reply(
          `Doğru Kullanıcı: !mute <Kullanıcının Etiketi VEYA IDsi`
        )
        return
      }

      let id = ''

      const target = message.mentions.users.first()
      if (target) {
        id = target.id
      } else {
        id = args[0]
      }

      const result = await muteSchema.updateOne(
        {
          guildId: guild.id,
          userId: id,
          current: true,
        },
        {
          current: false,
        }
      )

      if (result.nModified === 1) {
        const mutedRole = guild.roles.cache.find((role) => {
          return role.name === 'mute'
        })

      const defaultRole = guild.roles.cache.find((role) => {
        return role.name === 'member'
      })

        if (mutedRole) {
          const guildMember = guild.members.cache.get(id)
          guildMember.roles.remove(mutedRole)
          guildMember.roles.add(defaultRole)
        }

        message.reply(`<@${id}> Adlı Kullanıcının Susturulması Kaldırıldı.`)
      } else {
        message.reply('Kullanıcı Zaten Susturulmamış.')
      }
    }
}




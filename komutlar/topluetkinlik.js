


const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')





  module.exports = {
  name: 'topluetkinlik',
  cooldown: 30,
  aliases: ['te', 'TOPLUETKİNLİK'],
  permissions: [],
  async execute(message, args, cmd, client, Discord, profileData) {
       if(!message.member.voice.channel) return message.reply('Bir Ses Kanalına Gir')
  if(!args[0]) return message.reply('Bir Değer gir')
  if(args[0] == 'yt') {
  const embed = new MessageEmbed()
  fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                      method: "POST",
                      body: JSON.stringify({
                          max_age: 86400,
                          max_uses: 0,
                          target_application_id: "755600276941176913",
                          target_type: 2,
                          temporary: false,
                          validate: null
                      }),
                      headers: {
                          "Authorization": `Bot ${client.token}`,
                          "Content-Type": "application/json"
                      }
                  })
                  .then(res => res.json())
                  .then(invite => {
                      embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin.`)
                      embed.setColor('RANDOM')
                          message.channel.send(embed)
                  })
  } else if(args[0] == 'bio') {
  const embed = new MessageEmbed()
  fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                    method: "POST",
                      body: JSON.stringify({
                          max_age: 86400,
                          max_uses: 0,
                          target_application_id: "773336526917861400",
                          target_type: 2,
                          temporary: false,
                          validate: null
                      }),
                      headers: {
                          "Authorization": `Bot ${client.token}`,
                          "Content-Type": "application/json"
                      }
                  })
                  .then(res => res.json())
                  .then(invite => {
                      embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin.`)
                      embed.setColor('RANDOM')
                          message.channel.send(embed)
                  })
  } else if(args[0] == 'pn') {
  const embed = new MessageEmbed()
  fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                    method: "POST",
                      body: JSON.stringify({
                          max_age: 86400,
                          max_uses: 0,
                          target_application_id: "755827207812677713",
                          target_type: 2,
                          temporary: false,
                          validate: null
                      }),
                      headers: {
                          "Authorization": `Bot ${client.token}`,
                          "Content-Type": "application/json"
                      }
                  })
                  .then(res => res.json())
                  .then(invite => {
                      embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin.`)
                      embed.setColor('RANDOM')
                          message.channel.send(embed)
                  })
  } else if(args[0] == 'fio') {
  const embed = new MessageEmbed()
  fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
               method: "POST",
                      body: JSON.stringify({
                          max_age: 86400,
                          max_uses: 0,
                          target_application_id: "814288819477020702",
                          target_type: 2,
                          temporary: false,
                          validate: null
                      }),
                      headers: {
                          "Authorization": `Bot ${client.token}`,
                          "Content-Type": "application/json"
                      }
                  })
                  .then(res => res.json())
                  .then(invite => {
                      embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin.`)
                      embed.setColor('RANDOM')
                          message.channel.send(embed)
                  })
  } else {
    const embed = new MessageEmbed()
    embed.setDescription(`Geçersiz Değer, değerler:\nYoutube: yt\nBetrayal.io: bio\nPoker Night: pn\nFishington.io: fio`)
    embed.setColor('RED')
    message.channel.send(embed)
  }

  }
}
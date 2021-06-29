module.exports = {
    name: 'avatar',
    cooldown: 1,
    aliases: ['avatar', "pp"],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
      const db = require("wio.db")

  try {
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
    user = message.author;
  }

  message.channel.send({ embed: {
    author: {
      name: user.tag
    },
    color: "#4B0082",
    description: `[\`WEBP\`](${user.displayAvatarURL({ format: 'webp', dynamic: true, size:4096 })})・[\`PNG\`](${user.displayAvatarURL({ format: 'png', dynamic: true, size:4096 })})・[\`JPG\`](${user.displayAvatarURL({ format: 'jpg', dynamic: true, size:4096 })})`,
    image: {
      url: user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 })
    },
    footer: {
      text: "Tebba Hotel",
      icon_url: client.user.avatarURL({ format: 'png' })
    },
    
    timestamp: Date.now()
  }})
  } catch{}

  }
}
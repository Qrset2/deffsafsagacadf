module.exports = {
    name: 'kullanıcı-bilgi',
    cooldown: 1,
    aliases: [''],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){
      const moment = require('moment');
      moment.locale('tr');



if(!message.guild.members.cache.get(client.user.id).hasPermission('BAN_MEMBERS')) return message.channel.send("I need the **Ban Members** authority.")

message.guild.members.ban(args[0]).then(async (member) => {
let user;
if(member instanceof Discord.GuildMember) { user = member.user; }
else if(member instanceof Discord.User) { user = member; }
else { user = await client.users.fetch(member) };
message.guild.members.unban(args[0]);

message.channel.send(new Discord.MessageEmbed().setTitle(user.tag).setColor('GREEN').setThumbnail(user.avatarURL({dynamic: true}))
.addField(`Information:`, `**• Creation Date:** ${moment(user.createdAt).format('DD/MM/YYYY')}
**• Username:** ${user.username}
**• Discriminator:** ${user.discriminator}`));
});

 }
}

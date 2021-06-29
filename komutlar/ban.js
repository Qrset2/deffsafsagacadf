module.exports = {
    name: 'ban',
    cooldown: 5,
    aliases: ['BAN','bn'],
    permissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    async execute(message, args, cmd, client, Discord, profileData){
      
       const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("Kullanıcı Başarıyla Sunucudan Banlandı!");
        }else{
            message.channel.send(`Bu Kullanıcıyı Atamaszın!`);
        }
      
    }
}

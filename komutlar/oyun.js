module.exports = {
    name: 'connect-four',
    cooldown: 1,
    aliases: ['connectfour', 'connect-four', 'dördünü-birleştir', 'dordunubirlestir', 'dördünübirleştir', 'dordunu-birlestir'],
    permissions: [],
    async execute(message, args, cmd, client, Discord, profileData){

      const GameCord = require('gamecord-fork').djs

const db = require('quick.db')



    
    new GameCord.ConnectFour(message)

         .run()



  }
}
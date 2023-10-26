const moment = require("moment")
moment.locale("tr")
const db = require('orio.db');
const { EmbedBuilder } = require('discord.js')

module.exports = {
config:{

    name: "günlük",
    description: "Günlük coin alırsın",
    aliases: [],
    kategori: "Ekonomi",

},
    run: async(client, message, args) => {

let kontrol = Number(db.fetch(`günlük_${message.author.id}`))
if(kontrol > moment.utc().format("X")){
    const bisonraki = new EmbedBuilder()
.setDescription(`<a:ghost_no:1156683548678434946> **Bir Sonraki Günlük Ödül için Süreniz:** <t:${kontrol}:R> Yani (<t:${kontrol}:F>)`)
.setColor('#000001')
message.channel.send({embeds:[bisonraki]})

}else {
    
let kontrol2 = Number(db.fetch(`coın_${message.author.id}`))
if(!kontrol2) db.set(`coın_${message.author.id}`, 0)

db.add(`coın_${message.author.id}`, 600)
db.set(`günlük_${message.author.id}`, moment.utc().add(1, 'day').format("X"))
const günlük = new EmbedBuilder()
.setDescription(`<a:ghost_won:1164967166999801940> __600__ **Won Başarıyla Hesabınıza Eklenmiştir.** :tada:`)
.setColor('#000001')
message.channel.send({embeds:[günlük]})

}


},

}
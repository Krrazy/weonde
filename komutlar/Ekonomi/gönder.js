const Discord = require("discord.js");
const db = require('orio.db');

module.exports = {
config:{
    
name: "cgönder",
description: "Belirtilen Kişiye Coin Gönderir",
aliases: [],
kategori: "Ekonomi",
},
    run: async(client, message, args) => {

let coin = db.fetch(`coın_${message.author.id}`)
let miktar = args[1]

let user = message.mentions.users.first();

db.add(`coın_${message.author.id}`, -Number(miktar))
let kontrol = db.fetch(`coın_${user.id}`)
if(!kontrol) db.set(`coın_${user.id}`,0)
db.add(`coın_${user.id}`, Number(miktar))
const gönder = Discord.EmbedBuilder()
.setDescription(`<a:ghost_yes:1156683590881521705> **Başarılı Bir Şekilde** __${miktar}__ **Miktar WON** ${user} **İsimli Kişiye Gönderildi.** <a:ghost_won:1164967166999801940>`)
.setColor('#000001')
message.channel.send({embeds:[gönder]})

if(!user) return message.reply(`<a:ghost_no:1156683548678434946> **lütfen gönderilecek kişiyi belirtiniz.**`)
if(message.author.id === user.id) return message.reply(`<a:ghost_no:1156683548678434946> **Kendine para gönderemezsin.**`)
if(user.bot === true) return message.reply(`<a:ghost_no:1156683548678434946> **Bir Bota coin gönderemezsiniz.**`)
if(!miktar) return message.reply(`<a:ghost_no:1156683548678434946> **Lütfen gönderilecek miktarı giriniz.**`)
if(isNaN(miktar)) return message.reply(`<a:ghost_no:1156683548678434946> **Gönderilecek miktar sayı ile olmalıdır.**`)
if(coin < miktar) return message.reply(`<a:ghost_no:1156683548678434946> **Gönderilecek miktar cüzdanınızda yok.**`)




},

}
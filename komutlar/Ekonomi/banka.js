const moment = require("moment")
moment.locale("tr")
const db = require('orio.db');
const {EmbedBuilder} = require('discord.js')
module.exports = {
    config:{
    name: "banka",
    description: "Bankana bakarsın",
    aliases: [],
    kategori: "Ekonomi",
},
    run: async(client, message, args) => {
let tekrar = db.fetch("vadelı_hesaplar")
if(!tekrar) db.set("vadelı_hesaplar", [])

let banka = db.fetch(`banka_${message.author.id}`)
let bankacoin = db.fetch(`banka_coın_${message.author.id}`)
let coin = db.fetch(`coın_${message.author.id}`)
let bankavadeli = db.fetch(`banka_coın_vadelı_${message.author.id}`)
let durum;
if(banka) durum = "Aktif"

const menu = new EmbedBuilder()
.setDescription(`
> <:ghost_banka:1164969558419964046> Banka Durumu: **${durum ? durum : "DeAktif"}**
> <a:ghost_won:1164967166999801940> Bankadaki Won: **${bankacoin ? bankacoin : "0"}**
> <a:ghost_won:1164967166999801940> Vadeli Hesabındaki Won: **${bankavadeli ? bankavadeli : "0"}**
> <a:ghost_won:1164967166999801940> Cüzdanınızdaki Won: **${coin ? coin : "0"}** 

> Diğer Komutlar;
<:ghost_minicon:1158471439721173014> **w!banka kur** : Banka Hesabı Kurarsın
<:ghost_minicon:1158471439721173014> **w!banka sil** : Banka Hesabını silersin.
<:ghost_minicon:1158471439721173014> **w!banka yatır** : Banka Hesabına Para Eklersin.
<:ghost_minicon:1158471439721173014> **w!banka çek** : Banka Hesabındaki Parayı Çekersin.
<:ghost_minicon:1158471439721173014> **w!banka vade** : Vadeli hesabınız ile alakalı işlemler yaparsınız
`)
.setColor('#000001')
if(!args[0]) return message.reply({embeds: [menu]})


if(args[0] === "kur"){
let kontrol = db.fetch(`hesap_${message.author.id}`)
if(!kontrol) return message.reply(`<a:ghost_uyari:1157790781545918516> **Lütfen İlk Önce Ekonomi Hesabınızı Kurunuz.** __w!hesap kur__`)
if(banka) return message.reply(`**Şu Anda Banka Hesabınız Bulunmaktadır.**`)
if(Number(coin) < 100) return message.reply(`<a:ghost_uyari:1157790781545918516> **Banka Hesabı Açmak için 100 Won'a ihtiyacınız var.** \n <:ghost_kalpcik:1162475700243152936> Won'mu Kazanmak İstiyorsun? = __w!günlük__`)
db.set(`banka_${message.author.id}`, true)
db.set(`banka_coın_${message.author.id}`, 0)
/// db.set(`banka_kurulum_${message.author.id}`, moment.utc().format("MMDDHHmm"))
db.add(`coın_${message.author.id}`, -100)
message.reply(`<a:ghost_yes:1156683590881521705> **Hesabınız başarılı bir şekilde kurulmuştur.**`)
const kuruldu = new EmbedBuilder()
.setDescription(`<a:ghost_yes:1156683590881521705> **Banka Hesabınız Başarıyla Kurulmuştur.**`)
.setColor('#000001')
message.channel.send({embeds:[kuruldu]})


}

if(args[0] === "sil"){
if(!banka) return message.reply(`<a:ghost_no:1156683548678434946> **Şu Anda Banka Hesabınız Bulunmamaktadır.**`)
db.delete(`banka_${message.author.id}`)
db.delete(`banka_coın_${message.author.id}`)
const silindi = new EmbedBuilder()
.setDescription(`<a:ghost_yes:1156683590881521705> **Banka Hesabınız Başarıyla Datalarımızdan Silinmiştir.**`)
.setColor('#000001')
message.channel.send({embeds:[silindi]})


}

if(args[0] === "yatır"){
let kontrol = db.fetch(`hesap_${message.author.id}`)
if(!kontrol) return message.reply(`<a:ghost_uyari:1157790781545918516> **Lütfen İlk Önce Ekonomi Hesabınızı Kurunuz.** __w!hesap kur__`)
if(!banka) return message.reply(`<a:ghost_no:1156683548678434946> **Şu Anda Banka Hesabınız Bulunmaktadır.**`)

let miktar = args[1]

if(!miktar) return message.reply(`<a:ghost_no:1156683548678434946> Lütfen Banka Hesabınıza Yatırılacak Miktari Belirtiniz.`)
if(isNaN(miktar)) return message.reply(`<a:ghost_no:1156683548678434946> Yatırılacak Miktar Sayı İle Olmalıdır.`)
if(coin < miktar) return message.reply(`<a:ghost_no:1156683548678434946> Cüzdanınızda bu kadar Won bulunmamaktadır.`)
db.add(`banka_coın_${message.author.id}`, Number(miktar))
db.add(`coın_${message.author.id}`, -Number(miktar))
const bisonraki = new EmbedBuilder()
.setDescription(`<a:ghost_yes:1156683590881521705> **Banka Hesabınıza Başarılı Bir Şekilde** __${miktar}__ **Won Yatırıldı.**`)
.setColor('#000001')
message.channel.send({embeds:[bisonraki]})


}
if(args[0] === "çek"){
let kontrol = db.fetch(`hesap_${message.author.id}`)
if(!kontrol) return message.reply(`<a:ghost_uyari:1157790781545918516> **Lütfen İlk Önce Ekonomi Hesabınızı Kurunuz.** __w!hesap kur__`)
if(!banka) return message.reply(`<a:ghost_no:1156683548678434946> Şu Anda Banka Hesabınız Bulunmaktadır.`)

let miktar = args[1]

if(!miktar) return message.reply(`<a:ghost_no:1156683548678434946> Lütfen Banka Hesabınızdan çekilecek Miktari Belirtiniz.`)
if(isNaN(miktar)) return message.reply(`<a:ghost_no:1156683548678434946> Çekilecek Miktar Sayı İle Olmalıdır.`)
if(bankacoin < miktar) return message.reply(`<a:ghost_no:1156683548678434946> Banka hesabınızda bu kadar Won bulunmamaktadır.`)
db.add(`banka_coın_${message.author.id}`, -Number(miktar))
db.add(`coın_${message.author.id}`, Number(miktar))
const bisonraki = new EmbedBuilder()
.setDescription(`<a:ghost_yes:1156683590881521705> **Banka Hesabınıza Başarılı Bir Şekilde** __${miktar}__ **Coin Çekildi.**`)
.setColor('#000001')
message.channel.send({embeds:[bisonraki]})

}

if(args[0] === "vade"){
let kontrol = db.fetch(`hesap_${message.author.id}`)
if(!kontrol) return message.reply(`<a:ghost_no:1156683548678434946> **Lütfen İlk Önce Ekonomi Hesabınızı Kurunuz.** __w!hesap kur__`)
if(!args[1]) return message.reply(`<a:ghost_no:1156683548678434946> Doğru Kullanımı; **w!banka vade yatır/çek/aç/kapat**`) 


if(args[1] === "aç"){
let kontrol = db.fetch(`vadelı_hesap_${message.author.id}`)
if(kontrol) return message.reply(`<a:ghost_no:1156683548678434946> Zaten Vadeli Hesabınız bulunmakta.`)
db.set(`vadelı_hesap_${message.author.id}`, true)
db.push(`vadelı_hesaplar`, message.author.id)
const bisonraki = new EmbedBuilder()
.setDescription(`<a:ghost_yes:1156683590881521705> **Başarıyla Vadeli Hesabınız Açılmıştır.**`)
.setColor('#000001')
message.channel.send({embeds:[bisonraki]})

}
if(args[1] === "kapat"){
let kontrol = db.fetch(`vadelı_hesap_${message.author.id}`)
if(!kontrol) return message.reply(`<a:ghost_no:1156683548678434946> **Zaten Vadeli Hesabınız yok.**`)
db.delete(`vadelı_hesap_${message.author.id}`)
let miktar = db.fetch(`banka_coın_vadelı_${message.author.id}`)
db.add(`banka_coın_${message.author.id}`, Number(miktar))
db.arrayDeleteVal(`vadelı_hesaplar`, message.author.id)
db.delete(`banka_coın_vadelı_${message.author.id}`)
message.reply(`<a:ghost_yes:1156683590881521705> **Vadeli hesabınız kapatıldı.** __Vadeli hesabınızda kalan Won'lar hesabınıza aktarıldı.__`)
const bisonraki = new EmbedBuilder()
.setDescription(`<a:ghost_yes:1156683590881521705> **Vadeli Hesabınız Kapatıldı.** __Vadeli Hesabınızda Kalan ${miktar} Coin Banka Hesabınıza Aktarıldı. Bankanızdaki Coininiz ${`banka_coın_${message.author.id}`}__`)
.setColor('#000001')
message.channel.send({embeds:[bisonraki]})

}


if(args[1] === "yatır"){
let kontroll = db.fetch(`vadelı_hesap_${message.author.id}`)
if(!kontroll) return message.reply(`<a:ghost_no:1156683548678434946> **İlk Önce Vadeli hesap kurmanız gerekmekte.** __w!banka vade aç__`)
let miktar = args[2] 
if(!miktar) return message.reply(`<a:ghost_no:1156683548678434946> **Yatırılacak Won belirtiniz.**`)
if(isNaN(miktar)) return message.reply(`<a:ghost_no:1156683548678434946> **Yatırılacak Won miktarı sayı ile olmalıdır.**`)
let banka = db.fetch(`banka_coın_${message.author.id}`)
let coin = Number(miktar)
if(coin > banka) return message.reply(`<a:ghost_no:1156683548678434946> **Vadeli hesabınıza yatırılacak miktar banka hesabınızda yok.**`)
let kontrol = db.fetch(`banka_coın_vadelı_${message.author.id}`)
if(!kontrol) db.set(`banka_coın_vadelı_${message.author.id}`, 0)
db.add(`banka_coın_vadelı_${message.author.id}`, coin)
db.add(`banka_coın_${message.author.id}`, -coin)

const yatırıldı = new EmbedBuilder()
.setDescription(`<a:ghost_yes:1156683590881521705> **Vadeli Hesabınıza **${miktar}** Miktar Won Yatırıldı.**`)
.setColor('#000001')
message.channel.send({embeds:[yatırıldı]})

}
if(args[1] === "çek"){
let kontroll = db.fetch(`vadelı_hesap_${message.author.id}`)
if(!kontroll) return message.reply(`<:ghost_banka:1164969558419964046> **İlk Önce Vadeli hesap kurmanız gerekmekte.** __w!banka vade aç__`)
let miktar = args[2] 
if(!miktar) return message.reply(`<a:ghost_no:1156683548678434946> **Çekilecek Won'u belirtiniz.**`)
if(isNaN(miktar)) return message.reply(`<a:ghost_no:1156683548678434946> **Çekilecek Won miktarı sayı ile olmalıdır.**`)
let banka = db.fetch(`banka_coın_vadelı_${message.author.id}`)
let coin = Number(miktar)
if(coin > banka) return message.reply(`<a:ghost_no:1156683548678434946> **Vadeli hesabınızdan çekilecek miktar vadeli hesabınızda yok.**`)
let kontrol = db.fetch(`banka_coın_vadelı_${message.author.id}`)
if(!kontrol) db.set(`banka_coın_vadelı_${message.author.id}`, 0)
db.add(`banka_coın_vadelı_${message.author.id}`, -coin)
db.add(`banka_coın_${message.author.id}`, coin)
const yatırıldı = new EmbedBuilder()
.setDescription(`<a:ghost_yes:1156683590881521705> **Vadeli Hesabınızdan Banka Hesabınıza Toplam** __${miktar}__ **Miktar Won Çekildi. Vadeli Hesabınızda Kalan Won** __${banka}__`)
.setColor('#000001')
message.channel.send({embeds:[yatırıldı]})
 
}
}
},
}
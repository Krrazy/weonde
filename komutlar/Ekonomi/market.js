const Discord = require("discord.js");
const db = require('orio.db');

module.exports = {
config:{
    name: "market",
description: "Marketten malzeme vs. Satın Alırsınız.",
aliases: [],
kategori: "ekonomi",

},
    run: async(client, message, args) => {

const menu = new Discord.EmbedBuilder()
.setDescription(`
> <a:ghost_won:1164967166999801940> Alınabilirler;
:screwdriver: Tornavida : **500**
:pill:  Medikit : **300**
:axe: Balta : **100**
:pick: Kazma : **150**
:wood: Odun  : **30**
<:ghost_diamond:1165386845622898799> Elmas : **60**
<:ghost_altin:1165386595445244026> Altın : **50**
<:ghost_demir:1165386328398118992> Demir : **40**
<:ghost_coal:1165387887068590220> Kömür : **15**

> <a:ghost_won:1164967166999801940> Satılabilirler;
<:ghost_peugeot:1165388594815447050> Araba : **3000**
:motorcycle: Motor : **500**
:radio: Radyo : **150**
:health_worker: Doktor  : **50**
:wood: Odun  : **20**
<:ghost_diamond:1165386845622898799> Elmas : **40**
<:ghost_altin:1165386595445244026> Altın : **30**
<:ghost_demir:1165386328398118992> Demir : **20**
<:ghost_coal:1165387887068590220> Kömür : **5**

<a:ghost_dia:1156703800363581462> w!market al/sat <ÜRÜN>`)

if(!args[0]) return message.reply({embeds:[menu]})

if(args[0] === "sat"){

    if(args[1] === "odun"){
        let urun = "odun"
        let urun2= "Odun"
        let fıyat = 20
        let odun = db.fetch(`${urun}_${message.author.id}`)
        if(!odun) return message.reply(`${urun2} Hiç Yok.`)
        let miktar = args[2]
        if(!miktar) return message.reply(`Satılacak Miktarı Belirtiniz.`)
        if(isNaN(miktar))return message.reply(`Miktar Sayı İle Olmalıdır.`) 
        if(miktar > odun) return message.reply(`Bu Kadar ${urun2} sahip değilsiniz.`)
        let kontrol = db.fetch(`coın_${message.author.id}`)
        if(!kontrol) db.set(`coın_${message.author.id}`, 0)        
        var son = miktar*fıyat
        db.add(`${urun}_${message.author.id}`,  -miktar)
        db.add(`coın_${message.author.id}`, son)
        message.reply(`Başarılı bir şekilde **${miktar}** adet ${urun2} satıldı.`)
    }
    if(args[1] === "elmas"){
        let urun = "elmas"
        let urun2= "Elmas"
        let fıyat = 40
        let odun = db.fetch(`${urun}_${message.author.id}`)
        if(!odun) return message.reply(`${urun2} Hiç Yok.`)
        let miktar = args[2]
        if(!miktar) return message.reply(`Satılacak Miktarı Belirtiniz.`)
        if(isNaN(miktar))return message.reply(`Miktar Sayı İle Olmalıdır.`) 
        if(miktar > odun) return message.reply(`Bu Kadar ${urun2} sahip değilsiniz.`)
        let kontrol = db.fetch(`coın_${message.author.id}`)
        if(!kontrol) db.set(`coın_${message.author.id}`, 0)
        var son = miktar*fıyat
        db.add(`${urun}_${message.author.id}`,  -miktar)
        db.add(`coın_${message.author.id}`, son)
        message.reply(`Başarılı bir şekilde **${miktar}** adet ${urun2} satıldı.`)
    }
    if(args[1] === "altın"){
        let urun = "altın"
        let urun2= "Altın"
        let fıyat = 30
        let odun = db.fetch(`${urun}_${message.author.id}`)
        if(!odun) return message.reply(`${urun2} Hiç Yok.`)
        let miktar = args[2]
        if(!miktar) return message.reply(`Satılacak Miktarı Belirtiniz.`)
        if(isNaN(miktar))return message.reply(`Miktar Sayı İle Olmalıdır.`) 
        if(miktar > odun)return message.reply(`Bu Kadar ${urun2} sahip değilsiniz.`)
        let kontrol = db.fetch(`coın_${message.author.id}`)
        if(!kontrol) db.set(`coın_${message.author.id}`, 0)
        var son = miktar*fıyat
        db.add(`${urun}_${message.author.id}`,  -miktar)
        db.add(`coın_${message.author.id}`, son)
        message.reply(`Başarılı bir şekilde **${miktar}** adet ${urun2} satıldı.`)
    }
    if(args[1] === "kömür"){
        let urun = "kömür"
        let urun2= "Kömür"
        let fıyat = 5
        let odun = db.fetch(`${urun}_${message.author.id}`)
        if(!odun) return message.reply(`${urun2} Hiç Yok.`)
        let miktar = args[2]
        if(!miktar) return message.reply(`Satılacak Miktarı Belirtiniz.`)
        if(isNaN(miktar))return message.reply(`Miktar Sayı İle Olmalıdır.`) 
        if(miktar > odun) return message.reply(`Bu Kadar ${urun2} sahip değilsiniz.`)
        let kontrol = db.fetch(`coın_${message.author.id}`)
        if(!kontrol) db.set(`coın_${message.author.id}`, 0)
        var son = miktar*fıyat
        db.add(`${urun}_${message.author.id}`,  -miktar)
        db.add(`coın_${message.author.id}`, son)
        message.reply(`Başarılı bir şekilde **${miktar}** adet ${urun2} satıldı.`)

    }
    if(args[1] === "demir"){
        let urun = "demir"
        let urun2= "Demir"
        let fıyat = 20
        let odun = db.fetch(`${urun}_${message.author.id}`)
        if(!odun) return message.reply(`${urun2} Hiç Yok.`)
        let miktar = args[2]
        if(!miktar) return message.reply(`Satılacak Miktarı Belirtiniz.`)
        if(isNaN(miktar))return message.reply(`Miktar Sayı İle Olmalıdır.`) 
        if(miktar > odun) return message.reply(`Bu Kadar ${urun2} sahip değilsiniz.`)
        let kontrol = db.fetch(`coın_${message.author.id}`)
        if(!kontrol) db.set(`coın_${message.author.id}`, 0)
        var son = miktar*fıyat
        db.add(`${urun}_${message.author.id}`,  -miktar)
        db.add(`coın_${message.author.id}`, son)
        message.reply(`Başarılı bir şekilde **${miktar}** adet ${urun2} satıldı.`)
    }

    if(args[1] === "doktor"){
        let urun = "doktor"
        let urun2= "Doktor"
        let fıyat = 50
        let odun = db.fetch(`${urun}_${message.author.id}`)
        if(!odun) return message.reply(`${urun2} Hiç Yok.`)
        let miktar = args[2]
        if(!miktar) return message.reply(`Satılacak Miktarı Belirtiniz.`)
        if(isNaN(miktar))return message.reply(`Miktar Sayı İle Olmalıdır.`) 
        if(miktar > odun) return message.reply(`Bu Kadar ${urun2} sahip değilsiniz.`)
        let kontrol = db.fetch(`coın_${message.author.id}`)
        if(!kontrol) db.set(`coın_${message.author.id}`, 0)
        var son = miktar*fıyat
        db.add(`${urun}_${message.author.id}`,  -miktar)
        db.add(`coın_${message.author.id}`, son)
        message.reply(`Başarılı bir şekilde **${miktar}** adet ${urun2} satıldı.`)
    }
    if(args[1] === "araba"){
        let urun = "araba"
        let urun2= "Araba"
        let fıyat = 3000
        let araba = db.fetch(`${urun}_${message.author.id}`)
        if(!araba) return message.reply(`${urun2} Hiç Yok.`)
        let miktar = args[2]
        if(!miktar) return message.reply(`Satılacak Miktarı Belirtiniz.`)
        if(isNaN(miktar))return message.reply(`Miktar Sayı İle Olmalıdır.`) 
        if(miktar > araba)return message.reply(`Bu Kadar ${urun2} sahip değilsiniz.`)
        let kontrol = db.fetch(`coın_${message.author.id}`)
        if(!kontrol) db.set(`coın_${message.author.id}`, 0)
        var son = miktar*fıyat
        db.add(`${urun}_${message.author.id}`,  -miktar)
        db.add(`coın_${message.author.id}`, son)
        message.reply(`Başarılı bir şekilde **${miktar}** adet ${urun2} satıldı.`)
    }
    if(args[1] === "radyo"){
        let urun = "Radyo"
        let urun2= "Radyo"
        let fıyat = 150
        let radyo = db.fetch(`${urun}${message.author.id}`)
        if(!radyo) return message.reply(`${urun2} Hiç Yok.`)
        let miktar = args[2]
        if(!miktar) return message.reply(`Satılacak Miktarı Belirtiniz.`)
        if(isNaN(miktar))return message.reply(`Miktar Sayı İle Olmalıdır.`) 
        if(miktar > radyo)return message.reply(`Bu Kadar ${urun2} sahip değilsiniz.`)
        let kontrol = db.fetch(`coın_${message.author.id}`)
        if(!kontrol) db.set(`coın_${message.author.id}`, 0)
        var son = miktar*fıyat
        db.add(`${urun}${message.author.id}`,  -miktar)
        db.add(`coın_${message.author.id}`, son)
        message.reply(`Başarılı bir şekilde **${miktar}** adet ${urun2} satıldı.`)
    }
    if(args[1] === "motor"){
        let urun = "motor"
        let urun2= "Motor"
        let fıyat = 500
        let motor = db.fetch(`${urun}_${message.author.id}`)
        if(!motor) return message.reply(`${urun2} Hiç Yok.`)
        let miktar = args[2]
        if(!miktar) return message.reply(`Satılacak Miktarı Belirtiniz.`)
        if(isNaN(miktar))return message.reply(`Miktar Sayı İle Olmalıdır.`) 
        if(miktar > motor)return message.reply(`Bu Kadar ${urun2} sahip değilsiniz.`)
        let kontrol = db.fetch(`coın_${message.author.id}`)
        if(!kontrol) db.set(`coın_${message.author.id}`, 0)
        var son = miktar*fıyat
        db.add(`${urun}_${message.author.id}`,  -miktar)
        db.add(`coın_${message.author.id}`, son)
        message.reply(`Başarılı bir şekilde **${miktar}** adet ${urun2} satıldı.`)
    }
}



if(args[0] === "al"){
    
if(args[1] === "balta"){
    let urun = "balta"
    let urun2 = "Balta"
    let coin = db.fetch(`coın_${message.author.id}`)
    let miktar = args[2]
    if(!miktar) return message.reply(`Alınacak Miktarı Belirtiniz`)
    if(isNaN(miktar)) return message.reply(`Belirtlilen Miktar Sayı İle Olmalıdır.`)
    var son = miktar*100
    if(coin < son) return message.reply(`${son-coin} Miktar Coine İhtiyacınız Var.`)
    let kontrol = db.fetch(`${urun}_${message.author.id}`)
    if(!kontrol) db.set(`${urun}_${message.author.id}`, 0)
    db.add(`${urun}_${message.author.id}`, +miktar)
    db.add(`coın_${message.author.id}`, -son)
    message.reply(`Başarılı Bir Şekilde **${son}** ${urun2} Aldınız.`)
    }
    if(args[1] === "tornavida"){
        let urun = "tornavida"
        let urun2 = "Tornavida"
        let coin = db.fetch(`coın_${message.author.id}`)
        let miktar = args[2]
        if(!miktar) return message.reply(`Alınacak Miktarı Belirtiniz`)
        if(isNaN(miktar)) return message.reply(`Belirtlilen Miktar Sayı İle Olmalıdır.`)
        var son = miktar*500
        if(coin < son) return message.reply(`${son-coin} Miktar Coine İhtiyacınız Var.`)
        let kontrol = db.fetch(`${urun}_${message.author.id}`)
        if(!kontrol) db.set(`${urun}_${message.author.id}`, 0)
        db.add(`${urun}_${message.author.id}`, +miktar)
        db.add(`coın_${message.author.id}`, -son)
        message.reply(`Başarılı Bir Şekilde **${son}** ${urun2} Aldınız.`)
        }
   if(args[1] === "kazma"){
    let urun = "kazma"
    let urun2 = "Kazma"
    let coin = db.fetch(`coın_${message.author.id}`)
    let miktar = args[2]
    if(!miktar) return message.reply(`Alınacak Miktarı Belirtiniz`)
    if(isNaN(miktar)) return message.reply(`Belirtlilen Miktar Sayı İle Olmalıdır.`)
    var son = miktar*150
    if(coin < son) return message.reply(`${son-coin} Miktar Coine İhtiyacınız Var.`)
    let kontrol = db.fetch(`${urun}_${message.author.id}`)
    if(!kontrol) db.set(`${urun}_${message.author.id}`, 0)
    db.add(`${urun}_${message.author.id}`, +miktar)
    db.add(`coın_${message.author.id}`, -son)
    message.reply(`Başarılı Bir Şekilde **${son}** ${urun2} Aldınız.`)
    }
    if(args[1] === "medikit"){
    let urun = "medikit"
    let urun2 = "Medikit"
    let coin = db.fetch(`coın_${message.author.id}`)
    let miktar = args[2]
    if(!miktar) return message.reply(`Alınacak Miktarı Belirtiniz`)
    if(isNaN(miktar)) return message.reply(`Belirtlilen Miktar Sayı İle Olmalıdır.`)
    var son = miktar*300
    if(coin < son) return message.reply(`${son-coin} Miktar Coine İhtiyacınız Var.`)
    let kontrol = db.fetch(`${urun}_${message.author.id}`)
    if(!kontrol) db.set(`${urun}_${message.author.id}`, 0)
    db.add(`${urun}_${message.author.id}`, +miktar)
    db.add(`coın_${message.author.id}`, -son)
    message.reply(`Başarılı Bir Şekilde **${son}** ${urun2} Aldınız.`)
    }
    if(args[1] === "elmas"){
    let urun = "elmas"
    let urun2 = "Elmas"
    let coin = db.fetch(`coın_${message.author.id}`)
    let miktar = args[2]
    if(!miktar) return message.reply(`Alınacak Miktarı Belirtiniz`)
    if(isNaN(miktar)) return message.reply(`Belirtlilen Miktar Sayı İle Olmalıdır.`)
    var son = miktar*60
    if(coin < son) return message.reply(`${son-coin} Miktar Coine İhtiyacınız Var.`)
    let kontrol = db.fetch(`${urun}_${message.author.id}`)
    if(!kontrol) db.set(`${urun}_${message.author.id}`, 0)
    db.add(`${urun}_${message.author.id}`, +miktar)
    db.add(`coın_${message.author.id}`, -son)
    message.reply(`Başarılı Bir Şekilde **${son}** ${urun2} Aldınız.`)
    }
    if(args[1] === "altın"){
    let urun = "altın"
    let urun2 = "Altın"
    let coin = db.fetch(`coın_${message.author.id}`)
    let miktar = args[2]
    if(!miktar) return message.reply(`Alınacak Miktarı Belirtiniz`)
    if(isNaN(miktar)) return message.reply(`Belirtlilen Miktar Sayı İle Olmalıdır.`)
    var son = miktar*50
    if(coin < son) return message.reply(`${son-coin} Miktar Coine İhtiyacınız Var.`)
    let kontrol = db.fetch(`${urun}_${message.author.id}`)
    if(!kontrol) db.set(`${urun}_${message.author.id}`, 0)
    db.add(`${urun}_${message.author.id}`, +miktar)
    db.add(`coın_${message.author.id}`, -son)
    message.reply(`Başarılı Bir Şekilde **${son}** ${urun2} Aldınız.`)
    }
    if(args[1] === "demir"){
    let urun = "demir"
    let urun2 = "Demir"
    let coin = db.fetch(`coın_${message.author.id}`)
    let miktar = args[2]
    if(!miktar) return message.reply(`Alınacak Miktarı Belirtiniz`)
    if(isNaN(miktar)) return message.reply(`Belirtlilen Miktar Sayı İle Olmalıdır.`)
    var son = miktar*40
    if(coin < son) return message.reply(`${son-coin} Miktar Coine İhtiyacınız Var.`)
    let kontrol = db.fetch(`${urun}_${message.author.id}`)
    if(!kontrol) db.set(`${urun}_${message.author.id}`, 0)
    db.add(`${urun}_${message.author.id}`, +miktar)
    db.add(`coın_${message.author.id}`, -son)
    message.reply(`Başarılı Bir Şekilde **${son}** ${urun2} Aldınız.`)
    }
    if(args[1] === "kömür"){
    let urun = "kömür"
    let urun2 = "Kömür"
    let coin = db.fetch(`coın_${message.author.id}`)
    let miktar = args[2]
    if(!miktar) return message.reply(`Alınacak Miktarı Belirtiniz`)
    if(isNaN(miktar)) return message.reply(`Belirtlilen Miktar Sayı İle Olmalıdır.`)
    var son = miktar*15
    if(coin < son) return message.reply(`${son-coin} Miktar Coine İhtiyacınız Var.`)
    let kontrol = db.fetch(`${urun}_${message.author.id}`)
    if(!kontrol) db.set(`${urun}_${message.author.id}`, 0)
    db.add(`${urun}_${message.author.id}`, +miktar)
    db.add(`coın_${message.author.id}`, -son)
    message.reply(`Başarılı Bir Şekilde **${son}** ${urun2} Aldınız.`)
    }
    if(args[1] === "odun"){
    let urun = "odun"
    let urun2 = "Odun"
    let coin = db.fetch(`coın_${message.author.id}`)
    let miktar = args[2]
    if(!miktar) return message.reply(`Alınacak Miktarı Belirtiniz`)
    if(isNaN(miktar)) return message.reply(`Belirtlilen Miktar Sayı İle Olmalıdır.`)
    var son = miktar*30
    if(coin < son) return message.reply(`${son-coin} Miktar Coine İhtiyacınız Var.`)
    let kontrol = db.fetch(`${urun}_${message.author.id}`)
    if(!kontrol) db.set(`${urun}_${message.author.id}`, 0)
    db.add(`${urun}_${message.author.id}`, +miktar)
    db.add(`coın_${message.author.id}`, -son)
    message.reply(`Başarılı Bir Şekilde **${son}** ${urun2} Aldınız.`)
    }
}
},
}
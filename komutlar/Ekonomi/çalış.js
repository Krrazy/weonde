const {EmbedBuilder} = require('discord.js');
const db = require('orio.db');

module.exports = {
config:{
    name: "çalış",
description: "Coin kazanırsın.",
aliases: [],
 kategori: "Ekonomi",
},
    run: async(client, message, args) => {
const menu = new EmbedBuilder()
.setDescription(`
w!çalış maden : Madende çalışırsın 
w!çalış odun  : Odun toplarsın
w!çalış doktor  : Doktor Olarak Çalışırsın
w!çalış sanayi  : Sanayi Olarak Çalışırsın

`)
.setColor('#000001')
if(!args[0]) return message.reply({embeds:[menu]})


if(args[0] === "odun"){
    

let kontrol = db.fetch(`balta_${message.author.id}`)
if(!kontrol) return message.reply(`<a:ghost_no:1156683548678434946> **Yeterince baltanız yok.** :axe:`)

let miktarlar = [
    "2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","3","3","3","3","3","3","3","3","4","4","4","4","4","4","5","5","5","5","5",
]

let son = miktarlar[Math.floor(Math.random() * miktarlar.length)]

let kontrol2 = db.fetch(`odun_${message.author.id}`)
if(!kontrol2) db.set(`odun_${message.author.id}`, 0)
db.add(`odun_${message.author.id}`, Number(son))

let kontrol3 = db.fetch(`balta_hak_${message.author.id}`)
if(!kontrol3) db.set(`balta_hak_${message.author.id}`, 0)
db.add(`balta_hak_${message.author.id}`, 1)

if(db.fetch(`balta_hak_${message.author.id}`) >= 3){
    db.set(`balta_hak_${message.author.id}`, 0)
    db.add(`balta_${message.author.id}`, -1)
    const kazmahak = new EmbedBuilder()
    .setDescription(`:axe: **Bir Adet Baltanızın Kullanım Hakkı Bitmiştir. Kalan Baltanız** __${`balta_${message.author.id}`}__`)
    .setColor('#000001')
    message.channel.send({embeds:[kazmahak]})
    }
const kazmahak = new EmbedBuilder()
.setDescription(`<a:ghost_yes:1156683590881521705> **Başarılı bir şekilde** __${son}__ **adet odun topladın.** :wood:`)
.setColor('#000001')
message.channel.send({embeds:[kazmahak]})

}

if(args[0] === "doktor"){
    
    let kontrol = db.fetch(`medikit_${message.author.id}`)
    if(!kontrol) return message.reply(`<a:ghost_no:1156683548678434946> **Yeterince medikitiniz yok.** :pill:`)
    
    let miktarlar = [
        "6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","6","5","5","5","5","5","5","5","5","4","4","4","4","4","4","5","5","5","5","5","3","3","3","3","3","3","3","3",
    ]
    
    let son = miktarlar[Math.floor(Math.random() * miktarlar.length)]
    
    let kontrol2 = db.fetch(`doktor_${message.author.id}`)
    if(!kontrol2) db.set(`doktor_${message.author.id}`, 0)
    db.add(`doktor_${message.author.id}`, Number(son))
    
    let kontrol3 = db.fetch(`medikit_hak_${message.author.id}`)
    if(!kontrol3) db.set(`medikit_hak_${message.author.id}`, 0)
    db.add(`medikit_hak_${message.author.id}`, 1)
    
    if(db.fetch(`medikit_hak_${message.author.id}`) >= 2){
        db.set(`medikit_hak_${message.author.id}`, 0)
        db.add(`medikit_${message.author.id}`, -1)
        const kazmahak = new EmbedBuilder()
        .setDescription(`:pill: **Bir Adet Medikitin Kullanım Hakkı Bitti. Kalan Medikitiniz** __${`medikit_${message.author.id}`}__`)
        .setColor('#000001')
        message.channel.send({embeds:[kazmahak]})
    
    }
    
    const kazmahak = new EmbedBuilder()
    .setDescription(`<a:ghost_yes:1156683590881521705> **Başarılı bir şekilde** __${son}__ **İnsan Hayatı Kurtardınız.** :pill:`)
    .setColor('#000001')
    message.channel.send({embeds:[kazmahak]})
    
    }

    if(args[0] === "sanayi"){


        let kontrol = db.fetch(`tornavida_${message.author.id}`)
        if(!kontrol) return message.reply(`<a:ghost_no:1156683548678434946> **Yeterince tornavidan yok.** :screwdriver:`)
    
    
    let sanayitur = [
        "Motor","Motor","Motor","Motor","Motor","Radyo","Radyo","Radyo","Radyo","Radyo ","Araba"
    ]
    
    let son = sanayitur[Math.floor(Math.random() * sanayitur.length)]
    
    
    if(son === "Motor"){
        let miktarlar = [
            "1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","2","2","2","2","2","2","2",
        ]
        let son = miktarlar[Math.floor(Math.random() * miktarlar.length)]
        let kontrol = db.fetch(`motor_${message.author.id}`)
        if(!kontrol) db.set(`motor_${message.author.id}`, 0)
        db.add(`motor_${message.author.id}`, Number(son))
        const kazmahak = new EmbedBuilder()
        .setDescription(`<a:ghost_yes:1156683590881521705> **Başarılı Bir Şekilde Sanayide Çalıştınız Ve** __${son}__ **Adet Motor Söktünüz.** :screwdriver:`)
        .setColor('#000001')
        message.channel.send({embeds:[kazmahak]})

    
    
    }else if(son === "Radyo"){
        let miktarlar = [
            "1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","2","2","2","2","2","2","2",
        ]
        let son = miktarlar[Math.floor(Math.random() * miktarlar.length)]
        let kontrol = db.fetch(`Radyo${message.author.id}`)
        if(!kontrol) db.set(`Radyo${message.author.id}`, 0)
        db.add(`Radyo${message.author.id}`, Number(son))
        const kazmahak = new EmbedBuilder()
        .setDescription(`<a:ghost_yes:1156683590881521705> **Başarılı bir Şekilde Sanayide Çalıştınız Ve** __${son}__ **Adet Radyo Söktünüz.** :radio:`)
        .setColor('#000001')
        message.channel.send({embeds:[kazmahak]})
    
    }else if(son === "Araba"){
        let miktarlar = [
        "1"
        ]
        let son = miktarlar[Math.floor(Math.random() * miktarlar.length)]
        let kontrol = db.fetch(`araba_${message.author.id}`)
        if(!kontrol) db.set(`araba_${message.author.id}`, 0)
        db.add(`araba_${message.author.id}`, Number(son))
        const kazmahak = new EmbedBuilder()
    .setDescription(`<a:ghost_yes:1156683590881521705> **Başarılı bir Şekilde Sanayide Çalıştınız Ve** __${son}__ **Adet En Zor Sökülen Parçayı Söktünüz.** :razor:`)
    .setColor('#000001')
    message.channel.send({embeds:[kazmahak]})

    }
    
    let kontrol3 = db.fetch(`tornavida_hak_${message.author.id}`)
    if(!kontrol3) db.set(`tornavida_hak_${message.author.id}`, 0)
    db.add(`tornavida_${message.author.id}`, -1)
    
    if(db.fetch(`tornavida_hak_${message.author.id}`) >= 3){
        db.set(`tornavida_hak_${message.author.id}`, 0)
        db.add(`tornavida_${message.author.id}`, -1)
        const tornavidaha = new EmbedBuilder()
        .setDescription(`<a:ghost_no:1156683548678434946> **Bir Adet Tornavida'nın Kullanım Hakkı Bitti. Kalan Tornavidanız** __${`tornavida_${message.author.id}`}__ :screwdriver:`)
        .setColor('#000001')
        message.channel.send({embeds:[tornavidaha]})
        }
    }
    
if(args[0] === "maden"){


    let kontrol = db.fetch(`kazma_${message.author.id}`)
    if(!kontrol) return message.reply(`<a:ghost_no:1156683548678434946> **Yeterince kazman yok.**`)


let madentur = [
   "kömür","kömür","kömür","kömür","kömür","kömür","kömür","kömür","kömür","kömür","kömür","kömür","demir","demir","demir","demir","demir","demir","demir","demir","demir","demir","altın","altın","altın","altın","altın","altın","altın","elmas","elmas","elmas","elmas","elmas",
]

let son = madentur[Math.floor(Math.random() * madentur.length)]


if(son === "kömür"){
    let miktarlar = [
        "2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","3","3","3","3","3","3","3","3","4","4","4","4","4","4","5","5","5","5","5",
    ]
    let son = miktarlar[Math.floor(Math.random() * miktarlar.length)]
    let kontrol = db.fetch(`kömür_${message.author.id}`)
    if(!kontrol) db.set(`kömür_${message.author.id}`, 0)
    db.add(`kömür_${message.author.id}`, Number(son))
    const kazmahak = new EmbedBuilder()
    .setDescription(`:pick: **Başarılı Bir Şekilde Maden Yapıldı Ve** __${son}__ **Adet Kömür Çıkardınız.** <:ghost_komur:1165385602024362047>`)
    .setColor('#000001')
    message.channel.send({embeds:[kazmahak]})



}else if(son === "demir"){
    let miktarlar = [
        "2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","3","3","3","3","3","3","3","3","4","4","4","4","4","4","5","5","5","5","5",
    ]
    let son = miktarlar[Math.floor(Math.random() * miktarlar.length)]
    let kontrol = db.fetch(`demir_${message.author.id}`)
    if(!kontrol) db.set(`demir_${message.author.id}`, 0)
    db.add(`demir_${message.author.id}`, Number(son))
    const altınhas = new EmbedBuilder()
    .setDescription(`:pick: **Başarılı Bir Şekilde Maden Yapıldı Ve** __${son}__ **Adet Demir Çıkardınız.** <:ghost_demir:1165386328398118992>`)
    .setColor('#000001')
    message.channel.send({embeds:[altınhas]})
}else if(son === "altın"){
    let miktarlar = [
        "2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","3","3","3","3","3","3","3","3","4","4","4","4","4","4","5","5","5","5","5",
    ]
    let son = miktarlar[Math.floor(Math.random() * miktarlar.length)]
    let kontrol = db.fetch(`altın_${message.author.id}`)
    if(!kontrol) db.set(`altın_${message.author.id}`, 0)
    db.add(`altın_${message.author.id}`, Number(son))
    const altınhas = new EmbedBuilder()
    .setDescription(`:pick: **Başarılı Bir Şekilde Maden Yapıldı Ve** __${son}__ **Adet Altın Çıkardınız.** <:ghost_altin:1165386595445244026>`)
    .setColor('#000001')
    message.channel.send({embeds:[altınhas]})

}else{
    let miktarlar = [
        "2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","3","3","3","3","3","3","3","3","4","4","4","4","4","4","5","5","5","5","5",
    ]
    let son = miktarlar[Math.floor(Math.random() * miktarlar.length)]
    let kontrol = db.fetch(`elmas_${message.author.id}`)
    if(!kontrol) db.set(`elmas_${message.author.id}`, 0)
    db.add(`elmas_${message.author.id}`, Number(son))
    const elmashas = new EmbedBuilder()
    .setDescription(`:pick: **Başarılı Bir Şekilde Maden Yapıldı Ve** __${son}__ **Adet Elmas Çıkardınız.** <:ghost_diamond:1165386845622898799>`)
    .setColor('#000001')
    message.channel.send({embeds:[elmashas]})

}

let kontrol3 = db.fetch(`kazma_hak_${message.author.id}`)
if(!kontrol3) db.set(`kazma_hak_${message.author.id}`, 0)
db.add(`kazma_hak_${message.author.id}`, 1)

if(db.fetch(`kazma_hak_${message.author.id}`) >= 2){
    db.set(`kazma_hak_${message.author.id}`, 0)
    db.add(`kazma_${message.author.id}`, -1)
    const kazmahak = new EmbedBuilder()
    .setDescription(`:pick: **Bir Adet Kazma'nın Ne Yazıkki Kullanım Hakkı Bitti. Kalan Kazmanız** __${`kazma_${message.author.id}`}__ <:ghost_sad:1156683561487831081>`)
    .setColor('#000001')
    message.channel.send({embeds:[kazmahak]})
    
}
}
},


}
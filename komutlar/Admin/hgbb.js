const { PermissionsBitField , EmbedBuilder} = require('discord.js');
const db = require("orio.db");

module.exports = {
    config: {
        name: "hgbb",
        aliases: [],
        description: "Giriş-çıkışı ayarlarsınızi.",
        kategori: "Admin"
  
    },
    run: async (client, message, args) => {
        let dil = await db.get(`dil_${message.author.id}`)
        if(dil === "english") {  
            
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `You must have **ADMIN** privilege to use this command.`})

        let bos = args[0]
  

        if (!args[0]) return message.channel.send({embeds:[
            new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription(`To activate the Welcome Message System \`.hgbb channel #channel\` | You can type \`.hgbb close\` to turn it off`)]})     


if(args[0] == "channel") {

    let kanal = message.mentions.channels.first();
    if(!kanal) return message.reply(`Please Tag a Channel ** Correct Usage .hg-bb channel #channel **`)


    db.set(`hg_bb_kanal_${message.guild.id}`, kanal.id)

    message.reply(`Successfully Welcome MrBay channel set to ${kanal}.`)

}

if(args[0] == "close") {
    const sıfır = db.fetch(`hg_bb_kanal_${message.guild.id}`)
    if(!sıfır) {
    db.delete(`hg_bb_kanal_${message.guild.id}`)
    message.reply(`Successfully reset.`)
}
else{
    message.reply('HgBb Is Not Already On On This Server')
}
}

          }  
else{
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})

        let bos = args[0]
  

        if (!args[0]) return message.channel.send({embeds:[
            new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription(`<a:ghost_dia:1156703800363581462> Hoşgeldin Mesaj Sistemini aktif etmek için \`w!hgbb kanal #kanal\` | Kapatmak için \`w!hgbb kapat\` Yazabilirsiniz`)]})     


if(args[0] == "kanal") {

    let kanal = message.mentions.channels.first();
    if(!kanal) return message.reply(`<a:ghost_uyari:1157790781545918516> Lütfen Bir Kanal Etiketleyiniz ** Doğru Kullanım w!hg-bb kanal #kanal **`)


    db.set(`hg_bb_kanal_${message.guild.id}`, kanal.id)

    message.reply(`<a:ghost_yes:1156683590881521705> **Başarılı Bir Şekilde Hoşgeldin BayBay kanalı** ${kanal} **olarak ayarlandı.**`)

}

if(args[0] == "sıfırla") {
    const sıfır = db.fetch(`hg_bb_kanal_${message.guild.id}`)
    if(!sıfır) {
    db.delete(`hg_bb_kanal_${message.guild.id}`)
    message.reply(`Başarılı bir şekilde sıfırlandı.`)
}
else{
    message.reply('Bu Sunucuda Zaten HgBb Açık Değil')
}
}

}

},

    }



const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    config: {
        name: "yardım",
        aliases: [],
        kategori: "Kullanıcı",
        description: "Yardım",
    },
    run: async (client, message) => {

const kulsayi = []
client.guilds.cache.forEach((item, i) => {
    kulsayi.push(item.memberCount)
});
var toplamkulsayi = 0
for (var i = 0; i < kulsayi.length; i++) {
    if (isNaN(kulsayi[i])){
        continue;
    }

    toplamkulsayi += Number(kulsayi[i])
}

const row = new ActionRowBuilder()
.addComponents(
  new SelectMenuBuilder()
  .setCustomId("yardım")
  .setPlaceholder('📌 Komut Kategorileri')
  .setMinValues(1)
  .setMaxValues(1)
  .addOptions([
    {
      label: "Admin",
      description: "Bot içerisindeki Admin komutları",
      value:"Admin",
      emoji:"1164953723441786900"
  },
  {
    label:"Moderasyon" ,
    description:"Moderasyon Komutlarını Listeler.",
    value:"Moderasyon",
    emoji:"1164953992745459733"
  },
  {
    label:"Kullanıcı",
     description:"Kullanıcı Komutlarını Listeler.",
     value:"kullanıcı",
     emoji:"1157790592374423563"
 },
    {
      label:'Müzik',
      description:'Müzik Komutlarını Listeler.',
      value:'Müzik',
      emoji: '1164954287030403093'
    },
    {
      label:'Filtre',
      description:'Filtre Komutlarını Listeler.',
      value:'Filtre',
      emoji: '1156703800363581462'
    },
    {
      label: "Kayıt",
      description: "Bot içerisindeki Kayıt komutları",
      value:"Kayıt",
      emoji:"📜"
  },
  
  {
    label:"Level",
    description:"Level Komutlarını Listeler.",
    value:"Level",
    emoji:"1164954836580712519"
  },
  {
    label:"Ekonomi",
    description:"Ekonomi Komutlarını Listeler.",
    value:"Ekonomi",
    emoji:"1156703512688853103"
   },
   {
    label:"Eğlence",
    description:"Eğlence Komutlarını Listeler.",
    value:"Eğlence",
    emoji:"🎪"
   },      
    ])
  )

let s = new EmbedBuilder()
.addFields(
    { name: client.botunadı, value: '<:ghost_selam:1156963413738672228>  **Beni Tercih Ettiğiniz İçin Teşekkür Ederim Özelliklerim Aşağıda Size Sunulmuştur.**\n[Destek Sunucum](https://discord.gg/nitrobase)\n[Davet Etmek İçin](https://discord.com/oauth2/authorize?client_id=1162495723091271801&scope=bot&permissions=8)', inline: false },
    { name: '\nHakkımda', value: 'Botumuz insanlara kolaylık versin ve birlikte birşeyler yapabilsinsinler diye kurulmuş bir bottur birlikte müzik dinleyip oyun oynamak gibi `w!yardım`', inline: false },
    { name: ':date: Yapılma Tarihim', value: '19/10/2023', inline: false },
    { name: '<a:ghost_dia:1156703800363581462> Çalışma Sürem', value: `**${moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]')}** `, inline: false },
    { name: ':wind_blowing_face: Komut Sayısı', value: `${client.commands.size}`, inline: true },
    { name: '<a:ghost_partner:1156703299639189594> Sunucu Sayısı', value: `${client.guilds.cache.size}`, inline: true },
    { name: '<:ghost_members:1157790592374423563> Kullanıcı Sayısı', value: `${toplamkulsayi}`, inline: true },
    { name: '<:ghost_kanal:1164945911089205278> Kanal Sayısı', value: `${client.channels.cache.size}`, inline: true },
    { name: '<a:ghost_emoji:1164946446303379486> Emoji Sayısı', value: `${client.emojis.cache.size}`, inline: true },
    { name: ':ping_pong: Ping', value: `${client.ws.ping}`, inline: true },
    { name: '<a:ghost_kurt:1156703147314651146> Nasıl Kullanırım', value: '`Menüden Görmek İstediğiniz Komutların Kategorisini Seçin.`', inline: false },)
    .setFooter({ text: `${message.author.username} Tarafından İstendi.`, iconURL: message.author.displayAvatarURL({dynamic:true}) })
    .setColor("#000001")
    .setImage('https://cdn.discordapp.com/attachments/1159232656081432659/1164941445938028605/standard_2.gif?ex=65450b44&is=65329644&hm=e284603938fa049d26c3e2b07489343557cf9fbdcce0cf2f99b84615583e190f&')    
message.channel.send({embeds: [s], components: [row]})

},
}

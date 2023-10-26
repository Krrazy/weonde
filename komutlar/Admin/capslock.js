const {EmbedBuilder , PermissionsBitField} = require('discord.js')
const db = require('orio.db')
module.exports = {
  config: {
      name: "capslock",
      aliases: ["capslock-engel","capsfiltre","caps-filtre"],
      description: "CaspLock Engel Sistemini Açar|Kapatırsınız.",
      kategori: "Admin"

  },
  run: async (client, message, args) => {
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})
        
   if (!args[0]) return message.channel.send({embeds:[
            new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription(`<a:ghost_dia:1156703800363581462> CapsLock Filtresini Ayarlamak İçin \`w!capslock-engel aç\` | Kapatmak İstiyorsanız \`w!capslock-engel kapat\` Yazabilirsiniz`)]})     
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send({embeds:[
                new EmbedBuilder()
                .setColor("#ff0000")
                .setTimestamp()
                .setDescription(`<a:ghost_uyari:1157790781545918516> Lütfen **aç** ya da **kapat** Yazın!`)]})
  
  if(args[0] === 'aç') {
    let acikmi = await db.fetch(`${message.guild.id}_caps`)
    if(acikmi == "acik") return message.channel.send({embeds:[
      new EmbedBuilder()
                .setColor("#ff0000")
                .setTimestamp()
                .setDescription('Caps-Lock Filtresi zaten açık ki!')]})
    db.set(`${message.guild.id}_caps`, 'acik')
    message.channel.send({embeds:[
              new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription('<a:ghost_tadas:1159537971071033556> **Caps-lock filtresi** `Başarılı Şekilde Aktif Edildi.`')]})
}
  if (args[0] === 'kapat') {
    if(db.has(`${message.guild.id}_caps`)){
    db.delete(`${message.guild.id}_caps`, 'acik')
  message.channel.send({embeds:[
              new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription(`**Caps-lock Filtresini başarıyla Kapattım.**`)]})
} else return message.channel.send({embeds:[
  new EmbedBuilder()
  .setColor("#ff0000")
  .setTimestamp()
  .setDescription(`Caps-lock Filtresi zaten ayarlanmamış!`)]})
  }
},
}
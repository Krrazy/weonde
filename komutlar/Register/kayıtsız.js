const {EmbedBuilder} = require("discord.js");
const db = require('orio.db');

module.exports = {
config:{
   name:"kayıtsız",
   kategori:"Register",
   description:"Kayıtlı Kişiyi Kayıtsıza Atarsınız."

},
    run: async(client, message, args) => {

let kayıt_ytk = db.fetch(`kayıt_yetkılı_${message.guild.id}`)
let kayıt_erkek = db.fetch(`kerkek_rol_${message.guild.id}`)
let kayıt_kız = db.fetch(`kkız_rol_${message.guild.id}`)
let kayıtsız = db.fetch(`kayıtsızrol_${message.guild.id}`)
let kayıt_kanal = db.fetch(`kayıtkanal_${message.guild.id}`)

if(!kayıt_ytk) return message.reply(`**Kayıt Yetkilisi** rolü ayarlanmamış.`)
if(!message.member.roles.cache.has(kayıt_ytk) &&!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`Bu komudu sadece ayarlanan **Kayıt Yetkilisi** rolüne sahip olan kişiler kullanabilir`)
if(!kayıt_erkek) return message.reply(`**Erkek** rolü ayarlanmamış.`)
if(!kayıt_kız) return message.reply(`**Kız** rolü ayarlanmamış.`)
if(!kayıtsız) return message.reply(`**Kayıtsız** rolü ayarlanmamış.`)
if(!kayıt_kanal) return message.reply(`**Kayıt** kanalı ayarlanmamış.`)

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.reply(`Lütfen kayıtsıza düşürülecek kişiyi etiketleyiniz.`)


let üye = message.guild.members.cache.get(member.id)

üye.roles.add(kayıtsız)
üye.setNickname(`isim | Yaş`)
üye.roles.remove(kayıt_erkek)
üye.roles.remove(kayıt_kız)

let kayıtları = db.fetch(`kayıt_yetkılı_${message.guild.id}_${message.author.id}`)
db.add(`kayıt_yetkılı_${message.guild.id}_${message.author.id}`, -1)

const embed = new EmbedBuilder()
.setDescription(`
Kayıtsıza düşürülen kişinin bilgileri;

Düşürülen kişi : ${member}

Kayıt yetkilisin bilgileri;
Kayıtsız yapan kişi : ${message.author}
`)

message.reply({embeds: [embed]})

},
}

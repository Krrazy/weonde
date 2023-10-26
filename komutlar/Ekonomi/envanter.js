const {EmbedBuilder} = require("discord.js");
const db = require('orio.db');

module.exports = {
    config:{
        name: "envanter",
        description: "Eşyalarınızı kontrol edersiniz.",
        aliases: [],
         kategori: "Ekonomi",
    },
    run: async(client,message,args) => {

let kazma = db.fetch(`kazma_${message.author.id}`)
let balta = db.fetch(`balta_${message.author.id}`)
let elmas = db.fetch(`elmas_${message.author.id}`)
let altın = db.fetch(`altın_${message.author.id}`)
let demir = db.fetch(`demir_${message.author.id}`)
let kömür = db.fetch(`kömür_${message.author.id}`)
let odun = db.fetch(`odun_${message.author.id}`)
let doktor = db.fetch(`doktor_${message.author.id}`)
let Medikit = db.fetch(`medikit_${message.author.id}`)
let Tornavida = db.fetch(`tornavida_${message.author.id}`)
let motor = db.fetch(`motor_${message.author.id}`)
let araba = db.fetch(`araba_${message.author.id}`)
let radyo = db.fetch(`Radyo${message.author.id}`)

const embed = new EmbedBuilder()

.setAuthor({name:`<:ghost_envanter:1165388956792262706> **EŞYALARINIZ** <:ghost_envanter:1165388956792262706>`})

.addFields({name:`:pick: Kazma`, value:`**${kazma? kazma: 0}**`,inline:true})
.addFields({name:`:axe: Balta`,value: `**${balta ? balta: 0}**` , inline:true})
.addFields({name:`<:ghost_diamond:1165386845622898799> Elmas`, value:`**${elmas ? elmas: 0}**`,inline:true})
.addFields({name:`<:ghost_altin:1165386595445244026> Altın`, value:`**${altın ? altın: 0}**`,inline:true})
.addFields({name:`<:ghost_demir:1165386328398118992> Demir`,value: `**${demir ? demir: 0}**`,inline:true})
.addFields({name:`<:ghost_coal:1165387887068590220> Kömür`, value:`**${kömür ? kömür: 0}**`,inline:true})
.addFields({name:`:wood: Odun`, value:`**${odun ? odun: 0}**`,inline:true})
.addFields({name:`:health_worker: Doktor`, value:`**${doktor ? doktor: 0}**`,inline:true})
.addFields({name:`:pill: Medikit`,value: `**${Medikit ? Medikit: 0}**`,inline:true})
.addFields({name:`:screwdriver: Tornavida`,value: `**${Tornavida ? Tornavida: 0}**`,inline:true})
.addFields({name:`:motorcycle: Motor`, value:`**${motor ? motor: 0}**`,inline:true})
.addFields({name:`<:ghost_peugeot:1165388594815447050> Araba`, value:`**${araba ? araba: 0}**`,inline:true})
.addFields({name:`:radio: Radyo`, value:`**${radyo ? radyo: 0}**`,inline:true})
.setColor('#000001')
.setFooter({text:client.botunadı})
message.reply({embeds:[embed]})
},

}
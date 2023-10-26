const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒"];
const { EmbedBuilder } = require('discord.js');  
const db = require('orio.db');

module.exports = {
    config:{ 
    name: 'slots',
    description: "Slots oynarsınız.",
    aliases: ["gacha"],
    kategori: "Ekonomi",
},
    run: async(client, message, args) => {
    let user = message.author;
    let paradb = await db.fetch(`coın_${user.id}`)
    let para = parseInt(args[0]);
    let win = false;

    let paramore = new EmbedBuilder()
    .setColor('#000001')
    .setDescription(`<a:ghost_no:1156683548678434946> **Yeterince paran yok**`);

    let parahelp = new EmbedBuilder()
    .setColor('#000001')
    .setDescription(`<a:ghost_no:1156683548678434946> **Lütfen bir number seçin**`); 

    if (!para) return message.channel.send({embeds: [parahelp]});
    if (para > paradb) return message.channel.send({embeds: [paramore]});

    let number = []
    for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2])  { 
        para *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        para *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new EmbedBuilder()
            .setDescription(`${slotItems[number[0]]} |<a:ghost_cizgi:1165635888412364841>| ${slotItems[number[1]]} |<a:ghost_cizgi:1165635888412364841>| ${slotItems[number[2]]}\n\nŞanslısınız ve __${para}__ Won Kazandınız! <a:ghost_won:1164967166999801940>`)
            .setColor('#000001')
        message.channel.send({embeds: [slotsEmbed1]})
        db.add(`coın_${user.id}`, +para)
    } else {
        let slotsEmbed = new EmbedBuilder()
            .setDescription(`${slotItems[number[0]]} <a:ghost_cizgi:1165635888412364841> ${slotItems[number[1]]} <a:ghost_cizgi:1165635888412364841> ${slotItems[number[2]]}\n\n${para} Won kaybettiniz <:ghost_sad:1156683561487831081>`)
            .setColor('#000001')
        message.channel.send({embeds: [slotsEmbed]})
        db.add(`coın_${user.id}`, -para *1.5)
    }
},

}
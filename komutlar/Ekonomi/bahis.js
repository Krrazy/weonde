
const db = require('orio.db');

module.exports = {
config:{
    name: "bahis",
    description: "Bahis Oynarsınız.",
    aliases: ["idda"],
     kategori: "Ekonomi",
    },

    run: async(client, message, args) => {
   var possibility = ["win", "lose"];
        const amount = args[0];
        if (!amount) return message.channel.send("Bahis yapmadan önce geçerli bir miktar giriniz!")
        if (isNaN(amount)) return message.channel.send("Lütfen bahis yapmadan önce düzgün bir sayı gir!")
        if (amount > db.fetch(`coın_${message.author.id}`)) return message.channel.send(`Maalesef ${amount} kadar dolarınız yok!`)
        const conclusion = (possibility[Math.floor(Math.random() * possibility.length)])
        if (conclusion === "win") {
            message.channel.send(`<a:ghost_cashbag:1156683472178516008> __${amount}__ **Won için bahse girdiniz!**`).then(x => setTimeout(() => {
                x.edit(`> <a:ghost_won:1164967166999801940> **Tebrikler** __${amount * 1.5}__ **Won kazandınız!** <:wonders:1164966589926486056>`)
            }, 500));
            db.add(`coın_${message.author.id}`, amount * 2);
        } else {
            message.channel.send(`<a:ghost_cashbag:1156683472178516008> __${amount}__ **Won için bahse girdiniz!**`).then(x => setTimeout(() => {
                x.edit(`<:ghost_sad:1156683561487831081> **Maalesef** __${amount}__ **Won kaybettiniz!**`)
            }, 500));
            db.add(`coın_${message.author.id}`, -amount)
        }
    }
}


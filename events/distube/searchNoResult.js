const { EmbedBuilder } = require("discord.js");

module.exports = async (client, query, queue) => {
    const embed = new EmbedBuilder()
        .setColor("#000001")
        .setDescription(`bir sonuç bulanamadı :D ${query}!`)

    queue.textChannel.send({ embeds: [embed] })
}


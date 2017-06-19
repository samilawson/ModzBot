exports.run = (bot, message, args) => {
  if (message.guild !== null) {
      var output = args.join(" ");
      
      if (message.author.id === "191165862022086656") return console.log(`${message.createdAt}: ${message.author.username} tried to report a bug but was blacklisted`);//blacklist
      //if (message.author.id === "298144419088039946") return console.log(`${message.createdAt}: ${message.author.username} tried to report a bug but was blacklisted`)//blacklist

      bot.channels.get("301421032210956289").sendMessage("A bug report was received from " + "**" + message.member.guild.name + "**" + "\nUser who reported the bug: **" + message.author.username + "**" + "```\n" + output + "\n```");
      bot.channels.get("307878217228877827").sendMessage(`**${message.author.username}** reported a bug \n \n User ID: **${message.author.id}** \n Server name: **${message.member.guild.name}** \n Server ID: **${message.member.guild.id}**`)

    message.channel.sendMessage("Bug reported! For more support, join my Discord server: https://discord.gg/T2cvH6v");
    console.log(`${message.createdAt}: ${message.member.guild.name} reported a bug`)
  } else {
    message.reply("Try it again in a server!")
  }
}

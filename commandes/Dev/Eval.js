const { MESSAGES } = require("../../core/constants.js")

module.exports.run = async (bot, message, args) => {
    
  function clean(text) {
    if (typeof text === "string") 
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
    return text
  }

  if (message.author.id !== "249899689028091904") return

  message.delete()
  const code = args.join(" ")
  const evaled = eval(code)
  const cleanCode = await clean(evaled)

  message.author.send("Command executed !", cleanCode, { code: "js" })
}



module.exports.help = MESSAGES.COMMANDS.DEV.EVAL
const { MESSAGES } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args) => {

  message.delete()
    
  function clean(text) {
    if (typeof text === "string") 
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
    return text
  }

  if (message.author.id !== process.env.DEV_ID) return message.reply("LockBot isn\'t your bot !")

  const code = args.join(" ")
  const evaled = eval(code)
  const cleanCode = await clean(evaled)

  message.author.send("Command executed !", cleanCode, { code: "js" })
}



module.exports.help = MESSAGES.COMMANDS.DEV.EVAL
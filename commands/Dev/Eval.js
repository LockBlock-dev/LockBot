const { COMMANDS } = require("../../core/constants.js")
require('dotenv').config()

module.exports.run = async (bot, message, args) => {

  message.delete()

  const code = args.join(" ")
  eval(code)

  const codeblock = (language, code) => {       
    return `\`\`\`${language}\n${code}\`\`\``;
  }

  //available languages : apache, asciidoc, autohotkey, bash, coffeescript, cpp, cs, css, diff, fix, glsl, ini, js, json, md, ml, prolog, py, tex, xl, xml

  message.author.send(`Command executed :\n${codeblock("js", code)}`)
}



module.exports.help = COMMANDS.DEV.EVAL
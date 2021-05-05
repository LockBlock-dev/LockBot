const { COMMANDS } = require("../../core/constants.js")

module.exports.run = async (bot, message, args) => {

	const str = args.join(' ')
	var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	if (typeof str === 'string') {
		var content = Array.prototype.map.call(str, (e, i, a) => {
			if (/[aA][bB]/.test(e+a[i+1])) {
				return ':ab:'
			} else if (/[oO]/.test(e)) {
				return ':o2:'
			} else if (/[aA]/.test(e)) {
				return ':a:'
			} else if (/[bB]/.test(e)) {
				if (/[aA]/.test(a[i-1])) {
					return
				} else {
					return ':b:'
				}
			} else if (/[a-zA-Z]/.test(e)) {
				return ':regional_indicator_' + e.toLowerCase() + ':'
			} else if (/[0-9]/.test(e)) {
				return ':' + ones[e] + ':'
			} else {
				return e
			}
		}).join('\u200C')
	}
	message.channel.send(`${content}`)

}



module.exports.help = COMMANDS.FUN.EMOJIFY
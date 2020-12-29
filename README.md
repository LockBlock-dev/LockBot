# LockBot
Discord Bot made with [DiscordJS API](https://discord.js.org)

[![HitCount](http://hits.dwyl.com/LockBlock-dev/LockBot.svg)](http://hits.dwyl.com/LockBlock-dev/LockBot)
[![GitHub All Releases](https://img.shields.io/github/downloads/LockBlock-dev/LockBot/total.svg)](https://github.com/LockBlock-dev/LockBot/releases/)

![Bot preview](/preview.png)

You also need the Presence Gateway Intent for the userInfos command.


## How to use

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

• Download the project or clone it

• Go to the LockBot folder and do `npm install`

• Run the bot by doing `node index.js`

• You can configure default prefix and default language in [config.json](/config.json)

• To add any language, just go to [languages](/core/languages) folder, create a .json file and name it with the ISO 3166-1 norm. Exemple : [en.json](/core/languages/en.json) for the international english.

## Potential bugs

• When the bot doesnt have settings for guilds (if no one talked yet in the guild), `say` command can crashes with a JSON parse error. In the future i'll do this part with a Database.


## Copyright

See the [license](/LICENSE).

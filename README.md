# LockBot
Discord Bot made with [DiscordJS API](https://discord.js.org)

[![HitCount](http://hits.dwyl.com/LockBlock-dev/LockBot.svg)](http://hits.dwyl.com/LockBlock-dev/LockBot)
[![GitHub All Releases](https://img.shields.io/github/downloads/LockBlock-dev/LockBot/total.svg)](https://github.com/LockBlock-dev/LockBot/releases/)

![Bot preview](/preview.png)


## How to use

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

• Download the project or clone it

• Go to the LockBot folder and do `npm install`

• In [core](/core), create a `guildSettings.json` file and put inside `{}`

• At the root of the folder, create a `.env` file, and put the token inside : `DISCORD_TOKEN=YOURTOKENHERE`

• Run the bot by doing `node index.js`

• You can configure default prefix and default language in [config.json](/config.json)

• To add any language, just go to [languages](/core/languages) folder, create a .json file and name it with the ISO 3166-1 norm. Exemple : [en.json](/core/languages/en.json) for the international english.

## Potential bugs

• When the bot doesnt have settings for guilds (if no one talked yet in the guild), [say](/commandes/Misc/Say.js) command can crashes with a JSON parse error. In the future i'll do this part with a Database.

• Sometimes [Message.js](/events/Bot/Message.js) prints JSON parse error. At this moment i still don't know why, the bot still works after the error.

• Sometimes the [server infos](/commandes/Infos/ServerInfo.js) command doesnt return Guild Owner Username and prints error, the bot still works after the error.


## Copyright

See the [license](/LICENSE).

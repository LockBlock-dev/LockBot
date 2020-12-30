# LockBot
Discord Bot made with [DiscordJS API](https://discord.js.org)

[![HitCount](http://hits.dwyl.com/LockBlock-dev/LockBot.svg)](http://hits.dwyl.com/LockBlock-dev/LockBot)
[![GitHub All Releases](https://img.shields.io/github/downloads/LockBlock-dev/LockBot/total.svg)](https://github.com/LockBlock-dev/LockBot/releases/)

![Bot preview](/preview.png)


## How to use

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

• Download the project or clone it

• Go to the LockBot folder and do `npm install`

• You need to setup a [MongoDB](https://www.mongodb.com), database adress can be changed in [config.js](/config.js)

• At the root of the folder, create a `.env` file, and put the token inside : `DISCORD_TOKEN=YOURTOKENHERE`

• Run the bot by doing `node index.js`

• You can configure default prefix and default language in [config.js](/config.js)

• To add any language, just go to [languages](/core/languages) folder, create a .json file and name it with the ISO 3166-1 norm. Exemple : [en.json](/core/languages/en.json) for the international english.

## Potential bugs

• I don't know why [meme.js](commandes/fun/meme.js) and [ping.js](commandes/misc/ping.js) commands doesnt find the language so they do a request to the database and it works.

• I don't know if there are bugs now with the Database. All JSON bugs have been removed.

• Languages are app translated, if you find any errors please tell me.


## Copyright

See the [license](/LICENSE).

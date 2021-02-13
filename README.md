# LockBot
Discord Bot made with [DiscordJS API](https://discord.js.org)

[![HitCount](http://hits.dwyl.com/LockBlock-dev/LockBot.svg)](http://hits.dwyl.com/LockBlock-dev/LockBot)
[![GitHub All Releases](https://img.shields.io/github/downloads/LockBlock-dev/LockBot/total.svg)](https://github.com/LockBlock-dev/LockBot/releases/)

![Bot preview](/preview.png)

About ES5, ES6... When I first started coding the bot I didn't know much about JavaScript, so the code is probably a mess with a mix between ES5 and ES6. These days, I try to use ES6 only to take advantage of the benefits it offers.

## How to use

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

• Download the project or clone it

• Go to the LockBot folder and do `npm install`

• You need to setup a [MongoDB](https://www.mongodb.com)

• At the root of the folder, create a `.env` file, and put inside :\
    - `DISCORD_TOKEN=YOUR_TOKEN_HERE`\
    - `MONGODB_ADRESS=YOUR_MONGO_DB_URL_HERE`\
    - `DEV_ID=YOUR_DISCORD_ID_HERE`

• Run the bot by doing `node index.js`

• You can configure default prefix and default language in [config.js](/config.js)

• To add any language, just go to [languages](/core/languages) folder, create a .json file and name it with the ISO 3166-1 norm. Exemple : [en.json](/core/languages/en.json) for the international english.

## Potential bugs

• I don't know why some commands doesnt find the language so they do a request to the database and it works.

• I don't know if there are bugs now with the Database. All JSON bugs have been removed.

• Languages are app translated, if you find any errors please tell me.


## Copyright

See the [license](/LICENSE).

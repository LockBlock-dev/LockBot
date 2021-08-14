# LockBot

[![discord.js](https://img.shields.io/github/package-json/dependency-version/LockBlock-dev/LockBot/discord.js)](https://discord.js.org)

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/LockBlock-dev/LockBot)](https://github.com/LockBlock-dev/LockBot/releases/latest)
[![GitHub stars](https://img.shields.io/github/stars/LockBlock-dev/LockBot.svg)](https://github.com/LockBlock-dev/LockBot/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/LockBlock-dev/LockBot)](https://github.com/LockBlock-dev/LockBot/issues)
![GitHub all releases](https://img.shields.io/github/downloads/LockBlock-dev/LockBot/total)

My own Discord Bot.

![Bot preview](/preview.jpg)


## Support Server

[![Discord](https://img.shields.io/discord/819233068199837726?color=7289da&logo=discord&logoColor=white)](https://discord.gg/R2KVJNr4Ta)


## How to use

• Download [NPM](https://www.npmjs.com/get-npm) and [NodeJS](https://nodejs.org)

• Download the project or clone it

• Go to the LockBot folder and do `npm install`

• You need to setup a [MongoDB](https://www.mongodb.com)

• At the root of the folder, create a `.env` file, and put inside :
```dosini
DISCORD_TOKEN=BOT_TOKEN_HERE
MONGODB_ADRESS=MONGO_DB_URL_HERE
DEV_ID=YOUR_DISCORD_ID_HERE
```

• Run the bot by doing `node index.js`

• You can configure default prefix and default language in [config.js](/config.js)

• To add any language, just go to [languages](/core/languages) folder, create a .json file and name it with the ISO 3166-1 norm. Exemple : [en.json](/core/languages/en.json) for the international english.


## Potential bugs

• Some languages are app translated and can contains errors.


## Contributing

See the [CONTRIBUTING.md](/CONTRIBUTING.md).


## Credits

I couldn't do this without the help of :

• MasterIO, DeXoZ, Hawked who supported me in this project

• JunkMeal who helped me with the [meme](/commands/Fun/Meme.js) command

• DV4 who made the [german](/core/languages/de.json) translation

• MCHDF who made the [korean](/core/languages/ko.json) translation

• Friskyyy__ who made the [macedonian](/core/languages/mk.json) translation

• Nerox who made the [romanian](/core/languages/ro.json) translation

• and everyone who invited and used my bot !


## Copyright

See the [license](/LICENSE).

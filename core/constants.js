const COMMANDS = {

      DEV: {
        ASIDB: {
          name: "asidb",
          aliases: ['addservers'],
          category: 'dev',
          description: "Add all the servers where the bot is located that are not in the database",
          usage: '',
          isDevRestricted: true,
          isUserAdmin: false,
          args: false
        },
        BLACKLIST: {
          name: "blacklist",
          aliases: ['bl'],
          category: 'dev',
          description: "Blacklist an user from the bot",
          usage: '<add> | <remove> <User ID> <reason)>',
          isDevRestricted: true,
          isUserAdmin: false,
          args: true
        },
        BROADCAST: {
          name: "broadcast",
          aliases: ['bc'],
          category: 'dev',
          description: "Say a message in every server where the bot is",
          usage: '<text>',
          isDevRestricted: true,
          isUserAdmin: false,
          args: true
        },
        EVAL: {
          name: "eval",
          aliases: ['eval'],
          category: 'dev',
          description: "Execute a command",
          usage: '<command>',
          isDevRestricted: true,
          isUserAdmin: false,
          args: true
        },
        GUILDINVITE: {
          name: "guildinvite",
          aliases: ['ginvite','gi'],
          category: 'dev',
          description: "Invite the dev to a server",
          usage: '<Guild ID>',
          isDevRestricted: true,
          isUserAdmin: false,
          args: true
        },
        GUILDLEAVE: {
          name: "guildleave",
          aliases: ['gleave','gl'],
          category: 'dev',
          description: "Make the bot leaves the Guild",
          usage: '<Guild ID>',
          isDevRestricted: true,
          isUserAdmin: false,
          args: true
        },
        RESTART: {
          name: "restart",
          aliases: ['restart'],
          category: 'dev',
          description: "Restart the bot (works only if you start the bot with pm2)",
          usage: '',
          isDevRestricted: true,
          isUserAdmin: false,
          args: false
        },
        SPURGE: {
          name: "spurge",
          aliases: ['selfpurge'],
          category: 'dev',
          description: "Clear only the bot messages",
          usage: '<amount>',
          isDevRestricted: true,
          isUserAdmin: false,
          args: true
        }
      },

      FUN: {
        ASCII: {
          name: "ascii",
          aliases: ['ascii'],
          category: 'fun',
          description: "Text to ASCII Art",
          usage: '<text>',
          isDevRestricted: false,
          isUserAdmin: false,
          args: true
        },
        EMOJIFY: {
          name: "emojify",
          aliases: ['emoji','emote'],
          category: 'fun',
          description: "Text to emotes",
          usage: '<text>',
          isDevRestricted: false,
          isUserAdmin: false,
          args: true
        },
        EIGHTBALL: {
          name: "8ball",
          aliases: ['eightball'],
          category: 'fun',
          description: "Answer your question",
          usage: '<question>',
          isDevRestricted: false,
          isUserAdmin: false,
          args: true
        },
        GAMER: {
          name: "gamerometer",
          aliases: ['gamerometre','gamer'],
          category: 'fun',
          description: "Are you a gamer ?",
          usage: '<mention>',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },
        HACK: {
          name: "hack",
          aliases: ['hack'],
          category: 'fun',
          description: "Corrupted",
          usage: '',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },
        FBI : {
          name: "fbi",
          aliases: ['fbi'],
          category: 'fun',
          description: "FBI !",
          usage: '',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },
        MEME: {
          name: "meme",
          aliases: ['meme'],
          category: 'fun',
          description: "Show a meme",
          usage: '',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },
        HENTAI: {
          name: "hentai",
          aliases: ['hentai'],
          category: 'fun',
          description: "Show a hentai",
          usage: '',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        }
      },

      INFOS: {
        SERVERINFO: {
          name: "serverinfos",
          aliases: ['si','sinfos','serverinfo','sinfo'],
          category: 'info',
          description: "Server Infos",
          usage: '',
            isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },
        USERINFO: {
          name: "userinfos",
          aliases: ['ui','uinfos','userinfo','uinfo'],
          category: 'info',
          description: "User Infos",
          usage: '<mention>',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },
        BOTINFO: {
          name: "botinfos",
          aliases: ['bi','binfos','botinfo','binfo'],
          category: 'info',
          description: "Bot Infos",
          usage: '',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },
        MEMBERCOUNT: {
          name: "membercount",
          aliases: ['mc','count','mcount'],
          category: 'info',
          description: "Count of members",
          usage: '',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },
        PROFILEPICTURE: {
          name: "profilepicture",
          aliases: ['pfp','pdp','pp'],
          category: 'info',
          description: "Pfp",
          usage: '<mention>',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        }
      },

      LOCKBOT: {
        VOTE: {
          name: "vote",
          aliases: ['vote'],
          category: 'lockbot',
          description: "Vote for the bot",
          usage: '',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },
        HELP: {
          name: "help",
          aliases: ['help'],
          category: 'lockbot',
          description: "Help me",
          usage: '<command>',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },
        INVITE: {
          name: "invite",
          aliases: ['link'],
          category: 'lockbot',
          description: "Invite link",
          usage: '',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        }
      },

      MISC: {
        BASE64: {
          name: "base64",
          aliases: ['b64'],
          category: 'misc',
          description: "Encode | Decode Base64",
          usage: 'encode <text> | decode <base64 text>',
          isDevRestricted: false,
          isUserAdmin: false,
          args: true
        },
        PING: {
          name: "ping",
          aliases: ['ping'],
          category: 'misc',
          description: "Pong !",
          usage: '',
          isDevRestricted: false,
          isUserAdmin: false,
          args: false
        },  
        SAY: {
          name: "say",
          aliases: ['say'],
          category: 'misc',
          description: "Repeat text",
          usage: '<text>',
          isDevRestricted: false,
          isUserAdmin: false,
          args: true
        },
        POLL: {
          name: "poll",
          aliases: ['sondage','ask'],
          category: 'misc',
          description: "Make a poll",
          usage: '(Simple) <Question> | OR | (Multiple) <Question, answer 1, answer 2,etc> MAX 10',
          isDevRestricted: false,
          isUserAdmin: false,
          args: true
        }
      },

      MODERATION: {
        SETTINGS: {
          name: "config",
          aliases: ['settings','paramètres','parametres','config'],
          category: 'moderation',
          description: "Modify guild settings",
          usage: 'prefix <value> | lang <fr>/<en>',
          isDevRestricted: false,
          isUserAdmin: true,
          args: true
        },
        NUKE: {
          name: "nuke",
          aliases: ['nuke, clearall'],
          category: 'moderation',
          description: "Nuke a channel",
          usage: '',
          isDevRestricted: false,
          isUserAdmin: true,
          args: false
        }
      }
}
  
exports.COMMANDS = COMMANDS

const COMMANDS = {

      DEV: {
        ASIDB: {
          name: "asidb",
          aliases: ['addservers'],
          category: 'dev',
          description: "Add all the servers where the bot is located that are not in the database",
          usage: '',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        BLACKLIST: {
          name: "blacklist",
          aliases: ['bl'],
          category: 'dev',
          description: "Blacklist an user from the bot",
          usage: '<add> | <remove> <mention> | <ID> <reason)>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: true
        },
        BROADCAST: {
          name: "broadcast",
          aliases: ['bc'],
          category: 'dev',
          description: "Say a message in every server where the bot is",
          usage: '<text>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: true
        },
        EVAL: {
          name: "eval",
          aliases: ['eval'],
          category: 'dev',
          description: "Execute code",
          usage: '<code>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: true
        },
        GUILDINVITE: {
          name: "guildinvite",
          aliases: ['ginvite','gi'],
          category: 'dev',
          description: "Try to find an invite of the guild",
          usage: '<guild ID>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: true
        },
        GUILDLEAVE: {
          name: "guildleave",
          aliases: ['gleave','gl'],
          category: 'dev',
          description: "Make the bot leaves the guild",
          usage: '<guild ID>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: true
        },
        RESTART: {
          name: "restart",
          aliases: ['restart'],
          category: 'dev',
          description: "Restart the bot (works only if you start the bot with pm2)",
          usage: '',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        SPURGE: {
          name: "spurge",
          aliases: ['selfpurge'],
          category: 'dev',
          description: "Clear only the bot messages",
          usage: '<amount>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
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
          permissionNeeded: "SEND_MESSAGES",
          args: true
        },
        EMOJIFY: {
          name: "emojify",
          aliases: ['emoji','emote'],
          category: 'fun',
          description: "Text to emotes",
          usage: '<text>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: true
        },
        EIGHTBALL: {
          name: "8ball",
          aliases: ['eightball'],
          category: 'fun',
          description: "Answer your question",
          usage: '<question>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: true
        },
        GAMER: {
          name: "gamerometer",
          aliases: ['gamerometre','gamer'],
          category: 'fun',
          description: "Are you a gamer ?",
          usage: '<mention> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        HACK: {
          name: "hack",
          aliases: ['hack'],
          category: 'fun',
          description: "Corrupted",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        FBI : {
          name: "fbi",
          aliases: ['fbi'],
          category: 'fun',
          description: "FBI !",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        MEME: {
          name: "meme",
          aliases: ['meme'],
          category: 'fun',
          description: "Show a meme",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        HENTAI: {
          name: "hentai",
          aliases: ['hentai'],
          category: 'fun',
          description: "Show a hentai",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        }
      },

      INFOS: {
        SERVERINFO: {
          name: "serverinfos",
          aliases: ['si','sinfos','serverinfo','sinfo'],
          category: 'info',
          description: "Server infos",
          usage: '',
            isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        USERINFO: {
          name: "userinfos",
          aliases: ['ui','uinfos','userinfo','uinfo'],
          category: 'info',
          description: "Infos of an user",
          usage: '<mention> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        BOTINFO: {
          name: "botinfos",
          aliases: ['bi','binfos','botinfo','binfo'],
          category: 'info',
          description: "Bot infos",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        MEMBERCOUNT: {
          name: "membercount",
          aliases: ['mc','count','mcount'],
          category: 'info',
          description: "Count of members",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        PROFILEPICTURE: {
          name: "profilepicture",
          aliases: ['pfp','pdp','pp'],
          category: 'info',
          description: "Pfp of a member",
          usage: '<mention> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
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
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        HELP: {
          name: "help",
          aliases: ['help'],
          category: 'lockbot',
          description: "Help of the bot",
          usage: '<command>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },
        INVITE: {
          name: "invite",
          aliases: ['link'],
          category: 'lockbot',
          description: "Invite link of the bot",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
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
          permissionNeeded: "SEND_MESSAGES",
          args: true
        },
        PING: {
          name: "ping",
          aliases: ['ping'],
          category: 'misc',
          description: "Pong !",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: false
        },  
        SAY: {
          name: "say",
          aliases: ['say'],
          category: 'misc',
          description: "Repeat text",
          usage: '<text>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: true
        },
        POLL: {
          name: "poll",
          aliases: ['sondage','ask'],
          category: 'misc',
          description: "Make a poll",
          usage: '<Question> | OR | <Question, answer 1, answer 2, etc> MAX 10',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: true
        }
      },

      MODERATION: {
        SETTINGS: {
          name: "config",
          aliases: ['settings','paramètres','parametres','config'],
          category: 'moderation',
          description: "Modify guild settings",
          usage: 'prefix <value> | lang <value>',
          isDevRestricted: false,
          permissionNeeded: "MANAGE_GUILD",
          args: true
        },
        NUKE: {
          name: "nuke",
          aliases: ['nuke, clearall'],
          category: 'moderation',
          description: "Nuke a channel",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "MANAGE_CHANNELS",
          args: false
        },
        KICK: {
          name: "kick",
          aliases: ['kick'],
          category: 'moderation',
          description: "Kick a member",
          usage: '<mention> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "KICK_MEMBERS",
          args: true
        },
        BAN: {
          name: "ban",
          aliases: ['ban'],
          category: 'moderation',
          description: "Ban a member",
          usage: '<mention> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "BAN_MEMBERS",
          args: true
        },
        UNBAN: {
          name: "unban",
          aliases: ['deban'],
          category: 'moderation',
          description: "Unban a member",
          usage: '<@ID> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "BAN_MEMBERS",
          args: true
        }
      }
}
  
exports.COMMANDS = COMMANDS

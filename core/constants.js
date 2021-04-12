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
          args: 0
        },
        MUG: {
          name: "mug",
          aliases: ['massupdateguilds'],
          category: 'dev',
          description: "Update all guilds with a new settings",
          usage: '',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },
        BLACKLIST: {
          name: "blacklist",
          aliases: ['bl'],
          category: 'dev',
          description: "Blacklist an user from the bot",
          usage: '<add> | <remove> <mention> | <ID> <reason)>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: 3
        },
        BROADCAST: {
          name: "broadcast",
          aliases: ['bc'],
          category: 'dev',
          description: "Say a message in every server where the bot is",
          usage: '<text>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: 1
        },
        EVAL: {
          name: "eval",
          aliases: ['eval'],
          category: 'dev',
          description: "Execute code",
          usage: '<code>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: 1
        },
        GUILDINVITE: {
          name: "guildinvite",
          aliases: ['ginvite','gi'],
          category: 'dev',
          description: "Try to find an invite of the guild",
          usage: '<guild ID>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: 1
        },
        GUILDLEAVE: {
          name: "guildleave",
          aliases: ['gleave','gl'],
          category: 'dev',
          description: "Make the bot leaves the guild",
          usage: '<guild ID>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: 1
        },
        RESTART: {
          name: "restart",
          aliases: ['restart'],
          category: 'dev',
          description: "Restart the bot (works only if you start the bot with pm2)",
          usage: '',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },
        SPURGE: {
          name: "spurge",
          aliases: ['selfpurge'],
          category: 'dev',
          description: "Clear only the bot messages",
          usage: '<amount>',
          isDevRestricted: true,
          permissionNeeded: "SEND_MESSAGES",
          args: 1
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
          args: 1
        },
        EMOJIFY: {
          name: "emojify",
          aliases: ['emoji','emote'],
          category: 'fun',
          description: "Text to emotes",
          usage: '<text>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 1
        },
        EIGHTBALL: {
          name: "8ball",
          aliases: ['eightball'],
          category: 'fun',
          description: "Answer your question",
          usage: '<question>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 1
        },
        GAMER: {
          name: "gamerometer",
          aliases: ['gamerometre','gamer'],
          category: 'fun',
          description: "Are you a gamer ?",
          usage: '<mention> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },
        HACK: {
          name: "hack",
          aliases: ['hack'],
          category: 'fun',
          description: "Corrupted",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },
        FBI : {
          name: "fbi",
          aliases: ['fbi'],
          category: 'fun',
          description: "FBI !",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },
        MEME: {
          name: "meme",
          aliases: ['meme'],
          category: 'fun',
          description: "Show a meme",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },
        HENTAI: {
          name: "hentai",
          aliases: ['hentai'],
          category: 'fun',
          description: "Show a hentai",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
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
          args: 0
        },
        USERINFO: {
          name: "userinfos",
          aliases: ['ui','uinfos','userinfo','uinfo','whois'],
          category: 'info',
          description: "Infos of an user",
          usage: '<mention> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },
        BOTINFO: {
          name: "botinfos",
          aliases: ['bi','binfos','botinfo','binfo'],
          category: 'info',
          description: "Bot infos",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },
        MEMBERCOUNT: {
          name: "membercount",
          aliases: ['mc','count','mcount'],
          category: 'info',
          description: "Count of members",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },
        PROFILEPICTURE: {
          name: "profilepicture",
          aliases: ['pfp','pdp','pp'],
          category: 'info',
          description: "Pfp of a member",
          usage: '<mention> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
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
          args: 0
        },
        HELP: {
          name: "help",
          aliases: ['help'],
          category: 'lockbot',
          description: "Help of the bot",
          usage: '<command>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },
        INVITE: {
          name: "invite",
          aliases: ['link'],
          category: 'lockbot',
          description: "Invite link of the bot",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
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
          args: 2
        },
        PING: {
          name: "ping",
          aliases: ['ping'],
          category: 'misc',
          description: "Pong !",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 0
        },  
        SAY: {
          name: "say",
          aliases: ['say'],
          category: 'misc',
          description: "Repeat text",
          usage: '<text>',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 1
        },
        POLL: {
          name: "poll",
          aliases: ['sondage','ask'],
          category: 'misc',
          description: "Make a poll",
          usage: '<Question> | OR | <Question, answer 1, answer 2, etc> MAX 10',
          isDevRestricted: false,
          permissionNeeded: "SEND_MESSAGES",
          args: 1
        }
      },

      MODERATION: {
        SETTINGS: {
          name: "config",
          aliases: ['settings','paramètres','parametres','config'],
          category: 'moderation',
          description: "Modify guild settings | anonymous mode is for +say command (display username or not)",
          usage: 'prefix <value> | lang <value> | anon <yes/no>',
          isDevRestricted: false,
          permissionNeeded: "MANAGE_GUILD",
          args: 2
        },
        NUKE: {
          name: "nuke",
          aliases: ['nuke, clearall'],
          category: 'moderation',
          description: "Nuke a channel",
          usage: '',
          isDevRestricted: false,
          permissionNeeded: "MANAGE_CHANNELS",
          args: 0
        },
        KICK: {
          name: "kick",
          aliases: ['kick'],
          category: 'moderation',
          description: "Kick a member",
          usage: '<mention> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "KICK_MEMBERS",
          args: 1
        },
        BAN: {
          name: "ban",
          aliases: ['ban'],
          category: 'moderation',
          description: "Ban a member",
          usage: '<mention> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "BAN_MEMBERS",
          args: 1
        },
        UNBAN: {
          name: "unban",
          aliases: ['deban'],
          category: 'moderation',
          description: "Unban a member",
          usage: '<@ID> | <ID>',
          isDevRestricted: false,
          permissionNeeded: "BAN_MEMBERS",
          args: 1
        },
        SLOWMODE: {
          name: "slowmode",
          aliases: ['slowmod'],
          category: 'moderation',
          description: "Set the slowmode for a channel",
          usage: '<duration (1h1m12s / 3672s)> | <off>',
          isDevRestricted: false,
          permissionNeeded: "MANAGE_CHANNELS",
          args: 1
        },
      }
}
  
exports.COMMANDS = COMMANDS

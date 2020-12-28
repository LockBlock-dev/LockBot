const MESSAGES = {

    COMMANDS: {

      DEV: {
        GUILDINVITE: {
          name: "guildinvite",
          aliases: ['ginvite','gi'],
          category: 'lockbot',
          description: "Invite the dev to a server",
          usage: '<Guild ID>',
          isUserAdmin: false,
          args: true
        },
        GUILDLEAVE: {
          name: "guildleave",
          aliases: ['gleave','gl'],
          category: 'lockbot',
          description: "Make the bot leaves the Guild",
          usage: '<Guild ID>',
          isUserAdmin: false,
          args: true
        },
        RESTART: {
          name: "restart",
          aliases: ['restart'],
          category: 'lockbot',
          description: "Restart the bot",
          usage: '',
          isUserAdmin: false,
          args: false
        },
        SPURGE: {
          name: "spurge",
          aliases: ['selfpurge'],
          category: 'lockbot',
          description: "Clear only the bot messages",
          usage: '<amount>',
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
          isUserAdmin: false,
          args: true
        },
        EMOJIFY: {
          name: "emojify",
          aliases: ['emoji'],
          category: 'fun',
          description: "Text to emotes",
          usage: '<text>',
          isUserAdmin: false,
          args: true
        },
        GAMER: {
          name: "gamer",
          aliases: ['gamerometre','gamerometer'],
          category: 'fun',
          description: "Are you a gamer ?",
          usage: '<mention>',
          isUserAdmin: false,
          args: true
        },
        HACK: {
          name: "hack",
          aliases: ['hack'],
          category: 'fun',
          description: "Corrupted",
          usage: '',
          isUserAdmin: false,
          args: false
        },
        FBI : {
          name: "fbi",
          aliases: ['fbi'],
          category: 'fun',
          description: "FBI !",
          usage: '',
          isUserAdmin: false,
          args: false
        },
        MEME: {
          name: "meme",
          aliases: ['meme'],
          category: 'fun',
          description: "Meme",
          usage: '',
          isUserAdmin: false,
          args: false
        }
      },

      INFOS: {
        COUNT: {
          name: "count",
          aliases: ['mcount','membercount','memberscount'],
          category: 'info',
          description: "Members count",
          usage: '',
          isUserAdmin: false,
          args: false
        },
        SERVERINFO: {
          name: "si",
          aliases: ['serverinfos','sinfos','serverinfo','sinfo'],
          category: 'info',
          description: "Server Infos",
          usage: '',
            isUserAdmin: false,
          args: false
        },
        USERINFO: {
          name: "ui",
          aliases: ['userinfos','uinfos','userinfo','uinfo'],
          category: 'info',
          description: "User Infos",
          usage: '<mention>',
          isUserAdmin: false,
          args: true
        },
        BOTINFO: {
          name: "bi",
          aliases: ['botinfos','binfos','botinfo','binfo'],
          category: 'info',
          description: "Bot Infos",
          usage: '',
          isUserAdmin: false,
          args: false
        },
        PROFILEPICTURE: {
          name: "pp",
          aliases: ['pfp','pdp','profilepicture','pp'],
          category: 'info',
          description: "Pfp",
          usage: '<mention>',
          isUserAdmin: false,
          args: true
        }
      },

      LOCKBOT: {
          HELP: {
            name: "help",
            aliases: ['help'],
            category: 'lockbot',
            description: "Help me",
            usage: '',
            isUserAdmin: false,
            isUserModo: false,
            args: false
          },
          /*BUGREPORT: {
            name: "bugreport",
            aliases: ['bg','bugsreport','bugreports','bugsreports'],
            category: 'lockbot',
            description: "Envoie un rapport de bug",
            usage: '<texte>',
            isUserAdmin: false,
            isUserModo: false,
            args: true
          },*/
          INVITE: {
            name: "invite",
            aliases: ['link'],
            category: 'lockbot',
            description: "Invite link",
            usage: '',
            isUserAdmin: false,
            isUserModo: false,
            args: false
          }
      },

      MISC: {
          PING: {
            name: "ping",
            aliases: ['ping'],
            category: 'misc',
            description: "Pong !",
            usage: '',
            isUserAdmin: false,
            isUserModo: false,
            args: false
          },  
          SAY: {
            name: "say",
            aliases: ['say'],
            category: 'misc',
            description: "Repeat text",
            usage: '<text>',
            isUserAdmin: false,
            isUserModo: false,
            args: true
          },
          POLL: {
            name: "poll",
            aliases: ['sondage'],
            category: 'misc',
            description: "Make a poll",
            usage: '(Simple) <Question> | OR | (Multiple) <Question, answer 1, answer 2,etc> MAX 10',
            isUserAdmin: false,
            isUserModo: false,
            args: true
          }
      },

      TECH: {
        KEKE: {
            name: "",
            aliases: [''],
            category: 'tech',
            description: "",
            usage: '',
            isUserAdmin: false,
            isUserModo: false,
            args: false
        },
        KEK: {
            name: "",
            aliases: [''],
            category: 'tech',
            description: "",
            usage: '',
            isUserAdmin: false,
            isUserModo: false,
            args: false
        }
      },

      MODERATION: {
        PREFIX: {
            name: "prefix",
            aliases: ['prefix','setprefix'],
            category: 'moderation',
            description: "Set the prefix",
            usage: '<new prefix>',
            isUserAdmin: true,
            isUserModo: false,
            args: true
        },
        LANG: {
          name: "lang",
          aliases: ['lang','setlang','language','setlanguage'],
          category: 'moderation',
          description: "Set the language",
          usage: '<fr> or <en>',
          isUserAdmin: true,
          args: true
      },
        NUKE: {
          name: "nuke",
          aliases: ['nuke, clearall'],
          category: 'moderation',
          description: "Nuke a channel",
          usage: '',
          isUserAdmin: true,
          args: false
      }
      }
    }
  }
  
exports.MESSAGES = MESSAGES

const fs = require('fs');
const chalk = require('chalk');


// Other
global.apikey = 'bf2d2cf29b3edc604b447983';
global.ownername = process.env.OWNER_NAME || "𝑆𝛪𝐷 𝐵𝛨𝛥𝛪";
global.owner = process.env.OWNER_NUMBER || ['917050906659'];
global.premium = process.env.PREMIUM_NUMBER || ['917050906659'];
global.packname = process.env.STICKER_PACKNAME || "𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚋𝚢";
global.author = process.env.STICKER_AUTHOR || "𝐆𝐒𝐒 𝚩𝚯𝚻𝐖𝚫";
global.sessionName = 'session';
global.prefa = ['!', '.'];
global.sp = '✪';
global.link = 'https://whatsapp.com/channel/0029VaWJMi3GehEE9e1YsI1S'
global.linkGroup = 'https://chat.whatsapp.com/E3PWxdvLc7ZCp1ExOCkEGp'
global.autoswview = process.env.AUTO_STATUS_SEEN || "true";
global.autoread = process.env.AUTO_READ || "true";
global.available = process.env.ALWAYS_ONLINE || "true";
global.autoTyping = process.env.AUTO_TYPING || "true";
global.autoRecord = process.env.AUTO_RECORDING || "false";

global.typemenu = process.env.MENU_TYPE || "v2";
global.onlygroup = process.env.ONLY_GROUP || "false";
global.onlypc = process.env.ONLY_PC || "false";
global.welcome = process.env.WELCOME_MSG || "true";
global.autoBlock = process.env.AUTO_BLOCK || "true";

/*REPLY MESSAGE*/
global.mess = {
    banned: '`You are *Banned* fron using commands!`',
    bangc: '`This Group is *Banned* from using Commands!`',
    success: '`✓ Success`',
    admin: '`This feature is only for group admins`',
    botAdmin: '`I am not an admin!`',
    owner: '`You are not my owner`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
};

global.limitawal = {
    premium: 'Infinity',
    free: 10
};
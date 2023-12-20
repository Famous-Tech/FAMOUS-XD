require("dotenv").config();  
require('./config')
const Func = ('./lib/function.js');
const fonts = require('./lib/font.js');
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const availableStyles = Object.keys(fonts);
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser,getAggregateVotesInPollMessage, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const fsx = require('fs-extra')
const ytSearch = require('yt-search');
const ytsr = require('ytsr');
const ytdl = require('ytdl-core');
const util = require('util')
const truecallerjs = require("truecallerjs");
const ffmpeg = require('fluent-ffmpeg');
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fg = require('api-dylux');
const cheerio = require('cheerio');
const os = require('os')
const googleTTS = require('google-tts-api');
const search = require('aptoide-scraper').search;
const download = require('aptoide-scraper').download;
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { pipeline } = require('stream');
const { promisify } = require('util');
const streamPipeline = promisify(pipeline);
const imageSize = require('image-size');
const { PDFDocument, rgb } = require('pdf-lib');
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const osu = require("node-os-utils");
const translate = require('translate-google-api');
  const { cpus, totalmem, freemem } = require("os");
  const {  sizeFormatter } = require("human-readable");
 const pingSt = new Date();
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')



const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun');

// read database
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/premium.json'))

// Initialize default values
let AUTO_READ = false;
let ALWAYS_ONLINE = false;
let TYPING_ENABLED = false;
let PUBLIC_MODE = false; // added
let ANTICALL_MODE = false; // added

let akinator = global.db.data.game.akinator = []

let props;
const reportedMessages = {};
const videoSearchResults = new Map();
let titleUrlMap = {}; 
const userContextMap = new Map();

module.exports = gss = async (gss, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        global.prefix = prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        var args = body.trim().split(/ +/).slice(1)
        args = args.concat(['','','','','',''])
        const isBaileys = chatUpdate?.messages[0]?.key?.id?.startsWith("BAE5");

//prefix v2
const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
        const isAsu = body.startsWith(pric)
        const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const pushname = m.pushName || "No Name"
        const botNumber = await gss.decodeJid(gss.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ").trim()
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
const isViewOnce = ["viewOnceMessageV2","viewOnceMessage"].includes(m.type)
	const botname = "𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫";
	const devlopernumber = "919142294671";
	
        // Group
        const groupMetadata = m.isGroup ? await gss.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const Badgss = JSON.parse(fs.readFileSync('./database/bad.json'))
        const antiToxic = m.isGroup ? nttoxic.includes(m.sender) : false
          const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
 
 
	
let format = sizeFormatter({ 
     std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC' 
     decimalPlaces: 2, 
     keepTrailingZeroes: false, 
     render: (literal, symbol) => `${literal} ${symbol}B`, 
 })
 

//  Bot Prosess Time
  const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds
//Uptime
  const uptimeMessage = `*I am alive now since ${hours}h ${minutes}m ${seconds}s*`;
  
  const runMessage = `*☀️ ${day} Day*\n *🕐 ${hours} Hour*\n *⏰ ${minutes} Minimum*\n *⏱️ ${seconds} Seconds*\n`;
  
async function doneReact() {
     await doReact('✅'); 
}

  
async function generateProfilePicture(media) {
    return {
        img: 'placeholder_image_data'
    };
}
	
	
async function getIPInfo() {
  try {
    const response = await axios.get('https://api.myip.com');
    const data = response.data;
    
    let ip = data.ip || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cr = data.country || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';
    let cc = data.cc || 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ';

    return { ip, cr, cc };
  } catch (error) {
    console.error('Error:', error);
    return { ip: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cr: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ', cc: 'ɴᴏᴛ ᴅᴇᴛᴇᴄᴛ' };
  }
}

async function mainSys() {

  let NotDetect = 'Not Detect';
  let cpux = osu.cpu;
  let cpuCore = cpux.count();
  let drive = osu.drive;
  let mem = osu.mem;
  let netstat = osu.netstat;
  let HostN = osu.os.hostname();
  let OS = osu.os.platform();
  let ipx = osu.os.ip();

   // const chats = Object.entries(client.chats).filter(([id, data]) => id && data.isChats) 
   //  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only) 
     const used = process.memoryUsage() 
     const _cpus = cpus().map(cpu => { 
         cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0) 
         return cpu 
     }) 
     const cpu = _cpus.reduce((last, cpu, _, { 
         length 
     }) => { 
         last.total += cpu.total 
         last.speed += cpu.speed / length 
         last.times.user += cpu.times.user 
         last.times.nice += cpu.times.nice 
         last.times.sys += cpu.times.sys 
         last.times.idle += cpu.times.idle 
         last.times.irq += cpu.times.irq 
         return last 
     }, { 
         speed: 0, 
         total: 0, 
         times: { 
             user: 0, 
             nice: 0, 
             sys: 0, 
             idle: 0, 
             irq: 0 
         } 
     })



let cpuPer 
     let p1 = cpux.usage().then(cpuPercentage => { 
         cpuPer = cpuPercentage 
     }).catch(() => { 
         cpuPer = NotDetect 
     }) 
     let driveTotal, driveUsed, drivePer 
     let p2 = drive.info().then(info => { 
         driveTotal = (info.totalGb + ' GB'), 
             driveUsed = info.usedGb, 
             drivePer = (info.usedPercentage + '%') 
     }).catch(() => { 
         driveTotal = NotDetect, 
             driveUsed = NotDetect, 
             drivePer = NotDetect 
     }) 
     let ramTotal, ramUsed 
     let p3 = mem.info().then(info => { 
         ramTotal = info.totalMemMb, 
             ramUsed = info.usedMemMb 
     }).catch(() => { 
         ramTotal = NotDetect, 
             ramUsed = NotDetect 
     }) 
     let netsIn, netsOut 
     let p4 = netstat.inOut().then(info => { 
         netsIn = (info.total.inputMb + ' MB'), 
             netsOut = (info.total.outputMb + ' MB') 
     }).catch(() => { 
         netsIn = NotDetect, 
             netsOut = NotDetect 
     }) 
     await Promise.all([p1, p2, p3, p4]) 
     let _ramTotal = (ramTotal + ' MB') 

  let d = new Date(new Date() + 3600000);
  let locale = 'id';
  let weeks = d.toLocaleDateString(locale, {
    weekday: 'long',
  });
  let dates = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  let times = d.toLocaleTimeString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  // Call the getIPInfo function to retrieve IP, Country, and Country Code
  const { ip, cr, cc } = await getIPInfo();
const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "💻",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, successReactionMessage); 
 
 m.reply(`
  - *ᴘ ɪ ɴ ɢ* - 
  ${new Date() - pingSt} ms 
  
  - *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* - 
  ${runMessage}
  
  - *s ᴇ ʀ ᴠ ᴇ ʀ* - 
  *🛑 Rᴀᴍ:* ${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect}) 
  *🔵 FʀᴇᴇRᴀᴍ:* ${format(freemem())}
 
  *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()} 
  *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()} 
  *💻 ᴏs:* ${OS} 
  *📍 ɪᴘ:* ${ip} 
  *🌎 ᴄᴏᴜɴᴛʀʏ:* ${cr} 
  *💬 ᴄᴏᴜɴᴛʀʏ ᴄᴏᴅᴇ:* ${cc} 

  *🔮 ᴄᴘᴜ ᴄᴏʀᴇ:* ${cpuCore} Core 
  *🎛️ ᴄᴘᴜ:* ${cpuPer}% 
  *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${times} 
   
    - *ᴏ ᴛ ʜ ᴇ ʀ* - 
  *📅 Wᴇᴇᴋꜱ:* ${weeks} 
  *📆 Dᴀᴛᴇꜱ:* ${dates} 
  *🔁 NᴇᴛꜱIɴ:* ${netsIn} 
  *🔁 NᴇᴛꜱOᴜᴛ:* ${netsOut} 
  *💿 DʀɪᴠᴇTᴏᴛᴀʟ:* ${driveTotal} 
  *💿 DʀɪᴠᴇUꜱᴇᴅ:* ${driveUsed} 
  *⚙️ DʀɪᴠᴇPᴇʀ:* ${drivePer} 
 
  *乂 ɴᴏᴅᴇJS ᴍᴇᴍᴏʀʏ ᴜsᴀɢᴇ* 
   ${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```' }
  `);
}





/*

const apiUrl = 'https://vihangayt.me/download/fmmods';

try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (m.text) {
        const lowerText = m.text.toLowerCase();

        if (data.status === true && data.data) {
    if (lowerText === '.fmmod') {
        let fmmodList = 'Here is the FMMod list:\n';
        Object.keys(data.data).forEach((fmmodName, index) => {
            fmmodList += `${index + 1}. ${fmmodName}\n`;
        });
                await m.reply(fmmodList);
            } else if (m.quoted && /^\d+$/.test(lowerText) && m.quoted.text.includes('Here is the FMMod list')) {
                const selectedNumber = parseInt(lowerText);
                const fmmodNames = Object.keys(data.data);

                if (selectedNumber >= 1 && selectedNumber <= fmmodNames.length) {
                    const fmmodName = fmmodNames[selectedNumber - 1];

                    const apkBufferReq = await fetch(data.data[fmmodName].link);
                    const apkArrayBuffer = await apkBufferReq.arrayBuffer();
                    const apkBuffer = Buffer.from(apkArrayBuffer);

                    await gss.sendMessage(m.chat, {
                        document: apkBuffer,
                        mimetype: 'application/vnd.android.package-archive',
                        fileName: `${fmmodName}.apk`,
                        caption: `${fmmodName}`
                    });
                    
                    
                } else {
                    await m.reply('Invalid FMMod number. Please select a number from the FMMod list.');
                }
            }
        }
    }
} catch (error) {
    console.error('Error fetching data from the API:', error.message);
    await m.reply('Error fetching data. Please try again later.');
}


const playapiUrl = 'https://vihangayt.me/download/ytmp4?url=https://youtu.be/5C8yvJUVB-0';

try {
    const response = await axios.get(playapiUrl);
    const data = response.data;

    if (m.text) {
        const lowerText = m.text.toLowerCase();

        if (data.status === true && data.data) {
            if (lowerText === '.playy') {
                let playList = 'Here is the yts list:\n';
                Object.keys(data.data).forEach((playName, index) => {
                    const qualityInfo = data.data[playName];
                    playList += `${index + 1}. Quality: ${qualityInfo.title}\n`;
                });
                await m.reply(playList);
            } else if (m.quoted && /^\d+$/.test(lowerText) && m.quoted.text.includes('Here is the yts list')) {
                const selectedNumber = parseInt(lowerText);
                const playNames = Object.keys(data.data);

                if (selectedNumber >= 1 && selectedNumber <= playNames.length) {
                    const playName = playNames[selectedNumber - 1];

                    const videoBufferReq = await fetch(data.data[playName].link);
                    const videoArrayBuffer = await videoBufferReq.arrayBuffer();
                    const videoBuffer = Buffer.from(videoArrayBuffer);

                    await gss.sendMessage(m.chat, {
                        document: videoBuffer,
                        mimetype: 'video/mp4',
                        fileName: `${playName}.mp4`,
                        caption: `${playName}`
                    });
                } else {
                    await m.reply('Invalid video number. Please select a number from the list.');
                }
            }
        }
    }
} catch (error) {
    console.error('Error fetching data from the API:', error.message);
    await m.reply('Error fetching data. Please try again later.');
}

*/

const typemenu = process.env.TYPEMENU || global.typemenu;
const onlygroup = process.env.ONLYGROUP || global.onlygroup;
const onlypc = process.env.ONLYPC || global.onlypc;

let TYPING_ENABLED = process.env.AUTO_TYPING === 'true';
let AUTO_READ_ENABLED = process.env.AUTO_READ === 'true';
let ALWAYS_ONLINE = process.env.ALWAYS_ONLINE === 'true';

	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    


let chats = db.data.chats[m.chat];

// Initialize chats if not defined
if (!chats || typeof chats !== 'object') {
    db.data.chats[m.chat] = {};
    chats = db.data.chats[m.chat];
}

// Initialize isAntiBotz, isMuted, and isAntiLink
let isAntiBotz = chats && 'antibot' in chats ? chats.antibot : false;
let isMuted = chats && 'mute' in chats ? chats.mute : false;
let isAntiLink = chats && 'antilink' in chats ? chats.antilink : false;
let isAntiDelete = chats && 'antidelete' in chats ? chats.antidelete : false;
let isAntiViewOnce = chats && 'antiviewonce' in chats ? chats.antiviewonce : false;




// Anti Delete
if (isAntiDelete && global.db.message && global.db.message[m.sender] && Object.keys(global.db.message[m.sender]).length > 0 && m.type == "protocolMessage") {
    if (Object.keys(global.db.message[m.sender]).includes("key") && global.db.message[m.sender].key.id == m.message[m.type].key.id) {
        if (!m.key.fromMe && !isAdmins) {
            let message = global.db.message[m.sender].message;
            let type = (!["senderKeyDistributionMessage", "messageContextInfo"].includes(Object.keys(message)[0]) && Object.keys(message)[0]) || (Object.keys(message).length >= 3 && Object.keys(message)[1] !== "messageContextInfo" && Object.keys(message)[1]) || Object.keys(message)[Object.keys(message).length - 1];
            let teks = "\`\`\`「  PESAN DITARIK TERDETEKSI  」\`\`\`\n\n";
            teks += `› Dari : @${m.senderNumber}\n`;
            m.reply(teks);
            setTimeout(() => {
                gss.copyNForward(m.chat, global.db.message[m.sender]);
            }, 2000);
        }
    }
}


// Anti View Once
if (isAntiViewOnce && isViewOnce && Object.keys(cmdOptions).length == 0) {
    if (!m.isOwner && !m.key.fromMe && !isGroupAdmins) {
        const media = await gss.downloadMediaMessage(m);
        let teks = "\`\`\`「  PESAN SEKALI TERBUKA TERDETEKSI  」\`\`\`\n\n";
        teks += `› Dari : @${m.senderNumber}\n`;
        teks += `› Waktu : ${m.timeWib}\n`;
        teks += `› Caption : ${m.body}\n`;
        teks += `› Type : ${getContentType(m.message)}`;
        if (getContentType(m.message) == "videoMessage") gss.sendMessage(m.chat, { video: media, caption: teks }, { quoted: m });
        if (getContentType(m.message) == "imageMessage") gss.sendMessage(m.chat, { image: media, caption: teks }, { quoted: m });
    }
}
/*
if (global.linkGroup.includes("https://chat.whatsapp.com/")) {
try{
gss.groupAcceptInvite(global.linkGroup.split("https://chat.whatsapp.com/")[1])
} catch { console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ ERROR ]"), "link group invalid!") }
}
*/

	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = true
		if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: false,
		status: 0,
		autobio: true
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!gss.public) {
            if (!m.key.fromMe) return
        }

        
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/kolkata"
        })
        
        


if (isCommand) {
            
if (!m.isGroup && !isCreator && global.onlygroup) {
    return m.reply("Hello, because we want to reduce spam, please use the bot in a group!\n\nIf there are joint interests, please type .owner to contact the owner.")
}
// Private Only
if (!isCreator && global.onlypc && m.isGroup) {
    return m.reply("Hello, if you want to use this bot, please chat privately with the bot.")
}

if (TYPING_ENABLED && command) {
  // Execute code when REACODING is enabled
  gss.sendPresenceUpdate('composing');
}

// 212 auto block using cmd
if (m.sender.startsWith('212') && global.autoblok212 === true) {
    // Update the block status
    gss.updateBlockStatus(m.sender, 'block');
}

if (AUTO_READ_ENABLED && command) {
  // Execute code when AUTO_READ is enabled
  gss.readMessages([m.key]);
}
}
        

if (isBaileys && m.fromMe) {
    m.reply('anti bot working');
}

	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nYou were detected sending a group link, sorry, you will be kicked !`)
        if (!isBotAdmins) return m.reply(`Eh, the bot is not an admin `)
        let gclink = (`https://chat.whatsapp.com/`+await gss.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh, sorry it didn't happen, because you sent the link to this group`)
        if (isAdmins) return m.reply(`Ehh, sorry you are admin`)
        if (isCreator) return m.reply(`Hey, sorry, you're the owner of my bot`)
        gss.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }



if (akinator.hasOwnProperty(m.sender.split('@')[0]) && isCmd && ["0", "1", "2", "3", "4", "5"].includes(body)) {
    kuis = true;
    var {
        server,
        frontaddr,
        session,
        signature,
        question,
        step
    } = akinator[m.sender.split('@')[0]];
    if (step == "0" && body == "5") m.reply("Sorry, you have reached the first question");

    // Translate the question to English
    const translatedQuestion = await translate(question, { to: 'en' });
    console.log('Translated Question:', translatedQuestion);

    var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=haikalgans&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${body}&step=${step}`;
    var get_result = await fetchJson(ini_url);
    var get_result = get_result.result;
    if (get_result.hasOwnProperty("name")) {
        var ini_name = get_result.name;
        var description = get_result.description;
        ini_txt = `${ini_name} - ${description}\n\n`;
        ini_txt += "*Thank You*\n*Powered By  gssbotwa*";
        await gss.sendMessage(m.chat, {
            image: {
                url: get_result.image
            },
            caption: ini_txt
        }).then(() => {
            delete akinator[m.sender.split('@')[0]];
            fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
        });
        return;
    }

    ini_txt = `${translatedQuestion}\n\n`;
    ini_txt += "0 - Yes\n";
    ini_txt += "1 - No\n";
    ini_txt += "2 - I Don't Know\n";
    ini_txt += "3 - Maybe\n";
    ini_txt += "4 - Maybe Not\n";
    ini_txt += "5 - Go Back to the Previous Question";

    if (args[0] === '5') {
        var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=haikalgans&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${body}&step=${step}`;
        var get_result = await fetchJson(ini_url);
        var get_result = get_result.result;
        var {
            question,
            _,
            step
        } = get_result;

        // Translate the question to English
        const translatedBackQuestion = await translate(question, { to: 'en' });
        console.log('Translated Back Question:', translatedBackQuestion);

        ini_txt = `${translatedBackQuestion}\n\n`;
        ini_txt += "0 - Yes\n";
        ini_txt += "1 - No\n";
        ini_txt += "2 - I Don't Know\n";
        ini_txt += "3 - Maybe\n";
        ini_txt += "4 - Maybe Not\n";
        ini_txt += "5 - Go Back to the Previous Question";
    }

    gss.sendText(m.chat, ini_txt, m).then(() => {
        const data_ = akinator[m.sender.split('@')[0]];
        data_["question"] = question;
        data_["step"] = step;
        akinator[m.sender.split('@')[0]] = data_;
        fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
    });
}




        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: gss.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, gss.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        gss.ev.emit('messages.upsert', msg)
        }
  	    

        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	'-3': 'Game is over', 
	'-2': 'Invalid', 
	'-1': 'Invalid Position',
	 0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to give up and admit to Lostan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await gss.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await gss.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
	    
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            gss.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} stop AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
during ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        
        const cmdBug = ["bug","report"]
        const cmdAi = ["ai","gpt","dalle","bard","remini"]
        const cmdTool = ["tempmail","checkmail","info","trt","tts"]
        const cmdGrup = ["linkgroup","setppgc","setname","setdesc","group","editinfo","add","kick","hidetag","tagall","totag","antilink","antiToxic","mute","promote","demote","revoke"]
 const cmdDown = ["facebook","apk","mediafire","gdrive","insta","pinterestdl","ytmp3","ytmp4","gitclone"]
 const cmdSearch = ["play","yts","imdb","google","gimage","pinterest","wallpaper","wikimedia","ytsearch","ringtone","weather","lyrics"]
        const cmdFun = ["delttt","tictactoe"]
   const cmdConv = ["removebg","sticker","emojimix","tovideo","togif","tourl","tovn","tomp3","toaudio","ebinary","dbinary","styletext","fontchange","fancy","upscale","hd"]
        const cmdMain = ["ping","owner","menu","delete","infochat","quoted","listpc","listgc","listonline"]
        const cmdOwner = ["react","chat","join","leave","block","unblock","bcgroup","bcall","setppbot","setexif","anticall","setstatus","setnamebot","sleep","autotyping","alwaysonline","autoread"]
        const allCmd = [...cmdGrup,...cmdDown,...cmdAi,...cmdTool,...cmdBug,...cmdSearch,...cmdFun,...cmdConv,...cmdMain,...cmdOwner]
	    
        switch(isCommand) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} already Afk${text ? ': ' + text : ''}`)
            }
            break	
            
case 'imdb': case 'movie':
if (!text) return m.reply(`Give Me a Series or movie Name`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           gss.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]} Type *surrender* to give up and admit defeat`
            if (room.x !== room.o) await gss.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await gss.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Waiting for partner' + (text ? ` typing the command below${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `You are not in the tictactoe room!`
            delete this.game[roomnya.id]
            m.reply(`Successfully deleted session room tictactoe!`)
            }
            break
      
            case 'join': {
  if (!isCreator) throw mess.owner;
  if (!text) throw 'Enter the Group Link!';
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Invalid Link!';
  m.reply(mess.wait);
  let result = args[0].split('https://chat.whatsapp.com/')[1];
  await gss.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'leave': {
  if (!isCreator) throw mess.owner;
  await gss.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setexif': {
  if (!isCreator) throw mess.owner;
  if (!text) throw `Example: ${prefix + command} packname|author`;
  global.packname = text.split("|")[0];
  global.author = text.split("|")[1];
  m.reply(`Exif successfully changed to\n\n⭔ Packname: ${global.packname}\n⭔ Author: ${global.author}`);
}
break;

case 'promote': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
  await gss.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;


case 'add': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
  await gss.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

	case 'kick': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
  await gss.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;
case 'demote': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
  await gss.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;
case 'block': {
  if (!isCreator) throw mess.owner;
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await gss.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'unblock': {
  if (!isCreator) throw mess.owner;
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await gss.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setname': case 'setsubject': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!text) throw 'Text?';
  await gss.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setdesc': case 'setdesk': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!text) throw 'Text?';
  await gss.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)));
}
break;

          case 'setppbot': {
  if (!isCreator) throw mess.owner;
  if (!/image/.test(mime)) throw `Send/Reply with an Image and Caption ${prefix + command}`;
  if (/webp/.test(mime)) throw `Send/Reply with an Image and Caption ${prefix + command}`;
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  await gss.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media));
  m.reply(mess.success);
}
break;

    
case 'toqr': {
                if (!q) return m.reply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await gss.sendMessage(m.chat, {
                    image: medi,
                    caption: mess.success
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            
case "readqr": {
try {
mee = await gss.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
m.reply(util.format(data[0].symbol))
} catch (err) {
m.reply(`Reply Image That Has Qr`)
}
}
break

case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await gss.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await gss.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.success)
                } else {
                    var memeg = await gss.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.success)
                }
                break

case 'sc':
            case 'script':
            case 'scriptbot':
                uy = `https://github.com/gssbotwa/Gssbotwa2`
                gss.sendMessage(m.chat, {
                    text: uy,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: 'Script Free',
                            body: `SCRIPT BOT ${botname}`,
                            thumbnailUrl: 'https://telegra.ph/file/0955010ca2f8bf045fb0a.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break


 case 'setimgmenu':
            {
                if (!isCreator) return m.reply(mess.owner)
                let delb = await gss.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './gss.jpg')
                fs.unlinkSync(delb)
                m.reply(mess.success)
            }
            break
            
            
case 'akinator':
    m.reply(`Akinator is a game and mobile application that attempts to accurately guess the user's thoughts through a series of detailed questions.\n\n~> ${prefix}akinatorstart: To start\n~> ${prefix}akinatorstop: To stop`)
    break;
case 'akinatorstart':
    if (akinator.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Finish the previous one first, please.")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=haikalgans`);
    let {
        server, frontaddr, session, signature, question, step
    } = get_result.result;
    const data = {};
    data["server"] = server;
    data["frontaddr"] = frontaddr;
    data["session"] = session;
    data["signature"] = signature;
    data["question"] = question;
    data["step"] = step;

    // Translate the question to English
    const translatedQuestion = await translate(question, { to: 'en' });
    imi_txt = `${translatedQuestion}\n\n`;
    imi_txt += "0 - Yes\n";
    imi_txt += "1 - No\n";
    imi_txt += "2 - I Don't Know\n";
    imi_txt += "3 - Maybe\n";
    imi_txt += "4 - Maybe Not";

    gss.sendText(m.chat, imi_txt, m).then(() => {
        akinator[m.sender.split('@')[0]] = data;
        fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
    });
    break;
case 'akinatorstop':
    if (!akinator.hasOwnProperty(m.sender.split('@')[0])) return m.reply("You don't have an ongoing akinator session.");
    delete akinator[m.sender.split('@')[0]];
    fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
    m.reply("Successfully canceled the previous akinator session.");
    break;

case 'tagall': case 'all':{
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs')
let teks = `乂 *ᴀᴛᴛᴇɴᴛɪᴏɴ ᴇᴠᴇʀʏᴏɴᴇ* 乂 

*Message:* ${args.join(" ") ? args.join(" ") : 'no message'}\n\n`
for (let mem of participants) {
teks += `✪ @${mem.id.split('@')[0]}\n`
}
gss.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break;

case 'hidetag': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  gss.sendMessage(m.chat, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;

case 'totag': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!m.quoted) throw `Reply to a message with the command ${prefix + command}`;
  gss.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) });
}
break;

	    case 'style': case 'styletext': {
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit); // Response when the limit is exhausted
  db.data.users[m.sender].limit -= 1; // Decrease the limit by 1
  let { styletext } = require('./lib/scraper');
  if (!text) throw 'Enter the text query!';
  let anu = await styletext(text);
  let teks = `Style Text From ${text}\n\n`;
  for (let i of anu) {
    teks += `⭔ *${i.name}* : ${i.result}\n\n`;
  }
  m.reply(teks);
}
break;

case 'group':
case 'grup': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Group Setting:", [`${prefix}group close`, `${prefix}group open`]);
  } else {
    const groupSetting = args[0].toLowerCase();
    if (groupSetting === 'close') {
      await gss.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Group Successfully Closed`)).catch((err) => m.reply(jsonformat(err)));
    } else if (groupSetting === 'open') {
      await gss.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Group Successfully Opened`)).catch((err) => m.reply(jsonformat(err)));
    } else {
      gss.sendPoll(m.chat, "Choose Group Setting:", [`${prefix}group close`, `${prefix}group open`]);
    }
  }
}
break;



case 'editinfo': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Edit Info Setting:", [`${prefix}editinfo open`, `${prefix}editinfo close`]);
  } else {
    const editInfoSetting = args[0].toLowerCase();
    if (editInfoSetting === 'open') {
      await gss.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Group Edit Info Successfully Opened`)).catch((err) => m.reply(jsonformat(err)));
    } else if (editInfoSetting === 'close') {
      await gss.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Group Edit Info Successfully Closed`)).catch((err) => m.reply(jsonformat(err)));
    } else {
      gss.sendPoll(m.chat, "Choose Edit Info Setting:", [`${prefix}editinfo open`, `${prefix}editinfo close`]);
    }
  }
}
break;



            case 'antilink': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Antilink Setting:", [`${prefix}antilink on`, `${prefix}antilink off`]);
  } else {
    const antilinkSetting = args[0].toLowerCase();
    if (antilinkSetting === "on") {
      if (db.data.chats[m.chat]?.antilink) return m.reply(`Antilink Already Active`);
      db.data.chats[m.chat].antilink = true;
      m.reply(`Antilink Activated!`);
    } else if (antilinkSetting === "off") {
      if (!db.data.chats[m.chat]?.antilink) return m.reply(`Antilink Already Inactive`);
      db.data.chats[m.chat].antilink = false;
      m.reply(`Antilink Deactivated!`);
    } else {
      gss.sendPoll(m.chat, "Choose Antilink Setting:", [`${prefix}antilink on`, `${prefix}antilink off`]);
    }
  }
}
break;


case 'antibot': {
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;
    
    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "Choose Antibot Setting:", [`${prefix}antibot on`, `${prefix}antibot off`]);
    } else {
        const antibotSetting = args[0].toLowerCase();
        if (antibotSetting === "on") {
            if (db.data.chats[m.chat]?.antibot) return m.reply(`Antibot Already Active`);
            db.data.chats[m.chat].antibot = true;
            m.reply(`Antibot Activated!`);
        } else if (antibotSetting === "off") {
            if (!db.data.chats[m.chat]?.antibot) return m.reply(`Antibot Already Inactive`);
            db.data.chats[m.chat].antibot = false;
            m.reply(`Antibot Deactivated!`);
        } else {
            gss.sendPoll(m.chat, "Choose Antibot Setting:", [`${prefix}antibot on`, `${prefix}antibot off`]);
        }
    }
}
break;

case 'antidelete': {
if (!isCreator) throw mess.owner;
    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "Choose Antidelete Setting:", [`${prefix}antidelete on`, `${prefix}antidelete off`]);
    } else {
        const antideleteSetting = args[0].toLowerCase();
        if (antideleteSetting === "on") {
            if (db.data.chats[m.chat]?.antidelete) return m.reply(`Antidelete Already Active`);
            db.data.chats[m.chat].antidelete = true;
            m.reply(`Antidelete Activated!`);
        } else if (antideleteSetting === "off") {
            if (!db.data.chats[m.chat]?.antidelete) return m.reply(`Antidelete Already Inactive`);
            db.data.chats[m.chat].antidelete = false;
            m.reply(`Antidelete Deactivated!`);
        } else {
            gss.sendPoll(m.chat, "Choose Antidelete Setting:", [`${prefix}antidelete on`, `${prefix}antidelete off`]);
        }
    }
}
break;

case 'antiviewonce': {
if (!isCreator) throw mess.owner;
    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "Choose Antiviewonce Setting:", [`${prefix}antiviewonce on`, `${prefix}antiviewonce off`]);
    } else {
        const antiviewonceSetting = args[0].toLowerCase();
        if (antiviewonceSetting === "on") {
            if (db.data.chats[m.chat]?.antiviewonce) return m.reply(`Antiviewonce Already Active`);
            db.data.chats[m.chat].antiviewonce = true;
            m.reply(`Antiviewonce Activated!`);
        } else if (antiviewonceSetting === "off") {
            if (!db.data.chats[m.chat]?.antiviewonce) return m.reply(`Antiviewonce Already Inactive`);
            db.data.chats[m.chat].antiviewonce = false;
            m.reply(`Antiviewonce Deactivated!`);
        } else {
            gss.sendPoll(m.chat, "Choose Antiviewonce Setting:", [`${prefix}antiviewonce on`, `${prefix}antiviewonce off`]);
        }
    }
}
break;




case 'mute': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Mute Setting:", [`${prefix}mute on`, `${prefix}mute off`]);
  } else {
    const muteSetting = args[0].toLowerCase();
    if (muteSetting === "on") {
      if (db.data.chats[m.chat]?.mute) return m.reply(`${gss.user.name} is already muted in this group`);
      db.data.chats[m.chat].mute = true;
      m.reply(`${gss.user.name} has been muted in this group!`);
    } else if (muteSetting === "off") {
      if (!db.data.chats[m.chat]?.mute) return m.reply(`${gss.user.name} is already unmuted in this group`);
      db.data.chats[m.chat].mute = false;
      m.reply(`${gss.user.name} has been unmuted in this group!`);
    } else {
      gss.sendPoll(m.chat, "Choose Mute Setting:", [`${prefix}mute on`, `${prefix}mute off`]);
    }
  }
}
break;



case 'linkgroup': case 'linkgc': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  let response = await gss.groupInviteCode(m.chat);
  gss.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link: ${groupMetadata.subject}`, m, { detectLink: true });
}
break;



case 'setstatus': case 'setbiobot': case 'setbotbio': {
  if (!isCreator) throw mess.owner;
  if (!text) throw `This is a WhatsApp Bot named gss botwa`;
  let name = await gss.updateProfileStatus(text);
  m.reply(`Successfully changed bot bio status to ${name}`);
}
break;

case 'anticall': {
    if (!isCreator) throw mess.owner;

    let ciko = db.data.settings[botNumber]?.anticall;

    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "Choose AntiCall Setting:", [`${prefix}anticall off`, `${prefix}anticall on`]);
    } else {
        if (args[0].toLowerCase() === "on") {
            if (ciko) return m.reply(`Already Active Before`);
            db.data.settings[botNumber].anticall = true;
            m.reply(`AntiCall Active!`);
        } else if (args[0].toLowerCase() === "off") {
            if (!ciko) return m.reply(`Already Inactive Before`);
            db.data.settings[botNumber].anticall = false;
            m.reply(`AntiCall Deactivated!`);
        } else {
            gss.sendPoll(m.chat, "Choose AntiCall Setting:", [`${prefix}anticall off`, `${prefix}anticall on`]);
        }
    }
}
break;




            case 'deleteall':
case 'delall':
case 'delete':
case 'del': 
  if (!isCreator) return m.reply('Yᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴍʏ ᴏᴡɴᴇʀ')
    
        if (!m.quoted) return m.reply('Pʟᴇᴀsᴇ ᴍᴇɴᴛɪᴏɴ ᴀ ᴍᴇssᴀɢᴇ');
        let { chat, id } = m.quoted;

        const key = {
            remoteJid: m.chat,
            id: m.quoted.id,
            participant: m.quoted.sender
        };

        await gss.sendMessage(m.chat, { delete: key });
    break;

case 'bcgc': case 'bcgroup': {
  if (!isCreator) throw mess.owner;
  if (!text) throw `Where's the text?\n\nExample: ${prefix + command} fatih-san`;
  let getGroups = await gss.groupFetchAllParticipating();
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
  let anu = groups.map(v => v.id);
  m.reply(`Sending Broadcast to ${anu.length} Group Chats, Estimated Time ${anu.length * 1.5} seconds`);
  for (let i of anu) {
    await sleep(1500);
    let txt = `「 Bot Broadcast 」\n\n${text}`;
    gss.sendText(i, txt);
  }
  m.reply(`Successfully Sent Broadcast to ${anu.length} Groups`);
}
break;
  
case 'bc': case 'broadcast': case 'bcall': {
  if (!isCreator) throw mess.owner;
  if (!text) throw `Where's the text?\n\nExample: ${prefix + command} fatih-san`;
  let anu = await store.chats.all().map(v => v.id);
  m.reply(`Sending Broadcast to ${anu.length} Chats\nEstimated Time ${anu.length * 1.5} seconds`);
  for (let yoi of anu) {
    await sleep(1500);
    gss.sendText(yoi, text);
  }
  m.reply('Broadcast Successful');
}
break;

case 'infochat': {
  if (!m.quoted) m.reply('Reply to a message');
  let msg = await m.getQuotedObj();
  if (!m.quoted.isBaileys) throw 'The message is not sent by the bot!';
  let teks = '';
  for (let i of msg.userReceipt) {
    let read = i.readTimestamp;
    let unread = i.receiptTimestamp;
    let Time = read ? read : unread;
    teks += `⭔ @${i.userJid.split('@')[0]}\n`;
    teks += ` ┗━⭔ *Time:* ${moment(Time * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status:* ${read ? 'Read' : 'Sent'}\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'q': case 'quoted': {
  if (!m.quoted) return m.reply('Reply to the message!');
  let wokwol = await gss.serializeM(await m.getQuotedObj());
  if (!wokwol.quoted) return m.reply('The replied message does not contain a reply');
  await wokwol.quoted.copyNForward(m.chat, true);
}
break;

            case 'listpc': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id);
  let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chats: ${anu.length} Chats\n\n`;
  for (let i of anu) {
    let nama = store.messages[i].array[0].pushName;
    teks += `⬡ *Name:* ${nama}\n⬡ *User:* @${i.split('@')[0]}\n⬡ *Chat:* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'listgc': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id);
  let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Groups: ${anu.length} Groups\n\n`;
  for (let i of anu) {
    let metadata = await gss.groupMetadata(i);
    teks += `⬡ *Name:* ${metadata.subject}\n⬡ *Owner:* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n⬡ *ID:* ${metadata.id}\n⬡ *Created:* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Members:* ${metadata.participants.length}\n\n────────────────────────\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'listonline': case 'liston': {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
  let online = [...Object.keys(store.presences[id]), botNumber];
  gss.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online });
}
break;


case 'remini': case 'upscale': case 'enhance': case 'hd': {
    if (!quoted) return m.reply(`Where is the picture?`);
    if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`);
    m.reply(mess.wait);
    const { remini } = require('./lib/remini');
    let media = await quoted.download();

    try {
        let proses = await remini(media, "enhance");

        // Send the enhanced image with the new caption
        gss.sendMessage(m.chat, { image: proses, caption: `${mess.success} enhanced by gss botwa` }, { quoted: m });
    } catch (error) {
        console.error('Error in Remini enhancement:', error);
        m.reply(`An error occurred: ${error.message}`);
    }
    break;
}

  

case 'ebinary': {
  if (!text) throw `Example: ${prefix + command} text`;
  let { eBinary } = require('./lib/binary');
  let eb = await eBinary(text);
  m.reply(eb);
}
break;

case 'dbinary': {
  if (!text) throw `Example: ${prefix + command} text`;
  let { dBinary } = require('./lib/binary');
  let db = await dBinary(text);
  m.reply(db);
}
break;

case 'tomp4': case 'tovideo': {
  if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`;
  m.reply(mess.wait);
  let { webp2mp4File } = require('./lib/uploader');
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  let webpToMp4 = await webp2mp4File(media);
  await gss.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m });
  await fs.unlinkSync(media);
}
break;

case 'toaud': case 'toaudio': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply with Video/Audio to convert into Audio with caption ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toAudio } = require('./lib/converter');
  let audio = await toAudio(media, 'mp4');
  gss.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m });
}
break;

            case 'tomp3': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply with Video/Audio to convert into MP3 with caption ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toAudio } = require('./lib/converter');
  let audio = await toAudio(media, 'mp4');
  gss.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${gss.user.name}.mp3` }, { quoted: m });
}
break;

case 'tovn': case 'toptt': {
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply with Video/Audio to convert into VN with caption ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toPTT } = require('./lib/converter');
  let audio = await toPTT(media, 'mp4');
  gss.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;

case 'togif': {
  if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`;
  m.reply(mess.wait);
  let { webp2mp4File } = require('./lib/uploader');
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  let webpToMp4 = await webp2mp4File(media);
  await gss.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m });
  await fs.unlinkSync(media);
}
break;

case 'tourl': case 'url': {
  m.reply(mess.wait);
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader');
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  if (/image/.test(mime)) {
    let anu = await TelegraPh(media);
    m.reply(util.format(anu));
  } else if (!/image/.test(mime)) {
    let anu = await UploadFileUgu(media);
    m.reply(util.format(anu));
  }
  await fs.unlinkSync(media);
}
break;

            case 'imagenobg': case 'removebg': case 'remove-bg': {
  if (!/image/.test(mime)) throw `Send/Reply with Image with caption ${prefix + command}`;
  if (/webp/.test(mime)) throw `Send/Reply Image with caption ${prefix + command}`;
  let remobg = require('remove.bg');
  let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL'];
  let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)];
  hmm = await './src/remobg-' + getRandom('');
  localFile = await gss.downloadAndSaveMediaMessage(qmsg, hmm);
  outputFile = await './src/hremo-' + getRandom('.png');
  m.reply(mess.wait);
  remobg.removeBackgroundFromImageFile({
    path: localFile,
    apiKey: apinobg,
    size: "regular",
    type: "auto",
    scale: "100%",
    outputFile
  }).then(async result => {
    gss.sendMessage(m.chat, { image: fs.readFileSync(outputFile), caption: mess.success }, { quoted: m });
    await fs.unlinkSync(localFile);
    await fs.unlinkSync(outputFile);
  });
}
break;

case'tagadmins': case 'admins': {
if (!text) return m.reply(`*give me message for admin*`)
let teks = `*「 Tag Admins 」*

*Message : ${text}*\n\n`
for (let mem of groupAdmins) {
teks += ` @${mem.split('@')[0]}\n`
}
gss.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
}
break;



case 'ytv':
case 'video':
case 'ytmp4':
  try {
    if (!text) {
      m.reply('Enter YouTube Video Link or Search Query!');
      return;
    }

    m.reply(mess.wait);

    const apiURL = `https://nextapi-2c1cf958de8a.herokuapp.com/downloadurl?query=${encodeURIComponent(text)}`;

    const req = await fetch(apiURL);

    console.log('Response Status:', req.status);

    const contentType = req.headers.get('content-type');
    console.log('Content-Type:', contentType);

    if (req.status === 404) {
      return m.reply('Video not found.');
    }

    if (contentType && contentType.includes('application/json')) {
      const result = await req.json().catch(async (error) => {
        console.error('Error parsing JSON:', await req.text());
        m.reply('Unexpected error occurred.');
        throw error;
      });

      console.log('Full API Response:', result);

      if (result && result.downloadUrl) {
// Fetch the video content
const videoBufferReq = await fetch(result.downloadUrl);
const videoArrayBuffer = await videoBufferReq.arrayBuffer();
const videoBuffer = Buffer.from(videoArrayBuffer);

// Save the video to a temporary file
const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
fs.writeFileSync(`./${randomName}`, videoBuffer);

// Stylish caption with markdown formatting
const stylishCaption = `
  🌟 *Title:* _${result.title}_
  👀 *Views:* _${result.views}_
  ⏱️ *Duration:* _${result.duration}_
  📅 *Upload Date:* _${result.uploadDate}_
  📺 *YouTube URL:* ${result.youtubeUrl}
  📢 *Upload Channel:* _${result.uploadChannel}_
  
  🤖 Downloaded by *gss botwa*
`;

// Send the video using gss.sendMessage with the modified stylish caption and saved video
await gss.sendMessage(m.chat, { video: fs.readFileSync(`./${randomName}`), caption: stylishCaption }, { quoted: m });

// Delete the temporary file
fs.unlinkSync(`./${randomName}`);
      } else if (result && result.error) {
        return m.reply(`Error: ${result.error}`);
      } else {
        console.error('Invalid API response:', result);
        m.reply('Enter YouTube Video Link or Search Query!');
      }
    } else {
      console.error('Invalid Content-Type:', contentType);
      m.reply('Unexpected response format.');
    }
  } catch (error) {
    console.error('Error during :', error);
    m.reply('Unexpected error occurred.');
  }
  break;

  
case 'yta':
case 'song':
case 'ytmp3':
  case 'audio':
  try {
    if (!text) {
      m.reply('Enter YouTube Video Link or Search Query!');
      return;
    }

    m.reply(mess.wait);

    const ytaAPIURL = 'https://ytdlv2-f2fb0f53f892.herokuapp.com/downloadurl?query=';
    const apiURL = `${ytaAPIURL}${encodeURIComponent(text)}`;

    const req = await fetch(apiURL);

    console.log('Response Status:', req.status);

    const contentType = req.headers.get('content-type');
    console.log('Content-Type:', contentType);

    if (req.status === 404) {
      return m.reply('Audio not found.');
    }

    if (contentType && contentType.includes('application/json')) {
      const result = await req.json().catch(async (error) => {
        console.error('Error parsing JSON:', await req.text());
        m.reply('Unexpected error occurred.');
        throw error;
      });

      console.log('Full API Response:', result);

      if (result && result.downloadURL) {
        // Fetch the audio content
        const audioBufferReq = await fetch(result.downloadURL);
        const audioArrayBuffer = await audioBufferReq.arrayBuffer();
        const audioBuffer = Buffer.from(audioArrayBuffer);

        // Save the audio to a temporary file
        const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp3`;
        fs.writeFileSync(`./${randomName}`, audioBuffer);

        // Send the audio using gss.sendMessage with the saved audio and filename
        await gss.sendMessage(m.chat, { audio: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mp4', fileName: `${result.title}.mp3` }, { quoted: m });

        // Delete the temporary file
        fs.unlinkSync(`./${randomName}`);
      } else if (result && result.error) {
        return m.reply(`Error: ${result.error}`);
      } else {
        console.error('Invalid API response:', result);
        m.reply('Enter YouTube Video Link or Search Query!');
      }
    } else {
      console.error('Invalid Content-Type:', contentType);
      m.reply('Unexpected response format.');
    }
  } catch (error) {
    console.error('Error during yta:', error);
    m.reply('Unexpected error occurred.');
  }
  break;




case 'ytvdoc':
case 'videodoc':
case 'ytmp4doc':
  try {
    if (!text) {
      m.reply('Enter YouTube Video Link or Search Query!');
      return;
    }

    m.reply(mess.wait);

    const apiURL = `https://nextapi-2c1cf958de8a.herokuapp.com/downloadurl?query=${encodeURIComponent(text)}`;
    const req = await fetch(apiURL);

    console.log('Response Status:', req.status);

    const contentType = req.headers.get('content-type');
    console.log('Content-Type:', contentType);

    if (req.status === 404) {
      return m.reply('Video not found.');
    }

    if (contentType && contentType.includes('application/json')) {
      const result = await req.json().catch(async (error) => {
        console.error('Error parsing JSON:', await req.text());
        m.reply('Unexpected error occurred.');
        throw error;
      });

      console.log('Full API Response:', result);

      if (result && result.downloadUrl) {
        // Fetch the video content
        const videoBufferReq = await fetch(result.downloadUrl);
        const videoArrayBuffer = await videoBufferReq.arrayBuffer();
        const videoBuffer = Buffer.from(videoArrayBuffer);

        // Save the video to a temporary file
        const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
        fs.writeFileSync(`./${randomName}`, videoBuffer);

        // Send the video using gss.sendMessage with the saved video as a document
        await gss.sendMessage(m.chat, { document: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', fileName: `${result.title}.mp4`, caption: ' downloaded by gss botwa' }, { quoted: m });

        // Delete the temporary file
        fs.unlinkSync(`./${randomName}`);
      } else if (result && result.error) {
        return m.reply(`Error: ${result.error}`);
      } else {
        console.error('Invalid API response:', result);
        m.reply('Enter YouTube Video Link or Search Query!');
      }
    } else {
      console.error('Invalid Content-Type:', contentType);
      m.reply('Unexpected response format.');
    }
  } catch (error) {
    console.error('Error during :', error);
    m.reply('Unexpected error occurred.');
  }
  break;


case 'ytadoc':
case 'songsoc':
case 'ytmp3doc':
  try {
    if (!text) {
      m.reply('Enter YouTube Video Link or Search Query!');
      return;
    }

    m.reply(mess.wait);

    const ytaAPIURL = 'https://ytdlv2-f2fb0f53f892.herokuapp.com/downloadurl?query=';
    const apiURL = `${ytaAPIURL}${encodeURIComponent(text)}`;
    const req = await fetch(apiURL);

    console.log('Response Status:', req.status);

    const contentType = req.headers.get('content-type');
    console.log('Content-Type:', contentType);

    if (req.status === 404) {
      return m.reply('Audio not found.');
    }

    if (contentType && contentType.includes('application/json')) {
      const result = await req.json().catch(async (error) => {
        console.error('Error parsing JSON:', await req.text());
        m.reply('Unexpected error occurred.');
        throw error;
      });

      console.log('Full API Response:', result);

      if (result && result.downloadURL) {
        // Fetch the audio content
        const audioBufferReq = await fetch(result.downloadURL);
        const audioArrayBuffer = await audioBufferReq.arrayBuffer();
        const audioBuffer = Buffer.from(audioArrayBuffer);

        // Save the audio to a temporary file
        const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp3`;
        fs.writeFileSync(`./${randomName}`, audioBuffer);

        // Send the audio using gss.sendMessage with the saved audio as a document
        await gss.sendMessage(m.chat, { document: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mp3', fileName: `${result.title}.mp3`, caption: ' downloaded by gss botwa' }, { quoted: m });

        // Delete the temporary file
        fs.unlinkSync(`./${randomName}`);
      } else if (result && result.error) {
        return m.reply(`Error: ${result.error}`);
      } else {
        console.error('Invalid API response:', result);
        m.reply('Enter YouTube Video Link or Search Query!');
      }
    } else {
      console.error('Invalid Content-Type:', contentType);
      m.reply('Unexpected response format.');
    }
  } catch (error) {
    console.error('Error during yta:', error);
    m.reply('Unexpected error occurred.');
  }
  break;



case 'play': {
  if (!text) return m.reply('Enter YouTube Video Link or Search Query!');

  const apiURL = `https://ytsearch-4rtb.onrender.com/api?search=${encodeURIComponent(text)}`;

  // Fetch data from the API
  const response = await fetch(apiURL);
  const data = await response.json();

  if (!data || !data.data || data.data.length === 0) {
    return m.reply('No search results found.');
  }

  const topResult = data.data[0];
const { url, title, duration, size, views, uploadDate } = topResult;

// Save the search results in the map for future reference
videoSearchResults.set(m.chat, [{ url, title, duration, size, views, uploadDate }]);



gss.sendPoll(
  m.chat,
  `Choose an option for\n\n "${title}":\nDuration: ${duration}\n Views: ${views}\n Upload Date: ${uploadDate}`,
  [
    `.𝗩𝗜𝗗𝗘𝗢`,
    `.𝗔𝗨𝗗𝗜𝗢`
  ]
);

  break;
}

case '𝗩𝗜𝗗𝗘𝗢': {
  const searchResults = videoSearchResults.get(m.chat);

  if (!searchResults || searchResults.length === 0) {
    return m.reply('No search results found.');
  }

  // If there's only one result, directly proceed to download and send
  if (searchResults.length === 1) {
    const { url } = searchResults[0];

    try {
      const downloadResponse = await fetch(`https://nextapi-2c1cf958de8a.herokuapp.com/downloadurl?query=${encodeURIComponent(url)}`);
      const result = await downloadResponse.json();

      if (result && result.downloadURL) {
        // Fetch the video content
        const videoBufferReq = await fetch(result.downloadURL);
        const videoArrayBuffer = await videoBufferReq.arrayBuffer();
        const videoBuffer = Buffer.from(videoArrayBuffer);

        // Save the video to a temporary file
        const randomName = `temp_video_${Math.floor(Math.random() * 10000)}.mp4`;
        fs.writeFileSync(`./${randomName}`, videoBuffer);

        // Create a stylish caption
        const infoCaption = ` 🌟 *Title:* _${result.title}_\n 👀 *Views:* _${result.views}_\n ⏱️ *Duration:* _${result.duration}_\n 📅 *Upload Date:* _${result.uploadDate}_\n 📺 *YouTube URL:* ${result.youtubeUrl}\n 📢 *Upload Channel:* _${result.uploadChannel}_\n 🤖 Downloaded by *gss botwa*`;

        // Send the video with the stylish caption
        await gss.sendMessage(m.chat, { video: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', caption: infoCaption }, { quoted: m });
        doneReact();

        // Delete the temporary file
        fs.unlinkSync(`./${randomName}`);
      } else if (result && result.error) {
        return m.reply(`Error: ${result.error}`);
      } else {
        console.error('Invalid API response:', result);
        m.reply('Unexpected error occurred.');
      }
    } catch (error) {
      console.error(`Error during 𝗩𝗜𝗗𝗘𝗢:`, error);
      m.reply('Unexpected error occurred.');
    }
  } else {
    return m.reply('Invalid video index.');
  }

  break;
}

case '𝗔𝗨𝗗𝗜𝗢': {
  const searchResults = videoSearchResults.get(m.chat);

  if (!searchResults || searchResults.length === 0) {
    return m.reply('No search results found.');
  }

  // If there's only one result, directly proceed to download and send
  if (searchResults.length === 1) {
    const { url } = searchResults[0];

    try {
      const downloadResponse = await fetch(`https://ytdlv2-f2fb0f53f892.herokuapp.com/downloadurl?query=${encodeURIComponent(url)}`);
      const result = await downloadResponse.json();

      if (result && result.downloadURL) {
        // Fetch the audio content
        const audioBufferReq = await fetch(result.downloadURL);
        const audioArrayBuffer = await audioBufferReq.arrayBuffer();
        const audioBuffer = Buffer.from(audioArrayBuffer);

        // Save the audio to a temporary file
        const randomName = `temp_audio_${Math.floor(Math.random() * 10000)}.mp3`;
        fs.writeFileSync(`./${randomName}`, audioBuffer);

await gss.sendMessage(m.chat, { audio: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mp4', fileName: `${result.title}.mp3` }, { quoted: m });

        // Delete the temporary file
        fs.unlinkSync(`./${randomName}`);
      } else if (result && result.error) {
        console.error('API response error:', result);
        return m.reply(`Error: ${result.error}`);
      } else {
        console.error('Invalid API response:', result);
        console.log('API response details:', JSON.stringify(result, null, 2)); // Add this line to log the response details
        m.reply('Unexpected error occurred. Please check the logs for more details.');
      }
    } catch (error) {
      console.error(`Error during 𝗔𝗨𝗗𝗜𝗢:`, error);
      m.reply('Unexpected error occurred. Please check the logs for more details.');
    }
  } else {
    return m.reply('Invalid audio index.');
  }

  break;
}


// Inside the 'yts' case:
case 'yts': {
  if (!text) {
    return m.reply('Enter YouTube Video Link or Search Query!');
  }

  const apiURL = `https://ytsearch-4rtb.onrender.com/api?search=${encodeURIComponent(text)}`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.type === 'search' && Array.isArray(data.data)) {
      let pollOptions = [];
      let optionIndex = 1;

      // Iterate through the search results
      for (const result of data.data) {
        const uniqueKey = `yts_${optionIndex}`;

        // Check if the key already exists in the Map
        if (videoSearchResults.has(uniqueKey)) {
          // Key exists, find the next available sub-option number
          let subOption = 1;
          while (videoSearchResults.get(uniqueKey).find((item) => item.subOption === subOption)) {
            subOption += 1;
          }

          // Add the new video details with the updated sub-option number
          videoSearchResults.get(uniqueKey).push({
            subOption,
            title: result.title,
            url: result.url,
            uploadDate: result.uploadDate,
            views: result.views,
            duration: result.duration
          });
        } else {
          // Key doesn't exist, create a new array with the current video details
          videoSearchResults.set(uniqueKey, [{
            subOption: 1,
            title: result.title,
            url: result.url,
            uploadDate: result.uploadDate,
            views: result.views,
            duration: result.duration
          }]);
        }

        // Update pollOptions accordingly (use optionIndex and sub-option number)
        pollOptions.push(`.𝐩𝐥𝐚𝐲 ${optionIndex}.${videoSearchResults.get(uniqueKey).length} ${result.title}`);
        optionIndex += 1;
      }

      // Send the poll with titles as options
      await gss.sendPoll(m.chat, 'Choose a video to download:', [...pollOptions]);
    } else {
      console.error('Invalid API response:', data);
      return m.reply('Error retrieving search results.');
    }
  } catch (error) {
    console.error('Error during yts:', error);
    return m.reply('Unexpected error occurred.');
  }
  break;
}


// Inside the '𝐩𝐥𝐚𝐲' case:
case '𝐩𝐥𝐚𝐲': {
  if (!text) {
    return m.reply('Enter the option and sub-option number of the video you want to play! (e.g., 1.1)');
  }

  // Extract the option and sub-option numbers
  const [option, subOption] = text.split('.').map(parseFloat);

  // Check if the entered option and sub-option numbers are valid
  if (!option || !subOption || option < 1 || subOption < 1) {
    return m.reply('Invalid option and sub-option numbers. Please enter valid numbers.');
  }

  // Find the selected video details based on the option and sub-option numbers
  const selectedKey = Array.from(videoSearchResults.keys())[option - 1];

  // Check if the selected key exists in the Map
  if (!videoSearchResults.has(selectedKey) || subOption > videoSearchResults.get(selectedKey).length) {
    return m.reply('Invalid option and sub-option numbers. Please enter valid numbers.');
  }

  const selectedVideo = videoSearchResults.get(selectedKey)[subOption - 1];

  // Store the selected URL and details for later use
  const uniqueKey = `play_${selectedVideo.url}`;

  // Set the 'selectedUrl' key to the unique key
  videoSearchResults.set('selectedUrl', {
    url: selectedVideo.url,
    subOption
  });

  // Fetch details using the selectedUrl
  const apiDetailsURL = `https://ytsearch-4rtb.onrender.com/api?search=${encodeURIComponent(selectedVideo.url)}`;

  try {
    const detailsResponse = await fetch(apiDetailsURL);
    const detailsData = await detailsResponse.json();

    // Check if data is available and it's an array
    if (detailsData && Array.isArray(detailsData.data) && detailsData.data.length > 0) {
      const videoDetails = detailsData.data[0];

      // Send the video details within the poll options with the URL option number
      await gss.sendPoll(
        m.chat,
        `Video Details (Option ${option}.${subOption}):\nTitle: ${videoDetails.title}\nViews: ${videoDetails.views}\nDuration: ${videoDetails.duration}\nUpload Date: ${videoDetails.uploadDate}\nURL: ${selectedVideo.url}`,
        [`.𝐯𝐢𝐝𝐞𝐨 ${option}.${subOption}`, `.𝐚𝐮𝐝𝐢𝐨 ${option}.${subOption}`]
      );
    } else {
      console.error('Invalid API response:', detailsData);
      return m.reply('Error retrieving video details.');
    }
  } catch (error) {
    console.error('Error fetching video details:', error);
    return m.reply('Unexpected error occurred while fetching video details.');
  }
  break;
}


// Inside the '𝐯𝐢𝐝𝐞𝐨' case:
case '𝐯𝐢𝐝𝐞𝐨': {
  if (!text) {
    return m.reply('Enter the sub-option number of the video you want to play! (e.g., 1.1)');
  }

  const [videoOption, videoSubOption] = text.split('.').map(parseFloat);

  // Check if the entered option and sub-option numbers are valid
  if (!videoOption || !videoSubOption || videoOption < 1 || videoSubOption < 1) {
    return m.reply('Invalid option and sub-option numbers. Please enter valid numbers.');
  }

  const selectedKey = Array.from(videoSearchResults.keys())[videoOption - 1];

  // Check if the selected key exists in the Map
  if (!videoSearchResults.has(selectedKey) || videoSubOption > videoSearchResults.get(selectedKey).length) {
    return m.reply('Invalid option and sub-option numbers. Please enter valid numbers.');
  }

  const selectedVideo = videoSearchResults.get(selectedKey)[videoSubOption - 1];

  // Check if the selectedVideo object is defined and has a 'url' property
  if (!selectedVideo || !selectedVideo.url) {
    console.error('Error: Video details not available for the selected sub-option.');
    return m.reply('Error: Video details not available for the selected sub-option.');
  }

  const uniqueKey = `yts_${videoSubOption}`;

  try {
    console.log('Fetching video details for URL:', selectedVideo.url);

    // Fetch details using the selectedVideo.url directly
    const videoDetailsResponse = await fetch(`https://nextapi-2c1cf958de8a.herokuapp.com/downloadurl?query=${encodeURIComponent(selectedVideo.url)}`);
    const videoResult = await videoDetailsResponse.json();

    console.log('Video details API response:', JSON.stringify(videoResult, null, 2));

    if (!videoResult || !videoResult.downloadUrl) {
      console.error('Error: Download URL not available in the API response.');
      return m.reply('Error: Download URL not available in the API response.');
    }

    // Fetch the video content
    const videoBufferReq = await fetch(videoResult.downloadUrl);

    if (!videoBufferReq.ok) {
      console.error('Failed to fetch video content. Status:', videoBufferReq.status);
      return m.reply('Error fetching video content.');
    }

    const videoArrayBuffer = await videoBufferReq.arrayBuffer();
    const videoBuffer = Buffer.from(videoArrayBuffer);

    const randomName = `temp_video_${videoSubOption}.mp4`;
    fs.writeFileSync(`./${randomName}`, videoBuffer);

    // Create a stylish caption with video details
    const videoDetailsCaption = ` 🌟 *Title:* _${videoResult.title}_\n 👀 *Views:* _${videoResult.views}_\n ⏱️ *Duration:* _${videoResult.duration}_\n 📅 *Upload Date:* _${videoResult.uploadDate}_\n 📺 *YouTube URL:* ${videoResult.youtubeUrl}\n 📢 *Upload Channel:* _${videoResult.uploadChannel}_\n 🤖 Downloaded by *gss botwa*`;

    // Send the video with the stylish caption
    await gss.sendMessage(m.chat, { video: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', caption: videoDetailsCaption }, { quoted: m });

    // Delete the temporary file
    fs.unlinkSync(`./${randomName}`);
  } catch (error) {
    console.error('Error during 𝐯𝐢𝐝𝐞𝐨:', error);
    m.reply('Unexpected error occurred.');
  }
  break;
}



case '𝐚𝐮𝐝𝐢𝐨': {
  if (!text) {
    return m.reply('Enter the sub-option number of the video you want to play! (e.g., 1.1)');
  }

  const [audioOption, audioSubOption] = text.split('.').map(parseFloat);

  // Check if the entered option and sub-option numbers are valid
  if (!audioOption || !audioSubOption || audioOption < 1 || audioSubOption < 1) {
    return m.reply('Invalid option and sub-option numbers. Please enter valid numbers.');
  }

  const selectedKey = Array.from(videoSearchResults.keys())[audioOption - 1];

  // Check if the selected key exists in the Map
  if (!videoSearchResults.has(selectedKey) || audioSubOption > videoSearchResults.get(selectedKey).length) {
    return m.reply('Invalid option and sub-option numbers. Please enter valid numbers.');
  }

  const selectedVideo = videoSearchResults.get(selectedKey)[audioSubOption - 1];

  // Check if the selectedVideo object is defined and has a 'url' property
  if (!selectedVideo || !selectedVideo.url) {
    console.error('Error: Video details not available for the selected sub-option.');
    return m.reply('Error: Video details not available for the selected sub-option.');
  }

  const uniqueKey = `play_${audioSubOption}`;

  try {
    const audioDetailsResponse = await fetch(`https://ytdlv2-f2fb0f53f892.herokuapp.com/downloadurl?query=${encodeURIComponent(selectedVideo.url)}`);
    const audioResult = await audioDetailsResponse.json();

    if (audioResult && audioResult.downloadURL) {
      const audioBufferReq = await fetch(audioResult.downloadURL);

      if (!audioBufferReq.ok) {
        console.error('Failed to fetch audio content. Status:', audioBufferReq.status);
        return m.reply('Error fetching audio content.');
      }

      const audioArrayBuffer = await audioBufferReq.arrayBuffer();
      const audioBuffer = Buffer.from(audioArrayBuffer);

      const randomName = `temp_audio_${audioSubOption}.mp3`;
      fs.writeFileSync(`./${randomName}`, audioBuffer);

      await gss.sendMessage(m.chat, { audio: fs.readFileSync(`./${randomName}`), mimetype: 'audio/mp4', fileName: `${audioResult.title}.mp3` }, { quoted: m });

      fs.unlinkSync(`./${randomName}`);
    } else if (audioResult && audioResult.error) {
      console.error('API response error:', audioResult);
      return m.reply(`Error: ${audioResult.error}`);
    } else {
      console.error('Invalid API response:', audioResult);
      m.reply('Unexpected error occurred.');
    }
  } catch (error) {
    console.error('Error during 𝐚𝐮𝐝𝐢𝐨:', error);
    m.reply('Unexpected error occurred.');
  }
  break;
}





async function instaDownload(url) {
    try {
        const apiUrl = `https://vihangayt.me/download/instagram?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`API Error (${response.status}): ${errorMessage}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error(`Error with API: ${error.message}`);
        throw error;
    }
}

async function downloadInstagramMedia(url) {
    try {
        const result = await instaDownload(url);

        console.log('API Response:', result);

        if (result.status && result.data && result.data.data && result.data.data.length > 0) {
            const mediaType = result.data.data[0].type;
            const mediaUrl = result.data.data[0].url;

            if (mediaType && mediaUrl) {
                return { type: mediaType, url: mediaUrl };
            } else {
                throw new Error('Media type or URL not found in API response');
            }
        } else {
            throw new Error('Invalid or unexpected API response');
        }
    } catch (error) {
        console.error('Error downloading Instagram media:', error.message);
        throw error;
    }
}


// ...

async function downloadAndSendMedia(m, text, isDocument) {
    const url = text;

    if (!url) {
        return m.reply(`Where is the link?\n\nExample: ${prefix + command} https://www.instagram.com/p/CK0tLXyAzEI`);
    }

    m.reply(mess.wait);

    try {
        const media = await downloadInstagramMedia(url);

        const response = await fetch(media.url);
        const bufferArray = await response.arrayBuffer();
        const fileBuffer = Buffer.from(bufferArray);

        const fileName = `instagram_media.${media.type === 'image' ? 'jpg' : 'mp4'}`;

        // Send the media using gss.sendMessage with the saved file
        if (isDocument) {
            await gss.sendMessage(m.chat, { document: fileBuffer, mimetype: `application/octet-stream`, fileName, caption: 'Downloaded by gss botwa' }, { quoted: m });
        } else {
            if (media.type === 'image') {
                await gss.sendMessage(m.chat, { image: fileBuffer, mimetype: 'image/jpeg', fileName, caption: 'Downloaded by gss botwa' }, { quoted: m });
            } else if (media.type === 'video') {
                await gss.sendMessage(m.chat, { video: fileBuffer, mimetype: 'video/mp4', fileName, caption: 'Downloaded by gss botwa' }, { quoted: m });
            } else {
                throw new Error('Unsupported media type');
            }
        }
    } catch (error) {
        console.error('Error while processing Instagram media:', error);
        return m.reply(`An error occurred: ${error.message}`);
    }
}

// ...

// Handle Instagram media download
case 'igdl':
case 'insta':
case 'ig':
case 'instagram':
    await downloadAndSendMedia(m, text, false);
    break;

// Handle Instagram media download as document
case 'igdldoc':
case 'instadoc':
case 'igdoc':
case 'instagramdoc':
    await downloadAndSendMedia(m, text, true);
    break;







case 'anime':
case 'girl':
case 'animegirl':
case 'sexy':
case 'sexygirl':
case 'sexyanime':
  const maxImageCount = 10;
  const requestedCount = Math.min(parseInt(args[0]) || 1, maxImageCount);
  const imageUrl = requestedCount === 1 ?
    'https://supreme-catfish-goutammallick516.koyeb.app/randomgirl' :
    `https://supreme-catfish-goutammallick516.koyeb.app/randomgirl${text}`;
  const requestTimeout = 10000;

  try {
    gss.sendMessage(m.chat, {
      image: {
        url: imageUrl,
      },
      caption: text,
    }, {
      quoted: m,
    });
  } catch (error) {
    console.error("Error sending random girl image:", error);
    m.reply('Failed to fetch or send the image. Please try again later.');
  }
  break;


case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
axios.get(`https://api.waifu.pics/sfw/${isCommand}`)
.then(({data}) => {
gss.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break



case 'true':
case 'truecaller':
  try {
    if (!text) {
      // Reply when no phone number is provided
    return  m.reply ('Please provide a phone number.');
      break;
    }

    const installationId = 'a1i0Q--j6pQD-V1-BJnOIongGhfL3HZuNr-yb1WJChcUdQn7GEc9yAScT71cs8_F';
    const apiUrl = `https://matrix-nextjs-api.vercel.app/api/truecaller?phone=${encodeURIComponent(text)}&id=${installationId}`;

    let response = await axios.get(apiUrl);
    console.log(response);
    let json = response.data;

    const { name, alternateName, addresses, email, countryDetails } = json;

    let info = `╭––『 *Phone Detail* 』\n`;
    info += `┆ ⚝ *Name:* ${name}\n`;

    if (addresses && addresses.length > 0) {
      info += `┆ ⚝ *Address:* ${addresses[0].city}, ${addresses[0].countryCode}\n`;
      info += `┆ ⚝ *Time Zone:* ${addresses[0].timeZone}\n`;
      info += `┆ ⚝ *Pin Code* ${addresses[0].zipCode}\n`;
      info += `┆ ⚝ *Street* ${addresses[0].street}\n`;
    }

    info += `┆ ⚝ *Email:* ${email}\n`;
    info += `╰–––––––––––––––༓\n`;

    if (countryDetails) {
      info += `╭––『 *countryDetails* 』\n`;
      info += `┆ ⚝ *Name:* ${countryDetails.name}\n`;
      info += `┆ ⚝ *Native:* ${countryDetails.native}\n`;
      info += `┆ ⚝ *Phone Code:* +${countryDetails.phone[0]}\n`;
      info += `┆ ⚝ *Continent:* ${countryDetails.continent}\n`;
      info += `┆ ⚝ *Capital:* ${countryDetails.capital}\n`;
      info += `┆ ⚝ *Currency:* ${countryDetails.currency.join(', ')}\n`;
      info += `┆ ⚝ *Languages:* ${countryDetails.languages.join(', ')}\n`;
      info += `┆ ⚝ *Flag:* ${countryDetails.flag}\n`;
      info += `╰–––––––––––––––༓`;
    }

    await gss.sendMessage(m.chat, {
      text: info,
    }, {
      quoted: m,
    });

  } catch (error) {
    console.error(error);
  }
  break;


case "xnxxdl": {
	if (!text) return m.reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return m.reply(`Enter an xnxx link`)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
gss.sendMessage(m.chat, { caption: `  *XNXX DL*
        
✍ *Title:* ${xn.title}
⌛ *Duration:* ${xn.duration}
📽 *Visual Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: m })
}
break


case 'xnxxsearch': {
	if (!text) return m.reply(`Enter Query`)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
              }
              break
              


case 'qc':
    try {
        if (!text) {
            return m.reply('Please provide text for the quote.');
        }

        if (text.length > 30) {
            return m.reply('Please provide text with a maximum of 30 characters.');
        }

        const settings = global.db.setting;
        let profilePicture;

        try {
            profilePicture = await gss.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image');
        } catch {
            profilePicture = 'https://srv.neoxr.tk/files/z8hI5T.jpg';
        }

        const quoteObject = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": m.quoted ? global.db.users.find(v => v.jid == m.quoted.sender).name : m.pushName,
                    "photo": {
                        "url": profilePicture
                    }
                },
                "text": text,
                "replyMessage": {}
            }]
        };

        try {
            const response = await axios.post('https://bot.lyo.su/quote/generate', quoteObject, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const buffer = Buffer.from(response.data.result.image, 'base64');

            gss.sendImageAsSticker(m.chat, buffer, m, {
                packname: global.packname,
                author: global.author
            });
        } catch (error) {
            console.error('Error during HTTP request:', error);
            return m.reply('Error generating sticker. Please try again later.');
        }

    } catch (error) {
        console.error('Unexpected error in sticker case:', error);
        // Handle any other unexpected errors
    }
    break;




case 'apk': case 'app': case 'apkdl': {
  if (!text) throw `I need an apk name for download`;

  const getRandomName = (ext) => `${Math.floor(Math.random() * 10000)}${ext}`;
  const randomName = getRandomName(".apk");
  const filePath = `./${randomName}`;

  let searchResults = await search(text);

  if (!searchResults.length) return m.reply("App not found!");

  const data = await download(searchResults[0].id);

  // No need to check file size, proceed with download

  const url = data.dllink;
  const iconUrl = data.icon;

  let info = `╭───〈 *${data.name}* 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *App Name:* ${data.name}
▮➣ *App Id:* ${data.package}
▮➣ *Last Update:* ${data.lastup}
▮➣ *App Size:* ${data.size}
▮➣ *App Version:* ${data.version}
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;


  // Download icon
  const iconPath = `./${getRandomName(".png")}`;
  await axios.get(iconUrl, { responseType: 'stream' })
    .then(response => {
      const writer = fs.createWriteStream(iconPath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    });

  const iconMessage = {
    image: fs.readFileSync(iconPath),
    caption: info
  };

  // Send icon with info
  await gss.sendMessage(m.chat, iconMessage, { quoted: m });

  // Delete temporary icon file
  fs.unlink(iconPath, (err) => {
    if (err) {
      console.error('Error deleting icon file:', err);
    } else {
      console.log('Icon file deleted successfully');
    }
  });

  // Download and send APK
  axios.get(url, { responseType: 'stream' })
    .then(response => {
      const writer = fs.createWriteStream(filePath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    }).then(() => {
      const apkMessage = {
        document: fs.readFileSync(filePath),
        mimetype: 'application/vnd.android.package-archive',
        fileName: `${data.name}.apk`
      };

      gss.sendMessage(m.chat, apkMessage, { quoted: m });

      // Delete temporary APK file
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting APK file:', err);
        } else {
          console.log('APK file deleted successfully');
        }
      });
    }).catch(error => {
      fs.unlink(filePath);
      return m.reply('*Apk not Found, Sorry, try with apk2 cmd*');
    });

  break;
}


case 'mediafire': {
    // Check if the command has arguments
    if (args.length === 0) {
        return m.reply(`Where is the link? \n\nExample: ${prefix + command} https://www.mediafire.com/file/96mscj81p92na3r/images+(35).jpeg/file`);
    }

    // Check if the argument is a valid MediaFire link
    if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) {
        return m.reply(`The link you provided is invalid`);
    }

    // Import the mediafireDl function from the mediafire.js file
    const { mediafireDl } = require('./lib/mediafire.js');

    // Reply with a "Please wait..." message
    await m.reply(`Please wait...`);

    try {
        // Call the mediafireDl function to get details about the file
        const fileInfo = await mediafireDl(text);

        // Check if the file size is too big
        if (fileInfo[0].size.split('MB')[0] >= 100) {
            return m.reply('Oops, the file is too big...');
        }

        // Prepare result message with available information and added spaces
        const resultMessage = `*gss mediafire downloader*

*✪ Name* : ${fileInfo[0].nama}
*✪ Size* : ${fileInfo[0].size}
*✪ Mime* : ${fileInfo[0].mime}
*✪ Creator* : ${fileInfo[0].creator ? fileInfo[0].creator : 'Not available'} 
*✪ Upload Date* : ${fileInfo[0].uploadDate ? fileInfo[0].uploadDate : 'Not available'}`;  // If upload date is not available, show 'Not available'

        // Send the result message
        m.reply(`${resultMessage}`);

        // Send the file to the user with a caption
        gss.sendMessage(
            m.chat,
            {
                document: {
                    url: fileInfo[0].link,
                },
                fileName: fileInfo[0].nama,
                mimetype: fileInfo[0].mime,
                caption: `Downloaded by gss botwa: ${fileInfo[0].nama}`,  // Add your desired caption
            },
            { quoted: m }
        );
    } catch (error) {
        // Handle any errors that may occur during the process
        console.error('Error in mediafire download:', error);
        m.reply(`An error occurred: ${error.message}`);
    }

    break;
}


   case "rvo": {
    if (!m.quoted || !m.quoted.m.isViewOnce) {
        return m.reply(`Reply view once with command ${prefix + command}`);
    }

    isViewOnce = false;

    await gss.sendMessage(m.from, { forward: m.quoted }, { quoted: m });
}
break;

            
case 'toonce':
            case 'toviewonce': {
                if (!quoted) return m.reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await gss.downloadAndSaveMediaMessage(quoted)
                    gss.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.success,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await gss.downloadAndSaveMediaMessage(quoted)
                    gss.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.success,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await gss.downloadAndSaveMediaMessage(quoted)
                   gss.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break


case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\n Want to Buy Premium? Just chat with the owner😉`
                await gss.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: 'BUY PREMIUM',
                            body: `15k / MONTH`,
                            thumbnailUrl: 'https://telegra.ph/file/0955010ca2f8bf045fb0a.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: false
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            
            


case 'invite': {
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
if (!text) return m.reply(`*Enter the number you want to invite to the group*\n\nExample :\n*${prefix + command}* 919142294671`)
if (text.includes('+')) return m.reply(`Enter the number together without *+*`)
if (isNaN(text)) return m.reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await gss.groupInviteCode(group)
      await gss.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        m.reply(` An invite link is sent to the user`) 
}
break

case 'take':
case 'send':
case 'save': {
    if (!m.quoted) return m.reply('Please mention a message.');
    try {
        const quotedMessage = m.msg.contextInfo.quotedMessage;

        if (quotedMessage) {
            // Check if it's an image
            if (quotedMessage.imageMessage) {
                let imageCaption = quotedMessage.imageMessage.caption;
                let imageUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
                gss.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
            }

            // Check if it's a video
            if (quotedMessage.videoMessage) {
                let videoCaption = quotedMessage.videoMessage.caption;
                let videoUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
                gss.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
            }
        }
    } catch (error) {
        console.error("Error in 'send message' handling:", error);
    }
    break;
}


case 'fb': case 'fbdl': case 'facebook': {
    if (!args[0]) {
        throw ` Please send the link of a Facebook video\n\nEXAMPLE :\n *${prefix + command}* https://fb.watch/7B5KBCgdO3`;
    }

    const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
    if (!urlRegex.test(args[0])) {
        throw '⚠️ PLEASE GIVE A VALID URL.';
    }
     await m.reply(`Please wait...`);
    try {
        const result = await fg.fbdl(args[0]);
        const tex = `
  *Video Details* 
📽️ *Title*: ${result.title}
`;


        const response = await fetch(result.videoUrl);
        const arrayBuffer = await response.arrayBuffer();
        const videoBuffer = Buffer.from(arrayBuffer);

        // Save the videoBuffer to a temporary file
        const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
        fs.writeFileSync(`./${randomName}`, videoBuffer);

        // Send the video using client.sendMessage
        await gss.sendMessage(
            m.chat,
            {
                video: fs.readFileSync(`./${randomName}`),
                caption: tex,
            },
            { quoted: m }
        );

        // Delete the temporary file
        fs.unlinkSync(`./${randomName}`);
    } catch (error) {
        console.log(error);
        m.reply('⚠️ An error occurred while processing the request. Please try again later.');
    }

    break;
}
  
case 'instastalk': case 'igs': {
if (!args[0]) return m.reply(`Enter Instagram Username\n\nExample: ${prefix + command} world_reacode_egg`)

const igs = require('api-dylux')
await m.reply(`Please wait...`);
    try {
    let res = await igs.igStalk(args[0])
    let te = `
┌──「 *Information* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await gss.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        m.reply(`Make sure the username comes from *Instagram*`)
      }
}
break;

 case 'gitclone':
  if (!args[0]) return m.reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/sid238/Gss_Botwa`)
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  let [, user, repo] = args[0].match(regex1) || []
  repo = repo.replace(/.git$/, '')
  let gitUrl = `https://api.github.com/repos/${user}/${repo}/zipball`
  let filename = (await fetch(gitUrl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  gss.sendMessage(m.chat, { document: { url: gitUrl }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
  break;




case 'google': {
  if (!text) throw `Example : ${prefix + command} fatih arridho`;
  let google = require('google-it');
  google({ 'query': text }).then(res => {
    let teks = `Google Search From : ${text}\n\n`;
    for (let g of res) {
      teks += `⭔ *Title* : ${g.title}\n`;
      teks += `⭔ *Description* : ${g.snippet}\n`;
      teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
    }
    m.reply(teks);
  });
}
break;

case 'gimage': {
  if (!text) throw `Example : ${prefix + command} kaori cicak`;
  let gis = require('g-i-s');
  gis(text, async (error, result) => {
    n = result;
    images = n[Math.floor(Math.random() * n.length)].url;
    let Message = {
      image: { url: images },
      caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
    };
    gss.sendMessage(m.chat, Message, { quoted: m });
  });
}
break;




case 'sticker': case 's': case 'stickergif': case 'sgif': {
  if (/image/.test(mime)) {
    m.reply(mess.wait);
    let media = await gss.downloadMediaMessage(qmsg);
    let encmedia = await gss.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    m.reply(mess.wait);
    if (qmsg.seconds > 11) return m.reply('Maximum duration is 10 seconds!');
    let media = await gss.downloadMediaMessage(qmsg);
    let encmedia = await gss.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    m.reply(`Send/reply with an image/video/gif with caption ${prefix + command}\nVideo/Gif duration 1-9 seconds`);
  }
}
break;

case 'pinterest': {
  m.reply(mess.wait);
  let { pinterest } = require('./lib/scraper');
  anu = await pinterest(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  gss.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : ' + result }, { quoted: m });
}
break;


case 'wallpaper': {
  if (!text) throw 'Enter Query Title';
  let { wallpaper } = require('./lib/scraper');
  anu = await wallpaper(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  let Message = {
    image: { url: result.image[0] },
    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
  };
  gss.sendMessage(m.chat, Message, { quoted: m });
}
break;

case 'wikimedia': {
  if (!text) throw 'Enter Query Title';
  let { wikimedia } = require('./lib/scraper');
  anu = await wikimedia(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  let Message = {
    image: { url: result.image },
    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
  };
  gss.sendMessage(m.chat, Message, { quoted: m });
}
break;

        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		gss.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	    
	    
		      case 'mode': {
    if (!isCreator) throw mess.owner;

    const validModes = ['public', 'self', 'onlygroup', 'onlypc'];

    if (args.length < 1 || !validModes.includes(args[0].toLowerCase())) {
        gss.sendPoll(m.chat, "Choose Bot Mode:", validModes.map(mode => `${prefix}mode ${mode}`));
    } else {
        const selectedMode = args[0].toLowerCase();

        if (selectedMode === 'public' || selectedMode === 'self') {
            gss[selectedMode] = true;
            m.reply(`Bot mode changed to ${selectedMode}. ${mess.success}`);
        } else if (selectedMode === 'onlygroup' || selectedMode === 'onlypc') {
            global[selectedMode] = true;
            m.reply(`Bot mode changed to ${selectedMode}. ${mess.success}`);
        }
    }
}
break;





            

case 'ping': {
  const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "📌",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, successReactionMessage); 
  const startTime = new Date();
  const pingMsg = await gss.sendMessage(m.chat, { text: '*cheking...*' });

 await gss.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*Response speed is:* ${new Date() - startTime} ms`
        }
      }
    }, {});
  } 
break;



            
            case 'owner': case 'creator': {
                gss.sendContact(m.chat, global.owner, m)
            }
            break


            
case 'getbio':  
   if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await gss.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) throw `bio is private!`
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await gss.fetchStatus(who)
      m.reply(bio.status)
    } catch {
      throw `bio is private!`
    }
  }
  break; // Don't forget to add the 'break' statement at the end
  
case 'system': case 'info': case 'ram': case 'usage':
mainSys();
break;

case 'setmenu': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('setmenu has 5 views');

    process.env.TYPEMENU = text; // Set the environment variable
    m.reply(mess.success);
}
break;

case 'onlygroup': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('onlygroup true/false');

    global.onlygroup = text === 'true'; // Update the global variable
    m.reply(mess.success);
}
break;

case 'onlypc': {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('onlypc true/false');

    global.onlypc = text === 'true'; // Update the global variable
    m.reply(mess.success);
}
break;

case 'tiktok':
case 'tt':
case 'tiktoknowm':
  try {
    if (!text) m.reply ('Enter Query Link!');

    m.reply(mess.wait);

    let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=haikalgans&url=${encodeURIComponent(text)}`);

    console.log('TikTok API Response:', anu);

    if (anu.status === 200 && anu.message === 'success' && anu.result) {
      const videoUrl = anu.result;

      const response = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      const videoBuffer = Buffer.from(response.data);

      // Save the video to a temporary file
      const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
      fs.writeFileSync(`./${randomName}`, videoBuffer);

      // Send the video using gss.sendMessage with the saved video
      await gss.sendMessage(m.chat, { video: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', caption: 'Downloaded by gss botwa' }, { quoted: m });

      // Delete the temporary file
      fs.unlinkSync(`./${randomName}`);
    } else {
      console.log ('Error: Unable to fetch TikTok video. Check the console logs for more details.');
    }
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while processing your request.');
  }
  break;

//tik tok video in document
case 'tiktokdoc':
case 'ttdoc':
case 'tiktoknowmdoc':
  try {
    if (!text) m.reply('Enter Query Link!');

    m.reply(mess.wait);

    let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=haikalgans&url=${encodeURIComponent(text)}`);

    console.log('TikTok API Response:', anu);

    if (anu.status === 200 && anu.message === 'success' && anu.result) {
      const videoUrl = anu.result;

      const response = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      const videoBuffer = Buffer.from(response.data);

      // Save the video to a temporary file
      const randomName = `temp_${Math.floor(Math.random() * 10000)}.mp4`;
      fs.writeFileSync(`./${randomName}`, videoBuffer);

      // Send the video as a document using gss.sendMessage with the saved video
      await gss.sendMessage(m.chat, { document: fs.readFileSync(`./${randomName}`), mimetype: 'video/mp4', fileName: 'tiktok_video.mp4', caption: 'Downloaded by gss botwa' }, { quoted: m });

      // Delete the temporary file
      fs.unlinkSync(`./${randomName}`);
    } else {
      console.log ('Error: Unable to fetch TikTok video. Check the console logs for more details.');
    }
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while processing your request.');
  }
  break;



 case 'attp':
                if (!q) return m.reply('Give Me Text')
                m.reply(mess.wait)
                gss.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=haikalgans&text=${q}`
                    }
                }, {
                    quoted: m
                })
            break


    case "ai":
case "gpt":
  const aithink = await gss.sendMessage(m.chat, { text: 'Thinking...' });

  try {
    if (!text) return m.reply(`*Chat With ChatGPT*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Hello*\n*◉ ${prefix + command} write a hello world program in python*`);

    const apiEndpoint = `https://matrix-coder.vercel.app/api/gpt?query=${encodeURIComponent(text)}`;
    const response = await axios.get(apiEndpoint);

    if (response.status === 200) {
      const result = response.data.result;
      const typingSpeed = 200; // Adjust the typing speed as needed (milliseconds per word)

      const words = result.split(' ');
      let i = 0;

      const typewriterInterval = setInterval(() => {
        if (i < words.length) {
          const typedText = words.slice(0, i + 1).join(' ');
          gss.relayMessage(m.chat, {
            protocolMessage: {
              key: aithink.key,
              type: 14,
              editedMessage: {
                conversation: typedText,
              },
            },
          }, {});
          i++;
        } else {
          clearInterval(typewriterInterval); // Stop the typewriter effect
        }
      }, typingSpeed);
    } else {
      console.error(`HTTP request failed with status ${response.status}`);
      m.reply("Error: Unable to fetch data from the API.");
    }
  } catch (error) {
    console.error(error);
    m.reply("Error: " + error.message);
  }
  break;




case 'snapshotfull': case 'ssf':
  try {
    if (!text) return m.reply("```Uhh Please, Give me Url!```");
    let urll = `https://image.thum.io/get/fullpage/=${text.match(/\bhttps?:\/\/\S+/gi)[0]}`
    let media = await getBuffer(urll)
    return await gss.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    return m.reply("```Error While Fetching Snapshot```");
  }
  break;
  
  
case 'snapshot':
case 'ss':
  try {
    if (!text) return m.reply("```Uhh Please, Give me Url!```");
    let urll = `https://api.screenshotmachine.com/?key=c04d3a&url=${encodeURIComponent(text)}&dimension=720x720`;
    let media = await getBuffer(urll);
    return await gss.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    return m.reply("```Error While Fetching Snapshot```");
  }
  break;



    case 'voiceai': case 'voicegpt':
      if (!text) {
        await m.reply(`*You can use the Voice AI command with text to get a spoken response.*\n\n*Example usage:*\n*◉ ${prefix + command} Tell me a joke.*`);
        break;
      }

      try {
        const apiEndpoint = `https://matrix-coder.vercel.app/api/gpt?query=${encodeURIComponent(text)}`;
        let response = await axios.get(apiEndpoint);
        let responseData = response.data;

        if (responseData.result) {
          const result = responseData.result;
          const speechURL = `https://matrix-coder.vercel.app/api/gpt?query=${encodeURIComponent(result)}`;
          await gss.sendMessage(m.chat, {
            audio: {
              url: speechURL,
            },
            mimetype: 'audio/mp4',
            ptt: true,
            fileName: `${text}.mp3`,
          }, {
            quoted: m,
          });
        } else {
          console.log('API returned an unexpected response:', responseData);
        }
      } catch (error) {
        console.error(error);
      }
      break;




case 'imagine': case 'dalle': case 'aiimage':
  if (!text) throw `*You can generate images From text using this command*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful animegirl*\n*◉ ${prefix + command} Elon musk with Irom man*`; 

async function fetchImageData() {
  let thingMsg = await gss.sendMessage(m.chat, { text: 'Generating Images Please wait...' });
  const texti = text;
  try {
    const response = await axios.get(`https://v2-guru-indratensei.cloud.okteto.net/scrape?query=${texti}`);
    const data = response.data;

    const images = data.image_links;
    const timeforgen = data.execution_time;
    const genetd =  `✅ Sucsessfully generated in ${timeforgen}`
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImageLink = images[randomImageIndex];
    console.log(randomImageLink);
    await gss.sendMessage(m.chat, {
        image: {
          url: randomImageLink,
        },
        caption: text,
      }, {
        quoted: m,
      });
  } catch (error) {
    console.error('Error fetching image data:', error);
  }
}

fetchImageData();

break;




  
case 'bug':
case 'request':
case 'report': {

    if (!text) return m.reply(`Example: ${prefix + command} hi dev play command is not working`);

    const messageId = m.key.id;

    if (reportedMessages[messageId]) {
        return m.reply("This report has already been forwarded to the owner. Please wait for a response.");
    }

    reportedMessages[messageId] = true;

    const textt = `*| REQUEST/BUG |*`;
    const teks1 = `\n\n*User*: @${m.sender.split("@")[0]}\n*Request/Bug*: ${text}`;
    const teks2 = `\n\n*Hi ${pushname}, your request has been forwarded to my Owners.*\n*Please wait...*`;

    // Send the message to the first owner in the `owner` array
    gss.sendMessage(devlopernumber + "@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [m.sender],
    }, {
        quoted: m,
    });

    // Send a reply to the user
    m.reply("Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.");

    break;
}




case 'autoread':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
    AUTO_READ = true;
    process.env.AUTO_READ = 'true';
    m.reply('*Auto Read turned on.*');
  } else if (args[0] === 'off') {
    AUTO_READ = false;
    process.env.AUTO_READ = 'false';
    m.reply('*Auto Read turned off.*');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;

  
case 'alwaysonline':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
    ALWAYS_ONLINE = true;
    process.env.ALWAYS_ONLINE = 'true';
    m.reply('*Always Online turned on.*');
  } else if (args[0] === 'off') {
    ALWAYS_ONLINE = false;
    process.env.ALWAYS_ONLINE = 'false';
    m.reply('Always Online turned off.');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;


case 'autotyping':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
    TYPING_ENABLED = true;
    process.env.AUTO_TYPING = 'true';
    m.reply('*AUTO TYPING turned on.*');
  } else if (args[0] === 'off') {
    TYPING_ENABLED = false;
    process.env.AUTO_TYPING = 'false';
    m.reply('*AUTO TYPING turned off.*');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;
  
  
case 'gcsetting':
if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs')
    const options = ['.group', '.group', '.revoke', '.mute', '.leave', '.editinfo', '.tagall','.antilink', '.linkgc'];
    gss.sendPoll(m.chat, 'Select your preferences:', options);
    break;


case 'setting':
if (!isCreator) throw mess.owner
  m.reply(`Current Settings:
    Auto Read: ${AUTO_READ ? 'On' : 'Off'}
    Always Online: ${ALWAYS_ONLINE ? 'On' : 'Off'}
    Auto Typing: ${TYPING_ENABLED ? 'On' : 'Off'}`);

  // Delay for 2 seconds
  setTimeout(() => {
    const options = [
      '.Autoread',
      '.Alwaysonline',
      '.Autotyping',
      '.mode',
      '.Anticall',
    ];

    gss.sendPoll(m.chat, 'Select your preferences:', options);
  }, 2000);
  break;



const languages = require('./lib/languages'); // Import the language codes module

// Function to validate language code
function isValidLanguageCode(code) {
    return (code);
}

// Command handler for 'say', 'tts', and 'gtts'
case 'say':
case 'tts':
case 'gtts': {
    if (!args[0] || !text) {
        return m.reply('Usage: .say <language code> <text>');
    }

    const langCode = args[0]; // Language code provided by the user
    const textToSpeak = args.slice(1).join(" "); // Get the text to speak

    // Validate the language code
    if (!isValidLanguageCode(langCode)) {
        return m.reply('Iɴᴠᴀʟɪᴅ ʟᴀɴɢᴜᴀɢᴇ ᴄᴏᴅᴇ. Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴠᴀʟɪᴅ ʟᴀɴɢᴜᴀɢᴇ ᴄᴏᴅᴇ');
    }

    // Generate the audio URL using the specified language code and text
    const audioUrl = googleTTS.getAudioUrl(textToSpeak, {
        lang: langCode,
        slow: false,
        host: "https://translate.google.com",
    });

    // Send the audio message
    return client.sendMessage(m.chat, {
        audio: {
            url: audioUrl,
        },
        mimetype: 'audio/mp4',
        ptt: true,
        fileName: `${textToSpeak}.mp3`,
    }, {
        quoted: m,
    });
}
break;


case 'translate': case 'trt': {
  try {
    if (!text) return m.reply( 'Usage: .trt <language code> <text> or reply message');
    if (text && m.quoted && m.quoted.text) {
      let lang = text.slice(0, 2);
      try {
        let data = m.quoted.text;
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    } else if (text) {
      let lang = text.slice(0, 2);
      try {
        let data = text.substring(2).trim();
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    }
  } catch (error) {
    console.error("Error in 'translate' command:", error);
    m.reply(` An error occurred while translating.`);
  }
  break; // Case break statement
}

  
  
case 'poll': {
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
    if (!isAdmins) return m.reply('Tʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ, ᴏᴡɴᴇʀ ᴀɴᴅ ʙᴏᴛᴀᴅᴍɪɴ, ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜsᴇ ɪᴛ.')
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await m.reply(`Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|sid bhai,gautam`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await gss.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
        
        
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
    if (!isAdmins) return m.reply('Tʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ, ᴏᴡɴᴇʀ ᴀɴᴅ ʙᴏᴛᴀᴅᴍɪɴ, ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜsᴇ ɪᴛ.')
gss.groupRevokeInvite(m.chat)
await m.reply('group link reset ')
}
break

case 'gdrive':
  if (!args[0]) throw ' Eɴᴛᴇʀ ᴀ Gᴏᴏɢʟᴇ Dʀɪᴠᴇ ʟɪɴᴋ';
  try {
    let res = await fg.GDriveDl(args[0]);
    await m.reply(` *Google Drive DL* ▢ *Number:* ${res.fileName} ▢ *Size:* ${res.fileSize} ▢ *type:* ${res.mimetype}`);
    gss.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m });
  } catch {
    m.reply('Eʀʀᴏʀ: Cʜᴇᴄᴋ ᴛʜᴇ ʟɪɴᴋ ᴏʀ ᴛʀʏ ᴀɴᴏᴛʜᴇʀ ʟɪɴᴋ');
  }
  break;


function convertToFontStyle(text, style) {
    let styledText = '';

   
    if (fonts[style]) {

        for (const char of text) {

            if (fonts[style][char]) {
              
                styledText += fonts[style][char];
            } else {

                styledText += char;
            }
        }
    } else {
      
        styledText = text;
    }

    return styledText;
}


    case 'fontchange': case 'fancy':

        if (args.length === 0) {
            const availableStylesPreview = availableStyles.map(style => {
                const previewText = convertToFontStyle("gss botwa", parseInt(style));
                return `${style}: ${previewText}`;
            }).join('\n');

            m.reply(`Usage:\n${prefix}fontchange <style> <text>\nAvailable font styles with previews:\n${availableStylesPreview}`);
        } else {
            const style = parseInt(args[0]); 
            
            const inputText = args.slice(1).join(" "); 

            if (style < 0 || style > 34) {
                m.reply(`Style number should be between 0 and 34. Please choose a valid style.`);
            } else {

                const styledText = convertToFontStyle(inputText, style);

                m.reply(`${styledText}`);
            }
        }
        break;
        

        

case 'runtime': case 'alive':
                let pinga = ` ${uptimeMessage}`
                gss.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: 'RUNTIME',
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://telegra.ph/file/0955010ca2f8bf045fb0a.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: false
                        }
                    }
                }, {
                    quoted: m
                })
                break
                
case 'addprem':
                if (!isCreator) return m.reply(mess.owner)
                if (args.length < 2)
                    return m.reply(`Usage:\n*#addprem* @tag tag\n*#addprem* tag time\n\nExample: #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    m.reply("Success Premium")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    m.reply("Success Via Number")
                }
            break
            case 'delprem':
                if (!isCreator) return m.reply(mess.owner)
                if (args.length < 1) return m.reply(`Usage :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium));
                    }
                    m.reply("Success Delete")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
                    m.reply("Success Via Number")
                }
            break
            case 'listprem': {
    if (!isCreator) return m.reply(mess.owner);
    let data = require("./src/data/premium.json");
    let txt = `*------「 LIST PREMIUM 」------*\n\n`;
    
    for (let premiumData of data) {
        txt += `Nomer : ${premiumData.id}\n`;
        txt += `Expired : ${premiumData.expired} Second\n\n`;
    }

    gss.sendMessage(m.chat, { text: txt }, { quoted: m });
}
break;

          
          
case 'tempmail':
    const option = ['.mail 1','.mail 3','.mail 5'];
    gss.sendPoll(m.chat, 'Select your mail:', option);
    break;

          
          
case 'tempmail': case 'mail': {
  const maxEmails = 10;
  const count = Math.min(parseInt(args[0]) || 1, maxEmails); // Parse the provided argument as a number, default to 1
  const baseUrl = `https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=${count}`;
  const timeout = 10000; // 10 seconds timeout for Axios requests

  try {
    const response = await axios.get(baseUrl);
    const data = response.data;

    if (data && data.length > 0) {
      const tempMails = data.join('\n');
      const replyMessage = `*Temporary Email Addresses:*\n\n${tempMails}`;
      m.reply(replyMessage);
    } else {
      m.reply(`Failed to generate ${count} temporary email address(es).`);
    }
  } catch (error) {
    console.error('Error:', error);
    m.reply('Failed to fetch temporary email addresses.');
  }
  break;
}

case 'infobot':
    tod = `
╭━🔥──━─◈─━🔥─━╮
│🔖Bot Name : ${botname}
│🔖Owner Name: ${ownername}
│🔖Owner Number : ${owner}
│🔖Prefix :「 Multi Prefix 」
│🔖Runtime : _*${hours}h ${minutes}m ${seconds}s*_
╰━━🔥─━─◈─━🔥─━╯`;
    await m.reply(tod);
    doneReact();
    break;


case 'checkmail': {
  if (!text) {
    m.reply('Please provide an email address to read the most recent message.');
    break;
  }

  // Split the provided email address into login and domain
  const [login, domain] = text.split('@');

  // Check if the email address was split correctly
  if (!login || !domain) {
    m.reply('Invalid email address format.');
    break;
  }

  const baseUrl = 'https://www.1secmail.com/api/v1/?action=getMessages';

  // Use the extracted login and domain values
  const url = `${baseUrl}&login=${login}&domain=${domain}`;

  const timeout = 10000; // 10 seconds timeout for Axios requests

  try {
    const response = await axios.get(url, { timeout });
    const data = response.data;

    if (data && data.length > 0) {
      // Extract the latest message ID
      const latestMessageId = data[0].id;

      // Use the latest message ID to read the message
      const readUrl = `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${latestMessageId}`;

      const readResponse = await axios.get(readUrl, { timeout });
      const messageData = readResponse.data;

      if (messageData && messageData.textBody) {
        const sender = messageData.from;
        const date = messageData.date;
        const subject = messageData.subject || 'No Subject';

        const replyMessage = `*Message in* ${text}:\n\n*From:* ${sender}\n*Subject:* ${subject}\n*Date:* ${date}\n\n*Messages:*\n\n${messageData.textBody}`;
        m.reply(replyMessage, m.from, { caption: replyMessage });
        
      } else {
        m.reply(`No message found in ${text}.`);
      }
    } else {
      m.reply(`No messages found in ${text}.`);
    }
  } catch (error) {
    console.error('Error:', error);
    m.reply(`Failed to read the most recent message in ${text}.`);
  }
  break;
}



case 'cal':
case 'calc':
case 'calcular':
case 'calculadora':
  try {
    let id = m.chat;
    gss.math = gss.math ? gss.math : {};

    if (id in gss.math) {
      clearTimeout(gss.math[id][3]);
      delete gss.math[id];
      return m.reply('...');
    }

    let val = text
      .replace(/[^0-9\-\/+*×÷πEe()piPI.]/g, '') // Allow decimal point '.'
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π|pi/gi, 'Math.PI')
      .replace(/e/gi, 'Math.E')
      .replace(/\/+/g, '/')
      .replace(/\++/g, '+')
      .replace(/-+/g, '-');

    let format = val
      .replace(/Math\.PI/g, 'π')
      .replace(/Math\.E/g, 'e')
      .replace(/\//g, '÷')
      .replace(/\*×/g, '×');
    let result = (new Function('return ' + val))();

    if (isNaN(result)) throw new Error('Invalid result');

    m.reply(`*${format}* = _${result}_`);
  } catch (error) {
    // Handle specific error messages
    if (error instanceof SyntaxError) {
      return m.reply('Invalid syntax. Please check your expression.');
    } else if (error instanceof Error) {
      return m.reply(error.message);
    } else {
      // Handle unexpected errors
      return m.reply('An unexpected error occurred.');
    }
  }
  break;


function formatDate(date) {
}
case 'nowa':
    let regex = /x/g;
    if (!text) throw 'Give a number to search';
    if (!text.match(regex)) throw `*Example: ${prefix + command} 919142294xxx`;
    let random = text.match(regex).length, total = Math.pow(10, random), array = [];
    for (let i = 0; i < total; i++) {
        let list = [...i.toString().padStart(random, '0')];
        let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net';
        if (await gss.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
            let info = await gss.fetchStatus(result).catch(_ => {});
            array.push({ exists: true, jid: result, ...info });
        } else {
            array.push({ exists: false, jid: result });
        }
    }
    let txt = 'Registered\n\n' + array.filter(v => v.exists).map(v => `• Link: wa.me/${v.jid.split('@')[0]}\n*• Bio:* ${v.status || 'description'}\n*• set on:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*Not registered*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n');
    m.reply(txt);
    break;
    
case 'githubstalk': {
  if (!args[0]) return m.reply('Mention a GitHub username to stalk.');

  const username = args[0];

  try {
    // Fetch GitHub user data using Axios
    const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
    const userData = githubResponse.data;

    if (githubResponse.status !== 200) {
      return m.reply(`❌ GitHub user not found.`);
    }

    // Construct the response message
    let responseMessage = `🌟 *GitHub Profile - @${userData.login}*\n\n`;
    responseMessage += `  ◦  *Name*: ${userData.name || 'N/A'}\n`;
    responseMessage += `  ◦  *Username*: @${userData.login}\n`;
    responseMessage += `  ◦  *Bio*: ${userData.bio || 'N/A'}\n`;
    responseMessage += `  ◦  *ID*: ${userData.id}\n`;
    responseMessage += `  ◦  *Node ID*: ${userData.node_id}\n`;
    responseMessage += `  ◦  *Profile URL*: ${userData.avatar_url}\n`;
    responseMessage += `  ◦  *GitHub URL*: ${userData.html_url}\n`;
    responseMessage += `  ◦  *Type*: ${userData.type}\n`;
    responseMessage += `  ◦  *Admin*: ${userData.site_admin ? 'Yes' : 'No'}\n`;
    responseMessage += `  ◦  *Company*: ${userData.company || 'N/A'}\n`;
    responseMessage += `  ◦  *Blog*: ${userData.blog || 'N/A'}\n`;
    responseMessage += `  ◦  *Location*: ${userData.location || 'N/A'}\n`;
    responseMessage += `  ◦  *Email*: ${userData.email || 'N/A'}\n`;
    responseMessage += `  ◦  *Public Repositories*: ${userData.public_repos}\n`;
    responseMessage += `  ◦  *Public Gists*: ${userData.public_gists}\n`;
    responseMessage += `  ◦  *Followers*: ${userData.followers}\n`;
    responseMessage += `  ◦  *Following*: ${userData.following}\n`;
    responseMessage += `  ◦  *Created At*: ${userData.created_at}\n`;
    responseMessage += `  ◦  *Updated At*: ${userData.updated_at}\n`;

   
 const githubReposData = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=stargazers_count&direction=desc`);
    const reposData = await githubReposData.json();

    if (reposData.length > 0) {
      const topRepos = reposData.slice(0, 5); // Display the top 5 starred repositories

      const reposList = topRepos.map(repo => {
        return `  ◦  *Repository*: [${repo.name}](${repo.html_url})
  ◦  *Description*: ${repo.description || 'N/A'}
  ◦  *Stars*: ${repo.stargazers_count}
  ◦  *Forks*: ${repo.forks}`;
      });

      const reposCaption = `📚 *Top Starred Repositories*\n\n${reposList.join('\n\n')}`;
      responseMessage += `\n\n${reposCaption}`;
    } else {
      responseMessage += `\n\nNo public repositories found.`;
    }

    // Send the message with the updated caption and user's avatar
    await gss.sendMessage(m.chat, { image: { url: userData.avatar_url }, caption: responseMessage }, { quoted: m });

    // Add a success reaction message
    const successReactionMessage = {
      react: {
        text: "✔",
        key: m.key
      }
    };
    await gss.sendMessage(m.chat, successReactionMessage);
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    await gss.sendMessage(m.chat, 'An error occurred while fetching GitHub data.', { quoted: m });
  }
  break;
}

    break;
    
case 'emojimix': {
  let [emoji1, emoji2] = text.split`+`;
  if (!emoji1) throw `Example: ${prefix + command} 😅+🤔`;
  if (!emoji2) throw `Example: ${prefix + command} 😅+🤔`;
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
  for (let res of anu.results) {
    let encmedia = await gss.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags });
    await fs.unlinkSync(encmedia);
  }
}
break;




case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await gss.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                gss.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
                

            
            case 'menu':
case 'help':
case 'list':
case 'listmenu':
{
    gss.sendPoll(m.chat, "List Menu", ['.Allmenu', '.Groupmenu', '.Downloadmenu', '.Searchmenu', '.Funmenu', '.Toolmenu', '.Convertmenu', '.aimenu', '.Mainmenu', '.Ownermenu'], { quoted: m });
}
break;

          // Assuming you have a getRandomSymbol function to generate a random symbol
function getRandomSymbol() {
    const symbols = ['◉', '★', '◎', '✯','✯','✰','◬','✵','✦']; // Add more symbols as needed
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

case 'menuall':
case 'allmenu': {

    let a = db.data.users[m.sender];
    let introText = `Hello ${pushname}!👋 I'm *𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫*
    
┏────▷ *sᴏᴍᴇ ɪɴғᴏ 4 ʏᴏᴜ* ◁⊰
│ 
│ *✪ ᴜsᴇʀɪɴғᴏ ✪*
│  
│ *✪ ʏᴏᴜʀɴᴀᴍᴇ:* ${pushname}   
│ *✪ ʟɪᴍɪᴛ:* ${a.limit}
│ *✪ ʀᴏʟᴇ:* ${isPremium ? 'Premium' : 'Freemium'}
│ *✪ ᴛɪᴛʟᴇ:* ${a.title ? a.title : '-'}
│ 
│ *✪ ʙᴏᴛɪɴғᴏ ✪*    
│        
│ *✪ Sᴛᴀᴛᴜs: Pᴜʙʟɪᴄ*
│ *✪ Lᴀɴɢᴜᴀɢᴇ: Nᴏᴅᴇ.ᴊs*
│ *✪ Bᴀɪʟᴇʏ: @ᴀᴅɪᴡᴀᴊsʜɪɴɢ*
│ *✪ Sᴜᴘᴘᴏʀᴛ: @ᴡʜɪsᴋᴇʏsᴏᴄᴋᴇᴛs*
│ *✪ Bᴏᴛ Nᴀᴍᴇ:* ${botname}
│ *✪ Dᴇᴠᴇʟᴏᴘᴇʀ:* ${devlopernumber}  
│ *✪ ᴛᴏᴛᴀʟᴜsᴇʀ:* ${Object.keys(global.db.data.users).length} ᴜsᴇʀs
│ *✪ ᴛᴏᴛᴀʟᴄʜᴀᴛ:* ${Object.keys(global.db.data.chats).length} ɢʀᴏᴜᴘ/ᴄʜᴀᴛ
${readmore}┗────────────⊰


╭───〈 𝗔𝗜 𝗠𝗘𝗡𝗨 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴀɪ*
▮➣ *ᴠᴏɪᴄᴇᴀɪ*
▮➣ *ʙᴜɢ*
▮➣ *ʀᴇᴘᴏʀᴛ*
▮➣ *ɢᴘᴛ*
▮➣ *ᴅᴀʟʟᴇ*
▮➣ *ʀᴇᴍɪɴɪ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴄᴀʟᴄᴜʟᴀᴛᴏʀ*
▮➣ *ᴛᴇᴍᴘᴍᴀɪʟ*
▮➣ *ᴄʜᴇᴄᴋᴍᴀɪʟ*
▮➣ *ɪɴꜰᴏ*
▮➣ *ᴛʀᴛ*
▮➣ *ᴛᴛs*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ʟɪɴᴋɢʀᴏᴜᴘ*
▮➣ *sᴇᴛᴘᴘɢᴄ*
▮➣ *sᴇᴛɴᴀᴍᴇ*
▮➣ *sᴇᴛᴅᴇsᴄ*
▮➣ *ɢʀᴏᴜᴘ*
▮➣ *ɢᴄsᴇᴛᴛɪɴɢ*
▮➣ *ᴡᴇʟᴄᴏᴍᴇ* <ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ>
▮➣ *ʟᴇғᴛ* <ᴇɴᴀʙʟᴇ/ᴅɪsᴀʙʟᴇ>
▮➣ *sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
▮➣ *sᴇᴛʟᴇғᴛ*
▮➣ *ᴇᴅɪᴛɪɴꜰᴏ*
▮➣ *ᴀᴅᴅ*
▮➣ *ᴋɪᴄᴋ*
▮➣ *ʜɪᴅᴇᴛᴀɢ*
▮➣ *ᴛᴀɢᴀʟʟ*
▮➣ *ᴛᴏᴛᴀɢ*
▮➣ *ᴛᴀɢᴀᴅᴍɪɴ*
▮➣ *ᴀɴᴛɪʟɪɴᴋ*
▮➣ *ᴀɴᴛɪTᴏxɪᴄ*
▮➣ *ᴍᴜᴛᴇ*
▮➣ *ᴘʀᴏᴍᴏᴛᴇ*
▮➣ *ᴅᴇᴍᴏᴛᴇ*
▮➣ *ʀᴇᴠᴏᴋᴇ*
▮➣ *ᴘᴏʟʟ*
▮➣ *ɢᴇᴛʙɪᴏ*
▮➣ *ʀᴇᴠᴏᴋᴇ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴀᴘᴋ*
▮➣ *ʏᴛᴠ*
▮➣ *ʏᴛᴀ*
▮➣ *ɢᴇᴛᴀᴜᴅɪᴏ*
▮➣ *ɢᴇᴛᴠɪᴅᴇᴏ*
▮➣ *ꜰᴀᴄᴇʙᴏᴏᴋ*
▮➣ *ᴍᴇᴅɪᴀꜰɪʀᴇ*
▮➣ *ᴘɪɴᴛᴇʀᴇsᴛᴅʟ*
▮➣ *xɴxxsᴇᴀʀᴄʜ*
▮➣ *xɴxxᴅʟ*
▮➣ *ɢɪᴛᴄʟᴏɴᴇ*
▮➣ *ɢᴅʀɪᴠᴇ*
▮➣ *ɪɴsᴛᴀ*
▮➣ *ʏᴛᴍᴘ3*
▮➣ *ʏᴛᴍᴘ4*
▮➣ *ᴛɪᴋᴛᴏᴋ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗦𝗘𝗔𝗥𝗖𝗛 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴘʟᴀʏ*
▮➣ *ʏᴛs*
▮➣ *ɪᴍᴅʙ*
▮➣ *ɢᴏᴏɢʟᴇ*
▮➣ *ɢɪᴍᴀɢᴇ*
▮➣ *ᴘɪɴᴛᴇʀᴇsᴛ*
▮➣ *ᴡᴀʟʟᴘᴀᴘᴇʀ*
▮➣ *ᴡɪᴋɪᴍᴇᴅɪᴀ*
▮➣ *ʀɪɴɢᴛᴏɴᴇ*
▮➣ *ᴡᴇᴀᴛʜᴇʀ*
▮➣ *ʟʏʀɪᴄs*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭───〈 𝗦𝗧𝗔𝗟𝗞 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ɴᴏᴡᴀ*
▮➣ *ᴛʀᴜᴇᴄᴀʟʟᴇʀ*
▮➣ *ɪɴsᴛᴀsᴛᴀʟᴋ*
▮➣ *ɢɪᴛʜᴜʙsᴛᴀʟᴋ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭───〈 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴅᴇʟᴛᴛᴛ*
▮➣ *ᴛɪᴄᴛᴀᴄᴛᴏᴇ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ʀᴇᴍᴏᴠᴇʙɢ*
▮➣ *sᴛɪᴄᴋᴇʀ*
▮➣ *ᴇᴍᴏᴊɪᴍɪx*
▮➣ *ᴛᴏᴠɪᴅᴇᴏ*
▮➣ *ᴛᴏɢɪꜰ*
▮➣ *ᴛᴏᴜʀʟ*
▮➣ *ᴛᴏᴠɴ*
▮➣ *ᴛᴏᴍᴘ3*
▮➣ *ᴛᴏᴀᴜᴅɪᴏ*
▮➣ *ᴇʙɪɴᴀʀʏ*
▮➣ *ᴅʙɪɴᴀʀʏ*
▮➣ *sᴛʏʟᴇᴛᴇxᴛ*
▮➣ *ꜰᴏɴᴛᴄʜᴀɴɢᴇ*
▮➣ *ꜰᴀɴᴄʏ*
▮➣ *ᴜᴘsᴄᴀʟᴇ*
▮➣ *ʜᴅ*
▮➣ *ᴀᴛᴛᴘ*
▮➣ *ǫᴄ*
▮➣ 
▮➣ *ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴀᴜᴅɪᴏ*
▮➣ *ʙᴀsᴇ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ʙʟᴏᴡɴ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ᴅᴇᴇᴘ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ᴇᴀʀʀᴀᴘᴇ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ғᴀsᴛ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ғᴀᴛ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ɴɪɢʜᴛᴄᴏʀᴇ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ʀᴇᴠᴇʀsᴇ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ʀᴏʙᴏᴛ* _<ᴀᴜᴅɪᴏ>_
▮➣ *sʟᴏᴡ* _<ᴀᴜᴅɪᴏ>_
▮➣ *sᴍᴏᴏᴛʜ* _<ᴀᴜᴅɪᴏ>_
▮➣ *ᴛᴜᴘᴀɪ* _<ᴀᴜᴅɪᴏ>_
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴘɪɴɢ*
▮➣ *ᴀʟɪᴠᴇ*
▮➣ *ᴏᴡɴᴇʀ*
▮➣ *ᴍᴇɴᴜ*
▮➣ *ɪɴꜰᴏᴄʜᴀᴛ*
▮➣ *ǫᴜᴏᴛᴇᴅ*
▮➣ *ʟɪsᴛᴘᴄ*
▮➣ *ʟɪsᴛɢᴄ*
▮➣ *ʟɪsᴛᴏɴʟɪɴᴇ*
▮➣ *ɪɴғᴏʙᴏᴛ*
▮➣ *ʙᴜʏᴘʀᴇᴍɪᴜᴍ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭───〈 𝗢𝗪𝗡𝗘𝗥 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *ᴊᴏɪɴ*
▮➣ *ʟᴇᴀᴠᴇ*
▮➣ *ʙʟᴏᴄᴋ*
▮➣ *ᴜɴʙʟᴏᴄᴋ*
▮➣ *ʙᴄɢʀᴏᴜᴘ*
▮➣ *ʙᴄᴀʟʟ*
▮➣ *sᴇᴛᴘᴘʙᴏᴛ*
▮➣ *sᴇᴛɪᴍɢᴍᴇɴᴜ*
▮➣ *ᴍᴏᴅᴇ*
▮➣ *sᴇᴛᴛɪɴɢ*
▮➣ *sᴇᴛᴍᴇɴᴜ*
▮➣ *sᴇᴛᴇxɪꜰ*
▮➣ *ᴀɴᴛɪᴄᴀʟʟ*
▮➣ *sᴇᴛɴᴀᴍᴇʙᴏᴛ*
▮➣ *ᴀᴅᴅᴘʀᴇᴍ*
▮➣ *ᴅᴇʟᴘʀᴇᴍ*
▮➣ *ʟɪsᴛᴘʀᴇᴍ*
▮➣ *ᴀᴜᴛᴏᴛʏᴘɪɴɢ*
▮➣ *ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ*
▮➣ *ᴀᴜᴛᴏʀᴇᴀᴅ*
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`

    if (typemenu === 'v1') {
    gss.sendMessage(m.chat, {
        image: fs.readFileSync('./gss.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, {
        quoted: m
    });
} else if (typemenu === 'v2') {
    gss.sendMessage(m.chat, {
        text: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, {
            quoted: m
        });
    } else if (typemenu === 'v3') {
        gss.sendMessage(m.chat, {
            video: fs.readFileSync('./gss.mp4'),
            caption: introText,
            sourceUrl: global.link,
            gifPlayback: true
        }, {
            quoted: m
        });
    } else if (typemenu === 'v4') {
        gss.relayMessage(m.chat, {
            scheduledCallCreationMessage: {
                callType: "AUDIO",
                scheduledTimestampMs: 1200,
                title: introText
            }
        }, {});
    } else if (typemenu === 'v5') {
        gss.relayMessage(m.chat, {
    requestPaymentMessage: {
        currencyCodeIso4217: 'INR', // Set to INR for Indian Rupees
        amount1000: '9999999', // Adjust the amount to the desired value in paise (100 paise = 1 INR)
        requestFrom: m.sender,
        noteMessage: {
            extendedTextMessage: {
                text: introText,
                sourceUrl: global.link,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: false
                            }
                        }
                    }
                }
            }
        }, {});
    } 
    break;
}




            case 'gcmenu':
case 'grupmenu':
case 'groupmenu': {
    const randomSymbol = getRandomSymbol();
    let anu = `✪━ 乂 *group Menu* 乂 ━✪
│
${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}`+ v).join('\n')}
│
╰──────✪`;
    gss.sendPoll(m.chat, anu, ['.Owner', '.Ping']);
}
break;
            case 'downloadmenu': case 'dlmenu': case 'downmenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━ 乂 *Downloader Menu* 乂 ━✪
│
${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `│  ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['.Owner','.Ping'])
            }
            break 
            case 'searchmenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━乂*Search Menu*乂 ━✪
│
${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['.Owner','.Ping'])
            }
            break
            
            
            case 'funmenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━ 乂 *Fun Menu* 乂 ━✪
│
${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['.Owner','.Ping'])
            }
            break 
            case 'convertmenu': {
              const randomSymbol = getRandomSymbol();
               let anu = `✪━ 乂 *Convert Menu* 乂 ━✪
│
${cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['.Owner','.Ping'])
            }
            break 
            case 'mainmenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━ 乂 *Main Menu* 乂 ━✪
│
${cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['.Owner','.Ping'])
            }
            break 
            case 'ownermenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━ 乂 *Owner Menu* 乂 ━✪
│
${cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `│  ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['.Owner','.Ping'])
            }
            break
case 'aimenu': {
    const randomSymbol = getRandomSymbol();
    let anu = `✪━乂 *Ai Menu* 乂 ━✪
│
${cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}` + v).join('\n')}
│
└───────✪`;
    gss.sendPoll(m.chat, anu, ['.Owner', '.Ping']);
}
break;

case 'bugmenu': {
    const randomSymbol = getRandomSymbol();
    let anu = `✪━ 乂 *Bug Menu* 乂 ━✪
│
${cmdBug.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}` + v).join('\n')}
│
└───────✪`;
    gss.sendPoll(m.chat, anu, ['.Owner', '.Ping']);
}
break;
case 'toolmenu': {
    const randomSymbol = getRandomSymbol();
    let anu = `✪━ 乂 *Tool Menu* 乂 ━✪
│
${cmdTool.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}` + v).join('\n')}
│
└───────✪`;
    gss.sendPoll(m.chat, anu, ['.Owner', '.Ping']);
}
break;


            
            default:
            
            if (/^bot/i.test(m.body)) {
                    m.reply(`Bot Activated "${m.pushName}"`)
                }
		
        }
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    gss.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        
    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

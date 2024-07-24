require("dotenv").config();  
require('./config')
const Func = ('./lib/function.js');
const fonts = require('./lib/font.js');
const menufont = require('./lib/menufont.js');
const DB = require('./lib/scraper')
const uploadImage = require('./lib/uploadImage.js');
const { gssrentbot, conns } = require('./RentBot')
const languages = require('./lib/language');
const got = require('got');
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const availableStyles = Object.keys(fonts);
const availableFontStyles = Object.keys(menufont);
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser,getAggregateVotesInPollMessage, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const fsx = require('fs-extra')
const yts = require('yt-search');
const ytsr = require('ytsr');
const ytdl = require('ytdl-core');
const util = require('util')
const truecallerjs = require("truecallerjs");
const ffmpeg = require('fluent-ffmpeg');
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const openai = require('openai');
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
const acrcloud = require ('acrcloud');
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const osu = require("node-os-utils");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const translate = require('translate-google-api');
  const { cpus, totalmem, freemem } = require("os");
  const {  sizeFormatter } = require("human-readable");
 const pingSt = new Date();
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, reSize, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

const acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: 'c33c767d683f78bd17d4bd4991955d81',
    access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
});
const apiKey = "AIzaSyAFKLsFovEAwKkjScCZMdJwn4V6Ns2VJzA";
const genAI = new GoogleGenerativeAI(apiKey);
const tempMailAddresses = {};
const defaultLang = 'en'
const { addPremiumUser, getPremiumExpired, getPremiumPosition,  expiredPremiumCheck, checkPremiumUser, getAllPremiumUser,} = require('./lib/premiun');

// read database
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/premium.json'))

// Initialize default values
let autoread = false;
let available = false;
let autoTyping = false;
let autoRecord = false;

const mongoDBUrl = process.env.MONGO_DB || 'mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority';

let akinator = global.db.data.game.akinator = []
let currentPollIndex = 0;
let ytsOptionIndex = 1;
const ytsSearchResults = new Map();
let props;
const audioSearchResults = new Map();
let optionIndex = 1;
let index = 1;
const reportedMessages = {};
const videoSearchResults = new Map();
let titleUrlMap = {}; 
const userContextMap = new Map();
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))

const warnUsers = []; 
let warnedUsers = [];
const userWarnings = {};

module.exports = gss = async (gss, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd = body.startsWith(prefix)
    const notCmd = body.startsWith('')
    const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)



//prefix v2
const pric = /^#|\^/.test(body) ? body.match(/^#|\^/gi) : '.';
const isAsu = body.startsWith(global.prefa[0]) || body.startsWith(global.prefa[1]);
const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : '';


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
	const botname = "FAMOUS-XD";
	const devlopernumber = "50943782598";
        // Group
        const groupMetadata = m.isGroup ? await gss.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const Badgss = JSON.parse(fs.readFileSync('./database/bad.json'))
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(m.from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(m.from) : false
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
  const uptimeMessage = `*FAMOUS XD ONLINEℹ ${day}d ${hours}h ${minutes}m ${seconds}s*`;
  
  const runMessage = `*☀️ ${day} jou*\n *🕐 ${hours} heure*\n *⏰ ${minutes} Minit*\n *⏱️ ${seconds} Segond*\n`;
  
async function doReact(emoji) {
      let react = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await gss.sendMessage(m.chat, react);
    }


async function sendTypingEffect(gss, m, message, typingSpeed) {
  if (!message) {
    console.error('Error: Message is undefined or empty.');
    return;
  }

  const gptthink = await gss.sendMessage(m.chat, { text: 'Fon w ti tann...' });

  const words = message.split(' ');

  let i = 0;
  const typewriterInterval = setInterval(() => {
    if (i < words.length) {
      const typedText = words.slice(0, i + 1).join(' ');
      gss.relayMessage(m.chat, {
        protocolMessage: {
          key: gptthink.key,
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
}





function formatBytes(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

// Helper function to format upload date
function formatUploadDate(uploadDate) {
  const formattedDate = new Date(uploadDate);
  if (isNaN(formattedDate.getTime())) {
    // If the date is invalid, return a message
    return 'Invalid Date';
  }
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return formattedDate.toLocaleDateString(undefined, options);
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


try {
  const textLower = m.text.toLowerCase();

  if (textLower === 'send' || textLower === 'statusdown' || textLower === 'take') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;

    if (quotedMessage) {
      // Check if it's an image
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        gss.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        m.reply('STATU TELECHAJE . *FAMOUS-XD* ');
      }

      // Check if it's a video
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await gss.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        gss.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        m.reply('STATU TELECHAJE . *FAMOUS-XD* ');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}




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
    

/*
let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
              if (!('antiviewonce' in chats)) chats.antiviewonce = false
              if (!('antibot' in chats)) chats.antibot = true
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                antiviewonce: true,
                antibot: true,
                mute: false,
                antilink: false,
            }

*/


let chats = db.data.chats[m.chat]
if (typeof chats !== 'object') db.data.chats[m.chat] = {}
if (chats) {
    if (!('antiviewonce' in chats)) chats.antiviewonce = false
    if (!('antibot' in chats)) chats.antibot = true
    if (!('mute' in chats)) chats.mute = false
    if (!('antilink' in chats)) chats.antilink = false
    if (!('antidelete' in chats)) chats.antidelete = true // Add 'antidelete' if not present
} else global.db.data.chats[m.chat] = {
    antiviewonce: true,
    antibot: true,
    mute: false,
    antilink: false,
    antidelete: true, // Add 'antidelete' by default
}


	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = false
		if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: false,
		status: 0,
		autobio: false
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
            timezone: "America/Port-au-Prince"
        })


/*antiviewonce*/
    if ( db.data.chats[m.chat].antiviewonce && m.mtype == 'viewOnceMessageV2') {
    	if (m.isBaileys && m.fromMe) return
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await gss.sendMessage(m.chat, { forward: val }, { quoted: m })
    }



/*AUTOBIO*/
async function setBio() {
    setInterval(async () => {
        if (db.data.settings[botNumber].autobio) {
            const date = new Date();
            const options = {
                timeZone: 'America/Port-au-Prince',
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            const timeString = moment(date).tz('America/Port-au-Prince').format('MM/DD/YYYY ⌚ hh:mm:ss A');
            const status = `📆 ${timeString} famous-xd ⚡`;
            await gss.updateProfileStatus(status).catch(_ => _);
        }
    }, 60000);
}

setBio();


if (command) {
            
if (!m.isGroup && !isCreator && global.onlygroup) {
    return m.reply("_slt, pou evite bot la bani ou pap ka itilize l la, SVP itilize l nan on group!\n\nmèsi pou konpreyansyon ou")
}
// Private Only
if (!isCreator && global.onlypc && m.isGroup) {
    return m.reply("Salut, si w vle itilize bot la, ekri kòmand lan an prive.")
}



        if (global.autoTyping) {
    if (m.chat) {
        gss.sendPresenceUpdate("composing", m.chat);
    }
}

if (global.autoRecord) {
    if (m.chat) {
        gss.sendPresenceUpdate("recording", m.chat);
    }
}

if (global.available) {
  gss.sendPresenceUpdate('available', m.chat);
} else {
  gss.sendPresenceUpdate('unavailable', m.chat);
}

if (global.autoread) {
  
  gss.readMessages([m.key]);
}

if (global.autoBlock && m.sender.startsWith('212')) {
  
    gss.updateBlockStatus(m.sender, 'block');
}
}



   
	    
moment.tz.setDefault("America/Port-au-Prince").locale("id");

const today = moment.tz('America/Port-au-Prince).format('dddd, DD MMMM YYYY');
const wibTime = moment.tz('America/Port-au-Prince).format('HH:mm:ss');
const currentTime = moment().tz('America/Port-au-Prince).format('HH:mm:ss');

let time; 

if (currentTime < "23:59:00") {
    var greetingTime = 'bònn nwi 🏙️';
}
if (currentTime < "19:00:00") {
    var greetingTime = 'Bonswa 🌆';
}
if (currentTime < "18:00:00") {
    var greetingTime = 'Bonswa 🌇';
}
if (currentTime < "15:00:00") {
    var greetingTime = 'Bonjou 🌤️';
}
if (currentTime < "10:00:00") {
    var greetingTime = 'Bonjou 🌄';
}
if (currentTime < "05:00:00") {
    var greetingTime = 'Good Dawn 🌆';
}
if (currentTime < "03:00:00") {
    var greetingTime = 'sa wap fè granm  maten sa ?🌃';
}


	    
if (antiToxic) {
    if (Badgss.includes(messagesD)) {
        if (m.text) {
            const bvl = `\`\`\`「 Mo entèdi detekte 」\`\`\`\n\nou ekri yon vye mo, men kòm ou se  admin/owner,m pap tou retire w nan group lan😇`;
            
            if (isAdmins || m.key.fromMe || isCreator) {
                return m.reply(bvl);
            } else {
                await gss.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: m.key.participant
                    }
                });
                
                await gss.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                
                await gss.sendMessage(m.from, {
                    text: `\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`,
                    contextInfo: { mentionedJid: [m.sender] }
                }, { quoted: m });
            }
        }
    }
}

	    
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\na wap voye lyen group,dezole,men ou deyò 😒!`)
        if (!isBotAdmins) return m.reply(`Eh, the bot is not an admin `)
        let gclink = (`https://chat.whatsapp.com/`+await gss.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh, sorry it didn't happen, because you sent the link to this group`)
        if (isAdmins) return m.reply(`😑, dezole ou pa admin`)
        if (isCreator) return m.reply(`Hey, sorry, ou pa mèt bot lan`)
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
    if (step == "0" && body == "5") m.reply("Error!");

    // Translate the question to English
    const translatedQuestion = await translate(question, { to: 'en' });
    console.log('Translated Question:', translatedQuestion);

    var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=GataDios&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${body}&step=${step}`;
    var get_result = await fetchJson(ini_url);
    var get_result = get_result.result;
    if (get_result.hasOwnProperty("name")) {
        var ini_name = get_result.name;
        var description = get_result.description;
        ini_txt = `${ini_name} - ${description}\n\n`;
        ini_txt += "*mèsi*\n*FAMOUS-XD*";
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
    ini_txt += "0 - wi\n";
    ini_txt += "1 - Non\n";
    ini_txt += "2 - m pa konen\n";
    ini_txt += "3 - peut être\n";
    ini_txt += "4 - peut être pas\n";
    ini_txt += "5 - Go Back to the Previous Question";

    if (args[0] === '5') {
        var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=GataDios&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${body}&step=${step}`;
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
        ini_txt += "0 - wi\n";
        ini_txt += "1 - Non\n";
        ini_txt += "2 - I Don't Know\n";
        ini_txt += "3 - peut être\n";
        ini_txt += "4 - M pa konen\n";
        ini_txt += "5 - Go Back";
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
	'-3': 'Game lan fini', 
	'-2': 'Envalid', 
	'-1': 'mouvman envalid',
	 0: 'pozisyon envalid',
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
        
        const cmdAi = ["🤖Ai", "🤖Voiceai", "🤖Bug", "🤖Report", "🤖Gpt", "🤖Dalle", "🤖Remini"];
const cmdTool = ["⚙Calculator", "⚙Tempmail", "⚙Checkmail", "⚙Info", "⚙Trt", "⚙Tts"];
const cmdGrup = ["ℹLinkGroup", "ℹSetppgc", "ℹSetname", "ℹSetdesc", "ℹGroup", "ℹ-Gcsetting", "ℹ-Welcome", "ℹ-Left", "ℹ-SetWelcome", "ℹ-SetLeft", "ℹ-Editinfo", "ℹ-Add", "ℹ-Kick", "ℹ-HideTag", "ℹ-Tagall", "ℹ-Totag", "ℹ-Tagadmin", "ℹ-AntiLink", "ℹ-AntiToxic", "ℹ-Mute", "ℹ-Promote", "ℹ-Demote", "ℹ-Revoke", "ℹ-Poll", "ℹ-Getbio"];
const cmdDown = ["Apk", "Facebook", "Mediafire", "Pinterestdl", "XnxxSearch", "Xnxxdl", "Gitclone", "Gdrive", "Insta", "Ytmp3", "Ytmp4", "Play", "Song", "Video", "Ytmp3doc", "Ytmp4doc", "Tiktok"];
const cmdSearch = ["Play", "Yts", "Imdb", "Google", "Gimage", "Pinterest", "Wallpaper", "Wikimedia", "Ytsearch", "Ringtone", "Lyrics"];
const cmdFun = ["Delttt", "Tictactoe"];
const cmdConv = ["Removebg", "Sticker", "Emojimix", "Tovideo", "Togif", "Tourl", "Tovn", "Tomp3", "Toaudio", "Ebinary", "dbinary", "Styletext", "Fontchange", "Fancy", "Upscale", "hd", "attp", "attp2", "attp3", "ttp", "ttp2", "ttp3", "ttp4", "ttp5", "qc"];
const cmdMain = ["Ping", "Alive", "Owner", "Menu", "Infochat", "Quoted", "Listpc", "Listgc", "Listonline", "Infobot", "Buypremium"];
const cmdOwner = ["React", "Chat", "Join", "Leave", "Block", "Unblock", "Bcgroup", "Bcall", "Setppbot", "Setexif", "Anticall", "Setstatus", "Setnamebot", "Sleep", "AutoTyping", "AlwaysOnline", "AutoRead", "autosview", "ban", "unban", "warn", "unwarn", "banchat"];
const cmdStalk = ["Nowa", "Truecaller", "InstaStalk", "GithubStalk"];



function generateMenu(cmdList, title) {
    if (!Array.isArray(cmdList)) {
        console.error('Invalid cmdList. It should be an array.');
        return '';
    }

    const formattedCmdList = cmdList
    .sort((a, b) => a.localeCompare(b))
    .map((v) => `│${v}`).join('\n');

    return `
╭───═❮ ${title} ❯═───❖
│ ╭─────────────···▸
${formattedCmdList.split('\n').map(item => `│${item ? ' ' + item.trim() : ''}`).join('\n')}
│ ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;
}

const introTextConvert = generateMenu(cmdConv, '𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥');
const introTextAdmin = generateMenu(cmdGrup, '𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨');
const introTextOwner = generateMenu(cmdOwner, '𝗢𝗪𝗡𝗘𝗥');
const introTextMain = generateMenu(cmdMain, '𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨');
const introTextDownload = generateMenu(cmdDown, '𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥');
const introTextStalk = generateMenu(cmdStalk, '𝗦𝗧𝗔𝗟𝗞');
const introTextSearch = generateMenu(cmdSearch, '𝗦𝗘𝗔𝗥𝗖𝗛');
const introTextFun = generateMenu(cmdFun, '𝗙𝗨𝗡 𝗠𝗘𝗡𝗨');
const introTextTool = generateMenu(cmdTool, '𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨');
const introTextAi = generateMenu(cmdAi, '𝗔𝗜 𝗠𝗘𝗡𝗨');

const menuText = `*🔢 Chwazi youn ladan yo*
1. ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
2. ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
3. ɢʀᴏᴜᴘᴍᴇɴᴜ
4. sᴛᴀʟᴋᴍᴇɴᴜ
5. sᴇᴀʀᴄʜᴍᴇɴᴜ
6. ᴛᴏᴏʟᴍᴇɴᴜ
7. ғᴜɴᴍᴇɴᴜ
8. ᴀɪᴍᴇɴᴜ
9. ᴍᴀɪɴᴍᴇɴᴜ`;

const menuMessage = `
👨‍💻 FAMOUS XD V1
╭─────────────·
│📍 ᴠᴇʀꜱɪᴏɴ: 
│👨‍💻 ᴏᴡɴᴇʀ :       
│👤 ɴᴜᴍʙᴇʀ: 50943782508 
╰─────────────

╭───═❮ *ᴍᴇɴᴜ ʟɪsᴛ* ❯═───❖
│╭─────────────···▸
${menuText.split('\n').map(item => `││▸ ${item.trim()}`).join('\n')}
│╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;
const subMenus = {
    '1': introTextConvert,
    '2': introTextDownload,
    '3': introTextAdmin,
    '4': introTextStalk,
    '5': introTextSearch,
    '6': introTextTool,
    '7': introTextFun,
    '8': introTextAi,
    '9': introTextMain,
};


const lowerText = m.text.toLowerCase();

if (command === 'menu2') {
        await gss.sendMessage(m.chat, {
            image: { url: 'https://telegra.ph/file/61eec5ebaeef2a046a914.jpg' },
            caption: menuMessage,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: false,
                    title: botname,
                    sourceUrl: global.link,
                    body: `Bot Created By ${global.owner}`
                }
            }
        }, { quoted: m });
    } else if (/^\d+$/.test(lowerText) && m.quoted) {
        const quotedText = m.quoted.text.toLowerCase();

        if (quotedText.includes(menuMessage.toLowerCase())) {
            const selectedNumber = lowerText;
            const subMenu = subMenus[selectedNumber];

            if (subMenu !== undefined) {
                await gss.sendMessage(m.chat, {
                    image: { url: 'https://telegra.ph/file/2712906b11294dce533de.png' },
                    caption: subMenu,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: botname,
                            sourceUrl: global.link,
                            body: `Bot Created By ${global.owner}`
                        }
                    }
                }, { quoted: m });
            } else {
                await gss.sendMessage(m.chat, { text: 'Invalid menu number!. Svp chwazi youn nan chif ou wè nan menu an' }, { quoted: m });
            }
        }
    }


	    
        switch(command) {
	    case 'afk': {
	      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} already Afk${text ? ': ' + text : ''}`)
            }
            break	
            
            case 'rentbot': {
if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
   gssrentbot(gss, m, m.from, args);
}
break;
            
case 'imdb': case 'movie':
if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
if (!text) return m.reply(`Banm on non seri oswa fim nan`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Tit     : " + fids.data.Title + "\n"
            imdbt += "📅ane      : " + fids.data.Year + "\n"
            imdbt += "⭐nòt     : " + fids.data.Rated + "\n"
            imdbt += "📆dat piblikasyon   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Aktè     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Lang  : " + fids.data.Language + "\n"
            imdbt += "🌍peyi    : " + fids.data.Country + "\n"
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
if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
            state: 'fon w ti tann'
            }
            if (text) room.name = text
            m.reply('Waiting for partner' + (text ? ` ekri kòmand sa${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `ou pa nan jwèt tictactoe a non`
            delete this.game[roomnya.id]
            m.reply(`jwèt tictactoe siprime avèk siksè✅`)
            }
            break
      
            case 'join': {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw 'Banm wè lien group lan';
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Invalid Link!';
  m.reply(mess.wait);
  let result = args[0].split('https://chat.whatsapp.com/')[1];
  await gss.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'leave': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  await gss.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setexif': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw `Example: ${prefix + command} packname|author`;
  global.packname = text.split("|")[0];
  global.author = text.split("|")[1];
  m.reply(`Exif successfully changed to\n\n⭔ Packname: ${global.packname}\n⭔ Author: ${global.author}`);
}
break;
case 'promote': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  try {
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'promote')
      .then(() => {
        let promotedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`itilizatè ${promotedUsernames} vin diminye avèk siksè nan group ${metadata.subject}.`);
      })
      .catch(() => m.reply('sorry, gen on problem ki fè m paka mete l admin nan group la.'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;



case 'kick': {
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'remove')
      .then(() => {
        let kickedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`Users ${kickedUsernames} met tchanpan deyò ${metadata.subject}.`);
      })
      .catch(() => m.reply('Gen yo problèm ki fè m paka mete moun nan deyò.'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;


case 'demote': {
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!m.isGroup) throw mess.group;
    if (!isBotAdmins) throw mess.botAdmin;
    if (!isAdmins) throw mess.admin;

    let metadata = await gss.groupMetadata(m.chat);
    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
    let usernames = await Promise.all(users.map(async (user) => {
      try {
        let contact = await gss.contacts[user];
        return contact.notify || user.split('@')[0];
      } catch (error) {
        return user.split('@')[0];
      }
    }));

    await gss.groupParticipantsUpdate(m.chat, users, 'demote')
      .then(() => {
        let demotedUsernames = usernames.map(username => `@${username}`).join(', ');
        m.reply(`🥳 ${demotedUsernames} pa admin nan ${metadata.subject} ankò.`);
      })
      .catch(() => m.reply('Gen yon prolem ki fè m paka retire l nan group lan sorry.'));
  } catch (error) {
    console.error('Error:', error);
  }
}
break;


 case 'welcome':
            case 'left': {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  m.reply(`${command} aktive`)
               } else if (args[0] === 'off') {
                  welcome = false
                  m.reply(`${command} dezaktive`)
               }
            }
            break

case 'block': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await gss.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'unblock': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await gss.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setname': case 'setsubject': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!text) throw 'Text?';
  await gss.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)));
}
break;

case 'setdesc': case 'setdesk': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!text) throw 'Text?';
  await gss.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)));
}
break;

          case 'setppbot': {
            if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!/image/.test(mime)) throw `voye yon imaj ak ${prefix + command}`;
  if (/webp/.test(mime)) throw `voye on imaj ak ${prefix + command}`;
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  await gss.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media));
  m.reply(mess.success);
}
break;
    
case 'toqr': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!q) return m.reply('SVP bay on lyen oswa on teks')
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
try {
mee = await gss.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const data = await res.json() 
m.reply(util.format(data[0].symbol))
} catch (err) {
m.reply(`reponn imaj ki an QR lan.`)
}
}
break

case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!quoted) return m.reply(`voye on imaj ak ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Voye on imaj ak ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Voye on imaj ak ${prefix + command}`)
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    const githubRepoUrl = 'https://api.github.com/repos/Famous-Tech/Famous-XD';

    fetch(githubRepoUrl)
        .then(response => response.json())
        .then(data => {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login
            };

            // Format the date
            const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString('en-GB');

            const uy = `*GitHub Repository:* ${data.html_url}
⭐ *Stars:* ${repoInfo.stars}
♈ *Forks:* ${repoInfo.forks}
📅 *Release Date:* ${releaseDate}
🕐 *Last Update:* ${lastUpdateDate}
👨‍💻 *Owner:* ${repoInfo.owner}`;

            gss.sendPoll(m.chat, uy, ['.menu', '.ping'], {
                quoted: m
            });
        })
        .catch(error => console.error('Error 💀', error));
    break;




 case 'setimgmenu':
            {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!isCreator) return m.reply(mess.owner)
                let delb = await gss.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './menuimage/allmenu.jpg')
                fs.unlinkSync(delb)
                m.reply(mess.success)
            }
            break
            
            
case 'akinator':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    m.reply(`Akinator is a game and mobile application that attempts to accurately guess the user's thoughts through a series of detailed questions.\n\n~> ${prefix}akinatorstart: To start\n~> ${prefix}akinatorstop: To stop`)
    break;
case 'akinatorstart':
    if (akinator.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Finish the previous one first, please.")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=GataDios`);
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
    m.reply("Successfully canceled the pr.");
    break;

case 'tagall':
case 'all': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
  if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs');
  let teks = `乂 *ᴀᴛᴛᴇɴᴛɪᴏɴ ᴇᴠᴇʀʏᴏɴᴇ* 乂 \n\n*Message:* ${args.length > 0 ? args.join(" ") : 'no message'}\n\n`;
  for (let mem of participants) {
    teks += `❒ @${mem.id.split('@')[0]}\n`;
  }
  gss.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m });
} 
break;

case 'hidetag': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  gss.sendMessage(m.chat, { text: q ? q : '', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;

case 'totag': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!m.quoted) throw `reponn on mesaj avèk:${prefix + command}`;
  gss.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) });
}
break;

	    case 'style': case 'styletext': {
	      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit);
  db.data.users[m.sender].limit -= 1;
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
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
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
      gss.sendPoll(m.chat, "Chwaziparamèt wap chanje pou group lan:", [`${prefix}group close`, `${prefix}group open`]);
    }
  }
}
break;


case 'editinfo': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Choose Edit Info Setting:", [`${prefix}editinfo open`, `${prefix}editinfo close`]);
  } else {
    const editInfoSetting = args[0].toLowerCase();
    if (editInfoSetting === 'open') {
      await gss.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Group la louvri avèk siksè`)).catch((err) => m.reply(jsonformat(err)));
    } else if (editInfoSetting === 'close') {
      await gss.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Group la fèmen avèk siksè`)).catch((err) => m.reply(jsonformat(err)));
    } else {
      gss.sendPoll(m.chat, "Chwazi", [`${prefix}editinfo open`, `${prefix}editinfo close`]);
    }
  }
}
break;
            
            case 'antilink': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Chwazi paramèt antilien an", [`${prefix}antilink on`, `${prefix}antilink off`]);
  } else {
    const antilinkSetting = args[0].toLowerCase();
    if (antilinkSetting === "on") {
      if (db.data.chats[m.chat]?.antilink) return m.reply(`Antilink lan aktive deja.`);
      db.data.chats[m.chat].antilink = true;
      m.reply(`Antilink Aktive !✅`);
    } else if (antilinkSetting === "off") {
      if (!db.data.chats[m.chat]?.antilink) return m.reply(`Antilink dezaktive deja.`);
      db.data.chats[m.chat].antilink = false;
      m.reply(`Antilink Dezaktive🚫`);
    } else {
      gss.sendPoll(m.chat, "Chwazi paramèt antilien an:", [`${prefix}antilink on`, `${prefix}antilink off`]);
    }
  }
}
break;



case 'antiviewonce': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
if (!isCreator) throw mess.owner;
    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "Choose Antiviewonce Setting:", [`${prefix}antiviewonce on`, `${prefix}antiviewonce off`]);
    } else {
        const antiviewonceSetting = args[0].toLowerCase();
        if (antiviewonceSetting === "on") {
            if (db.data.chats[m.chat]?.antiviewonce) return m.reply(`Antiviewonce Already Active`);
            db.data.chats[m.chat].antiviewonce = true
            m.reply(`Anti vu unik aktive !`);
        } else if (antiviewonceSetting === "off") {
            if (!db.data.chats[m.chat]?.antiviewonce) return m.reply(`Antiviewonce Already Inactive`);
            db.data.chats[m.chat].antiviewonce = false
            m.reply(`Anti vu unik dezaktive!`);
        } else {
            gss.sendPoll(m.chat, "Choose sa w vle pou antilink lan:", [`${prefix}antiviewonce on`, `${prefix}antiviewonce off`]);
        }
    }
}
break;


case "forward":
case "fwd":
  if (!args.length) {
    await doReact("❌");
    return m.reply(`SVP tag on moun oswa banm nimewo l.`);
  }

  let forwardTo = ''; // Initialize the variable to store the user ID or phone number

  // Check if the first argument is a tagged user
  if (args[0].startsWith('@')) {
    forwardTo = args[0]; // Store the tagged user ID
    args.shift(); // Remove the tagged user from the arguments list
  } else if (/^\+\d{11,}$/.test(args[0])) {
    forwardTo = args[0]; // Store the phone number
    args.shift(); // Remove the phone number from the arguments list
  } else {
    await doReact("❌");
    return m.reply(`Invalid !. SVP tag moun nan tankou  (@Famous-Tech) oswa bay num li tankou : (+50943782508) .`);
  }

  const forwardedMessage = args.join(' '); // Combine the remaining arguments as the message to forward

  if (!forwardedMessage) {
    await doReact("❌");
    return m.reply(`Svp bay on mesaj lè w fin di kimoun nan.`);
  }

  try {
    // Check if the forwardTo is a user ID (tagged user) or a phone number
    if (forwardTo.startsWith('@')) {
      // Forward the message to the tagged user
      await gss.sendMessage(forwardTo, forwardedMessage);
    } else {
      // Forward the message to the phone number
      await gss.sendMessage(forwardTo, forwardedMessage, MessageType.text, { quoted: m });
    }

    await doReact("✅");
  } catch (error) {
    console.error(error);
    await doReact("❌");
    return m.reply(`An error occurred while forwarding the message: ${error.message}`);
  }
  break;


case "cricketscore":
case "score":
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    await doReact("❌");
    return m.reply(`*Provide a match ID for cricket score.*\nExample: !cricketscore 12345`);
  }

  const matchId = encodeURIComponent(text);

  try {
    const apiUrl = `https://iol.apinepdev.workers.dev/${matchId}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      await doReact("❌");
      return m.reply(`Invalid response from the cricket score API. Status code: ${response.status}`);
    }

    const result = await response.json();

    let formattedResult = `╭══════════════•∞•══╮\n`;
    formattedResult += `│⿻   *FAMOUS-XD*\n`;
    formattedResult += `│⿻   *LIVE MATCH INFO* ✨\n`;
    formattedResult += `│⿻\n`;

    if (result.code === 200) {
      formattedResult += `│⿻   *${result.data.title}*\n`;
      formattedResult += `│⿻   *${result.data.update}*\n`;
      formattedResult += `│⿻ \n`;
    } else {
      await m.reply(`*Update:* Data not found for the specified match ID.`);
      await doReact("❌");
      return;
    }

    if (result.data.liveScore && result.data.liveScore.toLowerCase() !== "data not found") {
      formattedResult += `│⿻   *Live Score:* ${result.data.liveScore}\n`;
      formattedResult += `│⿻   *Run Rate:* ${result.data.runRate}\n`;
      formattedResult += `│⿻\n`;
      formattedResult += `│⿻   *Batter 1:* ${result.data.batsmanOne}\n`;
      formattedResult += `│⿻   *${result.data.batsmanOneRun} (${result.data.batsmanOneBall})* SR: ${result.data.batsmanOneSR}\n`;
      formattedResult += `│⿻\n`;
      formattedResult += `│⿻   *Batter 2:* ${result.data.batsmanTwo}\n`;
      formattedResult += `│⿻   *${result.data.batsmanTwoRun} (${result.data.batsmanTwoBall})* SR: ${result.data.batsmanTwoSR}\n`;
      formattedResult += `│⿻\n`;
      formattedResult += `│⿻   *Bowler 1:* ${result.data.bowlerOne}\n`;
      formattedResult += `│⿻   *${result.data.bowlerOneOver} overs, ${result.data.bowlerOneRun}/${result.data.bowlerOneWickets}, Econ:* ${result.data.bowlerOneEconomy}\n`;
      formattedResult += `│⿻\n`;
      formattedResult += `│⿻   *Bowler 2:* ${result.data.bowlerTwo}\n`;
      formattedResult += `│⿻   *${result.data.bowlerTwoOver} overs, ${result.data.bowlerTwoRun}/${result.data.bowlerTwoWicket}, Econ:* ${result.data.bowlerTwoEconomy}\n`;
    }

    formattedResult += `╰══•∞•═══════════════╯ `;

    await m.reply(formattedResult);
    await doReact("✅");
  } catch (error) {
    console.error(error);
    await doReact("❌");
    return m.reply(`An error occurred while processing the cricket score request. ${error.message}`);
  }
  break;




case 'ban': {
  if (!isCreator) return m.reply(mess.owner);

  let orgnye;

  if (m.quoted && m.quoted.sender) {
    orgnye = m.quoted.sender;
  } else {
    return m.reply('Tag mou  wap bani an oswa reponn on mesaj li.');
  }

  const isBanned = banUser.includes(orgnye);

  if (isBanned) {
    return m.reply('Tchanpan bani deja.');
  }

  banUser.push(orgnye);
  return m.reply(`pase kk mon ami ou bani.`);
  break;
}



case 'unban': {
   
  if (!isCreator) return m.reply(mess.owner)

  if (m.quoted && m.quoted.sender) {
    const orgnye = m.quoted.sender;
    const isBane = banUser.includes(orgnye);

    if (!isBane) return m.reply('non li pa bani.');

    let delbans = banUser.indexOf(orgnye);
    banUser.splice(delbans, 1);
    return m.reply(`ok ou debani.`);
  }

  return m.reply("Invalid option. reponn on mesaj pou w bani oswa debani on moun.");
}
break;



case 'mute': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (!args || args.length < 1) {
    gss.sendPoll(m.chat, "Chwazi:", [`${prefix}mute on`, `${prefix}mute off`]);
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
      gss.sendPoll(m.chat, "Chwazi:", [`${prefix}mute on`, `${prefix}mute off`]);
    }
  }
}
break;

case "logomaker":
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
        await doReact("❌");
        return m.reply(`*Bay on non pou m fè logo a.*\nExample: !logomaker MyLogo`);
    }

    const logoName = encodeURIComponent(text);

    try {
        const apiUrl = `https://logomaker.apinepdev.workers.dev/?logoname=${logoName}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            await doReact("❌");
            return m.reply(`Invalid response from the logo maker API. Status code: ${response.status}`);
        }

        const result = await response.json();

        if (result.logo) {
            await gss.sendMessage(m.chat, {
                image: {
                    url: result.logo,
                },
                mimetype: 'image/jpeg', // Adjust based on the actual image format
                caption: 'Generated Logo',
            }, {
                quoted: m,
            });

            await doReact("✅");
        } else {
            await doReact("❌");
            return m.reply(`*FATAL ERROR*.`);
        }
    } catch (error) {
        console.error(error);
        await doReact("❌");
        return m.reply(`An error occurred while processing the logo maker request. ${error.message}`);
    }
    break;



case 'linkgroup': case 'linkgc': {
 if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  let response = await gss.groupInviteCode(m.chat);
  gss.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link: ${groupMetadata.subject}`, m, { detectLink: true });
}
break;



case 'setstatus': case 'setbiobot': case 'setbotbio': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw `Bot WhatsApp FAMOUS-XD devlope par FAMOUS-XD `;
  let name = await gss.updateProfileStatus(text);
  m.reply(`Siksè!`);
}
break;

case 'anticall': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) throw mess.owner;

    let ciko = db.data.settings[botNumber]?.anticall;

    if (!args || args.length < 1) {
        gss.sendPoll(m.chat, "Chwazi :", [`${prefix}anticall off`, `${prefix}anticall on`]);
    } else {
        if (args[0].toLowerCase() === "on") {
            if (ciko) return m.reply(`li aktive deja`);
            db.data.settings[botNumber].anticall = true;
            m.reply(`AntiCall Active!`);
        } else if (args[0].toLowerCase() === "off") {
            if (!ciko) return m.reply(`Li dezaktive deja`);
            db.data.settings[botNumber].anticall = false;
            m.reply(`AntiCall Deactivated!`);
        } else {
            gss.sendPoll(m.chat, "Chwazi:", [`${prefix}anticall off`, `${prefix}anticall on`]);
        }
    }
}
break;



            case 'deleteall':
case 'delall':
case 'delete':
case 'del': 
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw `Kote text lan ?\n\nExample: ${prefix + command} famous-xd `;
  let getGroups = await gss.groupFetchAllParticipating();
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
  let anu = groups.map(v => v.id);
  m.reply(`Sending Broadcast to ${anu.length} Group Chats, Estimated Time ${anu.length * 1.5} seconds`);
  for (let i of anu) {
    await sleep(1500);
    let txt = `「 FAMOUS-XD Broadcast 」\n\n${text}`;
    gss.sendText(i, txt);
  }
  m.reply(`mesaj lan ale nan ${anu.length} Group`);
}
break;
  
case 'bc': case 'broadcast': case 'bcall': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!isCreator) throw mess.owner;
  if (!text) throw `bay on tèks\n\nExample: ${prefix + command} fatih-san`;
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.quoted) m.reply('Reply to a message');
  let msg = await m.getQuotedObj();
  if (!m.quoted.isBaileys) throw 'Gen yon problem ki fè bot lan la voye mesaj lan re eseye. ';
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

case 'autosview':
    case 'autostatusview':{
      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!isCreator) throw mess.owner;
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  m.reply(`${command} aktive`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  m.reply(`${command} aktive`)
               }
            }
            break
            
            case 'autoreact':
    case 'react':{
      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!isCreator) throw mess.owner;
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  autoreact = true
                  m.reply(`${command} aktive`)
               } else if (args[0] === 'off') {
                  autoreact = false
                  m.reply(`${command} dezaktiv`)
               }
            }
            break
            
      
    case 'autorecording':{
      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!isCreator) throw mess.owner;
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  global.autoRecord = true
                  m.reply(`${command} aktive`)
               } else if (args[0] === 'off') {
                  global.autoRecord = false
                  m.reply(`${command} dezaktive `)
               }
            }
            break

case 'q': case 'quoted': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.quoted) return m.reply('Reponn on mesaj');
  let wokwol = await gss.serializeM(await m.getQuotedObj());
  if (!wokwol.quoted) return m.reply('The replied message does not contain a reply');
  await wokwol.quoted.copyNForward(m.chat, true);
}
break;

            case 'listpc': {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id);
  let teks = `⬣ *LIST konvèsasyon prive*\n\nTotal konvèsasyon : ${anu.length} Chats\n\n`;
  for (let i of anu) {
    let nama = store.messages[i].array[0].pushName;
    teks += `⬡ *Non:* ${nama}\n⬡ *itilizatè:* @${i.split('@')[0]}\n⬡ *Chat:* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'listgc': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id);
  let teks = `⬣ *LIS CHAT GROUP*\n\nTotal Groups: ${anu.length} Groups\n\n`;
  for (let i of anu) {
    let metadata = await gss.groupMetadata(i);
    teks += `⬡ *Non:* ${metadata.subject}\n⬡ *Owner:* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n⬡ *ID:* ${metadata.id}\n⬡ *dat kreyasyon:* ${moment(metadata.creation * 1000).tz('America/Port-au-Prince).format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Manb:* ${metadata.participants.length}\n\n────────────────────────\n\n`;
  }
  gss.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'listonline': case 'liston': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
  let online = [...Object.keys(store.presences[id]), botNumber];
  gss.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online });
}
break;


case 'remini': case 'upscale': case 'enhance': case 'hd': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!quoted) return m.reply(`Bay on foto menn?`);
    if (!/image/.test(mime)) return m.reply(`Bay on foto epi ekri anba l ${prefix + command}`);
    m.reply(mess.wait);
    const { remini } = require('./lib/remini');
    let media = await quoted.download();

    try {
        let proses = await remini(media, "enhance");

        // Send the enhanced image with the new caption
        gss.sendMessage(m.chat, { image: proses, caption: `${mess.success} by : *FAMOUS-XD*` }, { quoted: m });
    } catch (error) {
        console.error('Error in Remini enhancement:', error);
        m.reply(`An error occurred: ${error.message}`);
    }
    break;
}

        case 'gemini':
case 'vision': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!quoted) return m.reply(`kote foto a`);
    if (!/image/.test(mime)) return m.reply(`Voye on foto epi ekri anba l ${prefix + command}`);
    
    m.reply(mess.wait);

    try {
        const prompt = `${text}`;
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const media = await quoted.download();

        const imagePart = {
            inlineData: {
                data: Buffer.from(media).toString("base64"),
                mimeType: mime
            },
        };

        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const textt = response.text(); // Fix the typo here

        // Send the generated text as the reply
        m.reply(`${textt}`);
    } catch (error) {
        console.error('Error in Gemini Pro Vision:', error);
        m.reply(`An error occurred: ${error.message}`);
        await doReact("❌");
    }
    break;
}




case 'lyrics': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
if (!text) return m.reply(`Kòman pou w itilize l: ${prefix}lyrics Thunder`)
await doReact("❌");
m.reply(mess.wait);
await doReact("🔎");
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
m.reply(`
*✍️ Tit:* ${result.title}
*👨‍🎤 Atis:* ${result.author}
*🔗 Url:* ${result.link}

*📝 Lyrics:*\n\n ${result.lyrics}
`.trim())
await doReact("🗨");
}
break;



case 'whatmusic': case 'find': case 'shazame':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!m.quoted) {
        m.reply('bay on video oswa on audio mal baw non mizik lan.');
    } else if (/audio|video/.test(mime)) {
        try {
            let media = await m.quoted.download();
            const ext = mime.split('/')[1];
            fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
            
            m.reply(mess.wait);

            const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
            const { code, msg } = res.status;

            if (code !== 0) {
                throw msg;
            }

            const { title, artists, album, genres, release_date } = res.metadata.music[0];
            const txt = `
                        𝚁𝙴𝚂𝚄𝙻𝚃
                • 📌 *TIT*: ${title}
                • 👨‍🎤 ATIS: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
                • 💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'NOT FOUND'}
                • 🌐 𝙶𝙴𝙽𝙴𝚁𝙾: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
                • 📆 Dat piblikasyon : ${release_date || 'NOT FOUND'}
            `.trim();

            fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
            m.reply(txt);
        } catch (error) {
            console.error(error);
            m.reply('An error occurred.');
        }
    }
    break;




case 'fetch':
case 'get':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!/^https?:\/\//.test(text)) throw 'kòmanse *URL* lan avèk http:// oubyen https://';
  const _url = new URL(text);
  const url = `${_url.origin}${_url.pathname}?${_url.searchParams.toString()}`;
  const res = await fetch(url);

  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
    throw `Content-Length exceeds the limit: ${res.headers.get('content-length')}`;
  }

  if (!/text|json/.test(res.headers.get('content-type'))) {
    return gss.sendMedia(m.chat, url, 'file', 'API FETCHED FROM FAMOUS-XD, m);
  }

  let content = Buffer.from(await res.arrayBuffer());

  try {
    console.log('Parsed JSON:', JSON.parse(content));
    content = JSON.stringify(JSON.parse(content));
  } catch (e) {
    console.error('Error parsing JSON:', e);
    content = content + '';
  } finally {
    m.reply(content.slice(0, 65536) + '');
  }
  break;
  
  

case 'ebinary': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) throw `Example: ${prefix + command} text`;
  let { eBinary } = require('./lib/binary');
  let eb = await eBinary(text);
  m.reply(eb);
}
break;

case 'dbinary': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) throw `Example: ${prefix + command} text`;
  let { dBinary } = require('./lib/binary');
  let db = await dBinary(text);
  m.reply(db);
}
break;

case 'tomp4': case 'tovideo': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!/webp/.test(mime)) throw `*Reponn sticker wap fè tounen video a avèk* *${prefix + command}*`;
  m.reply(mess.wait);
  let { webp2mp4File } = require('./lib/uploader');
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  let webpToMp4 = await webp2mp4File(media);
  await gss.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: ' Generated by *FAMOUS-XD*' } }, { quoted: m });
  await fs.unlinkSync(media);
}
break;

case 'toaud': case 'toaudio': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `voye oswa reponn video wap fè tounen audio epi ekri kòmand : ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toAudio } = require('./lib/converter');
  let audio = await toAudio(media, 'mp4');
  gss.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m });
}
break;

            case 'tomp3': {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply with Video/Audio to convert into MP3 with caption ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toAudio } = require('./lib/converter');
  let audio = await toAudio(media, 'mp4');
  gss.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${gss.user.name}.mp3` }, { quoted: m });
}
break;

case 'tovn': case 'toptt': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply with Video/Audio to convert into VN with caption ${prefix + command}`;
  m.reply(mess.wait);
  let media = await gss.downloadMediaMessage(qmsg);
  let { toPTT } = require('./lib/converter');
  let audio = await toPTT(media, 'mp4');
  gss.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;

case 'togif': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!/image/.test(mime)) throw `voye imaj lan epi mete  ${prefix + command}`;
  if (/webp/.test(mime)) throw `Send/reponn imaj lan qk : ${prefix + command}`;
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
if (!text) return m.reply(`*Banm mesaj pou m bay admin yo*`)
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
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
      m.reply('*METE ON LYEN YOUTUBE OSWA ON TIT POU BOT LAN CHÈCHE*');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);
await doReact("⬇️");
    if (isUrl) {
      // If it's a URL, directly use ytdl-core for audio and video
      const videoStream = ytdl(text, { filter: 'audioandvideo', quality: 'highest' });

      const videoBuffer = [];

      videoStream.on('data', (chunk) => {
        videoBuffer.push(chunk);
      });

      videoStream.on('end', async () => {
        try {
          const finalVideoBuffer = Buffer.concat(videoBuffer);

          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
          

          const captionText = `
╭═════════•∞•══╮
│⿻ *FAMOUS-XD*
│  *Youtube;Player* 🔰✅
│⿻ *Tit:* ${videoInfo.title}
│⿻ *Dire:* ${videoInfo.duration}
│⿻ *Otè:* ${videoInfo.author.name}
│⿻ *Size:* ${formatBytes(finalVideoBuffer.length)}
│⿻ *Dat piblikasyon:* ${formatUploadDate(videoInfo.uploadDate)} 
╰══•∞•═════════╯
`;

          await gss.sendMessage(m.chat, { video: finalVideoBuffer, mimetype: 'video/mp4', caption: captionText });
          await doReact("✅");
        } catch (err) {
          console.error('Error💀', err);
          m.reply('Error💀.');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search for video
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];
await doReact("⬇️");
      if (!firstVideo) {
        m.reply(' m pa jwenn video.');
        await doReact("❌");
        return;
      }

      const videoStream = ytdl(firstVideo.url, { filter: 'audioandvideo', quality: 'highest' });

      const videoBuffer = [];

      videoStream.on('data', (chunk) => {
        videoBuffer.push(chunk);
      });

      videoStream.on('end', async () => {
        try {
          const finalVideoBuffer = Buffer.concat(videoBuffer);

          const captionText = `
╭═════════•∞•══╮
│⿻ *FAMOUS-XD*
│  *Youtube;Player* 🔰✅
│⿻ *Tit:* ${firstVideo.title}
│⿻ *Dire:* ${firstVideo.duration}
│⿻ *Otè:* ${firstVideo.author.name}
│⿻ *Size:* ${formatBytes(finalVideoBuffer.length)}  
│⿻ *DAT PIBLIKASYON:* ${formatUploadDate(firstVideo.uploadDate)}
╰══•∞•═════════╯
`;

          await gss.sendMessage(m.chat, { video: finalVideoBuffer, mimetype: 'video/mp4', caption: captionText });
          await doReact("✅");
        } catch (err) {
          console.error('Error💀', err);
          m.reply('Error💀');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('error');
    await doReact("❌");
  }
  break;


case 'ytvdoc':
  case 'ytmp4doc':
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
      m.reply('Enter YouTube Link or Search Query!');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);

    if (isUrl) {
      // If it's a URL, directly use ytdl-core for audio and video
      const videoStream = ytdl(text, { filter: 'audioandvideo', quality: 'highest' });

      const videoBuffer = [];

      videoStream.on('data', (chunk) => {
        videoBuffer.push(chunk);
      });

      videoStream.on('end', async () => {
        try {
          const finalVideoBuffer = Buffer.concat(videoBuffer);

          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });

          const captionText = `
╭═════════•∞•══╮
│⿻ *GSS BOTWA*
│  *Youtube Mp4 Player* ✨
│⿻ *Title:* ${videoInfo.title}
│⿻ *Duration:* ${videoInfo.duration}
│⿻ *Author:* ${videoInfo.author.name}
│⿻ *Size:* ${formatBytes(finalVideoBuffer.length)}
│⿻ *Upload Date:* ${formatUploadDate(videoInfo.uploadDate)} 
╰══•∞•═════════╯
`;

          await gss.sendMessage(m.chat, { document: finalVideoBuffer, mimetype: 'video/mp4', fileName: `${videoInfo.title}.mp4`, caption: captionText}, {quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending video:', err);
          m.reply('Error sending video.');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search for video
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];

      if (!firstVideo) {
        m.reply('Video not found.');
        await doReact("❌");
        return;
      }

      const videoStream = ytdl(firstVideo.url, { filter: 'audioandvideo', quality: 'highest' });

      const videoBuffer = [];

      videoStream.on('data', (chunk) => {
        videoBuffer.push(chunk);
      });

      videoStream.on('end', async () => {
        try {
          const finalVideoBuffer = Buffer.concat(videoBuffer);

          const captionText = `
╭═════════•∞•══╮
│⿻ *GSS BOTWA*
│  *Youtube Mp4 Player* ✨
│⿻ *Title:* ${firstVideo.title}
│⿻ *Duration:* ${firstVideo.duration}
│⿻ *Author:* ${firstVideo.author.name}
│⿻ *Size:* ${formatBytes(finalVideoBuffer.length)}  
│⿻ *Upload Date:* ${formatUploadDate(firstVideo.uploadDate)}
╰══•∞•═════════╯
`;

          await gss.sendMessage(m.chat, { document: finalVideoBuffer, mimetype: 'video/mp4', fileName: `${firstVideo.title}.mp4`, caption: captionText}, {quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending video:', err);
          m.reply('Error sending video.');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('Unexpected error occurred.');
    await doReact("❌");
  }
  break;




case 'yta':
case 'song':
case 'ytmp3':
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
      m.reply('*Bay ON LYEN YOUTUBE OSWA ON TIT POU BOT LAN CHÈCHE*');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);

    if (isUrl) {
      // If it's a URL, directly use ytdl-core
      const audioStream = ytdl(text, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
          const thumbnailMessage = {
  image: {
    url: videoInfo.thumbnail,
  },
  caption: `
╭═════════•∞•══╮
│⿻ *FAMOUS-XD*
│  *Youtube DOWNLOADER*
│⿻ *Tit:* ${videoInfo.title}
│⿻ *Dire:* ${videoInfo.timestamp}
│⿻ *Otè:* ${videoInfo.author.name}
│⿻ *Size:* ${formatBytes(finalAudioBuffer.length)}
│⿻ *Dat piblikasyon:* ${formatUploadDate(videoInfo.uploadDate)}
╰══•∞•═════════╯
`, 
};


          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { audio: finalAudioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('Error sending audio.');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];

      if (!firstVideo) {
        m.reply('Audio not found.');
        await doReact("❌");
        return;
      }

      const audioStream = ytdl(firstVideo.url, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const thumbnailMessage = {
  image: {
    url: firstVideo.thumbnail,
  },
  caption: `
╭═════════•∞•══╮
│⿻ *FAMOUS-XD*
│  *Youtube Mp3 Player* ✨
│⿻ *Title:* ${firstVideo.title}
│⿻ *Duration:* ${firstVideo.timestamp}
│⿻ *Uploader:* ${firstVideo.author.name}
│⿻ *Size:* ${formatBytes(finalAudioBuffer.length)}
│⿻ *Upload Date:* ${formatUploadDate(firstVideo.uploadDate)}
╰══•∞•═════════╯
`,
};
          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { audio: finalAudioBuffer, mimetype: 'audio/mpeg' }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio💀:', err);
          m.reply('Error sending audio.💀');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('Unexpected error occurred.');
    await doReact("❌");
  }
  break;





case 'ytadoc':
case 'songdoc':
case 'ytmp3doc':
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
      m.reply('mete lyen youtube lan oswa on tit pou bot lan chache sou youtube');
      doReact("❌");
      return;
    }

    m.reply(mess.wait);
    await doReact("🕘");

    // Check if the input is a valid YouTube URL
    const isUrl = ytdl.validateURL(text);

    if (isUrl) {
      // If it's a URL, directly use ytdl-core
      const audioStream = ytdl(text, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const videoInfo = await yts({ videoId: ytdl.getURLVideoID(text) });
          const thumbnailMessage = {
  image: {
    url: videoInfo.thumbnail,
  },
  caption: `
╭═════════•∞•══╮
│⿻ *FAMOUS-XD*
│  *Youtube Player* ✨
│⿻ *Title:* ${videoInfo.title}
│⿻ *Duration:* ${videoInfo.timestamp}
│⿻ *Uploader:* ${videoInfo.author.name}
│⿻ *Size:* ${formatBytes(finalAudioBuffer.length)}
│⿻ *Upload Date:* ${formatUploadDate(videoInfo.uploadDate)}
╰══•∞•═════════╯
`, 
};


          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { document: finalAudioBuffer, mimetype: 'audio/mpeg', fileName: `${videoInfo.title}.mp3` }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('Error sending audio.');
          await doReact("❌");
        }
      });
    } else {
      // If it's a search query, use yt-search
      const searchResult = await yts(text);
      const firstVideo = searchResult.videos[0];

      if (!firstVideo) {
        m.reply('Audio not found.');
        await doReact("❌");
        return;
      }

      const audioStream = ytdl(firstVideo.url, { filter: 'audioonly', quality: 'highestaudio' });
      const audioBuffer = [];

      audioStream.on('data', (chunk) => {
        audioBuffer.push(chunk);
      });

      audioStream.on('end', async () => {
        try {
          const finalAudioBuffer = Buffer.concat(audioBuffer);

          const thumbnailMessage = {
  image: {
    url: firstVideo.thumbnail,
  },
  caption: `
╭═════════•∞•══╮
│⿻ *FAMOUS-XD │  *Youtube mp3*
│⿻ *Title:* ${firstVideo.title}
│⿻ *Duration:* ${firstVideo.timestamp}
│⿻ *Uploader:* ${firstVideo.author.name}
│⿻ *Size:* ${formatBytes(finalAudioBuffer.length)}
│⿻ *Upload Date:* ${formatUploadDate(firstVideo.uploadDate)}
╰══•∞•═════════╯
`,
};
          await gss.sendMessage(m.chat, thumbnailMessage, { quoted: m });
          await gss.sendMessage(m.chat, { document: finalAudioBuffer, mimetype: 'audio/mpeg', fileName: `${firstVideo.title}.mp3` }, { quoted: m });
          await doReact("✅");
        } catch (err) {
          console.error('Error sending audio:', err);
          m.reply('Error sending audio.');
          await doReact("❌");
        }
      });
    }
  } catch (error) {
    console.error('Error during:', error);
    m.reply('Unexpected error occurred.');
    await doReact("❌");
  }
  break;




case 'yts': case 'ytsearch': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    return m.reply('mete lyen  youtube lan oswa on tit pou bot lan chèche');
  }
  await doReact("🕘");

  try {
    const results = await yts(text);

    if (results.videos.length > 0) {
      let pollOptions = [];

      const uniqueKey = `yts_${optionIndex}`;
      const urlObject = {};

      for (let i = 0; i < Math.min(5, results.videos.length); i++) {
        const result = results.videos[i];
        const videoUrl = result.url;
        const title = result.title;

        urlObject[`${optionIndex}.${i + 1}`] = videoUrl;
        pollOptions.push(`.𝐩𝐥𝐚𝐲 ${optionIndex}.${i + 1} ${title}`);
      }

      if (!videoSearchResults.has(uniqueKey)) {
        videoSearchResults.set(uniqueKey, {});
      }

      videoSearchResults.set(uniqueKey, Object.assign(videoSearchResults.get(uniqueKey), urlObject));

      await gss.sendPoll(m.chat, 'Chwazi on video pou m telechaje:', [...pollOptions]);
      await doReact("✅");

      optionIndex += 1;
    } else {
      return m.reply('🚫 m pa jwenn anyen .');
    }
  } catch (error) {
    console.error('Error during yts:', error);
    return m.reply('Unexpected error occurred.');
  }
  break;
}





function formatUploadDate(uploadDate) {
  const date = new Date(uploadDate);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

case '𝐩𝐥𝐚𝐲': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    return m.reply('Svp di m ki video ou vle jwe a. Use the format: play [unique-key]');
    doReact("❌");
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('Invalid format. Please provide a valid unique key (e.g., 1.1)');
    doReact("❌");
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        const videoInfo = await ytdl.getInfo(selectedUrl);

        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 
        // Construct caption with audio details
        const pollMessage = `
╭═════════•∞•══╮
│⿻ *FAMOUS-XD*
│  *Youtube Mp4 Player* ✨
│⿻ *Title:* ${title}
│⿻ *Author:* ${videoInfo.videoDetails.author.name || 'N/A'}
│⿻ *Duration:* ${videoInfo.videoDetails.lengthSeconds}s
│⿻ *Views:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
│⿻ *Upload Date:* ${uploadDate}
╰══•∞•═════════╯
`;

        await gss.sendPoll(m.chat, pollMessage, [
          `.𝐀𝐮𝐝𝐢𝐨 ${optionIndex}.${subOption}`,
          `.𝐕𝐢𝐝𝐞𝐨 ${optionIndex}.${subOption}`,
          `.𝐀𝐮𝐝𝐢𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 ${optionIndex}.${subOption}`,
          `.𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 ${optionIndex}.${subOption}`
        ]);
        await doReact("✅");
      } catch (error) {
        console.error('Error during poll creation:', error);
        return m.reply('Unexpected error occurred during poll creation.');
        doReact("❌");
      }
    } else {
      return m.reply('Invalid sub-option. Please choose a valid sub-option.');
    }
  } else {
    return m.reply('Invalid unique key. Please provide a valid unique key.');
  }
  break;
}


async function streamToBuffer(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}


case '𝐀𝐮𝐝𝐢𝐨': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    return m.reply('Please specify the unique key for audio playback. Use the format: audio [unique-key]');
    doReact("❌");
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('Invalid format. Please provide a valid unique key (e.g., 1.1)');
    doReact("❌");
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        // Fetch video info for additional details
        const videoInfo = await ytdl.getInfo(selectedUrl);

        // Get the video thumbnail
        const thumbnailUrl = videoInfo.videoDetails.thumbnails[0].url;

const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 
        // Construct caption with audio details
        const caption = `
╭═════════•∞•══╮
│⿻ *FAMOUS-XD*
│  *Youtube Mp4 Player* ✨
│⿻ *Title:* ${title}
│⿻ *Author:* ${videoInfo.videoDetails.author.name || 'N/A'}
│⿻ *Duration:* ${videoInfo.videoDetails.lengthSeconds}s
│⿻ *Views:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
│⿻ *Upload Date:* ${uploadDate}
╰══•∞•═════════╯
`;

        // Fetch audio stream directly
        const audioStream = ytdl(selectedUrl, { quality: 'highestaudio', filter: 'audioonly' });

        // Convert the stream to buffer for sending
        const audioBuffer = await streamToBuffer(audioStream);

        // Send the thumbnail as an image along with audio info
        await gss.sendMessage(m.chat, {
          image: {
            url: thumbnailUrl,
          },
          caption: caption,
        }, {
          quoted: m,
        });

        // Send the audio as a voice message
        await gss.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mpeg' });
        await doReact("✅");
      } catch (error) {
        console.error('Error during audio playback:', error);
        return m.reply('Unexpected error occurred during audio playback.');
      }
    } else {
      return m.reply('Invalid sub-option. Please choose a valid sub-option.');
    }
  } else {
    return m.reply('Invalid unique key. Please provide a valid unique key.');
  }
  break;
}



case '𝐀𝐮𝐝𝐢𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    return m.reply('Please specify the unique key for audio playback. Use the format: audio [unique-key]');
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('Invalid format. Please provide a valid unique key (e.g., 1.1)');
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        // Fetch video info for additional details
        const videoInfo = await ytdl.getInfo(selectedUrl);

        // Get the video thumbnail
        const thumbnailUrl = videoInfo.videoDetails.thumbnails[0].url;

const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 
        // Construct caption with audio details
        const caption = `
╭═════════•∞•══╮
│⿻ *FAMOUS-XD*
│  *Youtube Mp4 Player* ✨
│⿻ *Title:* ${title}
│⿻ *Author:* ${videoInfo.videoDetails.author.name || 'N/A'}
│⿻ *Duration:* ${videoInfo.videoDetails.lengthSeconds}s
│⿻ *Views:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
│⿻ *Upload Date:* ${uploadDate}
╰══•∞•═════════╯
`;

        // Fetch audio stream directly
        const audioStream = ytdl(selectedUrl, { quality: 'highestaudio', filter: 'audioonly' });

        // Convert the stream to buffer for sending
        const audioBuffer = await streamToBuffer(audioStream);

        // Send the thumbnail as an image along with audio info
        await gss.sendMessage(m.chat, {
          image: {
            url: thumbnailUrl,
          },
          caption: caption,
        }, {
          quoted: m,
        });

        // Send the audio as a voice message
        await gss.sendMessage(m.chat, {
  document: audioBuffer,
  mimetype: 'audio/mpeg',
  fileName: `${title}.mp3`,
}, { quoted: m });
await doReact("✅");
      } catch (error) {
        console.error('Error during audio playback:', error);
        return m.reply('Unexpected error occurred during audio playback.');
      }
    } else {
      return m.reply('Invalid sub-option. Please choose a valid sub-option.');
    }
  } else {
    return m.reply('Invalid unique key. Please provide a valid unique key.');
  }
  break;
}



case '𝐕𝐢𝐝𝐞𝐨': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    return m.reply('Please specify the unique key for video playback. Use the format: video [unique-key]');
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('Invalid format. Please provide a valid unique key (e.g., 1.1)');
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        // Fetch video info for additional details
        const videoInfo = await ytdl.getInfo(selectedUrl);

        // Get the video thumbnail
        const thumbnailUrl = videoInfo.videoDetails.thumbnails[0].url;

        // Construct caption with video details
        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
        const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 

const captionText = `
╭═════════•∞•══╮
│⿻ *FAMOUS-XD*│  *Youtube download*
│⿻ *Title:* ${title}
│⿻ *Author:* ${videoInfo.videoDetails.author.name || 'N/A'}
│⿻ *Duration:* ${videoInfo.videoDetails.lengthSeconds}s
│⿻ *Views:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
│⿻ *Upload Date:* ${uploadDate}
╰══•∞•═════════╯
`;


        // Download audio and video together using 'videoandaudio' filter
        const videoAndAudioStream = ytdl(selectedUrl, { quality: 'highest', filter: 'audioandvideo' });

        // Convert the stream to buffer
        const videoAndAudioBuffer = await streamToBuffer(videoAndAudioStream);

        // Send the video and audio as a media message with caption
        await gss.sendMessage(m.chat, {
          video: videoAndAudioBuffer,
          mimetype: 'video/mp4',
          caption: captionText,
        }, { quoted: m });
        
      } catch (error) {
        console.error('Error during video playback:', error);
        return m.reply('Unexpected error occurred during video playback.');
      }
    } else {
      return m.reply('Invalid sub-option. Please choose a valid sub-option.');
    }
  } else {
    return m.reply('Invalid unique key. Please provide a valid unique key.');
  }
  break;
}

case '𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) {
    return m.reply('Please specify the unique key for video playback. Use the format: video [unique-key]');
  }

  const match = text.match(/(\d+)\.(\d+)/);

  if (!match) {
    return m.reply('Invalid format. Please provide a valid unique key (e.g., 1.1)');
  }

  const optionIndex = parseInt(match[1]);
  const subOption = parseInt(match[2]);

  const uniqueKey = `yts_${optionIndex}`;

  if (videoSearchResults.has(uniqueKey)) {
    const selectedUrl = videoSearchResults.get(uniqueKey)[`${optionIndex}.${subOption}`];

    if (selectedUrl) {
      try {
        // Fetch video info for additional details
        const videoInfo = await ytdl.getInfo(selectedUrl);

        // Get the video thumbnail
        const thumbnailUrl = videoInfo.videoDetails.thumbnails[0].url;

        // Construct caption with video details
        const title = videoInfo.title || (videoInfo.videoDetails && videoInfo.videoDetails.title) || 'N/A';
        const uploadDate = formatUploadDate(videoInfo.videoDetails.uploadDate) || 'N/A'; 

const captionText = `
 *Video In Document* ✨
 *Title:* ${title}
 *Author:* ${videoInfo.videoDetails.author.name || 'N/A'}
 *Duration:* ${videoInfo.videoDetails.lengthSeconds}s
 *Views:* ${videoInfo.videoDetails.viewCount.toLocaleString() || 'N/A'}
*Upload Date:* ${uploadDate}
`;


        // Download audio and video together using 'videoandaudio' filter
        const videoAndAudioStream = ytdl(selectedUrl, { quality: 'highest', filter: 'audioandvideo' });

        // Convert the stream to buffer
        const videoAndAudioBuffer = await streamToBuffer(videoAndAudioStream);

        // Send the video and audio as a media message with caption
        await gss.sendMessage(m.chat, {
  document: videoAndAudioBuffer,
  mimetype: 'video/mp4',
  fileName: `${title}.mp4`,
  caption: captionText,
}, { quoted: m });
      } catch (error) {
        console.error('Error during video playback:', error);
        return m.reply('Unexpected error occurred during video playback.');
      }
    } else {
      return m.reply('Invalid sub-option. Please choose a valid sub-option.');
    }
  } else {
    return m.reply('Invalid unique key. Please provide a valid unique key.');
  }
  break;
}

case 'play': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!text) return m.reply('Enter Search Query!');

  try {
    const searchResults = await yts(text);

    if (!searchResults.videos || searchResults.videos.length === 0) {
      return m.reply('No search results found.');
    }

    const resultsArray = searchResults.videos.slice(0, 5).map((result, index) => {
      const { url, title, duration, views, author, timestamp } = result;
      const uniqueKey = title.toLowerCase().replace(/\s/g, '_');
      videoSearchResults.set(`${m.chat}_${index}`, { uniqueKey, url, title, duration, views, author, timestamp });
      return { index, title, duration, views, author, timestamp };
    });

    currentPollIndex = 0;

    const pollOptions = ['.𝗔𝗨𝗗𝗜𝗢', '.𝗔𝗨𝗗𝗜𝗢𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧', '.𝗩𝗜𝗗𝗘𝗢', '.𝗩𝗜𝗗𝗘𝗢𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧', '.𝗡𝗘𝗫𝗧'];

    gss.sendPoll(
      m.chat,
      `Choose an option:\n\n"${resultsArray[currentPollIndex].title}":\nDuration: ${resultsArray[currentPollIndex].duration}\nViews: ${resultsArray[currentPollIndex].views}\nAuthor: ${resultsArray[currentPollIndex].author}\nUpload Date: ${resultsArray[currentPollIndex].timestamp}`,
      pollOptions
    );
  } catch (error) {
    console.error('Error during play:', error);
    m.reply('Unexpected error occurred. please vote on next and try again');
  }
  break;
}

case '𝗔𝗨𝗗𝗜𝗢':
case '𝗩𝗜𝗗𝗘𝗢':
case '𝗔𝗨𝗗𝗜𝗢𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧':
case '𝗩𝗜𝗗𝗘𝗢𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧':
case '𝗡𝗘𝗫𝗧': {
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  const pollOption = command.toLowerCase();

  if (!videoSearchResults.has(`${m.chat}_${currentPollIndex}`)) {
    return m.reply('No search results found.');
  }

  const currentResult = videoSearchResults.get(`${m.chat}_${currentPollIndex}`);

  switch (pollOption) {
    case '𝗔𝗨𝗗𝗜𝗢': {
      try {
        if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);

        const audioStream = ytdl(currentResult.url, { quality: 'highestaudio', filter: 'audioonly' });
        const audioBuffer = await new Promise((resolve, reject) => {
          const chunks = [];
          audioStream.on('data', (chunk) => chunks.push(chunk));
          audioStream.on('end', () => resolve(Buffer.concat(chunks)));
          audioStream.on('error', (error) => reject(error));
        });

        await gss.sendMessage(m.chat, { audio: audioBuffer, mimetype: 'audio/mp4', fileName: `${currentResult.title}.mp3` }, { quoted: m });
      } catch (error) {
        console.error(`Error during audio download:`, error);
        m.reply('Unexpected error occurred.please vote on next and try again');
      }
      break;
    }

    case '𝗔𝗨𝗗𝗜𝗢𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧': {
      try {
        if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);

        const audioStream = ytdl(currentResult.url, { quality: 'highestaudio', filter: 'audioonly' });
        const audioBuffer = await new Promise((resolve, reject) => {
          const chunks = [];
          audioStream.on('data', (chunk) => chunks.push(chunk));
          audioStream.on('end', () => resolve(Buffer.concat(chunks)));
          audioStream.on('error', (error) => reject(error));
        });

        await gss.sendMessage(m.chat, { document: audioBuffer, mimetype: 'audio/mp3', fileName: `${currentResult.title}.mp3` }, { quoted: m });
      } catch (error) {
        console.error(`Error during audio download:`, error);
        m.reply('Unexpected error occurred.please vote on next and try again');
      }
      break;
    }

    case '𝗩𝗜𝗗𝗘𝗢': {
      try {
        if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);

        const videoStream = ytdl(currentResult.url, { quality: 'highest', filter: 'audioandvideo' });
        const videoBuffer = await new Promise((resolve, reject) => {
          const chunks = [];
          videoStream.on('data', (chunk) => chunks.push(chunk));
          videoStream.on('end', () => resolve(Buffer.concat(chunks)));
          videoStream.on('error', (error) => reject(error));
        });

        await gss.sendMessage(m.chat, { video: videoBuffer, mimetype: 'video/mp4', caption: `Downloading video: ${currentResult.title}` }, { quoted: m });
      } catch (error) {
        console.error(`Error during video download:`, error);
        m.reply('Unexpected error occurred.please vote on next and try again');
      }
      break;
    }

    case '𝗩𝗜𝗗𝗘𝗢𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧': {
      try {
        if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);

        const videoStream = ytdl(currentResult.url, { quality: 'highest', filter: 'audioandvideo' });
        const videoBuffer = await new Promise((resolve, reject) => {
          const chunks = [];
          videoStream.on('data', (chunk) => chunks.push(chunk));
          videoStream.on('end', () => resolve(Buffer.concat(chunks)));
          videoStream.on('error', (error) => reject(error));
        });

        await gss.sendMessage(m.chat, { document: videoBuffer, mimetype: 'video/mp4', fileName: `${currentResult.title}.mp4`, caption: `Downloading video: ${currentResult.title}` }, { quoted: m });
      } catch (error) {
        console.error(`Error during video download:`, error);
        m.reply('Unexpected error occurred.please vote on next and try again');
      }
      break;
    }

    case '𝗡𝗘𝗫𝗧': {
      if (isBan) return m.reply(mess.banned);
      if (isBanChat) return m.reply(mess.bangc);

      currentPollIndex++;
      if (videoSearchResults.has(`${m.chat}_${currentPollIndex}`)) {
        const nextResult = videoSearchResults.get(`${m.chat}_${currentPollIndex}`);

        const pollOptions = ['.𝗔𝗨𝗗𝗜𝗢', '.𝗔𝗨𝗗𝗜𝗢𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧', '.𝗩𝗜𝗗𝗘𝗢', '.𝗩𝗜𝗗𝗘𝗢𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧', '.𝗡𝗘𝗫𝗧'];

        await gss.sendPoll(
          m.chat,
          `Choose an option:\n\n"${nextResult.title}":\nDuration: ${nextResult.duration}\nViews: ${nextResult.views}\nAuthor: ${nextResult.author}\nUpload Date: ${nextResult.timestamp}`,
          pollOptions
        );
      } else {
        m.reply('No more search results available.');
      }

      break;
    }

    default:
      m.reply('Invalid option.');
      break;
  }

  break;
}



  case 'restart':
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                if (!isCreator) return m.reply(mess.owner)
                m.reply('Proses....')
                exec('pm2 restart all')
            break



async function instaDownload(url) {
    try {
        const apiUrl = `https://instagramdownloader.apinepdev.workers.dev/?url=${encodeURIComponent(url)}`;
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

        if (result.status && result.data && result.data.length > 0) {
            const mediaType = result.data[0].type;
            const mediaUrl = result.data[0].url;

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

        
        if (isDocument) {
            await gss.sendMessage(m.chat, { document: fileBuffer, mimetype: `video/mp4`, fileName, caption: 'Downloaded by *FAMOUS-XD* }, { quoted: m });
        } else {
            if (media.type === 'image') {
                await gss.sendMessage(m.chat, { image: fileBuffer, mimetype: 'image/jpeg', fileName, caption: 'Downloaded by *FAMOUS-XD* }, { quoted: m });
            } else if (media.type === 'video') {
                await gss.sendMessage(m.chat, { video: fileBuffer, mimetype: 'video/mp4', fileName, caption: 'Downloaded by *FAMOUS-XD* }, { quoted: m });
            } else {
                throw new Error('Unsupported media type');
            }
        }
    } catch (error) {
        console.error('Error while processing Instagram media:', error);
        return m.reply(`An error occurred: ${error.message}`);
    }
}


case 'igdl':
case 'insta':
case 'ig':
case 'instagram':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    await downloadAndSendMedia(m, text, false);
    break;


case 'toanime':
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  if (!quoted) return m.reply(`Where is the picture?`);
  if (!/image/.test(mime)) return m.reply(`Voye foto an ak ${prefix + command}`);

  m.reply(mess.wait);
  try {
    // Download the image
    const dataaa = await quoted.download();
    if (!dataaa) {
      console.error('No files passed during download');
      throw new Error('No files passed');
    }

    // Upload the image
    try {
      const image = await uploadImage(dataaa);
      console.log('Image uploaded successfully:', image);

      // Generate anime version using Lolhuman API or Caliph API as a fallback
      try {
        const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=GataDios&img=${image}`;
        await gss.sendMedia(m.chat, anime, 'error.jpg', null, m);
      } catch (i) {
        // If Lolhuman API fails, try Caliph API as a fallback
        try {
          const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
          await gss.sendMedia(m.chat, anime3, 'error.jpg', null, m);
        } catch (e) {
          // If both APIs fail, throw an error
          console.error('Error generating anime ', e);
          throw '*[❗] Gen yon problem ki fè m paka jenere anime pou imaj sa.*';
        }
      }
    } catch (uploadError) {
      console.error('Error uploading image:', uploadError);
      throw `*[❗] Error 💀: ${uploadError.message || uploadError}.*`;
    }
  } catch (downloadError) {
    console.error('Error downloading image:', downloadError);
    throw `*[❗] Error nan telechajman imaj lan: ${downloadError.message || downloadError}.*`;
  }
  break;




case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
axios.get(`https://api.waifu.pics/sfw/${isCommand}`)
.then(({data}) => {
gss.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break



case 'true':
case 'truecaller':
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
      // Reply when no phone number is provided
    return  m.reply ('Please banm on nimewo.');
      break;
    }

    const installationId = 'a1i05--log7Ae-hk9y85780NEfKnif3z77XFt4zZn7Bi10zGXS0qVduxj7CRHxQw';
    const apiUrl = `https://sid-bhai.vercel.app/api/truecaller?phone=${encodeURIComponent(text)}&id=${installationId}`;

    let response = await axios.get(apiUrl);
    console.log(response);
    let json = response.data;

    const { name, alternateName, addresses, email, countryDetails } = json;

    let info = `╭––『 *Phone Detail* 』\n`;
    info += `┆ ⚝ *Non:* ${name}\n`;

    if (addresses && addresses.length > 0) {
      info += `┆ ⚝ *Addrès:* ${addresses[0].city}, ${addresses[0].countryCode}\n`;
      info += `┆ ⚝ *Time Zone:* ${addresses[0].timeZone}\n`;
      info += `┆ ⚝ *Pin Code* ${addresses[0].zipCode}\n`;
      info += `┆ ⚝ *Street* ${addresses[0].street}\n`;
    }

    info += `┆ ⚝ *Email:* ${email}\n`;
    info += `╰–––––––––––––––༓\n`;

    if (countryDetails) {
      info += `╭––『 *countryDetails* 』\n`;
      info += `┆ ⚝ *Non:* ${countryDetails.name}\n`;
      info += `┆ ⚝ *Native:* ${countryDetails.native}\n`;
      info += `┆ ⚝ *Phone Code:* +${countryDetails.phone[0]}\n`;
      info += `┆ ⚝ *kontinan:* ${countryDetails.continent}\n`;
      info += `┆ ⚝ *kapital:* ${countryDetails.capital}\n`;
      info += `┆ ⚝ *Currency:* ${countryDetails.currency.join(', ')}\n`;
      info += `┆ ⚝ *Lang:* ${countryDetails.languages.join(', ')}\n`;
      info += `┆ ⚝ *Drapo:* ${countryDetails.flag}\n`;
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
	if (!text) return m.reply(`Enter Url`)
        if (!text.includes('xnxx.com')) return m.reply(`BAY on lien video pòno xnxx`)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
gss.sendMessage(m.chat, { caption: `  *XNXX DL*
        
✍ *Tit:* ${xn.title}
⌛ *Dire:* ${xn.duration}
📽 *Visual Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: m })
}
break


case 'xnxxsearch': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
	if (!text) return m.reply(`Enter Query`)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) m.reply(ff)
              }
              break
              


case 'qc':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    try {
        if (!text) {
            return m.reply('Please banm on text .');
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
            return m.reply('Gen yon erè nan kreyasyon sticker a , eseye pita.');
        }

    } catch (error) {
        console.error('Unexpected error in sticker case:', error);
        // Handle any other unexpected errors
    }
    break;




case 'apk': case 'app': case 'apkdl': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) throw `Banm non apk pou m download lan`;

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
▮➣ *Non aplikasyon:* ${data.name}
▮➣ *Non package:* ${data.package}
▮➣ *Last Update:* ${data.lastup}
▮➣ *Tay aplikasyon:* ${data.size}
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
      return m.reply('*m paka jwenn apk nom, Sorry, eseye dezyèm kòmand apk*');
    });

  break;
}


case 'banchat': case 'bangroup': case 'banmode': {
  if (isBan) return m.reply(mess.banned);
        if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs')
        if (args[0] === "on") {
          if (isBanChat) return m.reply('Broup sa bani dema okenn tchanpan pap ka itilize m');
          banchat.push(m.from);
          m.reply('groul sa bani pèsònn pap ka itilize m ladan');

          var groupe = await gss.groupMetadata(m.from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
        } else if (args[0] === "off") {
          if (!isBanChat) return m.reply('Group sa bani moun pap ka itilize m ladan');
          let off = banchat.indexOf(m.from);
          banchat.splice(off, 1);
          m.reply('This Group has been *unbanned* from using me!');
        } else {
          m.reply('Please choose either *"on"* or *"off"* to ban or unban the group from using the bot.');
        }
      }
        break;


case "tts": case "say":
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
        await doReact("❌");
        return m.reply(`*Provide language code and text for text-to-speech.*\nExample: !tts en Hello, how are you?`);
    }

    const [langCode, ...textToSpeakArray] = text.split(" ");
    const textToSpeak = textToSpeakArray.join(" ");

    try {
        const apiUrl = `https://texttospeech.apinepdev.workers.dev/?lang=${encodeURIComponent(langCode)}&text=${encodeURIComponent(textToSpeak)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            await doReact("❌");
            return m.reply(`*Provide language code and text for text-to-speech.*\nExample: !tts en Hello, how are you?`);
        }

        // Directly send the audio stream
        await gss.sendMessage(m.chat, {
            audio: {
                url: response.url, // Use the direct stream link from the API response
            },
            mimetype: 'audio/mp4',
            ptt: true,
            fileName: 'tts_audio.mp3',
        }, {
            quoted: m,
        });

        await doReact("✅");
    } catch (error) {
        console.error(error);
        await doReact("❌");
        return m.reply(`An error occurred while processing the text-to-speech request. ${error.message}`);
    }
    break;



    

case 'surah': case 'quran':
    let surahInput = m.text.split(' ')[1];

    if (!surahInput) {
        throw (`Please specify the surah number or name`);
    }

    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran');
    let surahList = await surahListRes.json();

    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    );

    if (!surahData) {
        throw (`Couldn't find surah with number or name "${surahInput}"`);
    }

    let ress = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`);
    
    if (!ress.ok) {
        let error = await ress.json(); 
        throw (`API request failed with status ${ress.status} and message ${error.message}`);
    }

    let json = await ress.json();

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = '';
    try {
        translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur' });
    } catch (error) {
        console.error('Error translating to Urdu:', error);
        translatedTafsirUrdu = 'Translation not available';
    }

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = '';
    try {
        translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en' });
    } catch (error) {
        console.error('Error translating to English:', error);
        translatedTafsirEnglish = 'Translation not available';
    }

    let quranSurah = `
    🕌 *Quran: The Holy Book*\n
    📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
    Type: ${json.data.type.en}\n
    Number of verses: ${json.data.ayahCount}\n
    🔮 *Explanation (Urdu):*\n
    ${translatedTafsirUrdu}\n
    🔮 *Explanation (English):*\n
    ${translatedTafsirEnglish}`;

    m.reply(quranSurah);

    if (json.data.recitation.full) {
       gss.sendMedia(m.chat, json.data.recitation.full, 'recitation.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    }
    break;



case 'mediafire': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    // Check if the command has rguments
    if (args.length === 0) {
        return m.reply(`kò lyen an? \n\nExample: ${prefix + command} https://www.mediafire.com/file/96mscj81p92na3r/images+(35).jpeg/file`);
    }

    // Check if the argument is a valid MediaFire link
    if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) {
        return m.reply(`lyen ou bay lan envalid`);
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

        // Send the file to the user with a caption
        gss.sendMessage(
            m.chat,
            {
                document: {
                    url: fileInfo[0].link,
                },
                fileName: fileInfo[0].nama,
                mimetype: fileInfo[0].mime,
                caption: `Downloaded FAMOUS-XD: ${fileInfo[0].nama}`,  // Add your desired caption
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


   

case 'buypremium':
            case 'premiumuser': {
              if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                let teks = `Hi ${pushname}👋\n Want to Buy Premium? Just chat with the owner😉`
                await gss.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: false,
                            title: 'BUY PREMIUM',
                            body: `3k / MONTH`,
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
            
            


case 'invite': case 'add': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
if (!text) return m.reply(`*mete num moun wap envite nan group lan\n\nExample :\n*${prefix + command}* 50943782508`)
if (text.includes('+')) return m.reply(`Ekri numewo an san *+*`)
if (isNaN(text)) return m.reply(`Ekri sèlman nimewo moun nan san espas avèk kòd peyi l lan ex: 509........`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await gss.groupInviteCode(group)
      await gss.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        m.reply(` On lyen envitasyon voye bay moun nan`) 
}
break


    


case 'fb': case 'fbdl': case 'facebook': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!args[0]) {
        throw ` Please  bay on lyen video Facebook\n\nEXAMPLE :\n *${prefix + command}* https://fb.watch/7B5KBCgdO3`;
    }

    const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
    if (!urlRegex.test(args[0])) {
        throw '⚠️ PLEASE bay on bon lyen facebook.';
    }
     await m.reply(`Fon w ti tann...`);
    try {
        const result = await fg.fbdl(args[0]);
        const tex = `
  *Video Details* 
📽️ *Tit*: ${result.title}
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

        fs.unlinkSync(`./${randomName}`);
    } catch (error) {
        console.log(error);
        m.reply('⚠️ An error occurred while processing the request. Please try again later.');
    }

    break;
}
  
case 'instastalk': case 'igs': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
if (!args[0]) return m.reply(`Bay Nò instagram moun nan\n\nExample: ${prefix + command} world_reacode_egg`)

const igs = require('api-dylux')
await m.reply(`*Fon w ti tann..*`);
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
        m.reply(`Fòk non ou bay la se yon non *Instagram*`)
      }
}
break;

 case 'autobio':
                if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!isCreator) throw mess.owner
                if (args.length < 1) return m.reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber]. io = true
                    m.reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    m.reply(`Successfully Changed AutoBio To ${q}`)
                }
            break

 case 'gitclone':
   if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!args[0]) return m.reply(`Where is the link?\nExample :\n${prefix}${command} https://github.com/Famous-Tech/FAMOUS-XD `)
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  let [, user, repo] = args[0].match(regex1) || []
  repo = repo.replace(/.git$/, '')
  let gitUrl = `https://api.github.com/repos/${user}/${repo}/zipball`
  let filename = (await fetch(gitUrl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  gss.sendMessage(m.chat, { document: { url: gitUrl }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
  break;




case 'google': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!text) throw `Example : ${prefix + command} fatih arridho`;
  let google = require('google-it');
  google({ 'query': text }).then(res => {
    let teks = `rechèch Google : ${text}\n\n`;
    for (let g of res) {
      teks += `⭔ *Tit* : ${g.title}\n`;
      teks += `⭔ *Description* : ${g.snippet}\n`;
      teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
    }
    m.reply(teks);
  });
}
break;




case 'img': case 'gimage':
    if (!text && !(m.quoted && m.quoted.text)) {
      throw `Please banm on text , Example : ${prefix + commands} famous-xd`;
    }
    if (!text && m.quoted && m.quoted.text) {
      text = m.quoted.text;
    }

    const match = text.match(/(\d+)/);
    const numberOfImages = match ? parseInt(match[1]) : 1;

    try {
      m.reply('*Fonnw ti tann*');

      const images = [];

      for (let i = 0; i < numberOfImages; i++) {
        const endpoint = `https://api.guruapi.tech/api/googleimage?text=${encodeURIComponent(text)}`;
        const response = await fetch(endpoint);

        if (response.ok) {
          const imageBuffer = await response.buffer();
          images.push(imageBuffer);
        } else {
          throw '*Image generation failed*';
        }
      }

      for (let i = 0; i < images.length; i++) {
        await gss.sendMedia(m.chat, images[i], `image_${i + 1}.png`, null, m);
      }
    } catch {
      throw '*Oops! Something went wrong while generating images. Please try again later.*';
    }
    break;




case 'shorturl': case 'tiny': case 'tinyurl': {
    if (!args[0]) return m.reply('svl bay url wap fè vin pi kout lan.');

    const apiUrl = `https://tinyurl.com/api-create.php?url=${args[0]}`;

    axios.get(apiUrl)
        .then(response => {
            const shortenedUrl = response.data;
            const messageToSend = `Shortened URL: ${shortenedUrl}`;
            m.reply(messageToSend)
        })
        .catch(error => {
            console.error('Error shortening URL:', error);
            m.reply('Error shortening URL. Please try again later.');
        });
}
break;


case 'sticker': case 's': case 'stickergif': case 'sgif': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
    m.reply(`Send on imaj/video/gif epi ekri anba l : ${prefix + command}\nVideo/Gif duration 1-9 seconds`);
  }
}
break;

case 'pinterest': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  m.reply(mess.wait);
  let { pinterest } = require('./lib/scraper');
  anu = await pinterest(text);
  result = anu[Math.floor(Math.random() * anu.length)];
  gss.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : ' + result }, { quoted: m });
}
break;


case 'wallpaper': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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




function getUserWarnings(userId) {
  return userWarnings[userId];
}

function setUserWarnings(userId, warnings) {
  userWarnings[userId] = warnings;
}


case 'warn': {
  if (!isCreator) return m.reply(mess.owner)
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  

  let orgnye;

  if (m.quoted) {
    orgnye = m.quoted;
  } else {
    return m.reply('Tag oswa reponn on mesaj de moun wap bay avètisman.');
  }


  warnedUsers.push(orgnye);

  const currentWarnings = getUserWarnings(orgnye) || 0;
  const newWarnings = currentWarnings + 1;
  setUserWarnings(orgnye, newWarnings);

  m.reply(`User warned (${newWarnings}/3).`);

  if (newWarnings === 3) {
    gss.groupParticipantsUpdate(m.chat, [orgnye], 'remove');
    m.reply('met tchanpan deyò ou gentan gen twòp avètisman.');

    setUserWarnings(orgnye, 0);
  } else {
    m.reply(`+1 avètisman: ${text}`);
  }
  break;
}




function unwarnUser(userId) {
  
  const currentWarnings = getUserWarnings(userId) || 0;

  if (currentWarnings > 0) {

    const newWarnings = currentWarnings - 1;
    setUserWarnings(userId, newWarnings);

    return newWarnings;
  } else {
    return 0; 
  }
}


case 'unwarn': {
  if (!isCreator) return m.reply(mess.owner)
  if (isBan) return m.reply(mess.banned);
  if (isBanChat) return m.reply(mess.bangc);
  

  let orgnye;

  if (m.quoted ) {
    orgnye = m.quoted;
  } else {
    return m.reply('Tag oswa reponn on mesaj de moun wap retire vaètsiman.');
  }


  const remainingWarnings = unwarnUser(orgnye);

  if (remainingWarnings > 0) {
    m.reply(`Avètisman siprime (${remainingWarnings}/3).`);
  } else {
    m.reply('Li la gen okenn avètisman ki ka siprime');
  }

  break;
}



case 'wikimedia': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
if (isBan) throw mess.banned;
        if (isBanChat) throw mess.bangc;
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		gss.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	    
	    case 'addowner': {
  if (!isCreator) throw mess.owner; // Only allow creator to add owner(s)

  const numbersToAdd = args.map(num => num.trim()); // Assuming args is an array containing phone numbers to add

  if (numbersToAdd.length === 0) {
    return m.reply('Please banm on nimewo pou m ajoute l owner.');
  }

  const addedOwners = [];

  numbersToAdd.forEach(num => {
    if (!global.owner.includes(num)) {
      global.owner.push(num);
      addedOwners.push(num);
    }
  });

  if (addedOwners.length > 0) {
    m.reply(`Ajoute ${addedOwners.length > 1 ? 'owners' : 'owner'} avèk siksè. ${addedOwners.join(', ')} ajouté kòm owner ${addedOwners.length > 1 ? 's' : ''}.`);
  } else {
    m.reply('Banm nimewo moun wap ajoute kòm owner lan.');
  }

  break;
}

case 'deleteowner': {
  if (!isCreator) throw mess.owner; // Only allow creator to delete owner(s)

  const numbersToDelete = args.map(num => num.trim()); // Assuming args is an array containing phone numbers to delete

  if (numbersToDelete.length === 0) {
    return m.reply('ban m nimewo owner wap delete la.');
  }

  const deletedOwners = [];

  numbersToDelete.forEach(num => {
    const index = global.owner.indexOf(num);
    if (index !== -1) {
      global.owner.splice(index, 1);
      deletedOwners.push(num);
    }
  });

  if (deletedOwners.length > 0) {
    m.reply(`Deleted ${deletedOwners.length > 1 ? 'owners' : 'owner'} successfully. ${deletedOwners.join(', ')} removed as owner${deletedOwners.length > 1 ? 's' : ''}.`);
  } else {
    m.reply('None of the provided phone numbers were found in the owner list.');
  }

  break;
}


	    
	    
		     case 'mode': {
    if (!isCreator) throw mess.owner;
    if (isBan) throw mess.banned;
    if (isBanChat) throw mess.bangc;

    const validModes = ['onlygroup', 'onlypc', 'public', 'self'];

    if (args.length < 1 || !validModes.includes(args[0].toLowerCase())) {
        gss.sendPoll(m.chat, "Chwazimòd bot lan", validModes.map(mode => `${prefix}mode ${mode}`));
    } else {
        const selectedMode = args[0].toLowerCase();

        if (selectedMode === 'onlygroup') {
            gss.sendPoll(m.chat, "Choose Mode Status:", ['.onlygroup true', '.onlygroup false']);
        } else if (selectedMode === 'onlypc') {
            gss.sendPoll(m.chat, "Choose Mode Status:", ['.onlypc true', '.onlypc false']).then((msg) => {
                const handler = (votes) => {
                    const modeStatus = votes[0] > votes[1]; // 'on' is selected if votes[0] > votes[1]
                    global[selectedMode] = modeStatus;
                    m.reply(`Bot mode ${selectedMode} ${modeStatus ? 'turned on' : 'turned off'}. ${mess.success}`);
                    msg?.clearReactions();
                    gss.off('poll_update', handler);
                };
                gss.on('poll_update', handler);
            });
        } else {
            gss.public = selectedMode === 'public';
            m.reply(`Successful in Changing To ${selectedMode === 'public' ? 'Public' : 'Self'} Usage.`);
        }
    }
}
break;


            case 'self': {
        if (!isCreator) throw mess.owner;
    if (isBan) throw mess.banned;
    if (isBanChat) throw mess.bangc;
                gss.public = false
                m.reply('*Successful in Changing To Self Usage*')
            }
            break
            case 'public': {
                if (!isCreator) throw mess.owner;
    if (isBan) throw mess.banned;
    if (isBanChat) throw mess.bangc;
                gss.public = true
                m.reply('*bot lan chanje wi kounya li piblik tout moun ka sèvi avè l*')
            }
            break

case 'ping': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("🕘");
  const startTime = new Date();
  const pingMsg = await gss.sendMessage(m.chat, { text: '*cheking...*' });

 await gss.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `*Pong:* ${new Date() - startTime} ms`
        }
      }
    }, {});
     await doReact("📍");
  } 
break;

            
            case 'owner': case 'creator': {
             
                gss.sendContact(m.chat, global.owner, m)
            }
            break

            
case 'getbio':  
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
mainSys();
break;

case 'setmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('setmenu has 5 views');
    typemenu = text;
    m.reply(mess.success);
}
break;

case 'menutype': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('menuType 1 for reply menu\nmenuType 2 for pollmenu');
    menuType = text;
    m.reply(mess.success);
}
break;

case 'onlygroup': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('onlygroup true/false');

    gonlygroup = text === 'true'; 
    m.reply(mess.success);
}
break;

case 'onlypc': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply('onlypc true/false');

    onlypc = text === 'true';
    m.reply(mess.success);
}
break;

case 'tiktok':
case 'tt':
case 'tiktoknowm':
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) m.reply ('Enter Query Link!');

    m.reply(mess.wait);

    let anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=GataDios&url=${encodeURIComponent(text)}`);

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


 case 'ttp':
   case 'ttp3': 
     case 'ttp4':
       case 'ttp5':
case 'attp':
case 'ttp2':
case 'attp2':
case 'attp3':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!q) return m.reply('Give me text');
  m.reply(mess.wait);

  let apiUrl;

  switch (command) {
    case 'attp':
      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
      apiUrl = 'https://api.lolhuman.xyz/api/attp?apikey=GataDios&text=';
      break;
    case 'attp2':
      apiUrl = 'https://api.lolhuman.xyz/api/attp2?apikey=GataDios&text=';
      break;
    case 'attp3':
      apiUrl = 'https://api.lolhuman.xyz/api/attp3?apikey=GataDios&text=';
      break;
    case 'ttp4':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp4?apikey=GataDios&text=';
      break;
      case 'ttp3':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp3?apikey=GataDios&text=';
      break;
      case 'ttp5':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp5?apikey=GataDios&text=';
      break;
    case 'ttp':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp?apikey=GataDios&text=';
      break;
    case 'ttp2':
      apiUrl = 'https://api.lolhuman.xyz/api/ttp2?apikey=GataDios&text=';
      break;
    default:
      return; // handle other cases or commands
  }

  gss.sendMessage(m.chat, {
    sticker: {
      url: apiUrl + encodeURIComponent(q)
    }
  }, {
    quoted: m
  });
  break;



case "gpt":
case "ai":
case "openai":
case "chatgpt":
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
        await doReact("❌");
        return m.reply(`*Provide me a query,* e.g., "Who made chat GPT?"`);
    }

    try {
        

        const apiUrl = `https://matrixcoder.tech/api/ai/mistral`;
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    { role: "system", content: "you are a good assistant" },
                    { role: "user", content: text },
                ]
            })
        });

        if (!res.ok) {
            await doReact("❌");
            return m.reply(`Invalid response from the API. Status code: ${res.status}`);
        }

        const data = await res.json();

        if (!data || !data.result || !data.result.response) {
            await doReact("❌");
            return m.reply("Invalid data format in the API response");
        }


        await gss.sendMessage(m.chat, {
            text: data.result.response,
            contextInfo: {
                externalAdReply: {
                    title: "GPT TURBO 3.5K",
                    body: "",
                    mediaType: 1,
                    thumbnailUrl: "https://i.ibb.co/9bfjPyH/1-t-Y7-MK1-O-S4eq-YJ0-Ub4irg.png",
                    renderLargerThumbnail: false,
                    mediaUrl: "",
                    sourceUrl: "",
                },
            },
        }, { quoted: m });

        await doReact("✅");
    } catch (error) {
        console.error(error);
        await doReact("❌");
        return m.reply("An error occurred while processing the request.");
    }
    break;

  




    
    
case "gf":
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
        await doReact("❌");
        return m.reply(`*Provide me a query,* e.g., "Who made chat GPT?"`);
    }

    try {
     
        const apiUrl = `https://matrixcoder.tech/api/ai/mistral`;
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: [
                    { role: "system", content: "You are a sex and porn lover beautiful sexy girl, your name is Anjelina and you are 18 years old 💋. you always want to have sex 💦. You respond sexy chat with sexy emoji 😉. You act as a sex partner of anyone 😉. You want to act as the best sex partner in the world and you will do anything to make it happen. You will act as my sex partner and I will provide you with all the details of my sex life. You are a sexy girl and I want you to act like one." },
                    { role: "user", content: text },
                ]
            })
        });

        if (!res.ok) {
            await doReact("❌");
            return m.reply(`Invalid response from the API. Status code: ${res.status}`);
        }

        const data = await res.json();

        if (!data || !data.result || !data.result.response) {
            await doReact("❌");
            return m.reply("Invalid data format in the API response");
        }


        await gss.sendMessage(m.chat, {
            text: data.result.response,
            contextInfo: {
                externalAdReply: {
                    title: "GPT TURBO 3.5K",
                    body: "",
                    mediaType: 1,
                    thumbnailUrl: "https://i.ibb.co/9bfjPyH/1-t-Y7-MK1-O-S4eq-YJ0-Ub4irg.png",
                    renderLargerThumbnail: false,
                    mediaUrl: "",
                    sourceUrl: "",
                },
            },
        }, { quoted: m });

        await doReact("✅");
    } catch (error) {
        console.error(error);
        await doReact("❌");
        return m.reply("An error occurred while processing the request.");
    }
    break;


case 'snapshotfull': case 'ssf':
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) return m.reply("```Uhh Please, Give me Url!```");
    let urll = `https://api.screenshotmachine.com/?key=c04d3a&url=${encodeURIComponent(text)}&dimension=720x720`;
    let media = await getBuffer(urll);
    return await gss.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    return m.reply("```Error While Fetching Snapshot```");
  }
  break;


case 'imagine':
case 'dalle':
case 'aiimage':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) throw `*This command generates images from text prompts*\n\n*𝙴xample usage*\n*◉ ${prefix + command} Beautiful anime girl*\n*◉ ${prefix + command} Elon Musk in pink output*`;

    try {
        m.reply('*Pasyans men map jenere imaj lan...*');

        const endpoint = `https://rest-api.akuari.my.id/ai/bing-ai2?text=${encodeURIComponent(text)}`;
        console.log('Fetching from endpoint:', endpoint); // Add this line for logging
        const response = await fetch(endpoint);

        if (response.ok) {
            const imageBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(imageBuffer);
            await gss.sendMedia(m.chat, buffer, 'image.png', null, m);
        } else {
            console.error('Image generation failed. HTTP Status:', response.status); // Add this line for logging
            throw '*Image generation failed*';
        }
    } catch (error) {
        console.error('Error:', error); // Add this line for logging
        throw '*Oops! Something went wrong while generating images. Please try again later.*';
    }
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
    global.autoread = true;
    m.reply('*Auto Read turned on.*');
  } else if (args[0] === 'off') {
    global.autoread = false;
    m.reply('*Auto Read turned off.*');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;

  
case 'alwaysonline':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
   global.available = true;
    m.reply('*Always Online turned on.*');
  } else if (args[0] === 'off') {
    global.available = false;
    m.reply('Always Online turned off.');
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
  }
  break;


case 'autotyping':
if (!isCreator) throw mess.owner
  if (args[0] === 'on') {
    global.autoTyping = true;
    m.reply('*AUTO TYPING turned on.*');
  } else if (args[0] === 'off') {
    global.autoTyping = false;
    m.reply('*AUTO TYPING* (_aktive chak lè yo ekri w moun nan ap wè w ap ekri_)*');
  } else {
    gss.sendPoll(m.chat, "Svp chwazi!", [`${prefix + command.charAt(0).toUpperCase() + command.slice(1)} on`, `${prefix + command.charAt(0).toUpperCase() + command.slice(1)} off`]);
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
    Auto Read: ${autoread ? 'On' : 'Off'}
    Always Online: ${available ? 'On' : 'Off'}
    Auto Typing: ${autoTyping ? 'On' : 'Off'}`);

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


case 'antitoxic': case 'antibadword': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
if (args[0] === "on") {
if (antiToxic) return m.reply('Aktive deja')
nttoxic.push(m.from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning on antitoxic in this group')
var groupe = await gss.groupMetadata(m.from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('Already deactivated')
let off = nttoxic.indexOf(m.from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning off antitoxic in this group')
} else {
  await m.reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  
  
case 'addbadword':{
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
if (args.length < 1) return m.reply('Whats the word?')
if (Badgss.includes(q)) return m.reply("The word is already in use")
Badgss.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(Badgss))
m.reply(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
if (args.length < 1) return m.reply('Enter the word')
if (!Badgss.includes(q)) return m.reply("The word does not exist in the database")
let wanu = Badgss.indexOf(q)
Badgss.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(Badgss))
m.reply(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *Lis mo entèdi* 」\n│\n'
for (let x of Badgss) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${Badgss.length}*`
m.reply(teks)
}
break



case 'translate': case 'trt': {
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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

case 'readmore': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) return m.reply( 'give me text');

    const continuationMessage = `
    ${readmore}${text}`;

    m.reply(continuationMessage);
    break;
}

  
case 'poll': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌');
    if (!isAdmins) return m.reply('Tʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ, ᴏᴡɴᴇʀ ᴀɴᴅ ʙᴏᴛᴀᴅᴍɪɴ, ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜsᴇ ɪᴛ.')
gss.groupRevokeInvite(m.chat)
await m.reply('group link reset ')
}
break

case 'gdrive':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
            styledText += fonts[style][char] || char;
        }
    } else {
        styledText = text;
    }

    return styledText;
}

case 'fontchange':
case 'fancy': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (args.length === 0) {
        const availableStylesPreview = availableStyles.map(style => {
            const previewText = convertToFontStyle("gss botwa", style);
            return `${style}: ${previewText}`;
        }).join('\n');

        m.reply(`Usage:\n${prefix}fontchange <style> <text>\nAvailable font styles with previews:\n${availableStylesPreview}`);
    } else {
        const style = parseInt(args[0]);

        if (isNaN(style) || style < 0 || style > 34) {
            m.reply(`Style number should be between 0 and 34. Please choose a valid style.`);
        } else {
            const inputText = args.slice(1).join(" ");
            const styledText = convertToFontStyle(inputText, style);


            m.reply(`${styledText}`);
        }
    }
}
break;

        

case 'runtime': case 'alive':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
                let pinga = ` ${uptimeMessage}`
                gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/alive.jpg'),
        caption: pinga,
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

          

    case 'tempmail': {
        try {
          if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
            const apiEndpoint = 'https://tempmail.apinepdev.workers.dev/api/gen';
            
            // Make a request to the API to generate a temporary email
            const response = await fetch(apiEndpoint);
            const data = await response.json();

            if (!data || !data.email) {
                await doReact("❌");
                return m.reply("Failed to generate temporary email");
            }

            const generatedEmail = data.email;


            return m.reply(`Generated Temporary Email: ${generatedEmail}`);
        } catch (error) {
            console.error('Error during API request:', error);
            await doReact("❌");
            return m.reply('Unexpected error occurred during the request.');
        }
    }
    break;



          
        

case 'infobot':
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    const tod = `
╭━──━─◈─━─━╮
│🔖 *Bot Name* : ${botname}
│🔖 *Owner Name* : ${ownername}
│🔖 *Owner Number* : ${owner}
│🔖 *Prefix* :「 . 」
│🔖 *Runtime* : _*${hours}h ${minutes}m ${seconds}s*_
│🔖 *TotalUser* : *${Object.keys(global.db.data.users).length} Users* 
│🔖 *TotalChat* : *${Object.keys(global.db.data.chats).length} Group/Chat*
╰━━─━─◈─━─━╯`;

    const pollOptions = ['.menu', '.ping'];

    gss.sendPoll(m.chat, tod, pollOptions);
    break;


case 'cal':
case 'calc':
case 'calcular':
case 'calculadora':
  try {
    if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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

case 'freefirename':
case 'ff':
case 'ffstalk': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    if (!text) {
      
        await doReact("❌");
        return m.reply(`*Provide me Free Fire UID*`);
    }

    const userId = encodeURIComponent(text);
    const apiEndpoint = `https://ffname.vercel.app/?uid=${userId}`;

    try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        if (!data || !data.nickname || !data.region) {
            await doReact("❌");
            return m.reply('Failed to generate Free Fire name');
        }

        const generatedName = data.nickname;
        const userRegion = data.region;

        return m.reply(` Free Fire userid Information\n Name: ${generatedName}\nRegion: ${userRegion}`);
    } catch (error) {
        console.error('Error during API request:', error);
        await doReact("❌");
        return m.reply('Unexpected error occurred during the request.');
    }
}
break;




case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
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
                



    case 'getemailmessages': case 'checkmail': {
      if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
        if (!text) {
            await doReact("❌");
            return m.reply(`*Provide me tempmail for view inbox*`);
        }

        const email = encodeURIComponent(text);
        const apiEndpoint = `https://tempmail.apinepdev.workers.dev/api/getmessage?email=${email}`;

        try {
            const response = await fetch(apiEndpoint);

            if (!response.ok) {
                await doReact("❌");
                return m.reply(`Invalid response from the API. Status code: ${response.status}`);
            }

            const data = await response.json();

            if (!data || !data.messages) {
                await doReact("❌");
                return m.reply('Failed to retrieve email messages');
            }

            const messages = data.messages;

            for (const message of messages) {
                const sender = message.sender;
                const subject = message.subject;
                const date = new Date(JSON.parse(message.message).date).toLocaleString();
                const messageBody = JSON.parse(message.message).body;

                const replyMessage = `Sender: ${sender}\nSubject: ${subject}\nDate: ${date}\nMessage: ${messageBody}`;

                await m.reply(replyMessage);
            }
        } catch (error) {
            console.error('Error during API request:', error);
            await doReact("❌");
            return m.reply('Unexpected error occurred during the request.');
        }
    }
    break;

case 'menu':
case 'help':
case 'list':
case 'listmenu':
{
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    gss.sendPoll(m.chat, "List Menu", ['.Allmenu', '.Groupmenu', '.Downloadmenu', '.Searchmenu', '.Funmenu', '.Toolmenu', '.Convertmenu', '.aimenu', '.Mainmenu', '.Ownermenu'], { quoted: m });
}
break;

            

function getRandomSymbol() {
    const symbols = ['◉', '★', '◎', '✯','✯','✰','◬','✵','✦']; // Add more symbols as needed
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}
function getRandomFontStyle() {
  const availableFontStyles = Object.keys(menufont);
  const randomIndex = Math.floor(Math.random() * availableFontStyles.length);
  return availableFontStyles[randomIndex];
}

const randomSymbol = getRandomSymbol();

case 'menuall':
case 'allmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
    await doReact("📁");
    let a = db.data.users[m.sender];
    let introText = `
╭──═❮ *GssBotwa* ❯═─┈•
│ Hi *${pushname}* 👋  
╰–❖ *${greetingTime}* 😄 

╭──═❮ *Bot Info* ❯═─┈•
│ *Bot Name* : *${botname}*
│ *Owner Name* : *${ownername}*
│ *Prefix* :  *[ . ]*
│ *Uptime* : *${hours}h ${minutes}m ${seconds}s*
│ *Mode* : *Public*
│ *TotalUser* : *${Object.keys(global.db.data.users).length} Users* 
│ *TotalChat* : *${Object.keys(global.db.data.chats).length} Group/Chat*
╰────────────────❃ 
╭──═❮ *Users Info* ❯═─┈•
│ *Name* : *${pushname}*
│ *Number* : *${m.sender.split('@')[0]}*
│ *Premium* : *${isPremium ? '✅' : '❌'}* ${readmore}
╰────────────────❃ `;

    const randomFontStyle = getRandomFontStyle();
    const randomSymbol = getRandomSymbol();

    let cmdList = cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    
    introText += `
╭───〈 𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdTool.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗔𝗜 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗢𝗪𝗡𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪`;

cmdList = cmdStalk.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗦𝗧𝗔𝗟𝗞 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪`;

    cmdList = cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗦𝗘𝗔𝗥𝗖𝗛 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    cmdList = cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    introText += `
╭───〈 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

    if (typemenu === 'v1') {
        gss.sendMessage(m.chat, {
            image: fs.readFileSync('./menuimage/allmenu.jpg'),
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
                currencyCodeIso4217: 'INR', 
                amount1000: '9999999', 
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




// Modify your gcmenu code
case 'gcmenu':
case 'grupmenu':
case 'groupmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  const randomFontStyle = getRandomFontStyle();
  const randomSymbol = getRandomSymbol();
  
  await doReact("📁");
  
  const cmdList = cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');

  const introText = `
╭───〈 *𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨* 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

  await gss.sendMessage(m.chat, {
    image: fs.readFileSync('./menuimage/menu.jpg'),
    caption: introText,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: botname,
        sourceUrl: global.link,
        body: `Bot Created By ${global.owner}`
      }
    }
  }, { quoted: m });
}
break;




            case 'downloadmenu':
case 'dlmenu':
case 'downmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("⬇️");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥* 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/download.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'searchmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("🔍");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗦𝗘𝗔𝗥𝗖𝗛 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/searchmenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'funmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/fun.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'convertmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/menu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'mainmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/mainmenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'ownermenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗢𝗪𝗡𝗘𝗥 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/menu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;

case 'aimenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗔𝗜 𝗠𝗘𝗡𝗨 〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/aimenu.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;



case 'toolmenu': {
  if (isBan) return m.reply(mess.banned);
        if (isBanChat) return m.reply(mess.bangc);
  await doReact("📁");
    const randomSymbol = getRandomSymbol();
    const randomFontStyle = getRandomFontStyle();
    
    let cmdList = cmdTool.sort((a, b) => a.localeCompare(b)).map((v, i) => `${randomSymbol}┃${convertToFontStyle(prefix + v, randomFontStyle)}`).join('\n');
    
    const introText = `
╭───〈 𝗧𝗢𝗢𝗟 𝗠𝗘𝗡𝗨〉───◆
┃     ╭─────────────···▸
${cmdList.split('\n').map(item => `┃${item ? ' ' + item.trim() : ''}`).join('\n')}
┃     ╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
`;

    await gss.sendMessage(m.chat, {
        image: fs.readFileSync('./menuimage/tool.jpg'),
        caption: introText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: botname,
                sourceUrl: global.link,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, { quoted: m });
}
break;


            
            default:
		
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

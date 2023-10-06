
require("dotenv").config();  
require('./config')
const fonts = require('./lib/font.js');
const availableStyles = Object.keys(fonts);
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
let yts = require("yt-search");
const util = require('util')
const ffmpeg = require('fluent-ffmpeg');
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const googleTTS = require("google-tts-api");
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
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

// read database
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))


const reportedMessages = {};

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



let TYPING_ENABLED = process.env.AUTO_TYPING === 'true';
let AUTO_READ_ENABLED = process.env.AUTO_READ === 'true';
let ALWAYS_ONLINE = process.env.ALWAYS_ONLINE === 'true';

// Now, you can use these variables in your conditions:

if (TYPING_ENABLED && command) {
  // Execute code when REACODING is enabled
  gss.sendPresenceUpdate('composing');
}

if (AUTO_READ_ENABLED && command) {
  // Execute code when AUTO_READ is enabled
  gss.readMessages([m.key]);
}

if (ALWAYS_ONLINE) {
  // Execute code when ALWAYS_ONLINE is enabled
  gss.sendPresenceUpdate('available', m.chat);
} else {
  // Execute code when ALWAYS_ONLINE is disabled
  gss.sendPresenceUpdate('unavailable', m.chat);
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
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = true
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
    	    anticall: true,
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
            timezone: "Asia/kolkata"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await gss.updateProfileStatus(`${gss.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
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
        const cmdAi = ["ai","gpt","dalle","bard"]
        const cmdTool = ["tempmail","checkmail","info","trt","tts"]
        const cmdGrup = ["linkgroup","setppgc","setname","setdesc","group","editinfo","add","kick","hidetag","tagall","totag","antilink","antiToxic","mute","promote","demote","closetime","opentime","revoke","poll"]
 const cmdDown = ["tiktoknowm","tiktokwm","tiktokmp3","instagram","twitter","twittermp3","facebook","pinterestdl","ytmp3","ytmp4","getmusic","getvideo","soundcloud","gitclone"]
 const cmdSearch = ["play","yts","google","gimage","pinterest","wallpaper","wikimedia","ytsearch","ringtone","stalk","playstore","weather","lyrics"]
 const cmdRand = ["quotesanime","puisi","couple","anime","waifu","husbu","neko","shinobu","waifus","nekos","trap","blowjob"]
 const cmdMaker = ["3dchristmas","3ddeepsea","americanflag","3dscifi","3drainbow","3dwaterpipe","halloweenskeleton","sketch","bluecircuit","space","metallic","fiction","greenhorror","transformer","berry","thunder","magma","3dcrackedstone","3dneonlight","impressiveglitch","naturalleaves","fireworksparkle","matrix","dropwater","harrypotter","foggywindow","neondevils","christmasholiday","3dgradient","blackpink","gluetext","shadow","romantic","smoke","burnpapper","naruto","lovemsg","grassmsg","lovetext","coffecup","butterfly","harrypotter","retrolol","ffcover","crossfire","galaxy","glass","neon","beach","blackpink","igcertificate","ytcertificate"]
        const cmdFun = ["delttt","tictactoe","family100","math","suitpvp"]
   const cmdConv = ["attp","ttp","toimage","removebg","sticker","stickerwm","emojimix","emojimix2","tovideo","togif","tourl","tovn","tomp3","toaudio","ebinary","dbinary","styletext","smeme","bass","blown","deep","earrape","fast","fat","nightcore","reverse","robot","slow",]
        const cmdMain = ["ping","owner","menu","delete","infochat","quoted","listpc","listgc","listonline"]
        const cmdOwner = ["react","chat","join","leave","block","unblock","bcgroup","bcall","setppbot","setexif","anticall","setstatus","setnamebot","addbadword","delbadword","listbadword","sleep","autotyping","alwaysonline","autoread"]
        const allCmd = [...cmdGrup,...cmdDown,...cmdAi,...cmdTool,...cmdBug,...cmdSearch,...cmdRand,...cmdMaker, ...cmdFun, ...cmdConv,...cmdMain,...cmdOwner]
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} already Afk${text ? ': ' + text : ''}`)
            }
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
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Finish your previous suit`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return m.reply(`_Who do you want to challenge?_\nTag the person..\n\nexample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenge @${m.mentionedJid[0].split`@`[0]} to play suits Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
            this.suit[id] = {
            chat: await gss.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            Time: setTimeout(() => {
            if (this.suit[id]) gss.sendText(m.chat, `_Suit time is up_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	    
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0].toLowerCase() === 'mute') {
                    gss.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'unmute') {
                    gss.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'archive') {
                    gss.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'unarchive') {
                    gss.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'read') {
                    gss.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'unread') {
                    gss.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'delete') {
                    gss.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('There Are Still Unfinished Sessions!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nbe found *${random.answer.length}* Answer  ${random.answer.find(v => v.includes(' ')) ? `(some answers contain spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await gss.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.answer, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                gss.sendMessage(m.chat, reactionMessage)
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

case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) throw mess.group;
  if (!isAdmins) throw mess.admin;
  if (!/image/.test(mime)) throw `Send/Reply with an Image and Caption ${prefix + command}`;
  if (/webp/.test(mime)) throw `Send/Reply with an Image and Caption ${prefix + command}`;
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  await gss.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media));
  m.reply(mess.success);
}
break;

case 'tagall': case 'all':{
  if (!m.isGroup) return m.reply('ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌')
if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs')
let teks = `乂  ᴀᴛᴛᴇɴᴛɪᴏɴ ᴇᴠᴇʀʏᴏɴᴇ 乂 

*Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
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

case 'group': case 'grup': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (args[0].toLowerCase() === 'close') {
    await gss.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Successfully Closed the Group`)).catch((err) => m.reply(jsonformat(err)));
  } else if (args[0].toLowerCase() === 'open') {
    await gss.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Successfully Opened the Group`)).catch((err) => m.reply(jsonformat(err)));
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${command.charAt(0).toUpperCase() + command.slice(1)} Open`, `${command.charAt(0).toUpperCase() + command.slice(1)} Close`]);
  }
}
break;

case 'editinfo': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (args[0].toLowerCase() === 'open') {
    await gss.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Successfully Opened Group Edit Info`)).catch((err) => m.reply(jsonformat(err)));
  } else if (args[0].toLowerCase() === 'close') {
    await gss.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Successfully Closed Group Edit Info`)).catch((err) => m.reply(jsonformat(err)));
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${command.charAt(0).toUpperCase() + command.slice(1)} Open`, `${command.charAt(0).toUpperCase() + command.slice(1)} Close`]);
  }
}
break;

            case 'antilink': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (args[0].toLowerCase() === "on") {
    if (db.data.chats[m.chat].antilink) return m.reply(`Already Active Before`);
    db.data.chats[m.chat].antilink = true;
    m.reply(`Antilink Active!`);
  } else if (args[0].toLowerCase() === "off") {
    if (!db.data.chats[m.chat].antilink) return m.reply(`Already Inactive Before`);
    db.data.chats[m.chat].antilink = false;
    m.reply(`Antilink Deactivated!`);
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${command.charAt(0).toUpperCase() + command.slice(1)} On`, `${command.charAt(0).toUpperCase() + command.slice(1)} Off`]);
  }
}
break;

case 'mute': {
  if (!m.isGroup) throw mess.group;
  if (!isBotAdmins) throw mess.botAdmin;
  if (!isAdmins) throw mess.admin;
  if (args[0].toLowerCase() === "on") {
    if (db.data.chats[m.chat].mute) return m.reply(`Already Active Before`);
    db.data.chats[m.chat].mute = true;
    m.reply(`${gss.user.name} has been muted in this group!`);
  } else if (args[0].toLowerCase() === "off") {
    if (!db.data.chats[m.chat].mute) return m.reply(`Already Inactive Before`);
    db.data.chats[m.chat].mute = false;
    m.reply(`${gss.user.name} has been unmuted in this group!`);
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${command.charAt(0).toUpperCase() + command.slice(1)} On`, `${command.charAt(0).toUpperCase() + command.slice(1)} Off`]);
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

            
            case 'setnamabot': case 'setnamebot': {
  if (!text) throw `Example: ${prefix + command} WhatsApp ✅`;
  let name = await gss.updateProfileName(text);
  m.reply(`Successfully renamed bot to ${name}`);
}
break;

case 'setstatus': case 'setbiobot': case 'setbotbio': {
  if (!text) throw `This is a WhatsApp Bot named gss botwa`;
  let name = await gss.updateProfileStatus(text);
  m.reply(`Successfully changed bot bio status to ${name}`);
}
break;

case 'anticall': {
  if (!isCreator) throw mess.owner;
  let ciko = db.data.settings[botNumber].anticall;
  if (args[0].toLowerCase() === "on") {
    if (ciko) return m.reply(`Already Active Before`);
    ciko = true;
    m.reply(`AntiCall Active!`);
  } else if (args[0].toLowerCase() === "off") {
    if (!ciko) return m.reply(`Already Inactive Before`);
    ciko = false;
    m.reply(`AntiCall Deactivated!`);
  } else {
    gss.sendPoll(m.chat, "Please Choose, I Hope You're Happy!", [`${command.charAt(0).toUpperCase() + command.slice(1)} On`, `${command.charAt(0).toUpperCase() + command.slice(1)} Off`]);
  }
}
break;

            case 'delete': case 'del': {
  if (!m.quoted) throw false;
  let { chat, fromMe, id, isBaileys } = m.quoted;
  if (!isBaileys) throw 'The message is not sent by the bot!';
  gss.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } });
}
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
    gss.sendText(yoi, txt);
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



case 'toimage': case 'toimg': {
  if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`;
  m.reply(mess.wait);
  let media = await gss.downloadAndSaveMediaMessage(qmsg);
  let ran = await getRandom('.png');
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media);
    if (err) throw err;
    let buffer = fs.readFileSync(ran);
    gss.sendMessage(m.chat, { image: buffer }, { quoted: m });
    fs.unlinkSync(ran);
  });
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

case 'tourl': {
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

case 'yts': case 'ytsearch': {
  if (!text) throw `Example : ${prefix + command} whatsapp status anime`;
  let yts = require("yt-search");
  let search = await yts(text);
  let teks = 'YouTube Search\n\n Result From ' + text + '\n\n';
  let no = 1;
  for (let i of search.all) {
    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`;
  }
  gss.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m });
}
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
case "facebook": case "fb": case "fbdl": {
                if (!/https?:\/\/(fb\.watch|(www\.|web\.|m\.)?facebook\.com)/i.test(m.text)) return m.reply(`Example : ${prefix + command} https://www.facebook.com/watch/?v=2018727118289093`)
                await m.reply("wait")
                let req = await (await api("xfarr")).get("/api/download/facebook", { url: Func.isUrl(m.text)[0] }, "apikey")
                if (req.status !== 200) return m.reply(req?.message || "error")
                await m.reply(req?.result?.url?.hd || req?.result?.url?.sd, { caption: req?.result?.title })
            }
            break
	    case 'play': case 'ytplay': {
  if (!text) throw `Example : ${prefix + command} whatsapp status anime`;
  let yts = require("yt-search");
  let search = await yts(text);
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)];
  let caption = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`;
  gss.sendPoll(m.chat, caption, [`Ytmp3 ${anu.url}`, `Ytmp4 ${anu.url}`]);
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
	    
		     case 'public': {
                if (!isCreator) throw mess.owner
                gss.public = true
                m.reply('mode changed in to public. now all user use me!')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                gss.public = false
                m.reply('mode changed in to private. now only owner can use me!')
            }
            break
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
  const pingMsg = await gss.sendMessage(m.chat, { text: 'cheking...' });

 await gss.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `Rᴇsᴘᴏɴᴅ Sᴘᴇᴇᴅ: ${new Date() - startTime} ms`
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
if (!isAdmins) return m.reply('Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs')
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
    gss.sendMessage(global.owner + "@s.whatsapp.net", {
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
  
  if (args[0] === 'on') {
    AUTO_READ = true;
    process.env.AUTO_READ = 'true';
    m.reply('*Auto Read turned on.*');
  } else if (args[0] === 'off') {
    AUTO_READ = false;
    process.env.AUTO_READ = 'false';
    m.reply('*Auto Read turned off.*');
  } else {
    m.reply('Invalid option. Use "on" or "off".');
  }
  break;
  
case 'alwaysonline':
  
  if (args[0] === 'on') {
    ALWAYS_ONLINE = true;
    process.env.ALWAYS_ONLINE = 'true';
    m.reply('*Always Online turned on.*');
  } else if (args[0] === 'off') {
    ALWAYS_ONLINE = false;
    process.env.ALWAYS_ONLINE = 'false';
    m.reply('Always Online turned off.');
  } else {
    m.reply('Invalid option. Use "on" or "off".');
  }
  break;

case 'autotyping':
  
  if (args[0] === 'on') {
    TYPING_ENABLED = true;
    process.env.AUTO_TYPING = 'true';
    m.reply('*AUTO TYPING turned on.*');
  } else if (args[0] === 'off') {
    TYPING_ENABLED = false;
    process.env.AUTO_TYPING = 'false';
    m.reply('*AUTO TYPING turned off.*');
  } else {
    m.reply('Invalid option. Use "on" or "off".');
  }
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
    return gss.sendMessage(m.chat, {
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

    // Assuming fonts is an array of mappings for each style
    if (fonts[style]) {
        // Iterate through each character in the input text
        for (const char of text) {
            // Check if the character is in the fonts object and the selected style
            if (fonts[style][char]) {
                styledText += fonts[style][char];
            } else {
                // If the character is not in the mappings, use the original character
                styledText += char;
            }
        }
    } else {
        // Handle the case where fonts for the selected style are not available
        styledText = text;
    }

    return styledText;
}

// Assuming your original code is within a switch statements
    case 'fontchange': 
        // Check if the user provided arguments for text and style
        if (args.length === 0) {
            const availableStylesPreview = availableStyles.map(style => {
                const previewText = convertToFontStyle("gss botwa", parseInt(style));
                return `${style}: ${previewText}`;
            }).join('\n');

            m.reply(`Usage:\n${prefix}fontchange <style> <text>\nAvailable font styles with previews:\n${availableStylesPreview}`);
        } else {
            const style = parseInt(args[0]); // The selected font style number (from 0 to 34)
            const inputText = args.slice(1).join(" "); // The text to be styled

            // Check if the selected style is within the valid range (0 to 34)
            if (style < 0 || style > 34) {
                m.reply(`Style number should be between 0 and 34. Please choose a valid style.`);
            } else {
                // Convert the input text to the selected font style
                const styledText = convertToFontStyle(inputText, style);

                m.reply(`${styledText}`);
            }
        }
        break;

case 'runtime':
case 'alive': {
  const reactionMessage = {
            react: {
                text: "🕐",
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, reactionMessage);
        const successReactionMessage = {
            react: {
                text: "👀", 
                key: m.key
            }
        }
        await gss.sendMessage(m.chat, successReactionMessage);
  await m.reply(uptimeMessage);
}
break;

case "sc":
        case "script":
        case "scbot":
        case "repo":
           //m.reply("https://github.com/sid238/Gss_Botwa");
          let api = "https://api.github.com/repos/gssbotwa/gss_botwa";
          axios.get(api).then(function (response) {
            github = response.data;
            let txt = `  *B O T  -  S C R I P T*\n\n`;
            txt += `◦  *Name* : *${github.name}*\n`;
            txt += `◦  *Visitor* : ${github.watchers_count}\n`;
            txt += `◦  *Size* : ${(github.size / 1024).toFixed(2)} MB\n`;
            txt += `◦  *Updated* : ${moment(github.updated_at).format(
              "DD/MM/YY"
            )}\n`;
            txt += `◦  *Url* : ${github.html_url}\n\n`;
            txt += `${github.forks_count} Forks · ${github.stargazers_count} Stars · ${github.open_issues_count} Issues\n\n`;
            txt += "*Gss_Botwa*";
            gss.relayMessage(
              m.chat,
              {
                requestPaymentMessage: {
                  currencyCodeIso4217: "INR",
                  amount1000: "99999",
                  requestFrom: "0@s.whatsapp.net",
                  noteMessage: {
                    extendedTextMessage: {
                      text: txt,
                      contextInfo: {
                        mentionedJid: [m.sender],
                        externalAdReply: {
                          showAdAttribution: true,
                        },
                      },
                    },
                  },
                },
              },
              {}
            );
          });
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

            
            case 'menu': case 'help': case 'list': case 'listmenu': {
                gss.sendPoll(m.chat, "List Menu",['Allmenu','Groupmenu','Downloadmenu','Searchmenu','Randommenu','Makermenu','Funmenu','Toolmenu','Convertmenu','aimenu','Mainmenu','Ownermenu'])
            }
            break
          // Assuming you have a getRandomSymbol function to generate a random symbol
function getRandomSymbol() {
    const symbols = ['◉', '★', '◎', '✯','✯','✰','◬','✵','✦']; // Add more symbols as needed
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

// ...

case 'menuall':
case 'allmenu': {
    const categories = {
        'ɢʀᴏᴜᴘᴍᴇɴᴜ': cmdGrup,
        'ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ': cmdDown,
        'sᴇᴀʀᴄʜᴍᴇɴᴜ': cmdSearch,
        'ʀᴀɴᴅᴏᴍᴍᴇɴᴜ': cmdRand,
        'ᴍᴀᴋᴇʀᴍᴇɴᴜ': cmdMaker,
        'ғᴜɴᴍᴇɴᴜ': cmdFun,
        'ᴀɪᴍᴇɴᴜ' : cmdAi,
        'ᴛᴏᴏʟᴍᴇɴᴜ' : cmdTool,
       'ʙᴜɢᴍᴇɴᴜ' : cmdBug,
       // 'ᴘʀɪᴍʙᴏɴᴍᴇɴᴜ': cmdPrimbon,
        'ᴄᴏɴᴠᴇʀᴍᴇɴᴜ': cmdConv,
        'ᴍᴀɪɴᴍᴇɴᴜ': cmdMain,
        'ᴏᴡɴᴇʀᴍᴇɴᴜ': cmdOwner,
    };

    let introText = `Hello ${pushname}!👋\nI'm *𝐆𝐒𝐒_𝚩𝚯𝚻𝐖𝚫*, your WhatsAppchatbot programmed to be your virtual assistant on WhatsApp.\n\n • sᴛᴀᴛᴜs:Public\n • ʟᴀɴɢᴜᴀɢᴇ: Node.js\n • ʙᴀɪʟᴇʏ: @adivvashing\n • ʙᴀɪʟᴇʏ sᴜᴘᴘᴏʀᴛ:@whiskeysockets\n • ʙᴏᴛ ɴᴀᴍᴇ: ${botname}\n  • ᴅᴇᴠʟᴏᴘᴇʀ:${devlopernumber}\n\n\n`;

    let menuText = ''; // Initialize menuText here

    for (const [category, commands] of Object.entries(categories)) {
        const randomSymbol = getRandomSymbol();
        menuText += `✪━━ 乂 *${category}*乂 ━━✪\n${commands.map(cmd => `│ ${randomSymbol} ${prefix}${cmd}`).join('\n')}\n`;
    }

    menuText += '─────✪';

    // Assuming there's a sendImage function that takes the chat, image path, and caption
    const imagePath = './gss.jpg'; // Replace with the actual image path
    gss.sendImage(m.chat, imagePath, introText + menuText);
}
break;



            case 'gcmenu':
case 'grupmenu':
case 'groupmenu': {
    const randomSymbol = getRandomSymbol();
    let anu = `✪━ 乂 *group Menu* 乂 ━✪
│
${cmdGrup.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}`+ v).join('\n')}
│
╰──────✪`;
    gss.sendPoll(m.chat, anu, ['Owner', 'Ping']);
}
break;
            case 'downloadmenu': case 'dlmenu': case 'downmenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━ 乂 *Downloader Menu* 乂 ━✪
│
${cmdDown.sort((a, b) => a.localeCompare(b)).map((v, i) => `│  ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'searchmenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━乂*Search Menu*乂 ━✪
│
${cmdSearch.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break
            

            case 'randommenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━ 乂 *Random Menu * 乂 ━✪
│
${cmdRand.sort((a, b) => a.localeCompare(b)).map((v, i) => `│  ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'makermenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━ 乂 *Maker Menu* 乂 ━✪
│
${cmdMaker.sort((a, b) => a.localeCompare(b)).map((v, i) => `│  ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└──────✪`
                gss.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break
            case 'funmenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━ 乂 *Fun Menu* 乂 ━✪
│
${cmdFun.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'convertmenu': {
              const randomSymbol = getRandomSymbol();
               let anu = `✪━ 乂 *Convert Menu* 乂 ━✪
│
${cmdConv.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'mainmenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━ 乂 *Main Menu* 乂 ━✪
│
${cmdMain.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break 
            case 'ownermenu': {
              const randomSymbol = getRandomSymbol();
                let anu = `✪━ 乂 *Owner Menu* 乂 ━✪
│
${cmdOwner.sort((a, b) => a.localeCompare(b)).map((v, i) => `│  ${randomSymbol} ${prefix}`+ v).join('\n')}
│
└───────✪`
                gss.sendPoll(m.chat, anu, ['Owner','Ping'])
            }
            break
case 'aimenu': {
    const randomSymbol = getRandomSymbol();
    let anu = `✪━乂 *Ai Menu* 乂 ━✪
│
${cmdAi.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}` + v).join('\n')}
│
└───────✪`;
    gss.sendPoll(m.chat, anu, ['Owner', 'Ping']);
}
break;

case 'bugmenu': {
    const randomSymbol = getRandomSymbol();
    let anu = `✪━ 乂 *Bug Menu* 乂 ━✪
│
${cmdBug.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}` + v).join('\n')}
│
└───────✪`;
    gss.sendPoll(m.chat, anu, ['Owner', 'Ping']);
}
break;
case 'toolmenu': {
    const randomSymbol = getRandomSymbol();
    let anu = `✪━ 乂 *Tool Menu* 乂 ━✪
│
${cmdTool.sort((a, b) => a.localeCompare(b)).map((v, i) => `│ ${randomSymbol} ${prefix}` + v).join('\n')}
│
└───────✪`;
    gss.sendPoll(m.chat, anu, ['Owner', 'Ping']);
}
break;

            
            default:
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

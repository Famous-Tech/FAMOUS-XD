const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://api.zahwazein.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.zahwazein.xyz': '6fb0eff124',
}

// Set your URL and API key here
   APIs: {
      xfarr: {
         baseURL: 'https://api.xfarr.com'
         Key: "Uc3LRsLE2d"
      }
   }

// Other
apikey: "bf2d2cf29b3edc604b447983",
global.ownername = 'sid bhai'
global.owner = ['917050906659']
global.premium = ['917050906659']
global.packname = 'gss botwa'
global.author = 'gss botwa'
global.sessionName = 'session'
global.prefa = [',','.',']
global.sp = '✪'
global.mess = {
    success: '✓ Success',
    admin: 'Tʜɪs ꜰᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs',
    botAdmin: 'ɪ ᴀᴍ ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ!',
    owner: 'Yᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴍʏ ᴏᴡɴᴇʀ',
    group: 'ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ɪɴ ɢʀᴏᴜᴘ ❌',
    private: 'ғᴇᴀᴛᴜʀᴇ ɪs ᴜsᴇᴅ ᴏɴʟʏ ғᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛs!',
    bot: 'ʙᴏᴛ ɴᴜᴍʙᴇʀ ᴜsᴇʀ sᴘᴇᴄɪᴀʟ ғᴇᴀᴛᴜʀᴇs',
    wait: 'Loading...',
    endLimit: 'ʏᴏᴜʀ ᴅᴀɪʟʏ ʟɪᴍɪᴛ ʜᴀs ᴇxᴘɪʀᴇᴅ, ᴛʜᴇ ʟɪᴍɪᴛ ᴡɪʟʟ ʙᴇ ʀᴇsᴇᴛ ᴇᴠᴇʀʏ 12 ʜᴏᴜʀs',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

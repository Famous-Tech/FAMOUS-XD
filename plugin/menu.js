// menu.js in the plugin folder
async function handleMenu(m, gss) {
    const isBan = false; // Example ban condition, replace with your logic
    const isBanChat = false; // Example ban chat condition, replace with your logic
    const mess = {
        banned: 'You are banned.',
        bangc: 'This chat is banned.'
    };

    const command = m.message.body.toLowerCase(); 

    if (command === 'menu') {
        if (isBan) return gss.sendMessage(m.chat, mess.banned, { quoted: m });
        if (isBanChat) return gss.sendMessage(m.chat, mess.bangc, { quoted: m });

        // Send the menu options as a poll
        gss.sendPoll(m.chat, "List Menu", ['.Allmenu', '.Groupmenu', '.Downloadmenu', '.Searchmenu', '.Funmenu', '.Toolmenu', '.Convertmenu', '.aimenu', '.Mainmenu', '.Ownermenu'], { quoted: m });
    } else {
        // Handle other commands if needed
        console.log(`Unsupported command: ${command}`);
    }
}

module.exports = handleMenu;

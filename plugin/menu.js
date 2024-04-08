// menu.js in the plugin folder
async function handleMenu(m, gss) {

    const command = m.message.body.toLowerCase(); 

    if (command === 'menu') {
        // Send the menu options as a poll
        gss.sendPoll(m.chat, "List Menu", ['.Allmenu', '.Groupmenu', '.Downloadmenu', '.Searchmenu', '.Funmenu', '.Toolmenu', '.Convertmenu', '.aimenu', '.Mainmenu', '.Ownermenu'], { quoted: m });
    } else {
        // Handle other commands if needed
        console.log(`Unsupported command: ${command}`);
    }
}

module.exports = handleMenu;

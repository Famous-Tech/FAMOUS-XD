async function handleMenu(m, gss) {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '';
        var budy = (typeof m.text == 'string' ? m.text : '');
        const prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi)[0] : '/';
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ')[0].toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1);

        if (command === 'menu') {
            // Send the menu options as a poll
            gss.sendPoll(m.chat, "List Menu", ['.Allmenu', '.Groupmenu', '.Downloadmenu', '.Searchmenu', '.Funmenu', '.Toolmenu', '.Convertmenu', '.aimenu', '.Mainmenu', '.Ownermenu'], { quoted: m });
        } else {
            // Handle other commands if needed
            console.log(`Unsupported command: ${command}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = handleMenu;

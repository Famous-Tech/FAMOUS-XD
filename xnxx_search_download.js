const { cmd } = require('/gss');
const axios = require('axios');

const apiUrl = 'https://raganork-network.vercel.app/api/xvideos/search';
const downloadApiUrl = 'https://raganork-network.vercel.app/api/xvideos/download';

// Dictionary to store conversation state
const conversationState = {};

module.exports = {
    register: () => {
        cmd({
            pattern: "xnxx",
            category: "search",
            desc: "Search for porn in the database",
            use: '<movie name>',
            filename: __filename,
            react: "🍌",
        },
        async (gss, m, text) => {
            try {
                const searchApiUrl = apiUrl + '?query=' + encodeURIComponent(text);
                const searchResponse = await axios.get(searchApiUrl);

                const movies = searchResponse.data.result;

                if (movies.length > 0) {
                    const movieResultsText = movies.map((movie, index) => `${index + 1}. Title: ${movie.title}\n⏰ Duration: ${movie.duration}\n`).join('\n');

                    // Send the menu message and store the search result in the conversation state
                    const menuMessage = await m.reply("Here are the search results for '" + text + "' 👇\n\n" + movieResultsText);
                    conversationState[m.sender] = { menuMessageKey: menuMessage.key, movies };

                } else {
                    await m.reply("No results found for '" + text + "'. Please try a different search term.");
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                await m.reply("Error!! Unable to fetch movie information. Please try again later.");
            }
        });

        cmd({ on: "text" }, async (gss, m) => {
            if (m.quoted && m.quoted.text && m.quoted.text.includes("Here are the search results for")) {
                const number = parseInt(m.text);

                if (!isNaN(number) && number >= 1) {
                    try {
                        const { movies, menuMessageKey } = conversationState[m.sender];

                        if (movies && number <= movies.length) {
                            const selectedMovie = movies[number - 1];
                            const downloadApiUrlWithUrlParam = downloadApiUrl + '?url=' + encodeURIComponent(selectedMovie.url);

                            const downloadResponse = await axios.get(downloadApiUrlWithUrlParam);
                            const videoUrl = downloadResponse.data.url;

                            if (videoUrl) {
                                // Customize the caption as needed
                                const caption = "powered by nbmods";

                                // Send the video as a reply
                                let buttonMessage = {
                                    video: { url: videoUrl },
                                    mimetype: 'video/mp4',
                                    fileName: 'downloadedVideo.mp4',
                                    caption: caption,
                                    headerType: 4,
                                    contextInfo: {
                                        externalAdReply: {
                                            title: caption,
                                            body: m.pushName,
                                            thumbnail: Buffer.from(videoUrl), // Add your thumbnail buffer here if available
                                            renderLargerThumbnail: false,
                                            mediaType: 2,
                                            mediaUrl: videoUrl,
                                            sourceUrl: videoUrl
                                        }
                                    }
                                };

                                // Send the message as a reply to the original message
                                await gss.sendMessage(m.chat, buttonMessage, { quoted: m });

                                // Delete the menu message
                                await gss.sendMessage(m.chat, { delete: menuMessageKey });
                            } else {
                                await m.reply("Error!! Unable to fetch video information. Please try again later.");
                            }

                            // Clear the conversation state after sending the video
                            delete conversationState[m.sender];
                        } else {
                            await m.reply("Invalid menu number. Please select a number from the menu.");
                        }
                    } catch (error) {
                        console.error("Error fetching video:", error);
                        await m.reply("Error!! Unable to fetch video information. Please try again later.");
                    }
                }
            }
        });
    }
};

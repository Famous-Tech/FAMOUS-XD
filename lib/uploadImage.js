const fetch = require('node-fetch');
const { FormData, Blob } = require('formdata-node');
const fileType = require('file-type');

/**
 * Upload image to telegra.ph
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`
 * @param {Buffer} buffer Image Buffer
 * @return {Promise<string>}
 */
module.exports = async (buffer) => {
  try {
    const { ext, mime } = await fileType.fromBuffer(buffer);
    const form = new FormData();
    const blob = new Blob([buffer.buffer], { type: mime });
    form.append('file', blob, 'tmp.' + ext);
    const res = await fetch('https://telegra.ph/upload', {
      method: 'POST',
      body: form,
    });
    const img = await res.json();
    if (img.error) throw img.error;
    return 'https://telegra.ph' + img[0].src;
  } catch (error) {
    // Handle any errors during the image upload
    throw `*[❗] Error uploading image: ${error.message || error}.*`;
  }
};

const Jimp = require('jimp');
const PixelGetter = require("pixel-getter");

const resizeAndGetBuffer = (image) => {
  return new Promise((resolve, reject) => {
    image.resize(1, 1)
      .getBuffer(Jimp.MIME_PNG, (err, onePixelImage) => {
        if (err) return reject(err);

        resolve(onePixelImage);
      });
  })
}

const getPixelColor = (buffer) => {
  return new Promise((resolve, reject) => {
    PixelGetter.get(buffer, (err, pixels) => {
      if (err) return reject(err);

      resolve(pixels);
    })
  });
}

const resizeToPixelAndGetPixelColor = (image) => {
  return resizeAndGetBuffer(image).then(getPixelColor).catch();
}

const getColor = (imageOrBuffer) => {
  return Jimp.read(imageOrBuffer).then(resizeToPixelAndGetPixelColor)
}

module.exports = {
  getColor,
};

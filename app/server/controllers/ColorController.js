const { getColor } = require('../../helpers/color_extractor');
const appendRgbToColor = require('../../helpers/rgbToHex');
const { noImageUrlResponse } = require('../../config/constants/ERRORS').ERRORS;

const ColorController = (req, res, next) => {
  const { imageUrl } = req.query;

  if( !imageUrl ) {
    return res.status(400).json({error: noImageUrlResponse})
  }

  getColor(imageUrl).then((colorsArray) => {
    const colors = appendRgbToColor(colorsArray)
    res.status(200).json({colors});
  }).catch((error) => {
    res.status(400).json({ error })
  });

}

module.exports = ColorController

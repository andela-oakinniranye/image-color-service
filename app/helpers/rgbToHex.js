// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const appendRgbToColor = (colorsArray) => {
  const colors = {};
  const rgba = colorsArray[0][0];
  const { r, g, b } = rgba;

  colors.rgba = rgba
  colors.hex = rgbToHex( r, g, b );
  return colors;
}

module.exports = appendRgbToColor;

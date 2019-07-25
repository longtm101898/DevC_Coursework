export const shortenText = (text, maxLeng = 124) => {
  if (text && text.length > maxLeng) {
    return `${text.substring(0, maxLeng)} ...`;
  }
  return text;
};

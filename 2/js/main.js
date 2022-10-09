const getRandomIntInclusive = function (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));

  return Math.floor(Math.random() * (max - min + 1)) + min;
};


getRandomIntInclusive(1.78, 6.23);

const checkStringLength = (string, length) => string.length <= length;


checkStringLength('', 142);

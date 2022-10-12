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

const PHOTO_OBJECT_COUNT = 25;

const DESCRIPTION_PHOTO = [
  'Фото заката',
  'Фото рассвета',
  'фото с одним котиком',
  'Фото с кактусом',
  'фото устриц',
  'фото пустыни',
  'фото костра',
  'Фото красивого дерева',
  'фото старика',
  'фото чайки',
  'Фото моря',
  'Фото красивой раковины',
  'Фото краба',
  'Фото сеновала',
  'Фото дороги',
  'Фото поля',
  'Фото лошади',
  'Фото зайчика',
  'Фото коровы',
  'Фото чашки',
  'Фото людей, которые работают',
  'Фото людей, которые отдыхают',
  'Фото аварии',
  'Фото океана',
  'Фото верблюда',
];

const indexId = [];
const getIndexId = () => {
  const index = getRandomIntInclusive(1, 25);
  return (indexId.includes(index)) ? getIndexId() : indexId.push(index);
};

const indexUrl = [];
const getIndexUrl = () => {
  const index = getRandomIntInclusive(1, 25);
  return (indexUrl.includes(index)) ? getIndexUrl() : indexUrl.push(index);
};


const createPhotoObject = () => ({

  id: getIndexId(),
  url: `photos/${getIndexUrl()}.jpg`,
  description: DESCRIPTION_PHOTO[getRandomIntInclusive(0, DESCRIPTION_PHOTO.length - 1)],
  likes: getRandomIntInclusive(15, 200),
  comments: getRandomIntInclusive(0, 200),

});

const photoObject = () => Array.from({
  length: PHOTO_OBJECT_COUNT
}, createPhotoObject);

photoObject();

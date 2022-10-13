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

const getRandomIntInclusive = function (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createPhotoObject = (index) => ({

  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTION_PHOTO[getRandomIntInclusive(0, DESCRIPTION_PHOTO.length - 1)],
  likes: getRandomIntInclusive(15, 200),
  comments: getRandomIntInclusive(0, 200),
});

const getPhotoObject = () => Array.from({
  length: PHOTO_OBJECT_COUNT
}, (arrayElement, index) => createPhotoObject(index + 1));

getPhotoObject();

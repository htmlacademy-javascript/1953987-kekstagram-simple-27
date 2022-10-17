import {
  getRandomIntInclusive
} from './util.js';

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

const createPhotocard = (index) => ({

  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTION_PHOTO[getRandomIntInclusive(0, DESCRIPTION_PHOTO.length - 1)],
  likes: getRandomIntInclusive(15, 200),
  comments: getRandomIntInclusive(0, 200),
});

const createPhotos = () => Array.from({
  length: PHOTO_OBJECT_COUNT
}, (arrayElement, index) => createPhotocard(index + 1));

export {
  createPhotos
};

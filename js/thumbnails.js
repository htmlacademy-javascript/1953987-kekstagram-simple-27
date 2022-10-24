import {
  createPhotos
} from './data.js';
const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content;

const thumbnailsCollection = createPhotos();

const thumbnailsFragment = document.createDocumentFragment();

thumbnailsCollection.forEach(({
  url,
  likes,
  comments,
}) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments;
  thumbnailsFragment.append(thumbnailElement);
});

thumbnailsContainer.append(thumbnailsFragment);

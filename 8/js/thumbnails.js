const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content;

const renderThumbnail = (({
  url,
  likes,
  comments,
}) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments;
  return thumbnailElement;
});

const renderThumbnails = (photos) => thumbnailsContainer.append(...photos.map(renderThumbnail));


export {
  renderThumbnails
};

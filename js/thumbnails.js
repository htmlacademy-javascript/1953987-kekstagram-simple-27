const thumbnailsContainerElement = document.querySelector('.pictures');
const thumbnailTemplateElement = document.querySelector('#picture').content;

const renderThumbnail = (({
  url,
  likes,
  comments,
}) => {
  const thumbnailElement = thumbnailTemplateElement.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.querySelector('.picture__comments').textContent = comments;
  return thumbnailElement;
});

const renderThumbnails = (photos) => thumbnailsContainerElement.append(...photos.map(renderThumbnail));


export {
  renderThumbnails
};

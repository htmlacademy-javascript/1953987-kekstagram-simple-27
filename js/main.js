import './thumbnails.js';
// import {
//   createPhotos
// } from './data.js';
import {
  renderThumbnails
} from './thumbnails.js';
import {
  addFormListener,
  onCloseModalElement,
  setUserFormSubmit
} from './form.js';

import {
  getData
} from './api.js';

import {
  showAlert
} from './form-message.js';

setUserFormSubmit(onCloseModalElement);
addFormListener();


getData((photos) => {
  renderThumbnails(photos);
}, () => showAlert('Не удалось получить данные с сервера. Попробуйте перезагрузить страницу.'));

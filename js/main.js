import './thumbnails.js';
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


getData((photos) => renderThumbnails(photos), showAlert);

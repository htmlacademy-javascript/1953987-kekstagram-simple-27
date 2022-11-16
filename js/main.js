import './thumbnails.js';
import {
  renderThumbnails
} from './thumbnails.js';
import {
  addFormListener,
  onCloseModalElement,
  sendFormData
} from './form.js';

import {
  getData
} from './api.js';

import {
  showAlert
} from './form-message.js';
import './avatar.js';

sendFormData(onCloseModalElement);
addFormListener();


getData((photos) => renderThumbnails(photos), showAlert);

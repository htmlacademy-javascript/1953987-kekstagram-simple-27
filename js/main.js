import './thumbnails.js';
import {
  renderThumbnails
} from './thumbnails.js';
import {
  addFormListener
} from './form.js';

import {
  getData
} from './api.js';

import {
  showAlert
} from './form-message.js';
import './avatar.js';

addFormListener();


getData((photos) => renderThumbnails(photos), showAlert);

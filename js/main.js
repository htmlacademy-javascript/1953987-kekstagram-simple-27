import './thumbnails.js';
import {
  renderThumbnails
} from './thumbnails.js';
import {
  initUploadForm
} from './form.js';

import {
  getData
} from './api.js';

import {
  showAlert
} from './form-message.js';
import './avatar.js';

initUploadForm();


getData((photos) => renderThumbnails(photos), showAlert);

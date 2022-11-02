import './thumbnails.js';
import {
  createPhotos
} from './data.js';
import {
  renderThumbnails
} from './thumbnails.js';
import {
  addFormListener
} from './form.js';


const photos = createPhotos();
renderThumbnails(photos);

addFormListener();

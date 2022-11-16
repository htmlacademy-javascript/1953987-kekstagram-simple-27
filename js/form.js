import {
  isEscapeKey
} from './util.js';
import {
  resetScale
} from './scale.js';
import {
  showSuccessMessage,
  showErrorMessage
} from './form-message.js';
import {
  resetEffect
} from './effect.js';
import {
  sendData
} from './api.js';

const MIN_COMMENT = 20;
const MAX_COMMENT = 140;

const bodyElement = document.querySelector('body');
const formElement = bodyElement.querySelector('.img-upload__form');
const commentElement = formElement.querySelector('.text__description');
const editorPhotoElement = formElement.querySelector('.img-upload__overlay');
const uploadElement = formElement.querySelector('#upload-file');
const uploadCloseElement = formElement.querySelector('#upload-cancel');
const scaleSizeElement = formElement.querySelector('.scale__control');
const effectLevelElement = formElement.querySelector('.effect-level__value');
const effectRadioNoneElement = formElement.querySelector('#effect-none');
const inputValueScaleElement = formElement.querySelector('.scale__control--value');
const submitButtonElement = formElement.querySelector('.img-upload__submit');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
});

const validateComment = (value) => value.length >= MIN_COMMENT && value.length <= MAX_COMMENT;

const openUploadWindow = () => {
  editorPhotoElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  inputValueScaleElement.value = '100%';
  addEscListenerOnESC();
};

const closeUploadWindow = () => {
  editorPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  resetScale();
  resetEffect();
  uploadElement.value = '';
  commentElement.value = '';
  scaleSizeElement.value = '100%';
  effectLevelElement.value = '';
  effectRadioNoneElement.checked = true;
  removeEscListenerOnESC();
  const errorDiv = formElement.querySelector('.pristine-error');
  errorDiv.textContent = '';
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadWindow();
  }
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};


const sendForm = (data) => {
  const isValid = pristine.validate();

  if (isValid) {
    blockSubmitButton();
    sendData(
      () => {
        closeUploadWindow();
        showSuccessMessage();
        unblockSubmitButton();
      },
      () => {
        showErrorMessage();
        unblockSubmitButton();
        removeEscListenerOnESC();
      },
      data,
    );
  }
};

const addFormListener = () => {
  uploadElement.addEventListener('change', (openUploadWindow));
  uploadCloseElement.addEventListener('click', (closeUploadWindow));
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendForm(new FormData(evt.target));
  });

  pristine.addValidator(commentElement, validateComment, 'От 20 до 140 символов');
};

function removeEscListenerOnESC() {
  document.removeEventListener('keydown', onEscKeydown);
}

function addEscListenerOnESC() {
  document.addEventListener('keydown', onEscKeydown);
}

export {
  addFormListener,
  addEscListenerOnESC
};

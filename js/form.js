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

const validateComment = (value) => value.length >= 20 && value.length <= 140;

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    editorPhotoElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
};

const onOpenModalElement = () => {
  editorPhotoElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  inputValueScaleElement.value = '100%';

  document.addEventListener('keydown', onModalEscKeydown);
};

const onCloseModalElement = () => {
  editorPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  resetScale();
  resetEffect();
  uploadElement.value = '';
  commentElement.value = '';
  scaleSizeElement.value = '100%';
  effectLevelElement.value = '';
  effectRadioNoneElement.checked = true;
  document.removeEventListener('keydown', onModalEscKeydown);
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess(showSuccessMessage());
          unblockSubmitButton();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

const addFormListener = () => {

  uploadElement.addEventListener('change', (onOpenModalElement));

  uploadCloseElement.addEventListener('click', (onCloseModalElement));

  pristine.addValidator(commentElement, validateComment, 'От 20 до 140 символов');

};

export {
  addFormListener,
  onCloseModalElement,
  setUserFormSubmit
};

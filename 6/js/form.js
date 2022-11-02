import {
  isEscapeKey
} from './util.js';

const bodyElement = document.querySelector('body');
const formElement = bodyElement.querySelector('.img-upload__form');
const commentElement = formElement.querySelector('.text__description');
const editorPhotoElement = formElement.querySelector('.img-upload__overlay');
const uploadElement = formElement.querySelector('#upload-file');
const uploadCloseElement = formElement.querySelector('#upload-cancel');
const scaleSizeElement = formElement.querySelector('.scale__control');
const effectLevelElement = formElement.querySelector('.effect-level__value');
const effectRadioNoneElement = formElement.querySelector('#effect-none');
const buttonSubmitElement = formElement.querySelector('.img-upload__submit');

const pristine = new Pristine(formElement, {
  classTo: 'text__description',
  errorClass: 'text__description--invalid',
  successClass: 'text__description--valid',
  errorTextParent: 'text__description',
  errorTextTag: 'span',
  errorTextClass: 'text__description__error'
});

function validateComment(value) {
  return value.length >= 20 && value.length <= 140;
}

pristine.addValidator(commentElement, validateComment, 'От 20 до 140 символов');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    editorPhotoElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
};

const openModalElement = () => {
  editorPhotoElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
};

const closeModalElement = () => {
  editorPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  uploadElement.value = '';
  commentElement.value = '';
  scaleSizeElement.value = '100%';
  effectLevelElement.value = '';
  effectRadioNoneElement.checked = true;
  document.removeEventListener('keydown', onModalEscKeydown);
};

const addFormListener = () => {

  uploadElement.addEventListener('change', () => {
    openModalElement();
  });

  uploadCloseElement.addEventListener('click', () => {
    closeModalElement();
  });

  formElement.addEventListener('change', () => {
    const isValid = pristine.validate();
    if (!isValid) {
      buttonSubmitElement.disabled = true;
    } else {
      buttonSubmitElement.disabled = false;
    }
  });

};

export {
  addFormListener
};

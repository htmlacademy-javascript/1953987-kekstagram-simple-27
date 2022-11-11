import {
  isEscapeKey
} from './util.js';

const ALERT_SHOW_TIME = 5000;

const errorTemplate = document.querySelector('#error').content;
const bodyElement = document.querySelector('body');
const successTemplate = document.querySelector('#success').content;


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ff8c00';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const addErrorMessage = () => {
  const errorElement = errorTemplate.cloneNode(true);
  errorElement.style = 'z-index: 2';
  const errorButton = errorElement.querySelector('.error__button');
  bodyElement.append(errorElement);

  const deleteMessage = () => {
    bodyElement.querySelector('.error').remove();
  };

  const onModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      deleteMessage();
    }
  };
  const onWindowClick = (evt) => {
    if (evt.target.classList.contains('error')) {
      deleteMessage();
    }
  };

  errorButton.addEventListener('click', deleteMessage);
  document.addEventListener('keydown', onModalEscKeydown);
  window.addEventListener('click', onWindowClick);
};

const addSuccessMessage = () => {
  const successElement = successTemplate.cloneNode(true);
  successElement.style = 'z-index: 2';
  const successButton = successElement.querySelector('.success__button');
  bodyElement.append(successElement);

  const deleteMessage = () => {
    bodyElement.querySelector('.success').remove();
  };

  const onModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      deleteMessage();
    }
  };

  const onWindowClick = (evt) => {
    if (evt.target.classList.contains('success')) {
      deleteMessage();
    }
  };

  successButton.addEventListener('click', deleteMessage);
  document.addEventListener('keydown', onModalEscKeydown);
  window.addEventListener('click', onWindowClick);
};

export {
  showAlert,
  addErrorMessage,
  addSuccessMessage
};

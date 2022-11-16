import {
  isEscapeKey
} from './util.js';
import {
  addEscListenerOnESC
} from './form.js';

const ALERT_SHOW_TIME = 5000;

const errorTemplateElement = document.body.querySelector('#error').content.querySelector('.error');
const successTemplateElement = document.body.querySelector('#success').content.querySelector('.success');


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '10';
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

const showMessage = (template, rootClass) => {
  const messageElement = template.cloneNode(true);
  const button = messageElement.querySelector(`.${rootClass}__button`);

  const deleteMessage = () => {
    messageElement.remove();
    document.removeEventListener('keydown', onEscKeydown);
    window.removeEventListener('click', onWindowClick);
    addEscListenerOnESC();
  };

  function onEscKeydown (evt) {
    if (isEscapeKey(evt)) {
      deleteMessage();
    }
  }

  function onWindowClick (evt) {
    if (evt.target === messageElement) {
      deleteMessage();
    }
  }

  button.addEventListener('click', deleteMessage);
  document.addEventListener('keydown', onEscKeydown);
  window.addEventListener('click', onWindowClick);

  document.body.append(messageElement);
};

const showSuccessMessage = () => showMessage(successTemplateElement, 'success');
const showErrorMessage = () => showMessage(errorTemplateElement, 'error');


export {
  showAlert,
  showSuccessMessage,
  showErrorMessage
};

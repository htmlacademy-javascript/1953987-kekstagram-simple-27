import {
  imageElement,
  formElement
} from './form.js';

const smallerButtonElement = formElement.querySelector('.scale__control--smaller');
const biggerButtonElement = formElement.querySelector('.scale__control--bigger');
const inputValueScaleElement = formElement.querySelector('.scale__control--value');


const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
  imageElement.style.transform = `scale(${value / 100})`;
  inputValueScaleElement.value = `${value}%`;
};
const currentValue = parseInt(inputValueScaleElement.value, 10);
const onSmallerButtonElementClick = () => {
  let newValue = currentValue - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBiggerButtonElementClick = () => {
  let newValue = currentValue + STEP_SCALE;
  if (newValue < MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => {
  scaleImage();
};

smallerButtonElement.addEventListener('click', onSmallerButtonElementClick);
biggerButtonElement.addEventListener('click', onBiggerButtonElementClick);

export {
  resetScale
};

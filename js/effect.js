import {
  imageElement,
} from './scale.js';

const effectLevelElement = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');
const formElement = document.querySelector('.img-upload__form');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');


const EFFECT = {

  none: {
    min: 0,
    max: 100,
    step: 1,
  },
  chrome: {
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
  },
  sepia: {
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
  },
  marvin: {
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  heat: {
    style: 'brightness',
    min: 0,
    max: 3,
    step: 0.1,
  },
};

const DEFAULT_EFFECT = EFFECT['none'];
let chosenEffect = DEFAULT_EFFECT;

const isDefoult = () => chosenEffect === DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});


const updateSlider = () => {
  sliderContainerElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
  });

  if (isDefoult()) {
    sliderContainerElement.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECT[evt.target.value];
  console.log(chosenEffect);
  updateSlider();
};

const onSliderUpdate = () => {
  imageElement.style.filter = 'none';
  imageElement.className = '';
  effectLevelElement.value = '';
  if (isDefoult()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  imageElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  imageElement.classList.add(`effects__preview--${chosenEffect}`);
  effectLevelElement.value = sliderValue;
};

const resetEffect = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};


formElement.addEventListener('change', (onFormChange));
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {
  resetEffect
};
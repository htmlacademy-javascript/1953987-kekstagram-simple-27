const getData = (onSuccess, onFail) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((photos) => {
      onSuccess(photos);
    })

    .catch(() => {
      onFail('Не удалось получить данные с сервера. Попробуйте перезагрузить страницу.');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academ/kekstagram-simple', {method: 'POST', body}, )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      onFail();

    })
    .catch(() => {
      onFail();
    });
};

export {
  getData,
  sendData
};

var minhaPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/ncarrillo79');
    xhr.send(null);

    // qué é isso de xhr.send(null);https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/send

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
          //console.log(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    };
  });
};
minhaPromise()
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });

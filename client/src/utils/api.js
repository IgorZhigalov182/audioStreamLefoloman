// const URL = '127.0.0.1:8081';
const URL = 'localhost:8081';

const checkResponse = (res) => {
  if (res.status === 200) {
    return res;
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res) => {
  if (res.status === 200) {
    return res;
  }

  return Promise.reject(`Ответ не success: ${res}`);
};

const request = (endpoint, options) => {
  return fetch(`http://${URL}${endpoint}`, options)
    .then((res) => checkResponse(res))
    .then((res) => checkSuccess(res));
};

export const register = (login, pass) =>
  request(`/registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      password: pass,
      login: login
    })
  });

export const login = (login, pass) =>
  request(`/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      login: login,
      password: pass
    })
  });

export const getRooms = () => {
  request(`rooms`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });
};

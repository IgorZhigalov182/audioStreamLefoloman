const URL = '';

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};
  
const checkSuccess = (res) => {
    if (res?.success) {
        return res;
    }

    return Promise.reject(`Ответ не success: ${res}`);
};
  
const request = (endpoint, options) => {
    return fetch(`${URL}${endpoint}`, options)
        .then(res => checkResponse(res))
        .then(res => checkSuccess(res));
};


export const register = (login, pass) => request(`/auth/register`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
        password: pass,
        login: login
    })
})

export const login = (login, pass) => request(`/auth/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
        login: login,
        password: pass
    })
})
'use strict';

function playWithResponsePromise(response) {
  return new Promise(function (resolve, reject) {
    if (response.status < 400) {
      response.json().then(resolve);
    } else {
      response.json().then(reject);
    }
  });
}

export function get(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(playWithResponsePromise);
}

export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(playWithResponsePromise);
}

export function update(url, data) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(playWithResponsePromise);
}

export function patch(url, data) {
  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(playWithResponsePromise);
}

export function remove(url) {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(playWithResponsePromise);
}

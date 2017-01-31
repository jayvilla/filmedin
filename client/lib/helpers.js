import axios from 'axios';
import react from 'react';

var getRequest = function (url) {
  var request = {
    headers: {
      'x-access-token': window.localStorage.getItem('filmedInToken')
    },
    url: url
    baseURL: 'https://filmedin.herokuapp.com/',
    method: 'GET'
  }
  return request;
}

var helpers = {};

helpers.logInUser = function(data) {
  return axios.request({
    url: 'https://filmedin.herokuapp.com/signin',
    method: 'POST',
    data: data
  });
}
helpers.signUpUser = function(data) {
  return axios.request({
    url: 'https://filmedin.herokuapp.com/signup',
    method: 'POST',
    data: data
  });
}
helpers.getHome = function () {
  return axios.request(getRequest('/home'));
}
helpers.getFeed = function () {
  return axios.request(getRequest('/feed'));
}
helpers.getProfile = function (id) {
  return axios.request(getRequest('/profile/' + id));
}
helpers.getFilm = function(id) {
  return axios.request(getRequest('/film/' + id));
}
helpers.searchProfile = function(search) {
  return axios.request(getRequest('/search/profile/' + search));
}
helpers.searchFilm = function(search) {
  return axios.request(getRequest('/search/film/' + search));
}
helpers.addFriend = function(friendID) {
  return axios.request({
    url: 'https://filmedin.herokuapp.com/addFriend',
    method: 'POST',
    data: {
      friendID: friendID
    }
  });
}
helpers.addRating = function(filmID, rating, review) {
  return axios.request({
    url: 'https://filmedin.herokuapp.com/addRating',
    method: 'POST',
    data: {
      filmID: filmID,
      rating: rating,
      review: review
    }
  });
}

export default helpers
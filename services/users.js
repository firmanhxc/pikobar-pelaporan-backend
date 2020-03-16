const mongoose = require('mongoose');

require('../models/User');
const User = mongoose.model('User');

function getUserByEmail (email, callback) {
  User.findOne({ email }, (err, user) => {
    if (err) return callback(err, null);
    return callback(null, user);
  });
}


function getUserById (id, callback) {
  User.findById(id, (err, user) => {
    if (err) return callback(err, null);
    return callback(null, user);
  });
}

function getUserByUsername (username, callback) {
  User.findOne({ username }, (err, user) => {
    if (err) return callback(err, null);
    return callback(null, user);
  });
}

function createUser (payload, callback) {
  let user = new User();
  
  user.email = payload.email;
  user.username = payload.username;
  user.setPassword(payload.password);

  user.save((err, user) => {
    if (err) return callback(err, null);
    return callback(null, user);
  });
}

function updateUser (user, payload, callback) {
  if (user.username !== payload.username) {
    user.username = payload.username;
  }

  if (user.email !== payload.email) {
    user.email = payload.email;
  }

  user.bio = payload.bio;
  user.avatar = payload.avatar;

  if (payload.password !== '') {
    user.setPassword(payload.password);
  }

  user.save((err, user) => {
    if (err) return callback(err, null);
    return callback(null, user);
  });
}



module.exports = [
  {
    name: 'services.users.getByEmail',
    method: getUserByEmail
  },
  {
    name: 'services.users.getById',
    method: getUserById
  },
  {
    name: 'services.users.getByUsername',
    method: getUserByUsername
  },
  {
    name: 'services.users.create',
    method: createUser
  },
  {
    name: 'services.users.update',
    method: updateUser
  }
];
 
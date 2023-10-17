import API from './ApiConfig';

export default {
  Login: async user => {
    return API('user/login', {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
      },
      body: user,
    });
  },

  GetUserDetail: async (userId, token) => {
    return API(`user/${userId}`, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  },
};

import API from './ApiConfig';

export default {
  GetTradeIn: async token => {
    return API('approval/trade-in/history', {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  },
  GetNewCar: async token => {
    return API('approval/new-car/history', {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  },
};

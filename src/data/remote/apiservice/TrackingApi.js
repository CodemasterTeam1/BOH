import API from './ApiConfig';

export default {
  GetTradeIn: async token => {
    return API('approval/trade-in/tracking', {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  },
  GetNewCar: async token => {
    return API('approval/new-car/tracking', {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  },
};

import API from './ApiConfig';

export default {
  GetTotal: async token => {
    return API('approval/total', {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  },
  GetTradeIn: async token => {
    return API('approval/trade-in', {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  },
  GetNewCar: async token => {
    return API('approval/new-car', {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  },
  
};

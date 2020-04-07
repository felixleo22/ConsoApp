export default Axios => ({
  state: {
    publicBasketsOfUser: null,
    settingsBasketOfUser: null,
  },
  getters: {
    publicBasketsOfUser(state) {
      return state.publicBasketsOfUser;
    },
    settingsBasketOfUser(state) {
      return state.settingsBasketOfUser;
    },
  },
  mutations: {
    getPublicBasketsOfUser(state, publicBasket) {
      state.publicBasketOfUser = publicBasket;
    },
    getSettingsBasketOfUser(state, settingsBasketOfUser) {
      state.settingsBasketOfUser = settingsBasketOfUser;
    },
  },
  actions: {
    getPublicBasketsOfUser(context) {
      return new Promise((resolve, reject) => {
        Axios.get('/publicBaskets/user').then((response) => {
          context.commit('getPublicBasketsOfUser', response.data);
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    getSettingsBasketOfUser(context, id) {
      return new Promise((resolve, reject) => {
        Axios.get(`/publicBasket/settings/${id}/user`).then((response) => {
          context.commit('getSettingsBasketOfUser', response.data);
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    deletePublicBasketOfUser(id) {
      console.log(id);
      return new Promise((resolve, reject) => {
        Axios.delete(`/publicBasket/${id}/user`).then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
});

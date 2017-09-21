/* eslint-disable no-param-reassign */

import { Store } from 'vuex';
import app from '../api';

const store = new Store({
  state: {
    session: null,
  },

  actions: {
    async login({ commit }, { email, password }) {
      const userRecord = await app.auth()
        .signInWithEmailAndPassword(email, password);
      commit('updateSession', userRecord);
    },

    async signup({ dispatch }, { email, password }) {
      await app.auth()
        .createUserWithEmailAndPassword(email, password);

      dispatch('login', { email, password });
    },

    async logout({ commit }) {
      await app.auth().signOut();
      commit('updateSession', null);
    },
  },

  mutations: {
    updateSession(state, session) {
      state.session = session;
    },
  },
});

export default store;

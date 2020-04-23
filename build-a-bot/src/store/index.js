import Vue from 'vue';
import Vuex from 'vuex';

import robotsMoodules from './modules/robots';
import usersMoodules from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: robotsMoodules,
    users: usersMoodules,
  },
});

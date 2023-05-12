import { createStore } from 'vuex';
import { reactive } from 'vue';

import messages from './messages';
import user from './user';
import utils from './utils';

const store = createStore({
  state: {},
  mutations: {},
  actions: {
    checkAuth(context) {},
  },
  modules: {
    messages,
    user,
    utils
  },
});

// En el componente
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    store.dispatch('checkAuth');
  }
};
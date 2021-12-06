import { QuicBlackbox, QuicCmd } from '../serial/quic';
import { serial } from '../serial/serial';
import { Blackbox } from '@/store/blackbox';

const store = {
  state: {
    busy: false,
    list: {}
  },
  getters: {},
  mutations: {
    set_blackbox_list(state, list) {
      state.list = list
    },
  },
  actions: {
    reset_blackbox({ commit }) {
      return serial
        .command(QuicCmd.Blackbox, QuicBlackbox.Reset)
        .then(() => {
          commit('append_alert', { type: "success", msg: "Blackbox successfully reset" });
        })
        .catch(err => {
          commit('append_alert', { type: "danger", msg: err });
        })
    },
    list_blackbox({ commit }) {
      return serial
        .command(QuicCmd.Blackbox, QuicBlackbox.List)
        .then(p => commit('set_blackbox_list', p.payload[0]));
    },
    download_blackbox(_, index) {
      return serial
        .command(QuicCmd.Blackbox, QuicBlackbox.Get, index)
        .then(p => {
          const writer = new Blackbox();
          writer.writeHeaders();
          for (const v of p.payload) {
            writer.writeValue(v);
          }
          return writer.toUrl();
        });
    }
  }
}

export default store;
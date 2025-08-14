import axios from 'axios';

export default {
  namespaced: true,
  state: {
    taskList: []
  },
  getters: {
    getTaskList(state) {
      return state.taskList;
    }
  },
  mutations: {
    setList(state, tasks) {
      state.taskList = tasks;
    }
  },
  actions: {
    async selectTask({ commit }) {
      const res = await axios.get(`https://m3h-yoshida-053.azurewebsites.net/api/SELECT`);
      commit('setList', res.data.List);
    },
    async insertTask({ commit }, newTask) {
      await axios.post(`https://m3h-yoshida-053.azurewebsites.net/api/INSERT`, newTask);
      const res = await axios.get(`https://m3h-yoshida-053.azurewebsites.net/api/SELECT`);
      commit('setList', res.data.List);
    },

    async deleteTask({ commit }, id) {
     
      await axios.post(`https://m3h-yoshida-053.azurewebsites.net/api/DELETE`, null, {
        params: { id }
      });
      const res = await axios.get(`https://m3h-yoshida-053.azurewebsites.net/api/SELECT`);
      commit('setList', res.data.List);
    },
  }
}

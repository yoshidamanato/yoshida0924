import axios from 'axios';

export default {
  namespaced: true,
  state: {
    spotList: [],        
    routeResult: null   
  },
  getters: {
    getSpotList(state) {
      return state.spotList;
    },
    getRouteResult(state) {
      return state.routeResult;
    }
  },
  mutations: {
    setSpotList(state, spots) {
      state.spotList = spots;
    },
    setRouteResult(state, result) {
      state.routeResult = result;
    }
  },
  actions: {
    async selectSpots({ commit }) {
      const res = await axios.get(
        `https://m3h-yoshida-0904-gpgcb4enh8g7d3fd.japaneast-01.azurewebsites.net/api/SELECT?`
      );

      
      console.log("APIレスポンス:", res.data);

      commit('setSpotList', res.data.List);
    },
    async insertSpot({ commit }, newSpot) {
      await axios.post(
        `https://m3h-yoshida-0904-gpgcb4enh8g7d3fd.japaneast-01.azurewebsites.net/api/INSERT?`,
        newSpot
      );
      const res = await axios.get(
        `https://m3h-yoshida-0904-gpgcb4enh8g7d3fd.japaneast-01.azurewebsites.net/api/SELECT?`
      );
      console.log("INSERT後のAPIレスポンス:", res.data);
      commit('setSpotList', res.data.List);
    },
    async deleteSpot({ commit }, id) {
      await axios.post(
        `https://m3h-yoshida-0904-gpgcb4enh8g7d3fd.japaneast-01.azurewebsites.net/api/DELETE?`,
        null,
        { params: { id } }
      );
      const res = await axios.get(
        `https://m3h-yoshida-0904-gpgcb4enh8g7d3fd.japaneast-01.azurewebsites.net/api/SELECT?`
      );
      console.log("DELETE後のAPIレスポンス:", res.data);
      commit('setSpotList', res.data.List);
    }
  }
}

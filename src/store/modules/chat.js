import axios from "axios";

export default {
  namespaced: true,
  state: {
    messages: [],
    result: ""   // ← 追加（レスポンスを直接保持したい場合用）
  },
  getters: {
    getMessages(state) {
      return state.messages;
    },
    getResult(state) {
      return state.result;
    }
  },
  mutations: {
    addMessage(state, message) {
      state.messages.push(message);
    },
    setResult(state, result) {
      state.result = result;
    }
  },
  actions: {
    async sendMessage({ commit }, Info) {
     
      commit("addMessage", { role: "user", text: Info });

     
      const response = await axios.post(
        "https://m3h-yoshida-829.azurewebsites.net/api/Function1",
        { message: Info }
      );

    
      const botReply = response.data?.Content?.[0]?.Text || "結果なし";

     
      commit("addMessage", { role: "bot", text: botReply });
      commit("setResult", botReply);

      return response.data;
    }
  }
};

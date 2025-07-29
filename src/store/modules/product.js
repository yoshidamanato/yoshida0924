import axios from 'axios'
export default {
  namespaced: true, // モジュール名でアクセスするための設定
  state: {

    weather:[],
    time:[],
    selectedPref: "",
    textTokyo:"",
      
    
  },
  getters: {
    
    weatherInCart(state) {
      return state.weather;
      
    },

    todayWeather(state){
      return state.weather[0];
    },

    tomorrowWeather(state){
      return state.weather[1];
    },

    AtomorrowWeather(state){
      return state.weather[2];
    },

     todayTime(state){
      return state.time[0];
    },

    tomorrowTime(state){
      return state.time[1];
    },

    AtomorrowTime(state){
      return state.time[2];
    },

    weatherText(state){
      return state.textTokyo;
    }
  },
  mutations: {
    setWeather(state,weather) {
      state.weather = weather
    },
    setText(state,text){
      state.textTokyo = text;
    },
    setTime(state,time){
      state.time = time;

    }
  },
  actions: {
    async weatherGet({ commit } ){
      const res =  await axios.get(`https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json`);
      const res1 = await axios.get(`https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json`);
      
      const weather = res.data[0].timeSeries[0].areas[0].weathers;

      const time = res.data[0].timeSeries[0].timeDefines;

      const text = res1.data.text;

      console.log(weather);
      console.log(time);
      


      commit('setWeather',weather);
      commit('setText',text);
      commit('setTime',time)
    },
    
  }
}
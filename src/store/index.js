import { createStore } from 'vuex'

export default createStore({
  state: {
    results: []
  },
  mutations: {
    storeResults(state, payload){
      state.results = payload
    } 
  },
  actions: {
    async storeResults(context, payload){
      const searchText = payload
      var url = `https://api.github.com/users/${searchText}/repos`
      const response = await fetch(url);
      const responseData = await response.json()

      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }
      const resultsArr = []

      for (const key in responseData){
        const result = {
          id: key,
          name: responseData[key].name,
          description: responseData[key].description ? responseData[key].description : 'none available',
          link: responseData[key].html_url
        }
        resultsArr.push(result);
      }
      console.log(resultsArr)
      context.commit('storeResults', resultsArr)
    }
  },
  getters: {
    results(state) {
      return state.results
    }
  }
})

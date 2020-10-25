import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  
  state: {
    hour:['7:00','8:00','9:00','10:00', '11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'],
    lokale:['620','422','505','420','101'],
    afdeling:['skoleAfdeling','Borgermester','TeknikMiljø'],
    
    
  },
  mutations: {
    setUsers(state,value){
        state.Users = value;
        console.log(state.Users)
    },
  },
  actions: {
      getUsers({commit}){
        const userList=[]
        app.database().ref('Users').on('value', data =>{
          //clean collect 
          for (var i =userList.length -1 ; i>=0;i--){
            userList.splice(i,1);
          }
          data.forEach(obj =>{
            let m = obj.val()
            m.id = obj.key
            userList.push(m);
          })
        })
        commit('setUsers',userList)
      }
  },
  modules: {
  },
  
})



 
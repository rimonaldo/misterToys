import { createStore } from "vuex"
import { toyModule } from "./modules/toy.module.js"
const USER_KEY = 'userDB'
const TODO_KEY = 'todosDB'
export const store = createStore({
    strict: true,
    state() {
        return {
          
        }
    },
    mutations: {
    
    },
    actions: {
      

    },
    getters: {

    },
    modules: {
       toyModule,


    }

})

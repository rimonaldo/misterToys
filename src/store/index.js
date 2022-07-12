import { createStore } from "vuex"
import { toyModule } from "./modules/toy.module.js"
const USER_KEY = 'userDB'
const TODO_KEY = 'todosDB'
export const store = createStore({
    strict: true,
    state() {
        return {
            labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"],
        }
    },
    mutations: {

    },
    actions: {


    },
    getters: {
        labels({ labels }) {
            return labels
        }
    },
    modules: {
        toyModule,


    }

})

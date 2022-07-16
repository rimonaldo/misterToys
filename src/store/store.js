import { createStore } from "vuex"
import { toyModule } from "./modules/toy.module.js"
import { userModule } from "./modules/user.module.js"
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
        userModule,

    }
})

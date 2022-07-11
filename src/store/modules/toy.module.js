// import { userService } from "../services/user.service.js"
// import { toyService } from "../services/toy.service.vue"
import { toyService } from "../../services/toy.service.js"

export const toyModule = {
    state: {
        toys: null,
        newToy: null
        // todoToEdit: null,
    },

    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        // toggleStatus(state, { todo }) {
        //     todo.status === 'active' ? todo.status = 'done' : todo.status = 'active'
        // },
        updateToy(state, { toyId, toys }) {
            const idx = state.toys.findIndex(toys => toys._id === toyId)
            state.toys.splice(idx, 1, state.toys[idx])
            state.toys = toys
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId)
            console.log(idx);
            state.toys.splice(idx, 1)
        },
        // addUserTodos(state, payload) {
        //     userService.save(state.user)
        // },
    },
    actions: {
        loadToys({ commit }) {
            return toyService.query()
                .then(toys => {
                    commit({ type: 'setToys', toys })
                    return toys
                })
        },
        // toggleStatus({ commit }, payload) {
        //     commit(payload)
        //     todoService.save(payload.todo)
        //         .then((todo) => {
        //         })
        // },

        updateToy({ commit }, { toy }) {
            return toyService.save(toy)
                .then((updatedToy) => {

                    toyService.query()
                        .then((toys) => {
                            commit({ type: 'updateToy', toyId: updatedToy._id, toys })
                        })
                    return toy
                })
        },

        removeToy({ commit }, { toyId }) {
            toyService.remove(toyId)
                .then(() => {
                    commit({ type: 'removeToy', toyId })
                })
        },

        getToyById(context, { toyId }) {
            return toyService.getById(toyId)

        },
        getEmptyToy({ name = 'new toy' }) {
            return toyService.getEmptyToy(name)
        }
    },
    getters: {
        toys({ toys }) {
            return toys
        },
        emptyToy() {
            return toyService.getEmptyToy()
        }

        // getFilter({ filterBy }) {
        //     return filterBy
        // },

        // todo({ todoToEdit }) {
        //     return todoToEdit
        // }

    },
}

// import { userService } from "../services/user.service.js"
// import { toyService } from "../services/toy.service.vue"
import { toyService } from "../../services/toy.service.js"

export const toyModule = {
    state: {
        toys: [],
        newToy: null
        // todoToEdit: null,
    },

    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        updateToy(state, { updatedToy }) {
            const idx = state.toys.findIndex(currToy => currToy._id === updatedToy._id)
            state.toys.splice(idx, 1, updatedToy)
            // state.toys = toys

        },
        addToy(state, { toy }) {
            console.log('store',toy);
            state.toys.push(toy)
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId)
            console.log(idx);
            state.toys.splice(idx, 1)
        },
    },
    actions: {
        loadToys({ commit }) {
            return toyService.query()
                .then(toys => {
                    commit({ type: 'setToys', toys })
                    return toys
                })
        },
        updateToy({ commit }, { toy }) {
            return toyService.save(toy)
                .then((updatedToy) => {
                    if (toy._id) {
                        commit({ type: 'updateToy', updatedToy })
                    } else {
                        commit({ type: 'addToy', toy:updatedToy })
                    }
                    // return toy
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
        },
        setFilterBy({ commit }, { filterBy }) {
            toyService.query(filterBy).then((toys) => {
                commit({ type: 'setToys', toys })
            })
        },
    },
    getters: {
        toys(state) {
            return state.toys
        },
        emptyToy() {
            return toyService.getEmptyToy()
        },
        toysToDisplay({ toys, filterby }) {
            if (!filterby) return toys
            const { txt, status, byLabel, bySort } = filterby

            // txt
            const regex = new RegExp(txt, 'i')
            let filteredToys = toys.filter((toy) => regex.test(toy.name))

            if (status) {
                filteredToys = filteredToys.filter((toy) => {
                    status === 'in stock' ? toy.inStock : !toy.inStock
                })
            }
        },

    },
}


import { toyService } from "../../services/toy.service.js"

export const toyModule = {
    // STATE
    state: {
        toys: [],
        newToy: null
    },
    // MUTATIONS
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        updateToy(state, { updatedToy }) {
            const idx = state.toys.findIndex(currToy => currToy._id === updatedToy._id)
            state.toys.splice(idx, 1, updatedToy)
        },
        addToy(state, { toy }) {
            state.toys.push(toy)
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId)
            state.toys.splice(idx, 1)
        },
    },
    // ACTIONS
    actions: {
        async loadToys({ commit }) {
            try {
                const toys = await toyService.query()
                commit({ type: 'setToys', toys })
                return toys
            } catch (err) {
                console.log(err);
            }
        },
        async updateToy({ commit }, { toy }) {
            try {
                await toyService.save(toy)
                if (toy._id) {
                    commit({ type: 'updateToy', updatedToy })
                }
                else {
                    commit({ type: 'addToy', toy: updatedToy })
                }
                return updatedToy
            } catch (err) {
                console.log(err);
            }

        },
        async removeToy({ commit }, { toyId }) {
            try {
                await toyService.remove(toyId)
                commit({ type: 'removeToy', toyId })
            } catch (err) {
                console.log(err)
            }
        },
        async getToyById(context, { toyId }) {
            try {
                const toy = await toyService.getById(toyId)
                return toy
            } catch (err) {
                console.log(err);
            }
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
    // GETTERS
    getters: {
        toys(state) {
            return state.toys
        },
        emptyToy() {
            return toyService.getEmptyToy()
        },
    },
}

export const userModule = {
    // STATE
    state: {
        user: null,

    },
    // MUTATIONS
    mutations: {
        setLoggedUser(state, { user }) {
            state.user = user
            console.log('user is set', state.user);
        },
        logout(state) {
            state.user = null
        }
    },
    // ACTIONS
    actions: {
        setLoggedUser({ commit }, payload) {
            commit(payload)
        },
        logout({ commit }, payload) {
            commit(payload)
        },
    },
    // GETTERS
    getters: {
        user(state) {
            return state.user
        },

    },
}

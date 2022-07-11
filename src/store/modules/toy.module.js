// import { userService } from "../services/user.service.js"
// import { toyService } from "../services/toy.service.vue"
import { toyService } from "../../services/toy.service.js"

export const toyModule = {
    state: {
        toys: null,
        // todoToEdit: null,
    },

    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        // toggleStatus(state, { todo }) {
        //     todo.status === 'active' ? todo.status = 'done' : todo.status = 'active'
        // },
        // updateTodo(state, { todo }) {
        //     const idx = state.todos.findIndex(todo => todo._id === todoId)
        //     state.todos.splice(idx, 1, todo)
        // },
        // removeTodo(state, { todoId }) {
        //     const idx = state.todos.findIndex(todo => todo._id === todoId)
        //     state.todos.splice(idx, 1)
        // },
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

        // updateTodo({ commit }, { todo }) {
        //     commit({ type: 'updateTodo', todo })
        //     todoService.save(todo)
        //         .then((todo) => {
        //         })
        // },

        // removeTodo({ commit }, { todoId }) {
        //     todoService.remove(todoId)
        //         .then(() => {
        //             commit({ type: 'removeTodo', todoId })
        //         })
        // },

        getToyById(context, { toyId }) {
            return toyService.getById(toyId)

        }
    },
    getters: {
        toys({ toys }) {
            return toys
        },

        // getFilter({ filterBy }) {
        //     return filterBy
        // },

        // todo({ todoToEdit }) {
        //     return todoToEdit
        // }

    },
}

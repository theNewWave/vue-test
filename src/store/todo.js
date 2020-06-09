export const todo = {
	state: {
		todos: []
	},
	mutations: {
		set_todos(state, todos) {
			state.todos = todos
		}
    },
    getters: {
        get_todos(state) {
            return state.todos
        }
    }
}
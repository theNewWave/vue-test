import todoApi from "../api/todo.api"

export const todo = {
	state: {
		todos: [],
		todo_obj: {
            "id": "",
            "todo": "",
		},
		selected_date:"",
	},
	mutations: {
		set_todo(state, todo) {
			state.todos.push(todo)
		},
		set_todo_obj(state, obj){
            state.todo_obj = obj
        },
    },
    getters: {
		get_todo(state) {
            return state.todos
		},
		get_selected_date(state){
            return state.selected_date
		},
		get_todo_obj(state){
            return state.todo_obj
        },
	},
	actions: {
      // // reservation memo
	load_todo(payload){
		todoApi.get_todo_from_db(payload)
		.then(response => {
			this.commit("set_todo", response.data)
		})
		.catch(err => {
			console.log(err)
			// this.commit("set_meeting_load", 3)
		})
	},
	insert_todo({dispatch, getters}, payload){
		todoApi.insert_todo_into_db(payload)
		.then(err => {
			console.log(err)
			dispatch("load_todo", {"date":getters.get_todo})
		})
		.catch(err => {
			// this.commit("set_meeting_load", 3)
			console.log(err)
		})
	},
	}
}
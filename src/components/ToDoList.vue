<template>
	<div>
		<h1>Task List</h1>
		<div class="container">
			<ToDo />
			<input class="input-text" type="text" v-model="todo">
			<button class="submit" @click="insert_todo()">Submit</button>
		</div>
	</div>
</template>

<script>
import ToDo from './ToDo'
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			todo: ""
		}
	},
	components: {
		ToDo,
	},
    methods: {
        insert_todo(){
            // let payload = {
            //     "todo": this.todo,
            // }
			// this.$store.commit("set_todos", payload)

            let payload = {
                "id": this.get_todo_obj.id,
                "content": this.todo,
                "user": "unknown",
                "created_at": this.get_selected_date
            }
            this.$store.dispatch("insert_todo", payload)
        }
	},
	computed: {
        ...mapGetters([
			"get_todo",
			"get_todo_obj",
			"get_selected_date",
        ])
    }
}
</script>

<style>
.container {
	margin: 0 auto;
	max-width: 1200px;
	width: 90%;
	background: #eee;
	padding: 1rem;
	text-align: left;
}

.input-text {
	width: 80%;
	font-size: 1rem;
	line-height: 2;
}

.submit {
	background: lightcoral;
	border: none;
	font-size: 1rem;
	margin-left: 1rem;
}
</style>